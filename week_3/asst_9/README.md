Asst 9 README:

1. install Node.js
2. Install dependencies - npm i express
3. create server using express and setting it to listen to port or 3000
	app.set('port', process.env.PORT || 3000);
	app.listen(app.get('port'));
4. Access server by running node server.js in terminal and accessing localHost in browser
5. Handling query strings in URL by using '/get'
	app.get('/get', (req, res) =>{ console.log(req.query)});
	the string query you place after '/get?var1=param1' can be retireved by res.query
6. used app.use(req,res) as a catch all default 404 route for any other route enetered