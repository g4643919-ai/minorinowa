const getWeather = require("./weather");
const sendLineMessage = require("./line");
const createTemperatureGraph = require("./graph");

async function main() {

    const weather = await getWeather();

    await createTemperatureGraph(
        weather.hours,
        weather.temperature
    );

    const message =
`🌤 おはようございます！

【宇都宮市】

🌡最高気温：${weather.max}℃
🌡最低気温：${weather.min}℃

📈 気温グラフを作成しました。

みのりの輪`;

    await sendLineMessage(message);

}

main();