$(document).ready(function () {


    // Main Page

    /* Fade in title on homepage */

    $(document).ready(function () {
        $(".homepage-header").fadeIn("slow");
    });

     // Video appears when button clicked on main page
    
    $(".btn-secondary").click(function () {
        $(".homepage-header").hide();
        $(".jumbotron video").fadeToggle('slow');
        $('video').get(0).play();
    });

    $("video").on('ended',function(){
        $("video").hide();
        $(".homepage-header").fadeIn("slow");
    });

    var $strip = $('#banner-mainpage');
    
    $strip.waypoint(function () {
        $(".strip-text").fadeIn("slow");
    }, { offset: '70%' });
    
    
    // About Page 
    // Fade in title 

    $(document).ready(function () {
        $(".about-header").fadeIn("slow");
    });

    // Setting waypoint animations
    //banner 1

    var $strip = $('#banner1');

    $strip.waypoint(function () {
        $(".strip-text").fadeIn("slow");
    }, { offset: '80%' });


    // Info next to images
    
    var $firstImg = $('.image1');
    var $secondImg = $('.image2');
    var $thirdImg = $('.image3');
   
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (isMobile()) {
        $firstImg.waypoint(function () {
            $(".info-right1").fadeIn("slow");
        });
        $secondImg.waypoint(function () {
            $(".info-left").fadeIn("slow");
        });
        $thirdImg.waypoint(function () {
            $(".info-right2").fadeIn("slow");
        });
    }

    if (!isMobile()) {
        $firstImg.waypoint(function () {
            $(".info-right1").animate({right: '40%'}, 'slow');
        }, { offset: '40%' });
        $secondImg.waypoint(function () {
            $(".info-left").animate({left: '40%'}, 'slow');
        }, { offset: '40%' });
        $thirdImg.waypoint(function () {
            $(".info-right2").animate({right: '40%'}, 'slow');
            }, { offset: '40%' }); 
    } 
});

