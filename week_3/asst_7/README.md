Asst 7 README:

1. install Node.js
2. Install dependencies - npm i express
3. create server using express and setting it to listen to port or 3000
	app.set('port', process.env.PORT || 3000);
	app.listen(app.get('port'));
4. Access server by running node server.js in terminal and accessing localHost in browser
5. Two different ways I used to match url variations
	1. using (/\/user(name)?/ that would match URL variations that are close to user and 	username
	2. I used flexible matching with '/tomorro:wLand/' that would match anything with 	'tomorrow' regardles of the chars after.
6. used app.use(req,res) as a catch all default 404 route for any other route enetered