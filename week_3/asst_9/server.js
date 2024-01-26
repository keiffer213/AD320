const express = require('express')
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.type('text/plain');
    res.send(' Welcome to main page!');
});

//using "get" you can pass parameters into the url with /get?variable=parameter&variable2=parameter2
app.get('/get', (req, res) =>{
    console.log(req.query);
    res.type('text/plain');
    res.send(`Sent query string of route to console!`);
});

app.use((req, res) => {
    res.status(404).type('text/plain').send('Not Found!');
});

app.listen(app.get('port'), () => {
    console.log("Express Server is Running");
})