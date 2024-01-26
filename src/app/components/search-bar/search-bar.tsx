"use client";
import { Fragment, useEffect, useState } from "react";
import WeatherService from "../../services/weather.service";
import styles from "./search-bar.module.scss";
import { TLocation, TWeatherUnit } from "../../types";
import { WeatherEvent } from "../../events/weather.event";
import SwitchButton from "../switch-button/switch-button";

export const SearchBar = () => {
  const [city, setCity] = useState("Salvador");
  const [showList, setShowList] = useState(false);
  const [cityList, setCityList] = useState<TLocation[]>([]);
  const [unit, setUnit] = useState<TWeatherUnit>("imperial");
  const [local, setLocal] = useState<TLocation>({} as TLocation);

  const searchResults = () => {
    WeatherService.getLocation(city).then((res: any) => {
      setCityList(res.data as TLocation[]);
      setShowList(true);
    });
  };

  const requestWeather = () => {
    setCity(`${local.name}, ${local.state}, ${local.country}`);
    setShowList(false);
    WeatherService.getWeather(local.lat, local.lon, unit).then((res: any) => {
      WeatherEvent.signal({ weather: res.data, unit: unit });
    });
  };

  useEffect(() => {
    if (local && local.name) {
      requestWeather();
    }
  }, [local, unit]);

  return (
    <Fragment>
      <div className={styles.searchbar}>
        <input
          list="city"
          placeholder="City, State, Country"
          name="city"
          type="text"
          autoComplete="off"
          value={city}
          onKeyDown={(e: any) => setCity(e.target.value)}
        />
        <div className={styles.switchButton}>
          <SwitchButton onCheck={(_unit) => setUnit(_unit)} />
        </div>

        <button onClick={searchResults} className={styles.searchbar_submit}>
          Search
        </button>
      </div>

      {showList && (
        <ul id="city" className={styles.datalist}>
          {cityList.map((item, key) => (
            <li onClick={() => setLocal(item)} key={key}>
              {item.name}, {item.state}, {item.country}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};
