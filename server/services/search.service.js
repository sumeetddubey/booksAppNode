/**
 * Created by sumeetdubey on 5/3/18.
 */
module.exports = function(app){
    app.get('/api/search/:searchQuery', getBooksBySearchQuery);

    var request = require('request');

    function getBooksBySearchQuery(req, res){
        var query = req.params.searchQuery;
        var media = 'ebook';
        var country = 'us';
        var url = "https://itunes.apple.com/search?term=" +query +"&media=" +media +"&country=" +country;
        request.get(url, function(error, response, body){
            if(error)
                res.status(400).send(error);
            else{
                res.send(body);
            }

        })
    }
};