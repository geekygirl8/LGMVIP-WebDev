$(document).ready(function(){
    $('.carousell').slick({
    slidesToShow: 2,
    centerMode: true,
    autoplay:true,
    autoplaySpeed: 2000
  
    });
  });
  

// life
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    //fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
  

 