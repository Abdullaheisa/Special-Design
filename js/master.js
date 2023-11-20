// Check if color of LocalStorage
let mainColor = localStorage.getItem("color-option");
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
  document.querySelectorAll(".colors-list li").forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.color == mainColor) {
      li.classList.add("active");
    }
  });
}
// Start Setting Box
let setting = document.querySelector(".setting i");
let settingBox = document.querySelector(".setting-box");
setting.onclick = function () {
  this.classList.toggle("fa-spin");
  settingBox.classList.toggle("open");
};
document.addEventListener("click", (e) => {
  if (e.target !== setting && e.target !== settingBox) {
    if (settingBox.classList.contains("open")) {
      setting.classList.toggle("fa-spin");
      settingBox.classList.toggle("open");
    }
  }
});
settingBox.onclick = function (e) {
  e.stopPropagation();
};
// Start Option Box Color
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color-option", e.target.dataset.color);
    colorsLi.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.toggle("active");
  });
});
// End Option Box Color
// End Setting Box

// start toggle menu
let linkButn = document.querySelector(".link-container button");
let tLink = document.querySelector(".link-container .link");
linkButn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("active");
  tLink.classList.toggle("open");
};
document.addEventListener("click", (e) => {
  if (e.target !== linkButn && e.target !== tLink) {
    if (tLink.classList.contains("open")) {
      linkButn.classList.toggle("active");
      tLink.classList.toggle("open");
    }
  }
});
tLink.onclick = function (e) {
  e.stopPropagation();
};
// start Change BackGround
let landingPage = document.querySelector(".landing-page");
// Get Array Image
let images = [
  "bac1.jpg",
  "bac2.jpg",
  "bac3.jpg",
  "bac4.jpg",
  "bac5.jpg",
  "bac6.jpg",
];

setInterval(() => {
  let randomNum = Math.floor(Math.random() * images.length);
  landingPage.style.backgroundImage = `url(image/` + images[randomNum] + `)`;
}, 10000);
