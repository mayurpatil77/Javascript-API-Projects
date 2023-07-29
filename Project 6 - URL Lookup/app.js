// Dom Elements Refrence 

const inputBox = document.querySelector("#inputBox");
const getData = document.querySelector("#getData");
const apiURL = "https://api.api-ninjas.com/v1/urllookup?url=";
const apiKey = "hf3r0qgn7Uv/F9fIMH5UKw==5bz0hqA2f2hoVxop";


// DOM Elements to Show Data 

const isValidElement = document.querySelector("#is_valid");
const countryElement = document.querySelector("#country");
const countryCodeElement = document.querySelector("#country_code");
const regionCodeElement = document.querySelector("#region_code");
const regionElement = document.querySelector("#region");
const cityElement = document.querySelector("#city");
const zipElement = document.querySelector("#zip");
const latElement = document.querySelector("#lat");
const lonElement = document.querySelector("#lon");
const timezoneElement = document.querySelector("#timezone");
const ispElement = document.querySelector("#isp");
const urlElement = document.querySelector("#url");

// Function to Fetch Data 

async function getUrlData() {

  const userInput = inputBox.value;
  const getData = apiURL + userInput;

  await fetch(getData, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(data => {

      // Filling The Values 
      isValidElement.textContent = "⭐ Is Domain Valid : " + data.is_valid;
      countryElement.textContent = "⭐ Country : " + data.country;
      countryCodeElement.textContent = "⭐ Country Code : " + data.country_code;
      regionCodeElement.textContent = "⭐ Region Code : " + data.region_code;
      regionElement.textContent = "⭐ Region : " + data.region;
      cityElement.textContent = "⭐ City : " + data.city;
      zipElement.textContent = "⭐ ZIP : " + data.zip;
      latElement.textContent = "⭐ Latitude : " + data.lat;
      lonElement.textContent = "⭐ Longitude : " + data.lon;
      timezoneElement.textContent = " ⭐ Timezone : " + data.timezone;
      ispElement.textContent = "⭐ ISP : " + data.isp;
      urlElement.textContent = "⭐ URL : " + data.url;
      // Done with Filling Values
    })
}

// Adding Event Listener on Button 

getData.addEventListener("click", getUrlData);