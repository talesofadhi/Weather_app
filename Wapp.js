const apiKey = "a9fd3d2d1e1f74381bda6ea932dabf48";  //It is the weather api code 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=germany&appid=a9fd3d2d1e1f74381bda6ea932dabf48&"; // It is the weather appid.

//Then we use async function and add fuction to it.
async function checkweather(){  
    const response = await fetch(apiUrl + `&{apiKey}`);
    // And add variable and fetch the api url and api key
    var data = await response.json();
    console.log(data);


}
checkweather();