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
// Check if imgLogo of LocalStorage

let heroLan = document.querySelector(".hero-animation img");
let heroChange = localStorage.getItem("heroLan");
if (heroChange !== null) {
  heroLan.src = heroChange;
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
    } else if (e.target.dataset.color === "#e91e63") {
      logo.src = "image/logo-white-2.png";
      localStorage.setItem("imgLogo", "image/logo-white-2.png");
    } else if (e.target.dataset.color === "#4caf50") {
      logo.src = "image/logo-white-green.png";
      localStorage.setItem("imgLogo", "image/logo-white-green.png");
    } else {
      logo.src = "image/logo-white-orange.png";
      localStorage.setItem("imgLogo", "image/logo-white-orange.png");
    }
  });
});
// Start Change Image hero
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    if (e.target.dataset.color === "#ed1c24") {
      heroLan.src = "image/lan.png";
      localStorage.setItem("heroLan", "image/lan.png");
    } else if (e.target.dataset.color === "#03a9f4") {
      heroLan.src = "image/lan-blue.png";
      localStorage.setItem("heroLan", "image/lan-orange.png");
    } else if (e.target.dataset.color === "#e91e63") {
      heroLan.src = "image/lan-2.png";
      localStorage.setItem("heroLan", "image/lan-2.png");
    } else if (e.target.dataset.color === "#4caf50") {
      heroLan.src = "image/lan-green.png";
      localStorage.setItem("heroLan", "image/lan-green.png");
    } else {
      heroLan.src = "image/lan-orange.png";
      localStorage.setItem("heroLan", "image/lan-orange.png");
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
let images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "07.jpg"];

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
// Select skills Selector
let ourSkills = document.querySelector(".our-skills");
let allSkills = document.querySelectorAll(".our-skills .skill-progress span");
let timeline = document.querySelector(".timeline");
let timelineLeft = document.querySelectorAll(".timeline .left");
let timelineRight = document.querySelectorAll(".timeline .right");
// for (let i = 0; i <= timelineLeft.length; i++) {
//   console.log(timelineLeft[i].offsetTop);
// }
window.onscroll = function () {
  if (window.scrollY >= ourSkills.offsetTop - 100) {
    allSkills.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
  // timelineLeft.forEach((left) => {
  //   if (window.scrollY >= left.offsetTop) {
  //     left.style.opacity = 1;
  //   }
  // });
  for (let i = 0; i < timelineLeft.length; i++) {
    if (
      window.scrollY >=
      timeline.offsetTop + timelineLeft[i].offsetTop - 300
    ) {
      timelineLeft[i].style.opacity = 1;
    }
  }
  for (let i = 0; i < timelineRight.length; i++) {
    if (
      window.scrollY >=
      timeline.offsetTop + timelineRight[i].offsetTop - 300
    ) {
      timelineRight[i].style.opacity = 1;
    }
  }
  // timelineRight.forEach((right) => {
  //   if (window.scrollY >= right.offsetTop) {
  //     right.style.opacity = 1;
  //   }
  // });
};
let allImageGa = document.querySelectorAll(".image-box img");
allImageGa.forEach((img) => {
  img.onclick = () => {
    // create Popup Overlay
    let popupOverlay = document.createElement("div");
    // Add ClassName To Popup Overlay
    popupOverlay.className = "popup-overlay";
    // Append Popup Overlay to body
    document.body.appendChild(popupOverlay);
    // Create Popup Box
    let popupBox = document.createElement("div");
    // Add Class Name To Popup Box
    popupBox.className = "popup-box open";
    if (img.alt !== null) {
      // Create Heading Alt
      let headingImg = document.createElement("h2");
      headingImg.className = "heading-img";
      let textHeadingImg = document.createTextNode(img.alt);
      headingImg.appendChild(textHeadingImg);
      popupBox.appendChild(headingImg);
    }
    // Create Img
    let imgPopup = document.createElement("img");
    imgPopup.src = img.src;
    // Append The Img popup to Popup Box
    popupBox.appendChild(imgPopup);
    // Append The Popup Box to body
    document.body.appendChild(popupBox);
    // Create Close Button
    let closeButton = document.createElement("div");
    closeButton.className = "close-button";
    // create Text Close Button
    let txtCloseButton = document.createTextNode("X");
    // Append Text to close Button
    closeButton.appendChild(txtCloseButton);
    // Append close Button to Popup Box
    popupBox.appendChild(closeButton);
  };
});
document.addEventListener("click", (e) => {
  if (e.target.className == "close-button") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});
