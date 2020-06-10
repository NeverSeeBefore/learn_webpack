console.log("index");
const png = require("../assets/webpack.png").default;
const img = document.createElement("img");
console.log(png);
img.src = png;
document.body.appendChild(img);