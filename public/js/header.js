let navMenu = document.querySelector(".rbox2 i");
let mobileNavMenu = document.querySelector(".mobileheadercontainer");
let mobileNavClose = document.querySelector(".mobileheader i");
let mobileSubmenuLinks = document.querySelectorAll(".mobilesubmenu nav ul li");
let mobileHeaderImage = document.querySelector(".mobileheader a img");
let mobileSocialLinks = document.querySelectorAll(
  ".mobileheader .mobilesubmenu .sociallinks a"
);
let headerScrollAnimation = document.querySelector(".headercontainer");
let pcNavMenu = document.querySelector(".pcheadersection");
let pcSubNavMenu = document.querySelector(".pcheadernav");
let pcSubNavMenuCloseIcon = document.querySelector(".pcheadernav i");
let mainHeadeMenuIcon = document.querySelector(".box1 i");
let mainHeadeMenuText = document.querySelector(".box1 p");
let pcSubNavAllMenus = document.querySelectorAll(".pcheadernav nav ul li");

for (let subNavMenu of pcSubNavAllMenus) {
    
    subNavMenu.style.transform = "translateX(-1000px)";
    subNavMenu.style.opacity = "0";
    subNavMenu.style.filter = "blur(10px)";

}

mobileSubmenuLinks.forEach((link) => {

    link.style.transform = "translateX(-1000px)";
    link.style.filter = "blur(10px)";

});

if ($(window).innerWidth() < 1000 || $(window).innerWidth() > 1000) {
    
    $(mobileNavMenu).css({

        transform: "translateX(-2000px)"

    });

}

$(mobileHeaderImage).css({

    transform: "scale(0)",
    opacity: "0"

});

mobileSocialLinks.forEach((sociallink) => {

    sociallink.style.transform = "scale(0)";
    sociallink.style.opacity = "0";

});

pcNavMenu.style.transform = "translateY(-2000px)";
pcSubNavMenu.style.transform = "translateY(-2000px)";
pcSubNavMenu.style.opacity = "0";
pcSubNavMenuCloseIcon.style.transform = "translateX(500px)";

mainHeadeMenuIcon.addEventListener("click", () => {

    pcNavMenu.style.transform = "translateY(0px)";
    pcNavMenu.style.transition = "all 0.7s ease";

    pcSubNavMenu.style.transform = "translateY(0px)";
    pcSubNavMenu.style.opacity = "1";
    pcSubNavMenu.style.transition = "all 0.7s ease 0.5s";

    pcSubNavMenuCloseIcon.style.transform = "translateX(0px)";
    pcSubNavMenuCloseIcon.style.transition = "all 0.7s ease 1.5s";

    pcSubNavAllMenus[0].style.transform = "translateX(0px)";
    pcSubNavAllMenus[0].style.opacity = "1";
    pcSubNavAllMenus[0].style.transition = "all 0.7s ease 1s";
    pcSubNavAllMenus[0].style.filter = "blur(0px)";

    pcSubNavAllMenus[1].style.transform = "translateX(0px)";
    pcSubNavAllMenus[1].style.opacity = "1";
    pcSubNavAllMenus[1].style.transition = "all 0.7s ease 1.1s";
    pcSubNavAllMenus[1].style.filter = "blur(0px)";

    pcSubNavAllMenus[2].style.transform = "translateX(0px)";
    pcSubNavAllMenus[2].style.opacity = "1";
    pcSubNavAllMenus[2].style.transition = "all 0.7s ease 1.2s";
    pcSubNavAllMenus[2].style.filter = "blur(0px)";

    pcSubNavAllMenus[3].style.transform = "translateX(0px)";
    pcSubNavAllMenus[3].style.opacity = "1";
    pcSubNavAllMenus[3].style.transition = "all 0.7s ease 1.3s";
    pcSubNavAllMenus[3].style.filter = "blur(0px)";

    pcSubNavAllMenus[4].style.transform = "translateX(0px)";
    pcSubNavAllMenus[4].style.opacity = "1";
    pcSubNavAllMenus[4].style.transition = "all 0.7s ease 1.4s";
    pcSubNavAllMenus[4].style.filter = "blur(0px)";

});

// mainHeadeMenuText.addEventListener("click", () => {

//     pcNavMenu.style.transform = "translateY(0px)";
//     pcNavMenu.style.transition = "all 0.7s ease";

//     pcSubNavMenu.style.transform = "translateY(0px)";
//     pcSubNavMenu.style.opacity = "1";
//     pcSubNavMenu.style.transition = "all 0.7s ease 0.5s";

//     pcSubNavMenuCloseIcon.style.transform = "translateX(0px)";
//     pcSubNavMenuCloseIcon.style.transition = "all 0.7s ease 1.5s";

//     pcSubNavAllMenus[0].style.transform = "translateX(0px)";
//     pcSubNavAllMenus[0].style.opacity = "1";
//     pcSubNavAllMenus[0].style.transition = "all 0.7s ease 1s";
//     pcSubNavAllMenus[0].style.filter = "blur(0px)";

//     pcSubNavAllMenus[1].style.transform = "translateX(0px)";
//     pcSubNavAllMenus[1].style.opacity = "1";
//     pcSubNavAllMenus[1].style.transition = "all 0.7s ease 1.1s";
//     pcSubNavAllMenus[1].style.filter = "blur(0px)";

//     pcSubNavAllMenus[2].style.transform = "translateX(0px)";
//     pcSubNavAllMenus[2].style.opacity = "1";
//     pcSubNavAllMenus[2].style.transition = "all 0.7s ease 1.2s";
//     pcSubNavAllMenus[2].style.filter = "blur(0px)";

//     pcSubNavAllMenus[3].style.transform = "translateX(0px)";
//     pcSubNavAllMenus[3].style.opacity = "1";
//     pcSubNavAllMenus[3].style.transition = "all 0.7s ease 1.3s";
//     pcSubNavAllMenus[3].style.filter = "blur(0px)";

//     pcSubNavAllMenus[4].style.transform = "translateX(0px)";
//     pcSubNavAllMenus[4].style.opacity = "1";
//     pcSubNavAllMenus[4].style.transition = "all 0.7s ease 1.4s";
//     pcSubNavAllMenus[4].style.filter = "blur(0px)";

// });

pcSubNavMenuCloseIcon.addEventListener("click", () => {

    pcSubNavMenu.style.transform = "translateY(-2000px)";
    pcSubNavMenu.style.transition = "all 0.7s ease 1s";
    pcSubNavMenu.style.opacity = "0";

    pcNavMenu.style.transform = "translateY(-2000px)";
    pcNavMenu.style.transition = "all 0.7s ease 1.5s";

    pcSubNavAllMenus[0].style.transform = "translateX(-1000px)";
    pcSubNavAllMenus[0].style.transition = "all 0.7s ease 0.7s";
    pcSubNavAllMenus[0].style.opacity = "0";
    pcSubNavAllMenus[0].style.filter = "blur(10px)";

    pcSubNavAllMenus[1].style.transform = "translateX(-1000px)";
    pcSubNavAllMenus[1].style.transition = "all 0.7s ease 0.6s";
    pcSubNavAllMenus[1].style.opacity = "0";
    pcSubNavAllMenus[1].style.filter = "blur(10px)";

    pcSubNavAllMenus[2].style.transform = "translateX(-1000px)";
    pcSubNavAllMenus[2].style.transition = "all 0.7s ease 0.5s";
    pcSubNavAllMenus[2].style.opacity = "0";
    pcSubNavAllMenus[2].style.filter = "blur(10px)";
    
    pcSubNavAllMenus[3].style.transform = "translateX(-1000px)";
    pcSubNavAllMenus[3].style.transition = "all 0.7s ease 0.4s";
    pcSubNavAllMenus[3].style.opacity = "0";
    pcSubNavAllMenus[3].style.filter = "blur(10px)";
    
    pcSubNavAllMenus[4].style.transform = "translateX(-1000px)";
    pcSubNavAllMenus[4].style.transition = "all 0.7s ease 0.3s";
    pcSubNavAllMenus[4].style.opacity = "0";
    pcSubNavAllMenus[4].style.filter = "blur(10px)";

});

pcSubNavMenuCloseIcon.addEventListener("mouseover", () => {

    pcSubNavMenuCloseIcon.style.transform = "rotate(-180deg)";
    pcSubNavMenuCloseIcon.style.transition = "all 0.4s ease";

});

pcSubNavMenuCloseIcon.addEventListener("mouseout", () => {

    pcSubNavMenuCloseIcon.style.transform = "rotate(0deg)";
    pcSubNavMenuCloseIcon.style.transition = "all 0.4s ease";

});

window.addEventListener('wheel', (e) => {

    if (e.deltaY > 0) {
        
        headerScrollAnimation.style.opacity = 0;
        headerScrollAnimation.style.transition = "all 0.7s ease";

    } else {
        
        headerScrollAnimation.style.opacity = 1;
        headerScrollAnimation.style.transition = "all 0.7s ease";

    }

});

navMenu.addEventListener("click", () => {

    mobileNavMenu.style.transform = "translateX(0px)";
    mobileNavMenu.style.transition = "all 0.6s ease";

    // header image
    mobileHeaderImage.style.transform = "scale(1)";
    mobileHeaderImage.style.transition = "all 0.7s ease 0.5s";
    mobileHeaderImage.style.opacity = "1";

    // submenu 
    mobileSubmenuLinks[0].style.transform = "translateX(0px)";
    mobileSubmenuLinks[0].style.transition = "all 0.4s ease 0.5s";
    mobileSubmenuLinks[0].style.filter = "blur(0px)";

    mobileSubmenuLinks[1].style.transform = "translateX(0px)";
    mobileSubmenuLinks[1].style.transition = "all 0.4s ease 0.6s";
    mobileSubmenuLinks[1].style.filter = "blur(0px)";

    mobileSubmenuLinks[2].style.transform = "translateX(0px)";
    mobileSubmenuLinks[2].style.transition = "all 0.4s ease 0.7s";
    mobileSubmenuLinks[2].style.filter = "blur(0px)";

    mobileSubmenuLinks[3].style.transform = "translateX(0px)";
    mobileSubmenuLinks[3].style.transition = "all 0.4s ease 0.8s";
    mobileSubmenuLinks[3].style.filter = "blur(0px)";

    mobileSubmenuLinks[4].style.transform = "translateX(0px)";
    mobileSubmenuLinks[4].style.transition = "all 0.4s ease 0.9s";
    mobileSubmenuLinks[4].style.filter = "blur(0px)";

    // social links
    mobileSocialLinks[0].style.transform = "scale(1)";
    mobileSocialLinks[0].style.transition = "all 0.7s ease 1s";
    mobileSocialLinks[0].style.opacity = "1";

    mobileSocialLinks[1].style.transform = "scale(1)";
    mobileSocialLinks[1].style.transition = "all 0.7s ease 1.1s";
    mobileSocialLinks[1].style.opacity = "1";

    mobileSocialLinks[2].style.transform = "scale(1)";
    mobileSocialLinks[2].style.transition = "all 0.7s ease 1.2s";
    mobileSocialLinks[2].style.opacity = "1";

    mobileSocialLinks[3].style.transform = "scale(1)";
    mobileSocialLinks[3].style.transition = "all 0.7s ease 1.3s";
    mobileSocialLinks[3].style.opacity = "1";

    mobileSocialLinks[4].style.transform = "scale(1)";
    mobileSocialLinks[4].style.transition = "all 0.7s ease 1.4s";
    mobileSocialLinks[4].style.opacity = "1";

});

mobileNavClose.addEventListener("click", () => {

    mobileNavMenu.style.transform = "translateX(-2000px)";
    mobileNavMenu.style.transition = "all 1s ease 1s";

    mobileSubmenuLinks[0].style.transform = "translateX(-1000px)";
    mobileSubmenuLinks[0].style.transition = "all 0.4s ease 0.7s";
    mobileSubmenuLinks[0].style.filter = "blur(10px)";
    
    mobileSubmenuLinks[1].style.transform = "translateX(-1000px)";
    mobileSubmenuLinks[1].style.transition = "all 0.4s ease 0.6s";
    mobileSubmenuLinks[1].style.filter = "blur(10px)";

    mobileSubmenuLinks[2].style.transform = "translateX(-1000px)";
    mobileSubmenuLinks[2].style.transition = "all 0.4s ease 0.5s";
    mobileSubmenuLinks[2].style.filter = "blur(10px)";

    mobileSubmenuLinks[3].style.transform = "translateX(-1000px)";
    mobileSubmenuLinks[3].style.transition = "all 0.4s ease 0.4s";
    mobileSubmenuLinks[3].style.filter = "blur(0px)";

    mobileSubmenuLinks[4].style.transform = "translateX(-1000px)";
    mobileSubmenuLinks[4].style.transition = "all 0.4s ease 0.3s";
    mobileSubmenuLinks[4].style.filter = "blur(0px)";

});

