import { Observable, Subject } from "rxjs";
import { TWeather, TWeatherUnit } from "../types";

const weathereSubject: Subject<TWeatherEvent> = new Subject<TWeatherEvent>();
export type TWeatherEvent = { 
  weather: TWeather;
  unit:TWeatherUnit;
}
export const WeatherEvent = {
  effect(): Observable<TWeatherEvent> {
    return weathereSubject;
  },
  signal(data: TWeatherEvent) {
    weathereSubject.next(data);
  },
};
