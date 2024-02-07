
/**
 * Ths async function will return a dog fact to the element of the parameter id passed inside
 * 
 * @param {*} id for where to output the string of facts
 */
async function getFact(id) {
    try {
        //url is where I hosted the dog_facts.js in the server.js file
        const url = 'http://localhost:3000/dog-facts';
        const res = await fetch(url);
        const jData = await res.json();

        //create a random number to retrieve a fact from the array of facts
        let randNum = Math.floor(Math.random()*435);
        // console.log(randNum);

        if(res.ok) {
            // console.log(jData[randNum]); //check fact is retrieving
            //since the file is pretty simple, I didn't make the code for this too complicated
            //there are only 2 situations that it will print either a single string 
            //or it will print multiple strings everytime it is called
            if (id == 'dogFact') {
                document.getElementById(id).innerHTML = jData[randNum];
            } else {
                let strHolder = document.getElementById(id).innerHTML;
                strHolder += jData[randNum] + '<br>';
                document.getElementById(id).innerHTML = strHolder;
            }
                
        } else {
            throw new Error('Something went wrong');
        }
    }
    catch (error){
        console.error('Fetch error:', error);
    }
}

/**
 * Call getFact() the number of times the user wants by taking the the value in the input
 * from the index page
 * 
 * @param {*} id for where to output the string of facts
 */
function getFacts(id) {
    let numOfFacts = document.getElementById('numOfFacts').value;
    // console.log(numOfFacts);

    //checks the input value to either return x number of facts from 0-435, and if an invalid input return all
    if (numOfFacts <= 0) {
        document.getElementById(id).innerHTML = '<h3>Look what you\'ve made me do!</h3> <p>Here are all the facts!!</p>';
        numOfFacts = 435;
    } else {
        //erase the text field
        document.getElementById(id).innerHTML = '';
    }
    
    //just call the getFact(id) function by the amount of times the user wants it
    for (let i = 0; i < numOfFacts; i++) {
        getFact(id);
    }
}