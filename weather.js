const axios = require("axios");

async function getWeather() {

  const latitude = 36.5551;
  const longitude = 139.8828;

  const url =
`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,shortwave_radiation&daily=temperature_2m_max,temperature_2m_min&forecast_days=1&timezone=Asia%2FTokyo`;

  const response = await axios.get(url);

  return {

    max: response.data.daily.temperature_2m_max[0],

    min: response.data.daily.temperature_2m_min[0],

    hours: response.data.hourly.time.map(t => t.substring(11,16)),

    temperature: response.data.hourly.temperature_2m,

    humidity: response.data.hourly.relative_humidity_2m,

    rain: response.data.hourly.precipitation_probability,

    radiation: response.data.hourly.shortwave_radiation

  };

}

module.exports = getWeather;