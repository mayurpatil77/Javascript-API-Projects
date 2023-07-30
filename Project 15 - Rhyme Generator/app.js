// Dom Elements Refrence 

const inputBox = document.querySelector("#inputBox");
const getData = document.querySelector("#getData");
const apiURL = "https://api.api-ninjas.com/v1/rhyme?word=";
const apiKey = "hf3r0qgn7Uv/F9fIMH5UKw==5bz0hqA2f2hoVxop";


// DOM Elements to Show Data 

const Rhyme = document.querySelector("#Rhymes");

// Function to Fetch Data 

async function getRhyme() {

  const userInput = inputBox.value;
  const fetchRhyme = apiURL + userInput;

  await fetch(fetchRhyme, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(data => {
      const formattedData = data.map(item => `- ${item}`).join('\n');
      Rhyme.textContent = " ➡️ Rhymes: \n" + formattedData;
    })
}

// Adding Event Listener on Button 

getData.addEventListener("click", getRhyme)