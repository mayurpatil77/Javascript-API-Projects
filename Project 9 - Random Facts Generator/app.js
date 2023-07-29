// Dom Elements Refrence 

const getData = document.querySelector("#getData");
const apiKey = "hf3r0qgn7Uv/F9fIMH5UKw==5bz0hqA2f2hoVxop";


// DOM Elements to Show Data 

const fact = document.querySelector("#fact");

// Function to Fetch Data 

async function getFact() {
  
  const apiURL = "https://api.api-ninjas.com/v1/facts";

  await fetch(apiURL, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      fact.textContent = data[0].fact;
    })

}

// Adding Event Listener on Button 

getData.addEventListener("click", getFact)