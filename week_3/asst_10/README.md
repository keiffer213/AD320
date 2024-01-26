Assignment 10 Read Me

I followed the steps in the assignment to create a new project directory
	
 1. npm init to create new package.json
	
 2. npm init @eslint/config to install and configure a .eslintrc.js file
		(I was a little confused with configuration so I did research on it and figure it out)
	
 3. Added rules in the .eslintrc.json file for semi and quotes
		"quotes": ["error", "single"],
        	"semi": ["error", "always"]
	
 4. I ran npx eslint index.js (I just copied a JS code I had from a previous assignment to run on)

Observations:
by setting up strict rules in the eslint file, you can have it parse the code and output any errors that don't adhere with the rules you set up.
This would make it really easy to review code especially if it is a few hundred if not thousand lines of code. Even just using it on code i have written before. It is very interesting that I didn't realize there were mistakes that I made when writing it.


![alt text](https://github.com/keiffer213/AD320/blob/main/week_3/asst_10/Screenshot.png)
