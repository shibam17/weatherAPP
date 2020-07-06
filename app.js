const api = {
    key: "4930558afcaeeec187450879e0493743",
    base: "https://api.openweathermap.org/data/2.5/"
}


const searchBox = document.querySelector(".search-box");
const searchCity = document.querySelector(".city");
const searchDate = document.querySelector(".date");
const searchTemp = document.querySelector(".temp");
const searchWeather = document.querySelector(".weather");
const searchHiLow = document.querySelector(".hi-low");
const addCard = document.querySelector(".hidden");


function getQuery(e){
    if(e.keyCode == 13){
        fetch(`${api.base}weather?q=`+searchBox.value+`&units=metric&appid=${api.key}`).then(response => response.json()).then(dataDisplay)
        ; //fetching data (metric celcius)
    }
}

function dataDisplay(response){
   
    if(response.cod === "404"){
             
    addCard.classList.add('card');

    searchCity.innerText = 'Invalid City'; //1st way

    searchTemp.innerText = 'N/A';

    searchWeather.innerText = 'N/A'; //2nd way

    searchHiLow.innerText = 'N/A' + '/'+ 'N/A';      
    }else{
        
    addCard.classList.add('card');

    searchCity.innerText = response['name'] + ','+ response['sys']['country']; //1st way

    searchTemp.innerText = response['main']['temp'] + String.fromCharCode(176) + 'c';

    searchWeather.innerText = response.weather[0].main; //2nd way

    searchHiLow.innerText = response.main.temp_max + String.fromCharCode(176) + 'c'+ '/'+ response.main.temp_min + String.fromCharCode(176)+ 'c'
    }
}





searchBox.addEventListener('keypress', getQuery);
