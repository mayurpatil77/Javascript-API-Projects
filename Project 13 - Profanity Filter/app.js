// Dom Elements Refrence 

const inputBox = document.querySelector("#inputBox");
const getData = document.querySelector("#getData");
const apiURL = "https://api.api-ninjas.com/v1/profanityfilter?text=";
const apiKey = "hf3r0qgn7Uv/F9fIMH5UKw==5bz0hqA2f2hoVxop";


// DOM Elements to Show Data 

const original = document.querySelector("#original");
const filterd = document.querySelector("#filterd");



// Function to Fetch Data 

async function getfilterdWords() {

  const userInput = inputBox.value;
  const getSentiment = apiURL + userInput;

  await fetch(getSentiment, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      original.textContent = " ➡️ Original : " + data.original;
      filterd.textContent = " ➡️ Filterd : " + data.censored;

    })

}

// Adding Event Listener on Button 

getData.addEventListener("click", getfilterdWords)