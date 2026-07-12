const cron = require("node-cron");
const { exec } = require("child_process");

console.log("天気通知スケジューラーを開始しました。");

cron.schedule("0 6 * * *", () => {
  console.log("6:00になりました。天気通知を送信します。");

  exec("node index.js", (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }

    console.log(stdout);

    if (stderr) {
      console.error(stderr);
    }
  });
});