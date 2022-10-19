

$(document).ready(function () {

    $("#slide3").click(function () {
        $("#slide3").text(($("#slide3").html() == "Enquire") ? "Close X" : "Enquire");
        if($("#slide3").html()=="Enquire"){
            $("#second2").addClass("hidden");
            $("#slide3").css({"left":"-47.4%"});
        }
        else{
            $("#second2").removeClass("hidden");
            $("#slide3").css({"left":"-2.3%"});
        }
    })
    
    
              var i=0;
               setInterval(function(){
                if(i==0){
                    $(".slider-rt").css({"background":"url(image/Gate\ View-01_Revised.jpg)"});
                }
                if(i==1){
                    $(".slider-rt").css();
                }
                if(i==2){
                    $(".slider-rt").css();
                }
                i++;
               },2000); 
    
    var $gallery = $('.halmark-slider');
    var slideCount = null;
        
        $('.left').click(function(){
          $('.halmark-slider').slick('slickPrev');
        })
    
        $('.right').click(function(){
          $('.halmark-slider').slick('slickNext');
        }) 
        
    $gallery.on('init', function(event, slick){
      slideCount = slick.slideCount;
      setSlideCount();
      setCurrentSlideNumber(slick.currentSlide);
    });
    
    $gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      setCurrentSlideNumber(nextSlide);
    });
    
    function setSlideCount() {
      var $el = $('.slide-count-wrap').find('.total');
      $el.text(slideCount);
    }
    
    function setCurrentSlideNumber(currentSlide) {
      var $el = $('.slide-count-wrap').find('.current');
      $el.text(currentSlide + 1);
    }
        
    $(window).scroll(function() {
            var sticky = $('nav'),
                scroll = $(window).scrollTop();
            if (scroll >= 100) sticky.addClass('fixed');
            else sticky.removeClass('fixed');
        });
     
     $('nav .nav-link').click(function(){
           $('.navbar-collapse').removeClass('show');
        })    
    
    if ($(window).width() < 768) {
       $('.icon-slider ').slick({
          infinite: true,
          dots:true,
          fade:false,
          slidesToShow:1,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed: 2000,
          nextArrow:false,
          prevArrow:false
         });
    };
    
    
    });