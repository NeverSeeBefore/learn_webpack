require("./index.css");
console.log("index");
var src = require("../assets/webpack.png");
var img = document.createElement("img");
img.src = src;
document.body.append(img);