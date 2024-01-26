const express = require('express')
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.type('text/plain');
    res.send(' Welcome to main page!');
});

//for some reason this works for some reason from research but I cannot find why
app.get(/\/user(name)?/, (req, res) => {
    res.type('text/plain');
    res.send('Matched /user or /username');
});

//this is another way I found that anything after "tomorrow" will redirect to this path
app.get('/tomorro:wLand/', (req, res) =>{
    res.type('text/plain');
    res.send('worked!');
});

app.use((req, res) => {
    res.status(404).type('text/plain').send('Not Found!');
});

app.listen(app.get('port'), () => {
    console.log("Express Server is Running");
})