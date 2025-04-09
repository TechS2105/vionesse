let videoZoomming = document.querySelector(".videosection .video video");

window.addEventListener("wheel", (e) => {

    if (window.innerWidth > 600) {

        if (e.deltaY > 0) {
        
            videoZoomming.style.transform = "scale(1.9)";
            videoZoomming.style.transition = "all 1s linear";

        } else {
        
            videoZoomming.style.transform = "scale(1)";
            videoZoomming.style.transition = "all 1s linear";

        }
    }

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        
        videoZoomming.style.opacity = "0.3";

    } else {
        
        videoZoomming.style.opacity = "1";

    }

})