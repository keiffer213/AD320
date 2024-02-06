// contains 
// PART 5 --------------------------------------------------------------


//this top one is for if you're inserting a url
//but I'm trying to get this to work on button press, so I need to place url in function
// async function getDogFacts(url) {
async function getDogFacts() {
    try{
        const url = 'https://dogapi.dog/api/v2/facts';
        const res = await fetch(url);
        const jData = await res.json();
        //or can set const dogs = jData.data
        // console.log(jData.data);
        // console.log(jData.data[0].attributes.body);

        //this code replaces what is inside the <p id='displayFact'> with the dog fact contained in
        //jData.data[0].attributes.body;
        if (res.ok) {
            document.getElementById('displayFact').innerHTML = jData.data[0].attributes.body;
        } else {
            //for error catching if API isn't successful
            throw new Error('Something went wrong');
        }

        // jData.data.forEach(breeds => {
        //     console.log(breeds);
        // });
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

async function getDogGroups() {
    try{
        const url = 'https://dogapi.dog/api/v2/groups';
        const res = await fetch(url);
        const jData = await res.json();
        //or can set const dogs = jData.data   
        //create a string for output
        let stringOutput = '';

        if (res.ok) {
            jData.data.forEach(group => {
                //concatenate string by adding string elements and building uon it
                stringOutput += `Dog Group: ${group.attributes.name} <br>
                Dog Group ID: ${group.id} <br>
                Relatred breeds in Group: <br>`;
                // console.log(group); //ths is just for checking the console for how the object is structure

                group.relationships.breeds.data.forEach(breed => {
                    stringOutput += `Breed ID: ${breed.id} <br>`
                //I would try and parse the other api to match dog breed id to dog name maybe if 
                //I had more time and stuff
                })
                // // console.log(group.relationships.breeds.data);
            })
            document.getElementById('displayInfo').innerHTML = stringOutput;
        } else {
            //for error catching if API isn't successful
            throw new Error('Something went wrong');
        }
        

    } catch (error) {
        console.error('Fetch error:', error);
    }
}


/**
 * this code is for when it is being called for console
 * @param  url 
 */
/*
async function getDogGroups(url) {
    try{
        const res = await fetch(url);
        const jData = await res.json();
        //or can set const dogs = jData.data   
        let x = 0, y = 0;
        //I couldn't really figure out a way to create a dynamic array within an array push
        // let dogArr = [[], [], [], [], [], [], [], [], []];  

        // this code was just a test to try and get the related dog breeds to the group name 
        //then grab the ids of the dogs and match them to a name and push the dog breed name
        //into an array of the array
        // jData.data.forEach(group => {
        //     group.relationships.breeds.data.forEach(
        
        //         dogArr[x].push();
        //     )
        //     // dogArr.push(group.relationships.breeds.data[x].id);
        //     x++ //incrament each time this goes 
        // });

        //this code was used to fetch information about dog group names
        jData.data.forEach(group => {
            console.log(group.attributes.name);
            console.log('\nRelated Breeds in Group:')
            group.relationships.breeds.data.forEach(breed => {
                console.log('Breed ID: ' + breed.id);
                //I was trying to code it so that it can match breed id to name and only
                //print out breed name, but I couldn't figure it out unfornately 
            })
            // console.log(group.relationships.breeds.data);
            console.log('\n');
        })
        

    } catch (error) {
        console.error('Fetch error:', error);
    }
}
*/

// getDogFacts('https://dogapi.dog/api/v2/facts');
// getDogGroups('https://dogapi.dog/api/v2/groups');
