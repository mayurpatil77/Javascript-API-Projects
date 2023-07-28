// Dom Elements Refrence 

const inputBox = document.querySelector("#inputBox");
const getData = document.querySelector("#getData");
const apiURL = "https://api.api-ninjas.com/v1/sentiment?text=";
const apiKey = "hf3r0qgn7Uv/F9fIMH5UKw==5bz0hqA2f2hoVxop";


// DOM Elements to Show Data 

const sentiment = document.querySelector("#sentiment");
const text = document.querySelector("#text");
const score = document.querySelector("#score");


// Function to Fetch Data 

async function getSentiment() {

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
      text.textContent = " ➡️ Text : " + data.text;
      score.textContent = "➡️  Score : " + data.score;
      sentiment.textContent = "➡️ Sentiment : " + data.sentiment;
    })

}

// Adding Event Listener on Button 

getData.addEventListener("click", getSentiment)