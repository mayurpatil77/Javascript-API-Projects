// Dom Elements Refrence 

const inputBox = document.querySelector("#inputBox");
const getData = document.querySelector("#getData");
const pTags = document.querySelectorAll("p");
const apiURL = "https://api.api-ninjas.com/v1/country?name=";
const apiKey = "hf3r0qgn7Uv/F9fIMH5UKw==5bz0hqA2f2hoVxop";


// DOM Elements to Show Data 

const nameElement = document.querySelector("#name");
const currencyCodeElement = document.querySelector("#currency_code");
const currencyNameElement = document.querySelector("#currency_name");
const sexRatioElement = document.querySelector("#sex_ratio");
const unemploymentElement = document.querySelector("#unemployment");
const lifeExpectancyMaleElement = document.querySelector("#life_expectancy_male");
const gdpGrowthElement = document.querySelector("#gdp_growth");
const capitalElement = document.querySelector("#capital");
const lifeExpectancyFemaleElement = document.querySelector("#life_expectancy_female");
const populationElement = document.querySelector("#population");
const internetUsersElement = document.querySelector("#internet_users");
const gdpPerCapitaElement = document.querySelector("#gdp_per_capita");
const co2EmissionsElement = document.querySelector("#co2_emissions");


// Function to Fetch Data 

async function getCountryInfo() {

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

      nameElement.innerText = jsonData[0].name;
      currencyCodeElement.innerText = jsonData[0].currency.code;
      currencyNameElement.innerText = jsonData[0].currency.name;
      sexRatioElement.innerText = jsonData[0].sex_ratio;
      unemploymentElement.innerText = jsonData[0].unemployment;
      lifeExpectancyMaleElement.innerText = jsonData[0].life_expectancy_male;
      gdpGrowthElement.innerText = jsonData[0].gdp_growth;
      capitalElement.innerText = jsonData[0].capital;
      lifeExpectancyFemaleElement.innerText = jsonData[0].life_expectancy_female;
      populationElement.innerText = jsonData[0].population;
      internetUsersElement.innerText = jsonData[0].internet_users;
      gdpPerCapitaElement.innerText = jsonData[0].gdp_per_capita;
      co2EmissionsElement.innerText = jsonData[0].co2_emissions;

    })
}

// Adding Event Listener on Button 

getData.addEventListener("click", getCountryInfo);