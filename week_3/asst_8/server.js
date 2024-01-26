const express = require('express')
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.type('text/plain');
    res.send(' Welcome to main page!');
});

//using : you can have dynamic route handling that will personalize the url
//I just realized in the last assignment I unknowingly did this method
app.get('/user/:username', (req, res) =>{
    res.type('text/plain');
    //usings req.params.(variable name passed) will allow us to retrieve what the user input to the url
    res.send(`Hello ${req.params.username}`);
});

app.use((req, res) => {
    res.status(404).type('text/plain').send('Not Found!');
});

app.listen(app.get('port'), () => {
    console.log("Express Server is Running");
})