// Dom Elements Refrence 

const bucketIdea = document.querySelector("#bucketIdea");
const getBucketIdea = document.querySelector("#getBucketIdea");
const apiURL = "https://api.api-ninjas.com/v1/bucketlist"
const apiKey = "hf3r0qgn7Uv/F9fIMH5UKw==5bz0hqA2f2hoVxop"


// Function to Fetch Data 

async function getBucketIdeaFromAPI(){
    await fetch(apiURL, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json',
        }
      })
        .then(response => response.json())
        .then(data => {
          bucketIdea.textContent = data.item;
        })

}

// Adding Event Listener on Button 

getBucketIdea.addEventListener("click",getBucketIdeaFromAPI)