$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }],
    
      prevArrow: $('.prev-arr'),
      nextArrow: $('.next-arr'),
    
  });
});