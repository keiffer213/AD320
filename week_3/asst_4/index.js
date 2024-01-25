import http from 'http';
import fs from 'fs';
//can do that inport above or set like the follow
//const http = require 'http';
//const fs = require 'fs';
const port = process.env.PORT || 3000;
//set port as a const variable


const server = http.createServer((req, res) => {

    const path = req.url; //set a constant var to hold the url
    console.log(path);

    switch(path) {
        case '/': //if the req path is '/' page
            //I used readFile to read home.html asynchonously 
            fs.readFile("home.html", (error, data) => {
                if(error) {
                    return console.error(error);
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data.toString());
                //can also use res.write(data); if data is already in string
                //and the data doesn't need to be handled in chunks
                console.log("success!"); //this is just to let me know it was sucesful
            });
            break;
        case '/about': //if req path is '/about' page
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end("About Page");
            break;

        default: //if req path is anything else
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end("404 Not Found");
            break;
    }

})

server.listen(port, (error) => {
    error ? console.log('Something went wrong', error)
    : console.log('Server is listening on port ' + port);
    //created a callback function to call if error is true/false
});