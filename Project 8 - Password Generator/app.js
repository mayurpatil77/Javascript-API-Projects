// Dom Elements Refrence 

const inputBox = document.querySelector("#inputBox");
const getData = document.querySelector("#getData");
const apiURL = "https://api.api-ninjas.com/v1/passwordgenerator?length=";
const apiKey = "hf3r0qgn7Uv/F9fIMH5UKw==5bz0hqA2f2hoVxop";


// DOM Elements to Show Data 

const password = document.querySelector("#password");

// Function to Fetch Data 

async function getPassword() {

  const userInput = inputBox.value;
  const getpass = apiURL + userInput;

  await fetch(getpass, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(data => {
      password.textContent = "Here is Your " + userInput + " Length Password : " + data.random_password;
    })

}

// Adding Event Listener on Button 

getData.addEventListener("click", getPassword)