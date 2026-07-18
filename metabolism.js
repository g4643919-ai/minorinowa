function createMetabolism(weather) {

    let score = 50;

    // 気温
    if (weather.max >= 24 && weather.max <= 30) {
        score += 20;
    } else if (weather.max > 35) {
        score -= 20;
    }

    // 湿度
    const humidity =
        weather.humidity.reduce((a, b) => a + b) /
        weather.humidity.length;

    if (humidity >= 60 && humidity <= 80) {
        score += 15;
    }

    // 日射量
    const radiation = Math.max(...weather.radiation);

    if (radiation >= 600) {
        score += 15;
    }

    if (score > 100) score = 100;
    if (score < 0) score = 0;

    let level = "";

    if (score >= 80)
        level = "非常に活発";

    else if (score >= 60)
        level = "活発";

    else if (score >= 40)
        level = "普通";

    else
        level = "低下";

    return {
        score,
        level
    };

}

module.exports = createMetabolism;