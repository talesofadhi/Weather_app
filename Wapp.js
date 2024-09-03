const apiKey = "a9fd3d2d1e1f74381bda6ea932dabf48";  //It is the weather api code 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // It is the weather appid.

       
const searchbox = document.querySelector(".search_bar input");
const searchbtn = document.querySelector(".search_bar button");



//Then we use async function and add fuction to it.
async function checkweather(city){  
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    // And add variable and fetch the api url and api key
    var data = await response.json(); // converts the weather details to json format.
    console.log(data);
    // now we are going to fetch the weather details and give it to the weather app.
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";
 
}
searchbtn.addEventListener("click", ()=> {
    checkweather(searchbox.value);
    

})








