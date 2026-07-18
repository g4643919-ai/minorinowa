const calculateVPD = require("./vpd");
const createDashboard = require("./dashboard");

console.log("★★ 最新版 index.js を実行しています ★★");

const createMetabolism = require("./metabolism");
const getWeather = require("./weather");
const sendLineMessage = require("./line");
const createGraph = require("./graph");
const createComment = require("./aiComment");
const createPhotosynthesis = require("./photosynthesis");

async function main() {

    const weather = await getWeather();

    const advice = createComment(weather);

    const metabolism = createMetabolism(weather);

    const vpd = calculateVPD(
    weather.temperature,
    weather.humidity
);

    const photosynthesis =
    createPhotosynthesis(weather, vpd);

    await createGraph(
    "宇都宮市 今日の気温",
    "気温（℃）",
    "気温",
    weather.temperature,
    "#ff0000",
    "temperature.png",
    weather.hours
);

await createGraph(
    "宇都宮市 今日の湿度",
    "湿度（%）",
    "湿度",
    weather.humidity,
    "#0066ff",
    "humidity.png",
    weather.hours
);

await createGraph(
    "宇都宮市 今日の日射量",
    "W/m²",
    "日射量",
    weather.radiation,
    "#ffaa00",
    "radiation.png",
    weather.hours
);

await createGraph(
    "宇都宮市 今日のVPD（飽差）",
    "kPa",
    "VPD",
    vpd,
    "#00aa66",
    "vpd.png",
    weather.hours
);

await createDashboard(
    weather,
    metabolism,
    photosynthesis
);

    const message =
`🌤 おはようございます！

【宇都宮市】

🌡最高気温：${weather.max}℃
🌡最低気温：${weather.min}℃

🌱植物代謝指数

${metabolism.score}/100

状態：${metabolism.level}

🌱 今日の栽培アドバイス

${advice}

みのりの輪`;

console.log(message);

    await sendLineMessage(message);

}

main();