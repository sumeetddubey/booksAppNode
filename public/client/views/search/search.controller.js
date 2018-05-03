/**
 * Created by sumeetdubey on 5/3/18.
 */
(function(){
    var app = angular.module('booksApp');
    app.controller('SearchController', SearchController);

    function SearchController(SearchService){
        var vm=this;
        vm.search = search;

        function search(inputText){
            SearchService.searchBooksByText(inputText)
                .then(
                    function(doc){
                        vm.searchResults=doc.data;
                    },
                    function(err){
                        console.log(err);
                    }
                )
        }
    }
})();