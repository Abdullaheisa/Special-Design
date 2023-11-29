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
//Random BackGround Option
let randomBackgroundOption = true;
let backgroundInterval;
// Check if background of LocalStorage
let backgroundLocalItem = localStorage.getItem("background-option");
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === "true") {
    randomBackgroundOption = true;
  } else {
    randomBackgroundOption = false;
  }
  document.querySelectorAll(".background-random span").forEach((span) => {
    span.classList.remove("active");
  });
  if (backgroundLocalItem == "true") {
    document.querySelector(".background-random .yes").classList.add("active");
  } else {
    document.querySelector(".background-random .no").classList.add("active");
  }
}
// Check if imgLogo of LocalStorage

let logo = document.querySelector(".logo img");
let logoChange = localStorage.getItem("imgLogo");
if (logoChange !== null) {
  logo.src = logoChange;
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
    // setItem To local storage
    localStorage.setItem("color-option", e.target.dataset.color);
    colorsLi.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.toggle("active");
  });
});
// End Option Box Color
// Start Change Image Logo
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    if (e.target.dataset.color === "#ed1c24") {
      logo.src = "image/logo-white-red.png";
      localStorage.setItem("imgLogo", "image/logo-white-red.png");
    } else if (e.target.dataset.color === "#03a9f4") {
      logo.src = "image/logo-white-blue.png";
      localStorage.setItem("imgLogo", "image/logo-white-blue.png");
      console.log("yes");
    } else if (e.target.dataset.color === "#e91e63") {
      logo.src = "image/logo-white-2.png";
      localStorage.setItem("imgLogo", "image/logo-white-2.png");

      console.log("yes");
    } else if (e.target.dataset.color === "#4caf50") {
      logo.src = "image/logo-white-green.png";
      localStorage.setItem("imgLogo", "image/logo-white-green.png");

      console.log("yes");
    } else {
      logo.src = "image/logo-white-orange.png";
      localStorage.setItem("imgLogo", "image/logo-white-orange.png");
    }
  });
});

// Start Option Box background random
const backgroundEl = document.querySelectorAll(".background-random span");
backgroundEl.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((span) => {
      span.classList.remove("active");
    });
    e.target.classList.toggle("active");
    if (e.target.dataset.background === "yes") {
      randomBackgroundOption = true;
      backgroundRandomize();
      localStorage.setItem("background-option", true);
    } else {
      randomBackgroundOption = false;
      clearInterval(backgroundInterval);
      backgroundRandomize();
      localStorage.setItem("background-option", false);
    }
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

// Function Background Randomize Imgs

function backgroundRandomize() {
  if (randomBackgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Get Number Random
      let randomNum = Math.floor(Math.random() * images.length);
      // Change Background Image Url
      landingPage.style.backgroundImage =
        `url(image/` + images[randomNum] + `)`;
    }, 10000);
  }
}
backgroundRandomize();
