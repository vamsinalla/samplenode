var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/" +"form.html" +"stylesheet.css"));
});


app.listen(process.env.PORT || 8080);
