type IElPosition {
  leftPosition: number;
  topPosition: number;
};

export type TCloud extends IElPosition {
  bolt: boolean;
};

export type ISun extends IElPosition  {};

export type TLocalNames = {
  os?: string;
  mn?: string;
  mk?: string;
  be?: string;
  tg?: string;
  bn?: string;
  ce?: string;
  zh?: string;
  sr?: string;
  ru?: string;
  hy?: string;
  th?: string;
  lv?: string;
  ka?: string;
  ja?: string;
  la?: string;
  ar: string;
  pt: string;
  ko?: string;
  uk?: string;
  es?: string;
  bg?: string;
  fa: string;
  lt?: string;
  el?: string;
  mr?: string;
  kk?: string;
  he?: string;
  ur: string;
};

export type TLocation = {
  name: string;
  local_names: TLocalNames;
  lat: number;
  lon: number;
  country: string;
  state: string;
};

export type TWeather = {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  rain: Rain
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export type Coord = {
  lon: number
  lat: number
}

export type Weather = {
  id: number
  main: string
  description: string
  icon: string
}

export type Main = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export type Wind = {
  speed: number
  deg: number
}

export type Rain = {
  "1h": number
}

export type Clouds = {
  all: number
}

export type Sys = {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}
