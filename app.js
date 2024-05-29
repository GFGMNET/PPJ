const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const axios = require('axios');
const matter = require('gray-matter');



// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// body parse middleware application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//set public folder
app.use(express.static(path.join(__dirname, 'public')));

async function getallPPJ() {
    try {
      const response = await axios.get('http://192.168.16.150:8086/ppj');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }


app.get("/", (req, res) => {
    
     res.render("index", {
         title: "Home"
         
     });
  
  
  
  });

app.get("/cases", (req, res) => {
    
    res.render("case", {
        title: "Case",
        content: getallPPJ()
    });
 
 
 
 });


app.listen('3000', () => {
    console.log('Server Started on port 3000');
});