let express = require("express");
let bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.set('view engine', 'ejs');











// Home page
app.get("/", function (req, res) {  
    res.render("home");
  
  });


  // Testing page
app.get("/testing", function (req, res) {  
  res.render("testing");
});


// Guidance page
app.get("/guidance", function (req, res) {  
  res.render("guidance");
});


// Get Help page
app.get("/getHelp", function (req, res) {  
  res.render("getHelp");
});

// Guidance page
app.get("/statistics", function (req, res) {  
  res.render("statistics");
});











app.listen(3000, function() {
    console.log("Server is working");
    
});