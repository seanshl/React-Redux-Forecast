import axios from 'axios';

const API_KEY = '7a873329457853ac73848406b32ba3b9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
//Middleware functions, take a action, let action pass, manupulates it , logs it or stop it.
//called Action creators, or gate keeper of action.

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}