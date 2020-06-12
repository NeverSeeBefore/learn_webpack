import png from "../assets/webpack.png";
import styles from "./css/index.css";
const img = document.createElement("img");
console.log("index");
console.log(png);
img.src = png;
document.body.appendChild(img);
const div1 = document.getElementById("div1");
console.log(styles);
div1.className = styles.c1;
div1.classList.add(styles.c2)