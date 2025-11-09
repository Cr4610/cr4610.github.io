// Welcome
const texts = ["Welcome", "Hello"];
let index = 0;

const rotatingText = document.querySelector(".rotating-text");

setInterval(() => {
  // 先淡出
  rotatingText.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % texts.length;
    rotatingText.textContent = texts[index];
    rotatingText.style.opacity = 1; // 再淡入
  }, 1000); // 等 1 秒淡出完成再切換文字
}, 5000); // 每 3 秒輪換一次

// LOADING
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  const main = document.getElementById("main-content");

  // 1 秒後淡出 loading
  setTimeout(() => {
    loading.style.opacity = 0;
    setTimeout(() => {
      loading.style.display = "none";
      main.style.display = "block";
      setTimeout(() => main.style.opacity = 1, 100); // 再淡入主內容
    }, 1000); // 等淡出完成再隱藏
  }, 750); // 可調整顯示時間
});