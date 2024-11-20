/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();
const apiKey = "680e2053a95726453d1fb32170abeb18";
const zip = document.getElementById("zip");

async function getWeatherData() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zip.value}&appid=${apiKey}&units=imperial`
    );
    const data = await response.json();
    const dataToSend = {
      temperature: data.main.temp,
      date: newDate,
      userResponse: document.getElementById("feelings").value,
    };
    await postData("http://localhost:3000/data", dataToSend);
    await getDataFromServer("http://localhost:3000/data");
  } catch (err) {
    console.log(err);
  }
}

async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST", // HTTP method
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
      },
      body: JSON.stringify(data), // Convert JavaScript object to JSON
    });
  } catch (err) {
    console.log(err);
  }
}

async function getDataFromServer(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById("temp").innerHTML =
      Math.round(data.temperature) + "degrees";
    document.getElementById("content").innerHTML = data.userResponse;
    document.getElementById("date").innerHTML = data.date;
  } catch (err) {
    console.log(err);
  }
}

const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", getWeatherData);
