let color = ["red", "green", "blue"];

function changeColor() {
  let randomColor = Math.floor(Math.random() * color.length);
  document.body.style.backgroundColor = color[randomColor];
}

setInterval(changeColor, 2000);
