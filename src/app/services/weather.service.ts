import { TLocation, TUnits, TWeatherUnit } from "../types";
import { httpClient } from "./axios.interceptor";
//
const WeatherService = {
  getLocation: (local: string) => {
    return httpClient.get<TLocation[]>(`geo/1.0/direct?q=${local}&limit=5`);
  },
  getWeather: (lat: number, lon: number, unit: TWeatherUnit = "metric") => {
    return httpClient.get<TLocation[]>(
      `data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}`
    );
  },
};

export default WeatherService;
