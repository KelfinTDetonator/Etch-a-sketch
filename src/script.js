const rectangles = document.querySelector(".rectangles");
const root = document.querySelector(":root");

let totalRectangles;

// slider
const slider = document.getElementById("rangeSize");
const output = document.getElementById("output");
output.textContent = slider.value;
slider.addEventListener("input", function () {
  output.textContent = this.value;
});
slider.addEventListener("change", function () {
  const divs = document.querySelectorAll(".col");
  divs.forEach((div) => { // kalo udah ada div dengan class col -> remove semua elemen sebelum nanti di append lagi
    if (div) { div.remove(); } // reset div
  });
  totalRectangles = this.value; // setiap ada perubahan pada slider, totalRectangles di-assign ulang
  root.style.setProperty("--grid", `${totalRectangles}`); // buat set value ke variable css
  for (let index = 0; index < totalRectangles; index++) {
    const div = document.createElement("div");
    div.classList.toggle("col");
    rectangles.append(div);
    for (let j = 0; j < totalRectangles; j++) {
      const div2 = document.createElement("div");
      div2.classList.toggle("col");
      rectangles.append(div2);
    }
  }
});
