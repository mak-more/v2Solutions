
$(document).ready(function(){

// Copyright 2014-2019 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  };

  //Main Nav
  $(".navbar-subnav").hide();
  $(".navbar-nav > li > a").click(function() {
    event.preventDefault();
    var e = $(this);  
    e.addClass("active");
    e.parent().siblings().children().removeClass('active');
    e.parent().find(".navbar-subnav").slideToggle();
    e.parent().siblings().find(".navbar-subnav").slideUp();
  });

  //Toggle Nav
  $('#navToggle').click(function() {
    //$('.nav-bar').slideToggle();
    if (this.value == "Click to Slide-Left") this.value =  
                      "Click to Slide-Right"; 
                    else this.value = "Click to Slide-Left"; 
                    $(".nav-bar").animate({ 
                        width: "toggle" 
                    }); 
  });

  //Owl Carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        768: {
            items: 1,
            nav: true
        },
        992: {
            items: 1,
            nav: true,
            loop: false,
            //margin: 20
        }
    }
})

//Tabs
$('#tab-content > div').hide();
$('#tab-content > div:first').show();

$('#tab-nav > li').click(function() {
  event.preventDefault();
    $('#tab-nav > li > a').removeClass("active");
    $(this).find('a').addClass("active");
    $('#tab-content > div').hide();

    var indexer = $(this).index(); //gets the current index of (this) which is #tab-nav li
    $('#tab-content > div:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box 
});


//ScrollToTop
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
  } else {
      $('.scrollToTop').fadeOut();
  }
});
//Click event to scroll to top
$('.scrollToTop').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
});

});