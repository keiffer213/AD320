
//create basic package.json with npm init -y
//install express with npm i express
//install nodemon with nom i --save-dev-nodemon to have it run on dependency
//in package.json add under scripts: "devStart": "nodemon server.js"
//using npm run devStart

//to install view engine (far view engine): npm i ejs


const express = require('express')
const app = express()

//middleware function that will be able to easily render path html files
app.use(express.static('public')) //function takes parameter folder name
app.use(express.urlencoded({ extended: true })) //allows us to access information coming from forms

//code you need to use view engine ejs
app.set('view engine', 'ejs')
//if you want the middleware to be used on all routes, it needs to be defined at the very top. Though it can also be used for specific endpoints
app.use(logger)


//main requests is GET, POST, PUT, DELETE
//the .get takes the first parameter which is path
//the 2nd parameter is a function that takes in 3 different parameters
//(req, res, next) but 99% of the time next isnt needed when creating a simple path

//rendering static index html file


//if you want middleware to run on this only, you can pass it through the get function. You can also pass as much middleware as you want into requests
//app.get('/', logger, logger, logger, (req, res) => {
app.get('/', (req, res) => {
    //console.log('Here')
    //res.send('Hi') //want to send something more specific
    //res.sendStatus(500) //want to send a message as well
    
    // to send a status and message chained
    // res.status(500).send('Hi')

    // can also send a status and json 
    // res.status(500).json({message: 'Error'})


    //if you want the user to get a download
    // res.download('server.js')
    
    //if you want to render a file
    //by default all files are in a folder called views, otherwise you need to
    //set a path
    // res.render('index')
})


//because having each path makes it cluttered, you want to create a new
//folder called routes that takes advantage of express
//copy all of these routes and place into users.js in routes folder
// app.get('/users', (req, res) => {
//     res.send('User List')
// })

// app.get('/users/new', (req, res) => {
//     res.send('User New Form')
// })


//import the users.js to this server.js
//can do for multiple different routes if there was a posts route
const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')
app.use('/users', userRouter)
app.use('/posts', postRouter)

//middleware function, ever MF takes all 3 parameters
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
