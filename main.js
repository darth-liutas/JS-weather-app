const date_o = new Date();
const year = date_o.getFullYear();
const date = date_o.getDate();
const day = date_o.getDay();
var day_str;
switch(day){
case 0:
day_str="Sunday";
break;

case 1:
day_str="Monday";
break;

case 2:
day_str="Tuesday";
break;

case 3:
day_str="thursday";
break;

case 4:
day_str="wednesday";
break;

case 5:
day_str="friday";
break;

case 6:
day_str="saturday";
break;
}



document.getElementById("year").innerHTML=year+" ";
document.getElementById("date").innerHTML=date+" ";
document.getElementById("day").innerHTML=day_str+" ";


const apiKey = "4d8fb5b93d4af21d66a2948710284366";


let lon;
let lat;
let temperature = document.getElementById("temp");
let summary = document.getElementById("summary");
let loc = document.getElementById("city");
const kelvin = 273;

window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;
  
      // API ID
      const api = "4d8fb5b93d4af21d66a2948710284366";
  
      // API URL
      const base =
`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
`lon=${lon}&appid=4d8fb5b93d4af21d66a2948710284366`;
  
      // Calling the API
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          temperature.textContent = 
              Math.floor(data.main.temp - kelvin) + "°C";
          summary.textContent = data.weather[0].description;
          loc.textContent = data.name + "," + data.sys.country;
          let icon1 = data.weather[0].icon;
         
        });
    });
  }
});
  
      // API ID
      const api = "4d8fb5b93d4af21d66a2948710284366";
  
      // API URL
      const base =
`https://api.openweathermap.org/data/2.5/`;
  
  inputId = document.getElementById('input');
inputId.addEventListener('keyup', function onEvent(e) {
    if (e.keyCode === 13) {
    	let inputVal = input.value;
    	e.preventDefault();
        getResults(inputVal);
    }
});

    
function getResults(cityName) {
  const apiUrl =
`${base}weather?q=${cityName}&units=metric&APPID=${api}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(displayResults)
    .catch(error => console.error(`Error getting weather for ${cityName}: ${error}`));
}

function displayResults (weather) {
loc.textContent=weather.name+","+weather.sys.country;
temperature.textContent = Math.floor(weather.main.temp)+ "°C";
summary.textContent=weather.weather[0].description;
min_temp.textContent=Math.round(weather.main.temp_min);
max_temp.textContent=Math.round(weather.main.temp_max);
}

