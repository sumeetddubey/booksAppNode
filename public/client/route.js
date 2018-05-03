/**
 * Created by sumeetdubey on 5/3/18.
 */
(function(){
    var app=angular.module('booksApp');

    app.config(function($routeProvider){
        $routeProvider
            .when('/search', {
                templateUrl: 'client/views/search/search.view.html',
                controller: 'SearchController',
                controllerAs: 'model'
            })
            .when('/', {
                redirectTo: '/search'
            })
    })
})();