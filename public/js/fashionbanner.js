let fashionBannerImage = document.querySelector(".fashionbanner .banner img");

fashionBannerImage.style.opacity = "0";

window.addEventListener("scroll", () => {

    if (window.innerWidth > 600) {
        
        if (window.scrollY > 1500) {
            
            fashionBannerImage.style.opacity = "1";
            fashionBannerImage.style.transition = "all 0.7s ease";

        } else {
            
            fashionBannerImage.style.opacity = "0";
            fashionBannerImage.style.transition = "all 0.7s ease";

        }

    }

});