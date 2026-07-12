require("dotenv").config();
const { messagingApi } = require("@line/bot-sdk");

const client = new messagingApi.MessagingApiClient({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
});

async function sendLineMessage(message) {
  try {
    await client.broadcast({
      messages: [
        {
          type: "text",
          text: message,
        },
      ],
    });

    console.log("LINE送信成功！");
  } catch (err) {
    console.error("LINE送信失敗");
    console.error(err);
  }
}

module.exports = sendLineMessage;
