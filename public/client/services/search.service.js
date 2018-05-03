/**
 * Created by sumeetdubey on 5/3/18.
 */
(function(){
    var app = angular.module('booksApp');
    app.service('SearchService', SearchService);

    function SearchService($http){
        return {
            searchBooksByText: searchBooksByText
        };

        function searchBooksByText(searchQuery){
            return $http.get('/api/search/' +searchQuery);
        }
    }
})();