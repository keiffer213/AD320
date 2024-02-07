Assignment; Dog Facts API v1 Replica with NodeJS and ExpressJS

This assignment containts multiple files
- server.js: holds all the sever code for handling server requests on localhost:3000
- package.json & package-lock.json
- dog_facts.js: contains all the dog facts that is then loaded onto the server
- public folder:
	- index.html: simple html webpage to print out dogfacts
	- scripts.js: holds the async function getFact(id) & getFacts(id) that will be called to retrieve 
		      facts by creating an api call
		~ to get the endpoint i used 'http://localhost:3000/dog-facts'
		~ using jData = await res.json(), you can access certain facts by retrieving jData[index];

Reflection:
   This was an interesting assignment, to take all the concepts from all the previous assignments and compliting it into one. Being new to javascript to NodeJS, this was definitely challenging, but with a lot of research, I believe I was able to fully complete the assignment! 

   For the server, I used express and nodemon packages to help with development. Nodemon really saved a lot of time since it would automatically redeploy the server with every save, so all I had to do is refresh the page to see my changes without manually having to do it myself in the console. The middleware fuction express.static also helped a lot for rendering static html files, so I did not have too much complicated code in the server.js file. My main challenge in this assignment was storing the dog-facts array into the serverside storage and creating the function to access the data.