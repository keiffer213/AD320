const express = require('express')

const app = express()
app.set('port', process.env.PORT || 3000);
//app.set will set up the port server

//pathway for '/' page
app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Hello World!');
});

//pathway for /about page
app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About Page');
});

//this will catch all of the http requests
app.use((req, res) => {
    res.type('text/plain').status(404).send('Not Found');
});

//app.get('port') will start up the server
app.listen(app.get('port'), () => {
    console.log('Success Express Server works!');
});