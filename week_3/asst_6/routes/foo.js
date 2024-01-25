const express = require('express');
const fooRouter = express.Router()
//fooRouter works like app in server.js
//all of these paths/routes will start with /foo


//first path
fooRouter.get('/', (req, res) => {
    console.log(req.url);
    res.status(200).type('text/plan').send('Foo Page');
});


//second path
fooRouter.get('/test1', (req, res) => {
    console.log(req.url);
    res.status(200).type('text/plan').send('Test1');
});


//catch all path for foo
//though I tested and it seems in the main server.js file will catch all
//404 not found path even without this code so I'll just comment out for now
// fooRouter.use((req, res) => {
//     console.log(req.url);
//     res.status(404).send('404 Not Found');
// });

module.exports = fooRouter;