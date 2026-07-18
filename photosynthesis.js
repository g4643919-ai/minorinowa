function createPhotosynthesis(weather, vpd) {

    // 日射量（40点）
    const radiationAvg =
        weather.radiation.reduce((a, b) => a + b, 0) /
        weather.radiation.length;

    let radiationScore = Math.min(
        radiationAvg / 800 * 40,
        40
    );

    // 気温（25点）
    const avgTemp =
        weather.temperature.reduce((a, b) => a + b, 0) /
        weather.temperature.length;

    let tempScore = 0;

    if (avgTemp >= 20 && avgTemp <= 28)
        tempScore = 25;
    else if (avgTemp >= 15 && avgTemp <= 32)
        tempScore = 18;
    else
        tempScore = 10;

    // VPD（25点）
    const avgVPD =
        vpd.reduce((a, b) => a + b, 0) /
        vpd.length;

    let vpdScore = 0;

    if (avgVPD >= 0.8 && avgVPD <= 1.2)
        vpdScore = 25;
    else if (avgVPD >= 0.5 && avgVPD <= 1.5)
        vpdScore = 18;
    else
        vpdScore = 10;

    // 湿度（10点）
    const humidityAvg =
        weather.humidity.reduce((a, b) => a + b, 0) /
        weather.humidity.length;

    let humidityScore = 0;

    if (humidityAvg >= 60 && humidityAvg <= 80)
        humidityScore = 10;
    else
        humidityScore = 6;

    const score = Math.round(
        radiationScore +
        tempScore +
        vpdScore +
        humidityScore
    );

    let level = "普通";

    if (score >= 90)
        level = "非常に良好";
    else if (score >= 75)
        level = "良好";
    else if (score >= 60)
        level = "普通";
    else
        level = "低下";

    let radiationStatus = "普通";
if (radiationScore >= 35)
    radiationStatus = "良好";
else if (radiationScore < 20)
    radiationStatus = "不足";

let tempStatus = "適正";
if (tempScore <= 10)
    tempStatus = "注意";

let vpdStatus = "適正";
if (vpdScore <= 10)
    vpdStatus = "注意";

return {
    score,
    level,

    detail: {
        radiation: radiationStatus,
        temperature: tempStatus,
        vpd: vpdStatus
    }
};
}

module.exports = createPhotosynthesis;