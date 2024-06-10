const express = require('express');
require('dotenv').config()
const path = require('path');

const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
var Datastore = require('nedb')
  , db = new Datastore({ filename: 'db', autoload: true });
// You can issue commands right away


// view engine

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug');



// body parse middleware application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: false }));



// parse application/json

app.use(bodyParser.json());



//set public folder

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
     res.render("index", {
       title: "Home" 
       
     });
  
  
  
  });

app.post("/add_case", (req, res ) => {
    let doc = req.body
    console.log(doc)
//db.insert(doc, function (err, newDoc) { });

    res.render("index", {
        title: "Home"
    })
})

app.listen('3020', () => {

    console.log('Server Started on port 3020');

});