let newletterSection = document.querySelector(".newslettersection");
let newsLetter = document.querySelector(".newslettersection .newsletter");
let newsLetterText = document.querySelector(
  ".newsletter .newslettertext"
);
let newsLetterTextHeading = document.querySelector(".newslettertext h3");
let newsLetterTextPara = document.querySelector(".newslettertext p");
let newsLetterForm = document.querySelector(".newsletterform form");

newletterSection.style.opacity = "0";
newsLetter.style.transform = "translateY(-500px)";
newsLetterText.style.transform = "translateY(1000px)";
newsLetterTextHeading.style.transform = "translateX(-500px)";
newsLetterTextPara.style.transform = "scale(0)";
newsLetterForm.style.opacity = "0";

if (window.innerWidth > 600) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 3500) {

            newletterSection.style.opacity = "1";
            newletterSection.style.transition = "all 0.7s ease";
            newletterSection.style.position = "relative";
            newsLetter.style.transform = "translateY(0px) skew(-30deg)";
            newsLetter.style.transition = "all 0.7s ease 0.2s";
            newsLetter.style.position = "absolute";
            newsLetterText.style.transform = "translateY(0px)";
            newsLetterText.style.transition = "all 0.7s ease 0.3s";
            newsLetterText.style.position = "absolute";
            newsLetterTextHeading.style.transform = "translateX(0px) skew(30deg)";
            newsLetterTextHeading.style.transition = "all 0.7s ease 1s";
            newsLetterTextPara.style.transform = "scale(1) skew(30deg)";
            newsLetterTextPara.style.transition = "all 0.7s ease 1.1s";
            newsLetterForm.style.opacity = "1";
            newsLetterForm.style.transition = "all 0.7s ease 1.5s";


        } else {
            
            newletterSection.style.opacity = "0";
            newletterSection.style.transition = "all 0.7s ease 0.5s";
            newsLetter.style.transform = "translateY(-500px) skew(-30deg)";
            newsLetter.style.transition = "all 0.7s ease 0.4s";
            newsLetterText.style.transform = "translateY(1000px) skew(-30deg)";
            newsLetterText.style.transition = "all 0.7s ease 0.3s";
            newsLetterTextHeading.style.transform = "translateX(-500px) skew(30deg)";
            newsLetterTextHeading.style.transition = "all 0.7s ease 0.2s";
            newsLetterTextPara.style.transform = "scale(0) skew(30deg)";
            newsLetterTextPara.style.transition = "all 0.7s ease 0.1s";
            newsLetterForm.style.opacity = "0";
            newsLetterForm.style.transition = "all 0.7s ease";

        }

    });

}

