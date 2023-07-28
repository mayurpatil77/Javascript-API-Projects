// Dom Elements Refrence 

const dadJoke = document.querySelector("#dadJoke");
const getDadJoke = document.querySelector("#getDadJoke");
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=";
const apiKey = "hf3r0qgn7Uv/F9fIMH5UKw==5bz0hqA2f2hoVxop";


// Function to Fetch Data 

async function getDadJokeFromAPI(){
    await fetch(apiURL, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json',
        }
      })
        .then(response => response.json())
        .then(data => {
          dadJoke.textContent = data[0].joke;
        })

}

// Adding Event Listener on Button 

getDadJoke.addEventListener("click",getDadJokeFromAPI)