// services.js
//
// Handles all crud requests for our article element
// server should conform to RESTful routes
//
// This is implemented barebones, and could use much refinement.
angular.module('lightCMS.ArticleService', [])
  .factory('User', function($http){
    var user = {};

    // stubbed for now - in the future this should actually do stuff
    // like you know.. check if the user is actually authed
    user.isAuthed = function() {
      return true;
    };

    return user;
  })
  .factory('Articles', function($http) {
    var article = {};

    // How much should we try to hold on/memoize to data here?
    // Im not sure if we should just always hit the api or what?

    // fetchAll()
    // returns a promise
    // that in turn tries to return all articles
    // todo:
    //    allow limits in the # returned?
    //    (angular) filters?
    //    better error handling
    article.fetchAll = function(){
      return $http.get('/articles');
    };

    // fetchOne()
    // takes an article id as a string
    // returns a promise that will try to
    // provide one article or (null? err? what?)
    article.fetchOne = function(id){
      console.log('Fetching one');
      return $http.get('/articles/' + id);
    };

    // create()
    // takes an article object
    // it should have at least a title and a body property
    article.create = function(article){
      // TODO: do some validation here?
      $http.post('/articles', article)
        .success(function(data) {
          console.log('Successfully posted new article;');
        })
        .error(function(data){
          console.log('Error: ', data);
        });
    };
    // TODO: .put(a.k.a. delete) and delete
    return article;
});
