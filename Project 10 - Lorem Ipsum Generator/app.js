// Dom Elements Refrence 

const inputBox = document.querySelector("#inputBox");
const getData = document.querySelector("#getData");
const apiURL = "https://api.api-ninjas.com/v1/loremipsum?paragraphs=";
const apiKey = "hf3r0qgn7Uv/F9fIMH5UKw==5bz0hqA2f2hoVxop";

// DOM Elements to Show Data 

const loremtext = document.querySelector("#loremtext");

// Function to Fetch Data 

async function getLorem() {

  const userInput = inputBox.value;
  const getLorem = apiURL + userInput;

  await fetch(getLorem, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(data => {
      loremtext.textContent = " ❝ " + data.text + "❞";
      document.getElementById('copyButton').style.display = 'block';
    })

}

// Function To Copy Lorem

async function copyToClipboard() {
  const textToCopy = loremtext.textContent;
    await navigator.clipboard.writeText(textToCopy);
    alert('Lorem Ipsum copied to clipboard!');  
}


// Adding Event Listener on Button 

getData.addEventListener("click", getLorem)
copyButton.addEventListener("click", copyToClipboard); 
