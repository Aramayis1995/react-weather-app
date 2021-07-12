import weatherInfo from "./date";
import Weather from "./Weather";
import "./WeatherWrapper.css";

export default function WeatherWrapper() {
  return (
    <div className="weather-wrapper">
      {weatherInfo.map((el) => {
        return (
          <Weather
            name={el.weekDey}
            url={el.imgURL}
            celsius={el.temp}
          ></Weather>
        );
      })}
    </div>
  );
}
