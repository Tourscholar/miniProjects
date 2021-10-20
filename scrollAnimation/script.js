const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", () => {
  /* innerHeight属性等于页面底部到顶部的高度 */
  const triggleBottom = window.innerHeight * 0.8;
  boxes.forEach((box) => {
    /* 盒子模型左上角到页面顶部的距离 */
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggleBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
});
