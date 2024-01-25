
//define variables outside scope because they are set in global before code runs
//I used const for user since there are not supposed to change in code
//I would also normally use const for userRole as it should be a constant, but I have it as let just so I can test different cases at the bottom.
//I set the loggedIn variable with "let" because it is a variable that could possibly be altered.
const user = "Keiffer"
let userRole = "admin";
let loggedIn = false;

function checkAccess() {
    //I set accessLevel and message with "let" because based on the global variables, these local variables will have different values.
    let accessLevel;
    let message;
    //because of the original use of var to declare the message, var is a global scope even when it is declared within this function scope. There is a chance that message and even accessLevel can be changed outside of the function scope.
    //also to simplify code, rather than declaring a message in each if-else statement, it can be declared once at the beginning of the function and the message assigned to the variable in each if-else statatement.

    if (loggedIn) {
        message = "User " + user + " is logged in.";        
        //refactor if-else statement to assign accessLevel based on userRole
        //I did this because I actually really like this es6 feature to refactor if-else statements with mcuh fewer lines of code.
        (userRole === "admin") ? accessLevel = "full": accessLevel = "limited";
    } else {
        message = "User not logged in.";
        accessLevel = "none";
    }

    //to simplify code, use console.log(message) after the if-else statement
    console.log(message);
    return accessLevel;
}

for (var i = 0; i < 3; i++) {
    console.log("Attempt", i);
    console.log("Access Level:", checkAccess());
    //just added some code to test the different cases
    if (i === 0) {loggedIn = true;}
    if (i === 1) {userRole = "user";}
}
