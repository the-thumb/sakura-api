require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var PORT = (process.env.PORT || 3000);
console.log;


app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

require("./routes/apiRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App is listening on: http://localhost:" + PORT);
});