let weather = {
    apikey : "c55adc731b0c5559bc5ba25c805f32d8",
    fetchWeather : function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
            + city + "&appid=" + this.apikey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = Math.round(temp) + "°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed : " + Math.round(speed) + " kmph";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "linear-gradient(#2c2828c2,#2c2828c2),url('https://source.unsplash.com/1600x900/?" + name + ",landscape,sun')";
    },
    search : function() {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key === "Enter") {
        weather.search();
    }
})