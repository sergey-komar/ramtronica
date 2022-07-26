$(function () {
    $('.slider__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev-btn"></button>',
        nextArrow: false,
        responsive: [
            {
              breakpoint: 1210,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
               
              }
            },
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
$('.certificates__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
        {
          breakpoint: 1210,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          
          }
        },
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})

    const menu = document.querySelector('.menu');
    const mobile = document.querySelector('.nav-icon');

    mobile.addEventListener('click', function(){
    this.classList.toggle('nav-icon--active');
    menu.classList.toggle('nav--active');
});
})