let adminMenuBar = document.querySelectorAll(".menubar ul li");
let newArrivals = document.querySelector(".newarrivals");
let retroPolo = document.querySelector(".retropolosection");
let deleteArrivals = document.querySelector(".deletearrivalproduct");
let newsLetterSection = document.querySelector(".newslettersection");

retroPolo.style.display = "none";
deleteArrivals.style.display = "none";
newsLetterSection.style.display = "none";

adminMenuBar[2].addEventListener("click", () => {

    newArrivals.style.display = "block";
    retroPolo.style.display = "none";
    deleteArrivals.style.display = "none";
    newsLetterSection.style.display = "none";

});

adminMenuBar[3].addEventListener("click", () => {

    newArrivals.style.display = "none";
    retroPolo.style.display = "block";
    deleteArrivals.style.display = "none";
    newsLetterSection.style.display = "none";

});

adminMenuBar[4].addEventListener("click", () => { 

    deleteArrivals.style.display = "block";
    newArrivals.style.display = "none";
    retroPolo.style.display = "none";
    newsLetterSection.style.display = "none";

});

adminMenuBar[6].addEventListener("click", () => {

    newsLetterSection.style.display = "block";
    deleteArrivals.style.display = "none";
    newArrivals.style.display = "none";
    retroPolo.style.display = "none";


})