import styles from "./css/source.css";
import a from "./css/a.css";
// import styles from "./css/source.postcss";
console.log(styles);
const div = document.createElement('div');
div.className = styles.main;
document.body.appendChild(div);