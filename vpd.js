function calculateVPD(temperature, humidity) {

    const vpd = [];

    for (let i = 0; i < temperature.length; i++) {

        const t = temperature[i];
        const rh = humidity[i];

        // 飽和水蒸気圧(kPa)
        const es = 0.6108 * Math.exp((17.27 * t) / (t + 237.3));

        // 実際の水蒸気圧
        const ea = es * (rh / 100);

        // VPD
        const value = Number((es - ea).toFixed(2));

        vpd.push(value);
    }

    return vpd;
}

module.exports = calculateVPD;