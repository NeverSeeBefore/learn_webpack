const png = require("../assets/webpack.png").default;
const styles = require("./css/index.less");
const cssStyles = require("./css/index.css");
const img = document.createElement("img");
console.log("index");
console.log(png);
img.src = png;
document.body.appendChild(img);