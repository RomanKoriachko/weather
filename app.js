class Weather {
  constructor(humidity, pressure, speed, deg, icon, temp, description) {
    this.humidity = humidity;
    this.pressure = pressure;
    this.speed = speed;
    this.deg = deg;
    this.icon = icon;
    this.temp = temp;
    this.description = description;
  }
  render() {
    let weather = document.querySelector(".weather");
    weather.innerHTML = `<div class="weather-block">
    <div class="humidity">Humidity: ${this.humidity}%</div>
    <div class="pressure">Pressure: ${this.pressure} hPa</div>
    <div class="wind">
        <div class="speed">Wind: ${this.speed} km/h,</div>
        <div class="deg">${this.deg}°</div>
    </div>
</div>
<div class="weather-block">
    <div class="icon"><img src="https://openweathermap.org/img/w/${this.icon}.png" alt=""></div>
    <div class="temp">${this.temp}°C</div>
    <div class="description">${this.description}</div>
</div>`;
  }
}

let city = prompt("Введіть назву міста");

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
)
  .then((res) => res.json())
  .then((data) => {
    new Weather(
      data.main.humidity,
      data.main.pressure,
      data.wind.speed,
      data.wind.deg,
      data.weather[0].icon,
      data.main.temp,
      data.weather[0].description
    ).render();
  });
