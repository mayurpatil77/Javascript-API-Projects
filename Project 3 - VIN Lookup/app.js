// Dom Elements Refrence 

const inputBox = document.querySelector("#inputBox");
const getData = document.querySelector("#getData");
const apiURL = "https://api.api-ninjas.com/v1/vinlookup?vin=";
const apiKey = "hf3r0qgn7Uv/F9fIMH5UKw==5bz0hqA2f2hoVxop";


// DOM Elements to Show Data 

const vinParagraph = document.querySelector("#vin");
const countryParagraph = document.querySelector("#country");
const manufacturerParagraph = document.querySelector("#manufacturer");
const regionParagraph = document.querySelector("#region");
const wmiParagraph = document.querySelector("#wmi");
const vdsParagraph = document.querySelector("#vds");
const visParagraph = document.querySelector("#vis");
const yearsParagraph = document.querySelector("#years");


// Function to Fetch Data 

async function getVinData() {

  const userInput = inputBox.value;
  const getvin = apiURL + userInput;

  await fetch(getvin, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(data => {
      vinParagraph.textContent = "➖ VIN: " + data.vin;
      countryParagraph.textContent = "➖ Country: " + data.country;
      manufacturerParagraph.textContent = "➖ Manufacturer: " + data.manufacturer;
      regionParagraph.textContent = "➖ Region: " + data.region;
      wmiParagraph.textContent = "➖ WMI: " + data.wmi;
      vdsParagraph.textContent = "➖ VDS: " + data.vds;
      visParagraph.textContent = "➖ VIS: " + data.vis;
      yearsParagraph.textContent = "➖ Years: " + data.years.join(", ");
    })



}

// Adding Event Listener on Button 

getData.addEventListener("click", getVinData)