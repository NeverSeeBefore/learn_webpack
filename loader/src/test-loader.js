module.exports = function loader(sourceCode) {
  console.log(sourceCode);
  
  return `
  const style = document.createElement("style");
  style.innerHTML = \`${sourceCode}\`;
  document.head.append(style);
  `;
}