// contains 
// PART 4 --------------------------------------------------------------

/*
// This first functionName is an example for an easy event listener to a button
function functionName() {
    console.log('Hello From functionName');
};


//second function is to retrieve information from an API on event click
async function aFunctionName() {
    const api_endpoint = 'https://dogapi.dog/api/v2/breeds';
    const res = await fetch(api_endpoint);
    const jData = await res.json();
    // console.log('Hello From aFunctionName');
    // console.log(res);
    // console.log(jData);

    //using JSON.stringify, it converts the response data into string
    document.getElementById('displayInfo').innerHTML = JSON.stringify(jData);
};

*/

/**
 * 
 * @param elementId is used so that I can use the same async function to be called for the different buttons
 * 
 */
async function getInfo(elementId) {
    try {
        const api_endpoint = 'https://dogapi.dog/api/v2/breeds';
        const res = await fetch(api_endpoint);
        const jData = await res.json();
    
        let stringOutput = '';
        //take the breed name of the button that was pressed and places it into a variable that will be used
        //to retrieve the information needed from the API
        let breedName = document.getElementById(elementId).innerText;
    
        //if the response is ok then execute the following code
        if (res.ok) {
            jData.data.forEach(breeds => {
                // console.log(breeds.attributes.name, ' ', breedName); //code just to check output
                if(breeds.attributes.name === breedName) {
                    // The follow code just concatenates a string to be output onto the page
                    stringOutput = `Dog Breed: ${breeds.attributes.name} <br>`;
                    stringOutput += `Breed ID: ${breeds.id} <br>`;
                    stringOutput += `Breed Description: ${breeds.attributes.description} <br>`;
                    stringOutput += `Life Expectancy: ${breeds.attributes.life['min']} - ${breeds.attributes.life['max']} years <br>`;
                    stringOutput += `Male Weight: ${breeds.attributes.male_weight['min']} - ${breeds.attributes.male_weight['max']} lbs <br>`;
                    stringOutput += `Female Weight: ${breeds.attributes.female_weight['min']} - ${breeds.attributes.female_weight['max']} lbs <br>`;
                    stringOutput += `Hypoallergenic: ${breeds.attributes.hypoallergenic} <br>`;
                    
                    //the following is just checking outputs in console
                    // console.log(stringOutput);
                    // console.log(breeds.attributes)
                }
            });
    
            //this code replaces what is inside the <p id='displayInfo'></p> tag with the string I created.
            document.getElementById('displayInfo').innerHTML = stringOutput;
        } else { 
            //for error catching if API isn't successful
            throw new Error('Something went wrong');
        }
    }
    catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('displayInfo').innerHTML = 'Something is wrong!';
    }

}
