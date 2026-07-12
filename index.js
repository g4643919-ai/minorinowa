const getWeather = require("./weather");
const sendLineMessage = require("./line");

async function main() {
  const weather = await getWeather();

  const message =
`🌤 おはようございます！

【宇都宮市】

🌡 最高気温：${weather.max}℃
🌡 最低気温：${weather.min}℃

みのりの輪`;

  await sendLineMessage(message);
}

main();