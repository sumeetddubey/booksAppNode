/**
 * Created by sumeetdubey on 5/3/18.
 */
(function(){
    var app = angular.module('booksApp');
    app.controller('SearchController', SearchController);

    function SearchController(SearchService){
        var vm=this;
        vm.search = search;
        vm.formatDate = formatDate;

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

        function formatDate(date){
            var d = new Date(date);
            return d.toLocaleDateString();
        }

        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
        })
    }
})();