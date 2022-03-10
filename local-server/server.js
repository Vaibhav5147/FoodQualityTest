//Defining the Objects
let express = require("express");
let app = express();

app.use(function(req, res, next){
    console.log(`${new Date()} - ${req.method} reqest for ${req.url}`);
    next();
});

app.use(express.static("../static"));

//Listening to Requests from Client
app.listen(81, function(){
    console.log("Serving at port localhost:81")
    console.log("Open Following Link in Browser")
    console.log("please visit http://localhost:81/predict-with-tfjs.html in browser")
    
});