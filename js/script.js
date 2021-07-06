$(function () {
  // special
  $('section[data-type="parallax_section"]').each(function(){
    var $bgobj = $(this);// Variable para asignacion de objeto
    $(window).scroll(function() {
    $window = $(window);
    var yPos = -($window.scrollTop() / $bgobj.data('speed'));
    var coords ='50% '+ yPos +'px';
    $bgobj.css({ backgroundPosition: coords });
    });
    });
    
  // book a tabble part
$('.all-btn').on('click', function (){
  $('.book-table').fadeIn(500);

});
$('.close').on('click', function(){
  $('.book-table').fadeOut(500);
})

  // banner slider
  $(".slider_main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    pauseOnHover: false,
    autoplay: true,
    speed: 1000,
    prevArrow: ".left",
    nextArrow: ".right",
  });

  // mixit up js
  mixitup(".menu-list");

  // testmonial js
  $(".cf-testmonial-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    pauseOnHover: false,
    autoplay: true,
    speed: 1000,
    prevArrow: ".testimonial-left",
    nextArrow: ".testimonial-right",
  });
  /*--------------------------------
            PRE LOADER
  ---------------------------------*/
  $(window).load(function () {
    $(".preloader").fadeOut("slow");
  });

  /*--------------------------------------- 
        MENU PAGE LINK ACTIVE CLASS
  ----------------------------------------*/
  // To color manu page active buttons on click
  $(".page-links").on("click", function () {
    $(".page-links").removeClass("active");
    $(this).addClass("active");
  });

});
/*---------------------------
        STICKY MENU JS
  -----------------------------*/
var $location = $(".cf-nav").offset().top;
$(window).scroll(function () {
  var $scrolling = $(this).scrollTop();
  if ($scrolling >= $location) {
    $(".cf-nav").addClass("cf-nav-sticky");
    document.getElementById("logo").style.width = "";
  } else {
    $(".cf-nav").removeClass("cf-nav-sticky");
    document.getElementById("logo").style.width = "";
  }
});




