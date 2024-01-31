const apikey="9d073b675af40a8ddb7f3c5468b64523";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox= document.querySelector(".search input")
const searchbtn= document.querySelector(".search button")

const weatherIcon=document.querySelector(".weather-icon")

async function checkweather(city){
    const response= await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status== 404){
        document.querySelector(".error").style.display="block"
    } 
    else{
        document.querySelector(".error").style.display="none"
    }
    var data= await response.json()
        console.log(data)

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed +"km/h"

        if (data.weather[0].main=="Clouds") {
            weatherIcon.src= "images/clouds.png"
        }
        else if(data.weather[0],main=="Rain"){
            weatherIcon.src="images/rains.png"
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png"
        }
        else if(data.weather[0].main== "Drizzle"){
            weatherIcon.src=="images/drile.png"
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png"
        }
        }

        searchbtn.addEventListener("click", ()=>{
            checkweather(searchbox.value);
            
        })
       
    
