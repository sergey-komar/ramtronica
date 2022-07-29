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
                centerMode: true,
              }
            },
            
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
        
      ]
})

$('.slider__top-inner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
})

    const menu = document.querySelector('.menu');
    const mobile = document.querySelector('.nav-icon');

    mobile.addEventListener('click', function(){
    this.classList.toggle('nav-icon--active');
    menu.classList.toggle('nav--active');
});


$('.about__content-btn').on('click', function(){
  $('.about__content-text--mobile').slideToggle();
});
})