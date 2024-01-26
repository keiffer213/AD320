const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000);
//set all required fields & port

//main page
app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Welcome to the Main Page!');
});

//this sets up a router for all sub urls for /foo
const fooRouter = require('./routes/foo');
app.use('/foo', fooRouter);

// placed the following below foo to call all paths not in foo route or general route
app.use((req, res) => {
    res.type('text/plain');
    res.status(404).send('Not Found');
});

app.listen(app.get('port'), () => {
    console.log("Express Server is Running");
});