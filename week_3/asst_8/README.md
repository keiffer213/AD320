Asst 8 README:

1. install Node.js
2. Install dependencies - npm i express
3. create server using express and setting it to listen to port or 3000
	app.set('port', process.env.PORT || 3000);
	app.listen(app.get('port'));
4. Access server by running node server.js in terminal and accessing localHost in browser
5. Dynamic route parameter handling 
	1. I used the dynamic route handler ':' to get the custom url value passed to return a 
	personalized message. 
		ex. if /user/keiffer was passed in the url. In my code, "keiffer" would be in the variable username
			app.get('/user/:username', (req, res) => {});
6. used app.use(req,res) as a catch all default 404 route for any other route enetered