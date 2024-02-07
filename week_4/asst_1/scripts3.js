
// contains 
// PART 3 --------------------------------------------------------------

async function getDogBreeds(id) {
    try{
        const res = await fetch('https://dogapi.dog/api/v2/breeds');
        const jData = await res.json();
        //or can set const dogs = jData.data
        
        //check if the request was successful
        if (res.ok) {
            jData.data.forEach(breeds => {
                //check if the id entered matches the fetched data
                if (breeds.id == id){
                    //below code prints all the info related to the id
                    //console.log(breeds.attributes);
                    
                    console.log('ID: ', id)
                    console.log('Breed Name: ', breeds.attributes.name);
                    console.log('Breed Description: ', breeds.attributes.description);
                    console.log('Life Expectancy: ', breeds.attributes.life);
                    console.log('Male Weight: ', breeds.attributes.male_weight);
                    console.log('Female Weight: ', breeds.attributes.female_weight);
                    console.log('Hypoallergenic: ', breeds.attributes.hypoallergenic);
                }                
        });} else {
            throw new Error('Something went wrong');
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
//what's passed in is the dog breed id
getDogBreeds('6f540c30-27a8-48cc-8d88-0b1d9fa99167');




/*
For the bottom code I was trying to see if I can get a breed name returned from the async function


async function getDogBreeds(id) {
    try{
        const res = await fetch('https://dogapi.dog/api/v2/breeds');
        const jData = await res.json();
        //or can set const dogs = jData.data
        
        //check if the request was successful
        if (res.ok) {
            const breed = jData.data.find(breed => breed.id === id);
            return breed ? breed.attributes.name : null;
            // jData.data.forEach(breeds => {
            //     //check if the id entered matches the fetched data
            //     if (breeds.id == id){
            //         //below code prints all the info related to the id
            //         //console.log(breeds.attributes);
            //         let holder = breeds.attributes.name;
            //         console.log(holder);
            //         return holder;
            //     }                
        } else {
            throw new Error('Something went wrong');
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
//what's passed in is the dog breed id
(async() => {
    let breedName = await getDogBreeds('6f540c30-27a8-48cc-8d88-0b1d9fa99167');
    console.count('Breed name: ' + breedName + '  End');
})();

*/