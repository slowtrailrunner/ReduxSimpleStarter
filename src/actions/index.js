import axious from 'axios';

const API_KEY = '4c7451ee90cb4d914a1a4a076fc6975b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `{ROOT_URL}&q=${city},us`;

  const request = axious.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}