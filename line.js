require("dotenv").config();
const { messagingApi } = require("@line/bot-sdk");

const client = new messagingApi.MessagingApiClient({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
});

async function sendLineMessage(message) {

  try {

    // ① ダッシュボード画像送信
    await client.broadcast({
      messages: [
        {
          type: "image",
          originalContentUrl:
            "https://g4643919-ai.github.io/minorinowa/images/dashboard.png",
          previewImageUrl:
            "https://g4643919-ai.github.io/minorinowa/images/dashboard.png"
        }
      ]
    });

    // 少し待つ
    await new Promise(resolve => setTimeout(resolve, 1000));

    // ② テキスト送信
    await client.broadcast({
      messages: [
        {
          type: "text",
          text: message
        }
      ]
    });

    console.log("画像＋LINE送信成功！");

  } catch (err) {

    console.error(err);

  }

}

module.exports = sendLineMessage;
module.exports = sendLineMessage;
