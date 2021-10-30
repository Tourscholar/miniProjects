const textarea = document.getElementById("textarea");
const tagsEl = document.getElementById("tags");

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    /* 按下回车后将输入框清空 */
    e.target.value = "";
    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    /* split函数将输入的字符串分割为字符数组 */
    .split(", ")
    /* trim函数清除数组头尾的空格 */
    .map((tag) => tag.trim())
    /* filter函数当数组不为空时返回数组内容 */
    .filter((tag) => tag !== "");
  /* 先清空所有sapn标签 */
  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    /* 创建span标签 */
    const tagEl = document.createElement("span");
    /* 给span标签加上tag类名 */
    tagEl.classList.add("tag");
    /* 将文本传入span标签 */
    tagEl.innerText = tag;
    /* 将span标签挂载到tags下 */
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const interval = setInterval(() => {
    const randomTag = pickRandomSelect();
    if (randomTag !== undefined) {
      /* 设置高亮 */
      highlightTag(randomTag);
      setTimeout(() => {
        /* 取消高亮 */
        unhighlight(randomTag);
      }, 100);
    }
  }, 100);
  /* 设置随机次数 */
  const tags = document.querySelectorAll(".tag");
  const times = tags.length * 10;
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomSelect();
      if (randomTag !== undefined) {
        highlightTag(randomTag);
      }
    }, 100);
  }, times * 100);
}

function pickRandomSelect() {
  const tags = document.querySelectorAll(".tag");
  /* 返回[0, span标签长度) */
  return tags[parseInt(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unhighlight(tag) {
  tag.classList.remove("highlight");
}
