let adminMenuBar = document.querySelectorAll(".menubar ul li");
let newArrivals = document.querySelector(".newarrivals");
let retroPolo = document.querySelector(".retropolosection");

retroPolo.style.display = "none";

adminMenuBar[2].addEventListener("click", () => {

    newArrivals.style.display = "block";
    retroPolo.style.display = "none";

});

adminMenuBar[3].addEventListener("click", () => {

    newArrivals.style.display = "none";
    retroPolo.style.display = "block";
    retroPolo.style.transition = "all 1s ease";

})