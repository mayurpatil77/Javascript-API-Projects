const inputBox = document.querySelector("#inputBox");
const getData = document.querySelector("#getData");
const qrCodeImage = document.querySelector("#qrCodeImage");
const apiURL = "https://api.api-ninjas.com/v1/qrcode";
const apiKey = "hf3r0qgn7Uv/F9fIMH5UKw==5bz0hqA2f2hoVxop"; 

async function generateQRCode() {
  try {
    const userInput = inputBox.value;
    const url = new URL(apiURL);
    url.searchParams.append("data", userInput);
    url.searchParams.append("format", "png");

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Accept': 'image/png',
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data.');
    }

    const blob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      qrCodeImage.src = base64data;
    };
  } catch (error) {
    console.error('Error generating QR code:', error);
  }
}

getData.addEventListener("click", generateQRCode);
