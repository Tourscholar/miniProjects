const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  /* 第一个参数为要在元素移除的类名, 并返回false
     如果该类名不存在则会在元素中添加类名, 并返回true
  */
  search.classList.toggle("active");
  input.focus();
});

