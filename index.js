const title = document.querySelector(".title_container");

window.addEventListener("load", () => {
    setTimeout(() => {
        opening.style.opacity = "0";
        title.style.opacity = "1";
        document.querySelector("body").classList.remove("opening");
    }, 1000);
    setTimeout(() => {
        opening.remove();
    }, 1500);
});

$(".image").click(function(){
    $(".image").removeClass("active");
    $(this).addClass("active");
});


// let lastScroll = 0;

// window.addEventListener("scroll", () => {
//   if (window.scrollY < lastScroll) {
//     navbar.style.top = 0;
//   } else {
//     navbar.style.top = "-50px";
//   }

//   lastScroll = window.scrollY;
// });
