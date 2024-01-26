import { Observable, Subject } from "rxjs";
import { TWeather } from "../types";

const  SkyStatusSubject: Subject<TWeather> = new Subject<TWeather>();

export const SkyStatusEvent = {
  effect(): Observable<TWeather> {
    return SkyStatusSubject;
  },
  signal(lang: TWeather) {
    SkyStatusSubject.next(lang);
  },
};
