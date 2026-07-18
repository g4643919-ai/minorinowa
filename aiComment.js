function createComment(weather) {

  const comments = [];

  // 気温
  if (weather.max >= 35) {
    comments.push("🔥 最高気温が35℃以上です。高温障害に注意し、早めの換気をおすすめします。");
  } else if (weather.max >= 30) {
    comments.push("🌡 気温が高くなる予報です。ハウス内の温度管理に注意しましょう。");
  } else {
    comments.push("🌤 気温は比較的安定した予報です。");
  }

  // 湿度
  const avgHumidity =
    weather.humidity.reduce((a, b) => a + b, 0) / weather.humidity.length;

  if (avgHumidity >= 80) {
    comments.push("💧 湿度が高めです。病害予防のため換気を意識しましょう。");
  } else if (avgHumidity <= 50) {
    comments.push("💨 湿度が低めです。乾燥によるストレスに注意してください。");
  }

  // 日射量
  const maxRadiation = Math.max(...weather.radiation);

  if (maxRadiation >= 700) {
    comments.push("☀ 日射量が非常に多い予報です。葉焼けや乾燥に注意しましょう。");
  }

  // 降水確率
  const maxRain = Math.max(...weather.rain);

  if (maxRain >= 70) {
    comments.push("☔ 雨の可能性が高い予報です。露地栽培では排水対策を確認しましょう。");
  }

  return comments.join("\n");
}

module.exports = createComment;