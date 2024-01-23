import { httpClient } from "./axios.interceptor";

const WeatherService = { 
    getLocation: (local:string) => {
       return  httpClient.get(`geo/1.0/direct?q=${local}&limit=5`);
    }
}

export default WeatherService;