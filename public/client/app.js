/**
 * Created by sumeetdubey on 5/3/18.
 */
(function(){
    var app = angular.module('booksApp', ['ngRoute', 'ngSanitize']);
    app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('')
    }]);
})();