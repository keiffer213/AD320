

async function getWorks() {
    try {
        //There are supposed to be 486,851 objects in the database, but it seems some of them don't retrieve?
        //wasn't sure if I should decrease the random number
        let objNum = Math.floor(Math.random()*486851);
        //console.log(objNum); //this was just for checking the random number output

        //the url is dynamic to take random objects
        const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objNum}`;

        const res = await fetch(url);
        const jData = await res.json();

        //the start of the string that's gonna be placed in the div#worksdiv in index
        let stringOutput = '';

        if(res.ok) {
            // console.log('works!');
            // console.log(jData);
            // console.log(jData.title);
            //code above just for checking data
            
            //setting some variables to take the data from API
            let artist = jData.artistDisplayName;
            let artistBio = jData.artistDisplayBio;
            let picUrl = jData.primaryImageSmall;
            let imgAlt = picUrl;

            //this is to check if there is a string inside, if not set a default value
            if (!artist) {artist = 'Unknown'}
            if (!artistBio) {artistBio = 'Uknown'}
            if (!picUrl) {imgAlt = 'No Image Found'}


            //this will build the dynamic html injection into index
            stringOutput += `<h3>${jData.title}</h3>
            <img src="${picUrl}" alt="${imgAlt}">
            <p>Artist: ${artist}</p>
            <p>Bio: ${artistBio}</p>
            <p>Medium: ${jData.medium}</p>
            <p>Classification: ${jData.classification}</p>
            <p>Credit: ${jData.creditLine}</p>
            <p>Object ID: ${jData.objectID}</p>
            <p>Department: ${jData.department}</p>
            <a href="${jData.objectURL}">Webpage: ${jData.objectURL}</a>`;

            //this will insert the string I built into the index.html code
            document.getElementById('worksdiv').innerHTML = stringOutput;
        } else {
            //this will print if there is an error connecting to the API
            document.getElementById('worksdiv').innerHTML = '<h2>Something Went wrong! Try Again!</h2>';
            throw new Error('Something went wrong');
        }

    }
    catch (error){
        console.error('Fetch error:', error);
    }
}

// getWorks();