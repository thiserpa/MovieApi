var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    var searchTerm = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + searchTerm + "&apikey=thewdb";
    request(url, function(error, response, body){   
       if(!error && response.statusCode == 200){
           var resultsData = JSON.parse(body)
           res.render("results", {resultsData: resultsData});
       }
   })
});

app.listen(3000, () => console.log("App running on por 3000"));