//contains part 1 & 2


/* 
// PART 1 --------------------------------------------------------------

//Fetch and log the list of dog breeds
fetch ('https://dogapi.dog/api/v2/breeds')
//fetch from the api
.then(res => res.json())
//takes the fetch request and then parses the body as JSON
.then(res => {
    
    const breeds = res.data;
    //can also do res.data.forEach(breeds => {})
    breeds.forEach(breeds => {
        console.log(breeds.attributes.name)
    });
})

//I did the Part 1 in both ways to see if I could
async function getDogBreeds(url) {
    try{
        const res = await fetch(url);
        const jData = await res.json();
        //or can set const dogs = jData.data
        jData.data.forEach(breeds => {
            console.log(breeds.attributes.name);
        });
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
getDogBreeds('https://dogapi.dog/api/v2/breeds');


--------------------------------------------------------------------- */ 


// PART 2 --------------------------------------------------------------

//Fetch and log the list of dog breeds
fetch ('https://dogapi.dog/api/v2/breeds')
//fetch from the api
.then(res => res.json())
// .then(res => console.log(res.ok)) //this code prints true
//takes the fetch request and then parses the body as JSON
.then(res => {
    //for some reason even if res.ok is true, if i set the if(res.ok) it will go to the error
    if (!res.ok) {
        const breeds = res.data;
        console.log(breeds)
        //can also do res.data.forEach(breeds => {})
        breeds.forEach(breeds => {
            console.log(breeds.attributes.name)
        });
    } else {
        throw new Error('Something failed');
    }
})
.catch(error => console.error(error))


async function getDogBreeds(url) {
    try{
        const res = await fetch(url);
        const jData = await res.json();
        //or can set const dogs = jData.data
        if (res.ok) {
            jData.data.forEach(breeds => {
            console.log(breeds.attributes.name);
        });} else {
            throw new Error('Something went wrong');
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
getDogBreeds('https://dogapi.dog/api/v2/breeds');

// --------------------------------------------------------------------- */ 

