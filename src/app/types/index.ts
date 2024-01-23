interface IElPosition {
  leftPosition: number;
  topPosition: number;
};

export interface TCloud extends IElPosition {
  bolt: boolean;
};

export interface ISun extends IElPosition  {};

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
