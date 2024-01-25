

//snippet 1
let name = "John Doe";
name = "Jane Doe";
console.log(name);
/** 
 * I chose "let" to replace var because the name variable is changed in the 2nd line
 * I could have chosen "const" for the variable name, but that would cause an error in 
 * the code at line 2 since the string within the name variable cannot be reassigned. If
 * I omitted line 2, const for name would work perfectly fine.
*/

//snippet 2
const age = 30;
if (age > 18) {
    var adult = true;
}
console.log(adult);

/**
 * I chose const for the variable age because it is not be altered in any way. It is a 
 * variable that is put into the if conditional statement to determine the boolean value
 * in the adult variable. I kept adult as a "var" because adult needs to be accessed outside
 * of the if block statement. Since "let" and "const" have block-level scope, it is only accessible 
 * within the if statement. If you want to declare the adult with "let" or "const" you would need
 * to declare it outside the if statement. I would do the following code instead:
 * 
 * const age = 30;
 * let adult;
 * if (age > 18) {
 *    adult = true;
 * }
 * console.log(adult);
 */

//snippet 3
let loopArray = []
for (var i = 0; i < 5; i++) {
    loopArray.push(i);
} 
console.log(loopArray);
/**
 * I chose "let" for the loopArray variable because its array values are being altered in 
 * the for loop to add values. If I chose "const" the loopArray can't have values pushed
 * into it.
 */

//Snippet 4
const MAXIMUM = 100;
//MAXIMUM = 200;
console.log(MAXIMUM);
/**
 * I chose "const" for the variable MAXIMUM because it is in all caps which
 * is the standard convention for declaring a constant variable. If you have a 
 * maximum variable in a program, you don't want it to be easily changed by other 
 * code in the body. For example if you're programming for school grades, the maximum
 * is usually 100, so you don't want someone just randomly increasing the max value.
 */


//Snippet 5
let colors = ["Red", "Green", "Blue"];
colors = ["Yellow", "Pink", "Purple"];
console.log(colors);
/**
 *  I chose "let" for the colors since the values in the array are being changed in the next line.
 * It is definitely viable to have the colors also be a "const" if you want a standard reference
 * string variables for colors. 
 */