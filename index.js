const express = require('express');
const port = 8000;
const path = require('path');
const app = express();
app.use(express.urlencoded());
app.use(express.static('assets'));
app.use('/',require('./routes/index.js'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.listen(port, function (err) { 
    if(err)
    {
        console.log(`Error is : ${err}`);
    }
    console.log(`Server is up : ${port}`);
 })