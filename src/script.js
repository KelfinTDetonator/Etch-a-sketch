const rectangles = document.querySelector(".rectangles");
const root = document.querySelector(":root");
let totalRectangles;

// slider
const slider = document.getElementById("rangeSize");
const output = document.getElementById("output");

slider.addEventListener("input", function () {
  output.textContent = this.value;
});
// when there is changes in the input element
slider.addEventListener("change", function () {
  const divs = document.querySelectorAll(".col");
  divs.forEach((div) => { // if there are divs with .col -> remove all elements before the element got appended to the div
    if (div) { div.remove(); } // reset div
  });
  totalRectangles = this.value; // each time there is change in slider, totalRectangles got re-assign
  root.style.setProperty("--grid", `${totalRectangles}`); // set the value to the css var
  for (let index = 0; index < totalRectangles; index++) { // 2D looping since there are rows and columns
    const div = document.createElement("div");
    div.classList.toggle("col");
    rectangles.append(div); // while looping, append div element (row) to the rectangles div container
    for (let j = 0; j < totalRectangles; j++) {
      const div2 = document.createElement("div");
      div2.classList.toggle("col");
      rectangles.append(div2); // while looping, append div element (column) to the rectangles div container
    }
  }
});
