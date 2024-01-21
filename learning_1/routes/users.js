const express = require('express')
const router = express.Router()
//router works exactly like app -> router
//everything about this router starts with /users so we can delete users

//can also difine logger to be only used in this path router
// app.use(logger)

router.get('/', (req, res) => {
    //if we want to pass a name into the url like: /users?name=Keiffer
    console.log(req.query.name)
    res.send('User List')
})

//JS reads top to bottom, so if /new was below /:id, it will do that first
//and will read as get user with ID new
//better to have static routes above dynamic routes
router.get('/new', (req, res) => {
    // res.send('User New Form')
    res.render('users/new', { firstName: "Test" }) 
    //what is in {} will be whta shows in the box
})

router.post('/', (req, res) => {
    // res.send('Create User')
    const isValid = true
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        //redirect just changes the url
        res.redirect(`/users/${users.length - 1}`)
    } else { //if false print error and brings us back to page with the original text inside the form
        console.log("Error")
        res.render('users/new', { firstName: req.body.firstName})
    }
    
    
    // console.log(req.body.firstName)
    //by default express doesn't allow you access the bodys
    //need middleware to do it for us
    res.send('Hi')
})

//express can chain together all the request types
router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get user with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update user with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with ID ${req.params.id}`)
    })    
    
//example users, this code allows us to grab all these users in one single place
const users =[{name: 'Kyle'}, {name:'Sally'}]
router.param('id', (req, res, next, id) => {
    // console.log(id)
    //everytime we have a param, get the user from the users variable
    req.user = users[id]
    next() //without next, the page with infinitely load, next will go
    //on to the next piece of middleware
})

/*
//in order to create dynamic parameter use ':parameter'
router.get('/:id', (req, res) => {
    //res.params.id to get parameter from url request
    res.send(`Get user with ID ${req.params.id}`)
})
router.put('/:id', (req, res) => {
    //res.params.id to get parameter from url request
    res.send(`Update user with ID ${req.params.id}`)
})
router.delete('/:id', (req, res) => {
    //res.params.id to get parameter from url request
    res.send(`Delete user with ID ${req.params.id}`)
})
*/

// function logger(req, res, next) {
//     console.log(req.originalUrl)
//     next()
// }

module.exports = router