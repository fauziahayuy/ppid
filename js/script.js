document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("myTextarea");

    textarea.addEventListener("focus", function () {
        this.classList.add("focused");
    });

    textarea.addEventListener("blur", function () {
        this.classList.remove("focused");
    });
});

document.ready(function(){
    $(".owl-carousel-award").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 200,
        items: 2,
        nav: false,
        loop: true,
        responsive:{
          0:{
            items:1
          },
          600:{
           items:1,
          },
          800:{
            items:3,
          },
          1200:{
            items:3,
          }    
        }
    });
})