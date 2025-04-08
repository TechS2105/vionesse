let shopBoxTextAnimation = document.querySelectorAll(".shopoffer .shopbox p");
let shopBoxButtonAnimation = document.querySelector(".shopoffer .shopbox a");

for (let shopBox of shopBoxTextAnimation) {
    
    $(shopBox).css({

        transform: "translateY(-500px)"

    });

}

$(shopBoxButtonAnimation).css({

    transform: "translateY(-500px)"

});

$(window).on("scroll", () => {

    if ($(window).scrollTop() > 200) {

        $(shopBoxTextAnimation[0]).css({

            transform: "translateY(0px)",
            transition: "all 0.7s ease"

        });

        $(shopBoxTextAnimation[1]).css({

            transform: "translateY(0px)",
            transition: "all 0.7s ease 0.5s",

        });

        $(shopBoxButtonAnimation).css({

            transform: "translateY(0px)",
            transition: "all 0.7s ease 0.6s"

        });

    } else {

        $(shopBoxTextAnimation[0]).css({

            transform: "translateY(-500px)",
            transition: "all 0.7s ease 0.5s",

        });

        $(shopBoxTextAnimation[1]).css({

            transform: "translateY(-500px)",
            transition: 'all 0.7s ease 0.4s',

        });

        $(shopBoxButtonAnimation).css({

            transform: "translateY(-500px)",
            transition: "all 0.7s ease 0.3s",

        });

    }

})

