let weather = {
    apiKey: "7e2275f5901e9c898905df2cc50a5e61",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city + "&units=metric&appid=7e2275f5901e9c898905df2cc50a5e61"
    )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".wind").innerHTML = "wind speed: " + speed + "km/h";
        document.querySelector(".humidity").innerHTML = "humidity: " + humidity +"%";
        document.querySelector(".weather-description").innerHTML = description;
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document
.querySelector(".search-button")
.addEventListener("click", function(){
weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        weather.search();
    }
})


