const rectangles = document.querySelector(".rectangles");
const root = document.querySelector(":root");
let totalRectangles;

// slider
const slider = document.getElementById("rangeSize");
const output = document.querySelectorAll(".output");

slider.value = 24; // base value

output[0].textContent = slider.value;
output[1].textContent = slider.value;

slider.addEventListener("input", function () {
  output[0].textContent = this.value;
  output[1].textContent = this.value;
});

function changePixels(pixels) {
  root.style.setProperty("--grid", `${pixels}`); // set the value to the css var
  for (let index = 0; index < pixels; index++) { // 2D looping since there are rows and columns
    const div = document.createElement("div");
    div.classList.toggle("col");
    rectangles.append(div); // while looping, append div element (row) to the rectangles div container
    for (let j = 0; j < pixels; j++) {
      const div2 = document.createElement("div");
      div2.classList.toggle("col");
      rectangles.append(div2); // while looping, append div element (column) to the rectangles div container
    }
  }
}

// when there is change in the input element
function changePixelsFromInput() {
  const divs = document.querySelectorAll(".col");
  divs.forEach((div) => { // if there are divs with .col -> remove all elements before the element got appended to the div
    if (div) { div.remove(); } // reset div
  });
  totalRectangles = this.value; // each time there is change in slider, totalRectangles got re-assign
  changePixels(totalRectangles);
}

changePixels(slider.value); // default pixels
slider.addEventListener("change", function () {
  changePixelsFromInput.call(this); // bring the this which is slider into changePixelsFromInput function
  penMode();
});

window.addEventListener("DOMContentLoaded", () => {
  penMode();
});

function penMode() {
  let isActive = false;
  const divs = document.querySelectorAll(".col");

  function hoverToChangeColor() {
    this.style.backgroundColor = "black";
  }
  function activatePen() {
    if (isActive === false) {
      divs.forEach((div) => {
        div.addEventListener("mouseover", hoverToChangeColor);
      });
      isActive = true;
    } else {
      divs.forEach((div) => {
        div.removeEventListener("mouseover", hoverToChangeColor);
      });
      isActive = false;
    }
  }

  window.addEventListener("click", activatePen);
}
