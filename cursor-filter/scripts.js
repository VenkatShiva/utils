const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const getChar = (char) => {
  const div = document.createElement("div");
  div.innerHTML = `<span>${char}</span>`;
  div.classList.add("letter");
  return div;
};

window.addEventListener("load", () => {
  const container = document.getElementById("container");
  const layer = document.getElementById("layer");
  const letters = alphabet.map((char) => getChar(char));
  container.append(...letters);
  const mouse = document.getElementById("mouse");
  const mousePos = mouse.getBoundingClientRect();
  const { top, left, width, height } = layer.getBoundingClientRect();
  const handleMove = (event) => {
    const { pageX, pageY } = event;
    let absTop = pageY - top - mousePos.height / 2;
    let absLeft = pageX - left - mousePos.width / 2;
    if (absTop < 0) absTop = 0;
    if (absLeft < 0) absLeft = 0;
    if (absTop > height - mousePos.height) absTop = height - mousePos.height;
    if (absLeft > width - mousePos.width) absLeft = width - mousePos.width;
    mouse.style.top = absTop + "px";
    mouse.style.left = absLeft + "px";
  };

  layer.addEventListener("mousemove", handleMove);
});
