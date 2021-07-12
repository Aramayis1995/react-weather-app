import weatherInfo from "./date";
import Weather from "./Weather";

export default function WeatherWrapper() {
  return (
    <div>
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
