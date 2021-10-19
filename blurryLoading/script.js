const text = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let timer = setInterval(blurring, 30);

function blurring() {
  load++;
  /* text.innerText = load + "%"; */
  text.innerText = `${load}%`;
  text.style.opacity = 1 - load / 100;
  /* 模糊度从30px到0 */
  bg.style.filter = `blur(${30 - (load / 100) * 30}px)`;
  if (load > 99) {
    clearInterval(timer);
  }
}
