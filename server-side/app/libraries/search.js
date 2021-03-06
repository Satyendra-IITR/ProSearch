/**
 * Created by imlv on 27-11-2017.
 */
var wikipedia = require("wikipedia-js");


// Search wikipedia for the given text
exports.getWikiText = function getWikiText(query,callback) {
    var options = {query: query, format: "html", summaryOnly: false, lang: "en"};

    wikipedia.searchArticle(options, function(err, htmlWikiText){
        if(err){
            console.log("An error occurred[query=%s, error=%s]", query, err);
            return;
        }
        callback('<div style="text-align: justify !important;">'+htmlWikiText+'</div>');
    });
}

