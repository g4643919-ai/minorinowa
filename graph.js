const { ChartJSNodeCanvas } = require("chartjs-node-canvas");
const fs = require("fs");

const width = 1000;
const height = 500;

const chartJSNodeCanvas = new ChartJSNodeCanvas({
    width,
    height,
    backgroundColour: "white",
});

async function createGraph(title, yTitle, label, data, color, fileName, hours) {

    const configuration = {
        type: "line",

        data: {
            labels: hours,

            datasets: [{
                label: label,
                data: data,
                borderColor: color,
                backgroundColor: color + "33",
                borderWidth: 3,
                fill: true,
                tension: 0.3,
            }]
        },

        options: {

            responsive: false,

            plugins: {

                title: {
                    display: true,
                    text: title,
                    font: {
                        size: 22
                    }
                }

            },

            scales: {

                x: {
                    title: {
                        display: true,
                        text: "時間"
                    }
                },

                y: {
                    title: {
                        display: true,
                        text: yTitle
                    }
                }

            }

        }

    };

    const image = await chartJSNodeCanvas.renderToBuffer(configuration);

    fs.writeFileSync("./images/" + fileName, image);

    console.log(fileName + " 保存完了");
}

module.exports = createGraph;