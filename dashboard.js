const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");

async function createDashboard(weather, metabolism, photosynthesis) {

    const canvas = createCanvas(1000, 1800);
    const ctx = canvas.getContext("2d");

    // 背景
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1000, 1600);

    // タイトル
    ctx.fillStyle = "#2E7D32";
    ctx.font = "bold 42px sans-serif";
    ctx.fillText("みのりの輪 環境ダッシュボード", 180, 60);
// 
ctx.fillStyle = "#444";
ctx.font = "28px sans-serif";

const today = new Date();

ctx.fillText(today.toLocaleDateString("ja-JP"), 40, 110);
ctx.fillText("宇都宮市", 40, 150);

ctx.font = "bold 30px sans-serif";

ctx.fillStyle = "#d32f2f";
ctx.fillText(`最高 ${weather.max}℃`, 40, 200);

ctx.fillStyle = "#1976d2";
ctx.fillText(`最低 ${weather.min}℃`, 280, 200);

//========================
// 光合成指数
//========================

ctx.fillStyle = "#1565C0";
ctx.font = "bold 28px sans-serif";

ctx.fillText(
    `🌿 光合成指数 ${photosynthesis.score}/100`,
    540,
    190
);

ctx.font = "24px sans-serif";

ctx.fillStyle = "#444";

ctx.fillText(
    `状態：${photosynthesis.level}`,
    540,
    225
);

ctx.font = "20px sans-serif";

ctx.fillStyle = "#666";

ctx.fillText(
    `☀ 日射量：${photosynthesis.detail.radiation}`,
    560,
    250
);

ctx.fillText(
    `🌡 気温：${photosynthesis.detail.temperature}`,
    560,
    275
);

ctx.fillText(
    `🌿 VPD：${photosynthesis.detail.vpd}`,
    560,
    300
);

//========================
// 植物代謝指数
//========================

ctx.fillStyle = "#2E7D32";
ctx.font = "bold 28px sans-serif";

ctx.fillText(
    `🌱 植物代謝指数 ${metabolism.score}/100`,
    540,
    350
);

ctx.font = "24px sans-serif";

ctx.fillStyle = "#444";

ctx.fillText(
    `状態：${metabolism.level}`,
    540,
    385
);


    const temperature =
        await loadImage("./images/temperature.png");

    const humidity =
        await loadImage("./images/humidity.png");

    const radiation =
        await loadImage("./images/radiation.png");

    const vpd =
    await loadImage("./images/vpd.png");

   ctx.drawImage(temperature, 0, 420, 1000, 300);

   ctx.drawImage(humidity, 0, 740, 1000, 300);

   ctx.drawImage(vpd, 0, 1060, 1000, 300);

   ctx.drawImage(radiation, 0, 1380, 1000, 300);

    fs.writeFileSync(
        "./images/dashboard.png",
        canvas.toBuffer("image/png")
    );

    console.log("dashboard.png 保存完了");
}

module.exports = createDashboard;