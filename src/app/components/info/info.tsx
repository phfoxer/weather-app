import React, { Fragment, useEffect, useState } from "react";
import styles from "./info.module.scss";
import { TUnits, TWeather, Weather } from "../../types";
import { TWeatherEvent, WeatherEvent } from "../../events/weather.event";

const Info: React.FC<TWeather> = () => {
  const [data, setData] = useState<TWeather>({} as TWeather);
  const [headerInfo, setHeaderInfo] = useState<Weather>({} as Weather);
  const [tempUnit, setTempUnit] = useState<TUnits>("°C");

  useEffect(() => {
    WeatherEvent.effect().subscribe(({weather, unit}: TWeatherEvent) => {
      setData(data);
      setHeaderInfo(weather.weather?.at(0) as Weather);
      setTempUnit(unit === "metric" ? "°C" : "°F");
    });
  }, []);

  return (
    <Fragment>
      {data.id && (
        <div className={styles.info} id="info">
          <div className={styles.info_header}>
            <div className={styles.info_header__title}>
              <img
                src={`https://openweathermap.org/img/wn/${headerInfo.icon}@2x.png`}
                height={50}
                width={50}
                alt=""
              />
              {headerInfo.main}: <span>{headerInfo.description}</span>
            </div>
          </div>
          <div className={styles.info_body}>
            <div>
              Temperature: {data.main.temp}
              {tempUnit}
            </div>
            <div>
              Temperature (min/max): {data.main.temp_min}
              {tempUnit} / {data.main.temp_max}
              {tempUnit}
            </div>
            <div>Wind speed: {data.wind.speed} Km/h</div>
            <div>Humidity: {data.main.humidity}%</div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Info;
