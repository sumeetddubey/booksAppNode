/**
 * Created by sumeetdubey on 5/3/18.
 */
module.exports = function(app){
    app.get('/api/search/:searchQuery', getBooksBySearchQuery);

    var request = require('request');
    var searchCache=[];
    var cacheMap={};
    const maxCacheSize = 2;

    class cacheEntry{
        constructor(url, data){
            this.url=url;
            this.data=data;
        }
    }

    function getBooksBySearchQuery(req, res){
        var query = req.params.searchQuery;
        var media = 'ebook';
        var country = 'us';
        var url = "https://itunes.apple.com/search?term=" +query +"&media=" +media +"&country=" +country;
        if(cacheMap.hasOwnProperty(url)){
            res.send(searchCache[cacheMap[url]].data);
        }
        else{
            request.get(url, function(error, response, body){
                if(error)
                    res.status(400).send(error);
                else{
                    res.send(body);
                    addToCache(url, body);
                }

            })
        }
    }

    function addToCache(url, body){
        if(searchCache.length === maxCacheSize){
            var oldUrl = searchCache[maxCacheSize-1].url;
            delete cacheMap['oldUrl'];
            searchCache[maxCacheSize-1]=new cacheEntry(url, body);
            cacheMap[url]=maxCacheSize-1;
        }
        else{
            searchCache.push(new cacheEntry(url, body));
            cacheMap[url]=searchCache.length-1;
        }
    }
};