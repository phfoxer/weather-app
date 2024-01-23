"use client"
import WeatherService from "../../services/weather.service";
import styles from "./search-bar.module.scss";

export const SearchBar = () => {


  const searchResults = () => {
    WeatherService.getLocation('London').then((res:any) => {

     }).catch((err:any) => { })
  }

  return (
    <div className={styles.searchbar}>
      <div className={styles.searchbar_blur}></div>
      <input placeholder="City, State, Country" type="text" />
      <button onClick={searchResults} className={styles.searchbar_submit}>Search</button>
    </div>
  );
};
