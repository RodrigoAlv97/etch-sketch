const grid = document.querySelector("#grid-container");
const toolContainer = document.querySelector("#tools");
const colorPicker = document.querySelector("#color-picker");
const scaleRange = document.querySelector("#scale-range");
const pencil = document.querySelector("#pencil");
const eraser = document.querySelector("#eraser");
const rainbow = document.querySelector("#rainbow");
const clear = document.querySelector("#clear");
const showScale = document.querySelector("#show-scale");
const showColor = document.querySelector("#color");

let scale = 16;
let color = "#000";
let activeTool = "pencil";
showScale.textContent = `${scale} x ${scale}`;
showColor.style.backgroundColor = color;

const frame = (scale) => {
  grid.style.gridTemplateColumns = `repeat(${scale}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${scale}, 1fr)`;

  for (let i = 0; i < scale * scale; i++) {
    const gridItem = document.createElement("div");
    gridItem.addEventListener("mouseover", draw);
    grid.appendChild(gridItem);
    gridItem.classList.add("grid-item");
  }
};

const draw = (e) => {
  switch (activeTool) {
    case "pencil":
      e.target.style.backgroundColor = color;
      break;

    case "eraser":
      e.target.style.backgroundColor = "#fff";
      break;

    case "rainbow":
      const randomRed = Math.floor(Math.random() * 256);
      const randomGreen = Math.floor(Math.random() * 256);
      const randomBlue = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
      break;
  }
};

const tools = [pencil, eraser, rainbow];
tools.forEach((tool) => {
  tool.addEventListener("click", () => {
    tools.forEach((e) => {
      e.classList.remove("active");
    });
    tool.classList.add("active");
  });
});

pencil.addEventListener("click", () => {
  activeTool = "pencil";
});

eraser.addEventListener("click", () => {
  activeTool = "eraser";
});

rainbow.addEventListener("click", () => {
  activeTool = "rainbow";
});

clear.addEventListener("click", () => {
  setScale(scale);
});

colorPicker.onchange = (e) => {
  pickColor(e.target.value);
  showColor.style.backgroundColor = color;
};

const pickColor = (newColor) => {
  color = newColor;
};

scaleRange.onchange = (e) => {
  pickScale(e.target.value);
  sc.textContent = `${e.target.value}  x ${e.target.value}`;
};

const pickScale = (newScale) => {
  scale = newScale;
  setScale(scale);
};

const setScale = (scale) => {
  grid.textContent = "";
  frame(scale);
};

window.onload = () => {
  setScale(scale);
};
