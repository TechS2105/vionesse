let headerSection = document.querySelector("header");
let headerTextZooming = document.querySelector("header .box2 h1");
let allHeaderBox = document.querySelectorAll(".box");
let allHeaderBoxIcon = document.querySelectorAll(".box i");
let thirdBoxIcons = document.querySelectorAll(".box3 ul li i");
let thirdBoxIcon = document.querySelector(".box3 ul li");
let sideMenuCloseIcon = document.querySelector(".sidemenuicon i");
let mainSideMenuSection = document.querySelector(".sidemenusection");
let mainSideMenuInnerSection = document.querySelector(
  ".sidemenusection .sidemenu"
);

let sideMenuContent =
  document.querySelector(".sidemenucontent").firstElementChild;
let addListClass = sideMenuContent.classList.add("sideMenuText");
let selectAllMenus = document.querySelectorAll(".sideMenuText li");
let subMenuIcons = document.querySelectorAll(".sidemenusocialicon ul li");
let mobileMenuCloseIcon = document.querySelector(".mobilesubmenuimage i");
let mobileViewMenu = document.querySelector(".mobileviewsubemenu");
let mobileMenuContent = document.querySelectorAll(
  ".mobilesubmenu .mobilesubmenucontent ul li"
);
let mobileHeaderMenu = document.querySelectorAll(".mobilemenu ul li i");

mobileViewMenu.style.transform = "translateX(-2000px)";
mobileViewMenu.style.position = "fixed";
mobileViewMenu.style.transition = "all 1s ease";

for (let mobileContents of mobileMenuContent) {
  mobileContents.style.transform = "translateX(-2000px)";
  mobileContents.style.opacity = "0";
  mobileContents.style.filter = "blur(10px)";
}

for (let allSideMenus of selectAllMenus) {
  allSideMenus.style.transform = "translateX(-500px)";
  allSideMenus.style.filter = "blur(10px)";
  allSideMenus.style.opacity = "0";
}

for (let sideMenuIcons of subMenuIcons) {
  sideMenuIcons.style.opacity = "0";
  sideMenuIcons.style.filter = "blur(10px)";
}

sideMenuCloseIcon.style.opacity = "0";
sideMenuCloseIcon.style.filter = "blur(10px)";

allHeaderBox.forEach((box) => {
  box.style.transition = "all 0.7s ease";
});

allHeaderBoxIcon.forEach((icon) => {
  icon.style.transition = "all 0.7s ease";
});

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 0) {
//     headerSection.style.backgroundColor = "#ffffff";
//     headerSection.style.position = "sticky";
//     headerSection.style.transition = "all 0.7s ease";

//     headerTextZooming.style.position = "absolute";
//     headerTextZooming.style.top = "10px";
//     headerTextZooming.style.fontSize = "30px";
//     headerTextZooming.style.letterSpacing = "5px";
//     headerTextZooming.style.transition = "all 0.7s ease";
//     headerTextZooming.style.color = "#1a1a1a";
//     headerTextZooming.style.textShadow = "none";
//     allHeaderBox[0].style.opacity = "1";
//     allHeaderBoxIcon[0].style.opacity = "1";
//     allHeaderBox[0].style.color = "#1a1a1a";
//     allHeaderBoxIcon[0].style.color = "#1a1a1a";
//     allHeaderBox[2].style.color = "#1a1a1a";
//     thirdBoxIcon.style.color = "#1a1a1a";

//     for (boxIcon of thirdBoxIcons) {
//       boxIcon.style.color = "#1a1a1a";
//     }
//   } else {
//     headerSection.style.backgroundColor = "transparent";
//     headerSection.style.position = "sticky";

//     headerTextZooming.style.position = "absolute";
//     headerTextZooming.style.top = "300%";
//     headerTextZooming.style.fontSize = "200px";
//     headerTextZooming.style.color = "#ffffff";
//     headerTextZooming.style.letterSpacing = "30px";
//     // headerTextZooming.style.textShadow = "2px 2px 5px #000";
//     allHeaderBox[0].style.opacity = "0";
//     allHeaderBoxIcon[0].style.opacity = "0";
//     allHeaderBox[2].style.color = "#ffffff";
//     thirdBoxIcon.style.color = "#ffffff";

//     for (boxIcon of thirdBoxIcons) {
//       boxIcon.style.color = "#ffffff";
//     }
//   }
// });

sideMenuCloseIcon.addEventListener("click", () => {
  mainSideMenuSection.style.backdropFilter = "blur(0px)";
  mainSideMenuSection.style.backgroundColor = "transparent";
  // mainSideMenuSection.style.transform = "translateX(2000px)";
  mainSideMenuSection.style.position = "fixed";
  mainSideMenuSection.style.zIndex = "-9999999";
  mainSideMenuSection.style.transition = "all 1s ease 1s";

  mainSideMenuInnerSection.style.transform = "translateX(2000px)";
  mainSideMenuInnerSection.style.transition = "all 1.5s ease 0.7s";

  sideMenuCloseIcon.style.opacity = "0";
  sideMenuCloseIcon.style.filter = "blur(10px)";
  sideMenuCloseIcon.style.transition = "all 0.7s ease";

  selectAllMenus[0].style.transform = "translateX(-500px)";
  selectAllMenus[0].style.transition = "all 0.7s ease 0.4s";
  selectAllMenus[0].style.opacity = "0";
  selectAllMenus[0].style.filter = "blur(10px)";

  selectAllMenus[1].style.transform = "translateX(-500px)";
  selectAllMenus[1].style.transition = "all 0.7s ease 0.3s";
  selectAllMenus[1].style.opacity = "0";
  selectAllMenus[1].style.filter = "blur(10px)";

  selectAllMenus[2].style.transform = "translateX(-500px)";
  selectAllMenus[2].style.transition = "all 0.7s ease 0.2s";
  selectAllMenus[2].style.opacity = "0";
  selectAllMenus[2].style.filter = "blur(10px)";

  selectAllMenus[3].style.transform = "translateX(-500px)";
  selectAllMenus[3].style.transition = "all 0.7s ease 0.1s";
  selectAllMenus[3].style.opacity = "0";
  selectAllMenus[3].style.filter = "blur(10px)";

  selectAllMenus[4].style.transform = "translateX(-500px)";
  selectAllMenus[4].style.transition = "all 0.7s ease";
  selectAllMenus[4].style.opacity = "0";
  selectAllMenus[4].style.filter = "blur(10px)";

  subMenuIcons[0].style.opacity = "0";
  subMenuIcons[0].style.transition = "all 0.7s ease 0.4s";
  subMenuIcons[0].style.filter = "blur(10px)";

  subMenuIcons[1].style.opacity = "0";
  subMenuIcons[1].style.transition = "all 0.7s ease 0.3s";
  subMenuIcons[1].style.filter = "blur(10px)";

  subMenuIcons[2].style.opacity = "0";
  subMenuIcons[2].style.transition = "all 0.7s ease 0.2s";
  subMenuIcons[2].style.filter = "blur(10px)";

  subMenuIcons[3].style.opacity = "0";
  subMenuIcons[3].style.filter = "blur(10px)";
  subMenuIcons[3].style.transition = "all 0.7s ease 0.1s";

  subMenuIcons[4].style.opacity = "0";
  subMenuIcons[4].style.filter = "blur(10px)";
  subMenuIcons[4].style.transition = "all 0.7s ease";
});

thirdBoxIcons[4].addEventListener("click", () => {
  // mainSideMenuSection.style.transform = "translateX(0px)";
  mainSideMenuSection.style.position = "fixed";
  mainSideMenuSection.style.zIndex = "9999999999";
  mainSideMenuSection.style.backdropFilter = "blur(10px)";
  mainSideMenuSection.style.transition = "all 1s ease";
  mainSideMenuSection.style.backgroundColor = "transparent";

  mainSideMenuInnerSection.style.transform = "translateX(0px)";
  mainSideMenuInnerSection.style.transition = "all 1s ease";

  sideMenuCloseIcon.style.opacity = "1";
  sideMenuCloseIcon.style.filter = "blur(0px)";
  sideMenuCloseIcon.style.transition = "all 0.7s ease 1s";

  selectAllMenus[0].style.transform = "translateX(0px)";
  selectAllMenus[0].style.transition = "all 0.7s ease 0.5s";
  selectAllMenus[0].style.filter = "blur(0px)";
  selectAllMenus[0].style.opacity = "1";

  selectAllMenus[1].style.transform = "translateX(0px)";
  selectAllMenus[1].style.transition = "all 0.7s ease 0.6s";
  selectAllMenus[1].style.filter = "blur(0px)";
  selectAllMenus[1].style.opacity = "1";

  selectAllMenus[2].style.transform = "translateX(0px)";
  selectAllMenus[2].style.transition = "all 0.7s ease 0.7s";
  selectAllMenus[2].style.filter = "blur(0px)";
  selectAllMenus[2].style.opacity = "1";

  selectAllMenus[3].style.transform = "translateX(0px)";
  selectAllMenus[3].style.transition = "all 0.7s ease 0.8s";
  selectAllMenus[3].style.filter = "blur(0px)";
  selectAllMenus[3].style.opacity = "1";

  selectAllMenus[4].style.transform = "translateX(0px)";
  selectAllMenus[4].style.transition = "all 0.7s ease 0.9s";
  selectAllMenus[4].style.filter = "blur(0px)";
  selectAllMenus[4].style.opacity = "1";

  subMenuIcons[0].style.opacity = "1";
  subMenuIcons[0].style.filter = "blur(0px)";
  subMenuIcons[0].style.transition = "all 0.7s ease 1s";

  subMenuIcons[1].style.filter = "blur(0px)";
  subMenuIcons[1].style.transition = "all 0.7s ease 1.1s";
  subMenuIcons[1].style.opacity = "1";

  subMenuIcons[2].style.opacity = "1";
  subMenuIcons[2].style.transition = "all 0.7s ease 1.2s";
  subMenuIcons[2].style.filter = "blur(0px)";

  subMenuIcons[3].style.opacity = "1";
  subMenuIcons[3].style.transition = "all 0.7s ease 1.3s";
  subMenuIcons[3].style.filter = "blur(0px)";

  subMenuIcons[4].style.opacity = "1";
  subMenuIcons[4].style.transition = "all 0.7s ease 1.4s";
  subMenuIcons[4].style.filter = "blur(0px)";

  mainSideMenuSection.addEventListener("wheel", (e) => {
    e.preventDefault();
  });
});

sideMenuCloseIcon.addEventListener("mouseover", () => {
  sideMenuCloseIcon.style.transform = "rotate(180deg)";
  sideMenuCloseIcon.style.transition = "all 0.7s ease";
  sideMenuCloseIcon.style.borderRadius = "50px";
});

sideMenuCloseIcon.addEventListener("mouseout", () => {
  sideMenuCloseIcon.style.transform = "rotate(0deg)";
  sideMenuCloseIcon.style.transition = "all 0.7s ease";
  sideMenuCloseIcon.style.borderTopLeftRadius = "30px";
  sideMenuCloseIcon.style.borderBottomRightRadius = "30px";
  sideMenuCloseIcon.style.borderTopRightRadius = "0px";
  sideMenuCloseIcon.style.borderBottomLeftRadius = "0px";
});

mobileMenuCloseIcon.addEventListener("click", () => {
  mobileViewMenu.style.transform = "translateX(-2000px)";
  mobileViewMenu.style.transition = "all 1s ease 0.5s";

  mobileMenuContent[0].style.transform = "translateX(-2000px)";
  mobileMenuContent[0].style.transition = "all 0.7s ease 0.5s";
  mobileMenuContent[0].style.opacity = "0";
  mobileMenuContent[0].style.filter = "blur(10px)";

  mobileMenuContent[1].style.transform = "translateX(-2000px)";
  mobileMenuContent[1].style.transition = "all 0.7s ease 0.4s";
  mobileMenuContent[1].style.opacity = "0";
  mobileMenuContent[1].style.filter = "blur(10px)";

  mobileMenuContent[2].style.transform = "translateX(-2000px)";
  mobileMenuContent[2].style.transition = "all 0.7s ease 0.3s";
  mobileMenuContent[2].style.opacity = "0";
  mobileMenuContent[2].style.filter = "blur(10px)";

  mobileMenuContent[3].style.transform = "translateX(-2000px)";
  mobileMenuContent[3].style.transition = "all 0.7s ease 0.3s";
  mobileMenuContent[3].style.opacity = "0";
  mobileMenuContent[3].style.filter = "blur(10px)";

  mobileMenuContent[4].style.transform = "translateX(-2000px)";
  mobileMenuContent[4].style.transition = "all 0.7s ease 0.2s";
  mobileMenuContent[4].style.opacity = "0";
  mobileMenuContent[4].style.filter = "blur(10px)";
});

mobileHeaderMenu[3].addEventListener("click", () => {
  mobileViewMenu.style.transform = "translateX(0px)";

  mobileMenuContent[0].style.transform = "translateX(0px)";
  mobileMenuContent[0].style.transition = "all 0.7s ease 0.7s";
  mobileMenuContent[0].style.opacity = "1";
  mobileMenuContent[0].style.filter = "blur(0px)";

  mobileMenuContent[1].style.transform = "translateX(0px)";
  mobileMenuContent[1].style.transition = "all 0.7s ease 0.8s";
  mobileMenuContent[1].style.opacity = "1";
  mobileMenuContent[1].style.filter = "blur(0px)";

  mobileMenuContent[2].style.transform = "translateX(0px)";
  mobileMenuContent[2].style.transition = "all 0.7s ease 0.9s";
  mobileMenuContent[2].style.opacity = "1";
  mobileMenuContent[2].style.filter = "blur(0px)";

  mobileMenuContent[3].style.transform = "translateX(0px)";
  mobileMenuContent[3].style.transition = "all 0.7s ease 1s";
  mobileMenuContent[3].style.opacity = "1";
  mobileMenuContent[3].style.filter = "blur(0px)";

  mobileMenuContent[4].style.transform = "translateX(0px)";
  mobileMenuContent[4].style.transition = "all 0.7s ease 1.1s";
  mobileMenuContent[4].style.opacity = "1";
  mobileMenuContent[4].style.filter = "blur(0px)";
});
