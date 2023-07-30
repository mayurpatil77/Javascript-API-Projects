// Dom Elements Refrence 

const inputBox = document.querySelector("#inputBox");
const getData = document.querySelector("#getData");
const apiURL = "https://api.api-ninjas.com/v1/celebrity?name=";
const apiKey = "hf3r0qgn7Uv/F9fIMH5UKw==5bz0hqA2f2hoVxop";


// DOM Elements to Show Data 

const nameElement = document.querySelector("#name");
const netWorthElement = document.querySelector("#net_worth");
const genderElement = document.querySelector("#gender");
const nationalityElement = document.querySelector("#nationality");
const occupationElement = document.querySelector("#occupation");
const heightElement = document.querySelector("#height");
const birthdayElement = document.querySelector("#birthday");
const ageElement = document.querySelector("#age");
const isAliveElement = document.querySelector("#is_alive");


// Function to Fetch Data 

async function getCelebrityInfo() {

  const userInput = inputBox.value;
  const getInfo = apiURL + userInput;

  await fetch(getInfo, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(jsonData => {

      // Filling The Values 

      nameElement.innerText = "✔️ Name: " + jsonData[0].name;
      netWorthElement.innerText = "✔️ Net Worth: " + jsonData[0].net_worth + " Rs";
      genderElement.innerText = "✔️ Gender: " + jsonData[0].gender;
      nationalityElement.innerText = "✔️ Nationality: " + jsonData[0].nationality;
      occupationElement.innerText = "✔️ Occupation: " + jsonData[0].occupation.join(", ");
      heightElement.innerText = "✔️ Height: " + jsonData[0].height;
      birthdayElement.innerText = "✔️ Birthday: " + jsonData[0].birthday;
      ageElement.innerText = "✔️ Age: " + jsonData[0].age;
      isAliveElement.innerText = "✔️ Is Alive: " + jsonData[0].is_alive;


      // Done with Filling Values

    })
}

// Adding Event Listener on Button 

getData.addEventListener("click", getCelebrityInfo);