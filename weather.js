const axios = require("axios");

async function getWeather() {
  const latitude = 36.5551;
  const longitude = 139.8828;

  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo`;

  const response = await axios.get(url);

  return {
    max: response.data.daily.temperature_2m_max[0],
    min: response.data.daily.temperature_2m_min[0],
  };
}

module.exports = getWeather;