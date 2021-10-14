const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currenActive = 1;

next.addEventListener("click", () => {
  currenActive++;
  update();
});

prev.addEventListener("click", () => {
  currenActive--;
  update();
});

function update() {
  circles.forEach((item, index) => {
    if (index < currenActive) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  progress.style.width =
    ((currenActive - 1) / (circles.length - 1)) * 100 + "%";
  if (currenActive === 1) {
    prev.disabled = true;
  } else if (currenActive === 4) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
