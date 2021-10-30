const textarea = document.getElementById("textarea");
const tagsEl = document.getElementById("tags");

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    e.target.value = "";
    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(", ")
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "");
  tagsEl.innerHTML = "";
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const tags = document.querySelectorAll(".tag");
  const interval = setInterval(() => {
    const randomTag = pickRandomSelect();
    if (randomTag !== undefined) {
      highlightTag(randomTag);
      setTimeout(() => {
        unhighlight(randomTag);
      }, 100);
    }
  }, 100);
  const times = tags.length;
  setTimeout(() => {
    clearInterval(interval);
  }, times * 1000);
}

function pickRandomSelect() {
  const tags = document.querySelectorAll(".tag");
  return tags[parseInt(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unhighlight(tag) {
  tag.classList.remove("highlight");
}
