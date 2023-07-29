// Dom Elements Refrence 

const inputBox = document.querySelector("#inputBox");
const getData = document.querySelector("#getData");
const apiURL = "https://api.api-ninjas.com/v1/whois?domain=";
const apiKey = "hf3r0qgn7Uv/F9fIMH5UKw==5bz0hqA2f2hoVxop";


// DOM Elements to Show Data 

const domainName = document.querySelector("#domain_name");
const registrar = document.querySelector("#registrar");
const whoisServer = document.querySelector("#whois_server");
const nameServer1 = document.querySelector("#name_server_1");
const nameServer2 = document.querySelector("#name_server_2");
const dnssec = document.querySelector("#dnssec");
const org = document.querySelector("#org");
const state = document.querySelector("#state");
const country = document.querySelector("#country");
const email1 = document.querySelector("#email1");
const email2 = document.querySelector("#email2");


// Function to Fetch Data 

async function getWhoisData() {

  const userInput = inputBox.value;
  const getWhois = apiURL + userInput;

  await fetch(getWhois, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(data => {

      // Filling The Values 

      domainName.textContent = "✔️ Domain Name : " + data.domain_name[0];
      registrar.textContent = "✔️ Registrar : " + data.registrar;
      whoisServer.textContent = "✔️ Whois Server: " + data.whois_server;
      nameServer1.textContent = "✔️ Name Server 1 : " + data.name_servers[0];
      nameServer2.textContent = "✔️ Name Server 2 : " + data.name_servers[1];
      dnssec.textContent = "✔️ DNSSEC : " + data.dnssec;
      org.textContent = "✔️ Organization : " + data.org;
      state.textContent = "✔️ State : " + data.state;
      country.textContent = "✔️ Country : " + data.country;
      email1.textContent = "✔️ Email 1 : " + data.emails[0];
      email2.textContent = "✔️ Email 2 : " + data.emails[1];
      // Done with Filling Values

    })
}

// Adding Event Listener on Button 

getData.addEventListener("click", getWhoisData);