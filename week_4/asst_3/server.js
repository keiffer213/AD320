const express = require('express');
const data = require('./dog_facts.js');
const app = express();


// I did a npm init to create a package.json
// npm i express
// npm i --save-dev nodemon //this is so webpage will automatically refresh with save

//this is a middleware function that allows to render path to html files
app.use(express.static('public')) //this takes the parameter of folder name

app.set('port', process.env.PORT || 3000);

//this stores the data imported from dog_facts.js
app.get('/dog-facts', (req, res) => {
    res.json(data); //this takes the data from dog_facts.js and converts it to json
})

app.get('/', (req, res) => {
    res.render('index'); //render the static html file
    console.log(data);
})

//listener for a port req
app.listen(app.get('port'), () => {
    console.log('Express Server is Running');
})