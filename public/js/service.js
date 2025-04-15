let serviceHeading = document.querySelector(".serviceheading h2");
let servicePara = document.querySelector(".serviceheading p");
let serviceBox = document.querySelectorAll(".services .servicebox");

$(serviceHeading).css({

    transform: "scale(0)",
    opacity: "0"

});

$(servicePara).css({

    transform: "scale(0)",
    opacity: "0"

});

for (let allServiceBox of serviceBox) {
    
    $(allServiceBox).css({

        transform: "translateY(-500px)",
        opacity: "0",

    });

}

$(window).on("scroll", () => {

   if($(window).scrollTop() > 2800){

       $(serviceHeading).css({
            
           transform: "scale(1)",
           opacity: "1",
           transition: "all 0.7s ease"
           
       });

       $(servicePara).css({
           
           transform: "scale(1)",
           opacity: "1",
           transition: "all 0.7s ease 0.5s"
           
       });

       $(serviceBox[0]).css({
           
           transform: "translateY(0px)",
           opacity: "1",
           transition: "all 0.7s ease 1s"
           
       });

       $(serviceBox[1]).css({
           
           transform: "translateY(0px)",
           opacity: "1",
           transition: 'all 0.7s ease 1.1s'
           
       });

       $(serviceBox[2]).css({
           
           transform: "translateY(0px)",
           opacity: "1",
           transition: 'all 0.7s ease 1.2s'
           
       });

       
   } else {
       
       $(serviceHeading).css({
           
           transform: "scale(0)",
           opacity: "0",
           transition: "all 0.7s ease 0.5s"
           
       });

       $(servicePara).css({
           
           transform: "scale(0)",
           opacity: "0",
           transition: "all 0.7s ease"
           
       });

       $(serviceBox[0]).css({
           
           transform: "translateY(-500px)",
           opacity: "0",
           transition: "all 0.7s ease 0.3s"
           
       });

       $(serviceBox[1]).css({
           
           transform: "translateY(-500px)",
           opacity: "0",
           transition: "all 0.7s ease 0.2s"
           
       });

       $(serviceBox[2]).css({
           
           transform: "translateY(-500px)",
           opacity: "0",
           transition: "all 0.7s ease 0.1s"
           
       })
       
   }

});