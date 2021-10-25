const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    stop();
    document.getElementById(btn.innerText).play();
  });
});

function stop() {
  btns.forEach((btn) => {
    /* 获取对应的audio对象, 并用pause()暂停播放 */
    const audio = document.getElementById(btn.innerText);
    audio.pause();
    /* 将重新点击时的播放时间重置 */
    audio.currentTime = 0;
  });
}
