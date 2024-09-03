const apiKey = "a9fd3d2d1e1f74381bda6ea932dabf48";  //It is the weather api code 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // It is the weather appid.

       
const searchbox = document.querySelector(".search_bar input");
const searchbtn = document.querySelector(".search_bar button");
const weatherimg = document.querySelector(".weather_icon");



//Then we use async function and add fuction to it.
async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }else{
        var data = await response.json(); // converts the weather details to json format.
    console.log(data);
    // now we are going to fetch the weather details and give it to the weather app.
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";

    if(data.weather[0].main=="Clouds"){
        weatherimg.src="images/clouds.png";

    }else if(data.weather[0].main=="Clear"){
        weatherimg.src="images/clear.png";

    }else if(data.weather[0].main=="Rain"){
        weatherimg.src="images/rain.png";

     } else if(data.weather[0].main=="Mist"){
            weatherimg.src="images/mist.png";

     } else if( data.weather[0].main=="Drizzle"){
        weatherimg.src="images/drizzle.png";  
        
     }
     document.querySelector(".weather").style.display="block";
 

    }

    
}

searchbtn.addEventListener("click", ()=> {
    checkweather(searchbox.value);
    

})

searchbox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default action of the Enter key
       checkweather(searchbox.value);

    }
})