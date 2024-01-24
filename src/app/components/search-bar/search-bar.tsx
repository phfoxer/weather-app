"use client";
import { Fragment, useState } from "react";
import WeatherService from "../../services/weather.service";
import styles from "./search-bar.module.scss";
import { TLocation } from "../../types";

export const SearchBar = () => {
  const [city, setCity] = useState("");
  const [showList, setShowList] = useState(false);
  const [cords, setCords] = useState({ lat: 0, lon: 0 });
  const [cityList, setCityList] = useState<TLocation[]>([]);

  const searchResults = () => {
    WeatherService.getLocation(city)
      .then((res: any) => {
        setCityList(res.data as TLocation[]);
      })
      .catch((err: any) => {
        
      });
  };

  const handleSelectCity = (local: TLocation) => {
    setCity(`${local.name}, ${local.state}, ${local.country}`);
    setCords({ lat: local.lat, lon: local.lon });
    setShowList(false);
  };

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
          onInput={(e: any) => {
            setCity(e.target.value);
            setShowList(true);
          }}
        />
        <button onClick={searchResults} className={styles.searchbar_submit}>
          Search
        </button>
      </div>

      {showList && (
        <ul id="city" className={styles.datalist}>
          {cityList.map((item, key) => (
            <li onClick={() => handleSelectCity(item)} key={key}>
              {item.name}, {item.state}, {item.country}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};
