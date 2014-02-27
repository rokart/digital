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


//        TweenLite.fromTo($('#laptop-top'), 2, {opacity: 0, scaleY: 0}, {delay: 2, transformOrigin: "50% 100%", opacity: 1, scaleY: 1, ease: Cubic.easeOut});

        TweenLite.fromTo($('#laptop-top'), 0.5, {rotationX: 90}, {transformPerspective:600, rotationX: 0, transformOrigin: "50% 100%", autoAlpha: 1, ease: Cubic.easeOut});


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


