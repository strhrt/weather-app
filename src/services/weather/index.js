import { OPEN_WEATHER_API_KEY } from '@/services/api/api_keys.js'

import api from '@/services/api/index.js'

export default async function getWeatherInfo(city, lang, measurment) {
  // TODO: add to request later
  console.log(lang)
  const responseObj = await weatherRequest(city, measurment)
  return formatWeatherInfo(responseObj, measurment)
}

/**
 * Запрос к апи погоды
 * @param {string} cityName название города
 * @param {string} measurment система измерений metric (default) - °C , imperial - °F, standart - °K
 * @returns {object} объект с информацией о погоде
 */
async function weatherRequest(cityName, measurment = 'metric') {
  if (cityName.trim() === '') return

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${OPEN_WEATHER_API_KEY}&units=${measurment}`

  return await api(url, 'GET')
}

/**
 * Преобразование исходного объекта в удобный вид, удаление ненужных свойств
 * @param {object} weatherObj сырой объект полученный в ответе с сервера
 * @param {string} measurement система измерений
 * @returns {object} объект со информацией о: городе, стране, таймзоне, температуре (по измерениям и по ощущениям)
 * иконке погоды, описание погодных условий, системе измерений, скорости ветра, влажности, времени рассвета и заката, времени измерения
 */
function formatWeatherInfo(weatherObj, measurement) {
  return {
    cityName: weatherObj.name,
    countryCode: weatherObj.sys.country,
    timezone: weatherObj.timezone,
    temperature: weatherObj.main.temp,
    iconId: weatherObj.weather[0].icon,
    description: weatherObj.weather[0].description,
    feelsLike: weatherObj.main.feels_like,
    measurement,
    windSpeed: weatherObj.wind.speed,
    humidity: weatherObj.main.humidity,
    sunriseTime: weatherObj.sys.sunrise,
    sunsetTime: weatherObj.sys.sunset,
    measurementDateTime: weatherObj.dt
  }
}
