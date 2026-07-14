const { ChartJSNodeCanvas } = require("chartjs-node-canvas");
const fs = require("fs");

const width = 1000;
const height = 500;

const chartJSNodeCanvas = new ChartJSNodeCanvas({
  width,
  height,
  backgroundColour: "white",
});

async function createTemperatureGraph(hours, temperatures) {

  const configuration = {
    type: "line",

    data: {
      labels: hours,

      datasets: [
        {
          label: "気温（℃）",
          data: temperatures,
          borderColor: "red",
          backgroundColor: "rgba(255,0,0,0.2)",
          borderWidth: 3,
          fill: true,
          tension: 0.3,
        },
      ],
    },

    options: {

      responsive: false,

      plugins: {

        title: {
          display: true,
          text: "宇都宮市　今日の気温推移",
          font: {
            size: 22,
          },
        },

        legend: {
          display: true,
        },

      },

      scales: {

        y: {
          title: {
            display: true,
            text: "気温（℃）",
          },
        },

        x: {
          title: {
            display: true,
            text: "時間",
          },
        },

      },

    },
  };

  const image = await chartJSNodeCanvas.renderToBuffer(configuration);

  fs.writeFileSync("./images/temperature.png", image);

  console.log("気温グラフを保存しました");
}

module.exports = createTemperatureGraph;