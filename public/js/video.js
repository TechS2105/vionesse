let videoZoomming = document.querySelector(".videosection .video video");

window.addEventListener("wheel", (e) => {

    if (e.deltaY > 0) {
        
        videoZoomming.style.transform = "scale(1.5)";
        videoZoomming.style.transition = "all 1s linear";

    } else {
        
        videoZoomming.style.transform = "scale(1)";
        videoZoomming.style.transition = "all 1s linear";

    }

});