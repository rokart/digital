//scroll indicating arrow animation
$(window).load(function() {
    resizefunction();
    slideheight();

});
$(window).resize(function() {
    resizefunction();
    slideheight();

});



// Main animation 

$(window).scroll(function() {
    var scrollY = getPageScroll()[1];

    if (animArray[0] === 0 && scrollY > windoow - (windoow - 100)) {
        TweenMax.to(window, 1, {scrollTo: {y: $("#slide1").offset().top}});
        animArray[0] = 1;
        //stuff


    }
    if (animArray[1] === 0 && scrollY > windoow + slide1 - (slide1 - 100)) {
        TweenMax.to(window, 1, {scrollTo: {y: $("#slide2").offset().top}});
        animArray[1] = 1;
        //stuff



    }
    if (animArray[2] === 0 && scrollY > windoow + slide1 + slide2 - (slide2 - 100)) {
        TweenMax.to(window, 1, {scrollTo: {y: $("#slide3").offset().top}});
        animArray[2] = 1;
        //stuff



    }

});


