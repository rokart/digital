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
        var tl = new TimelineLite();
        TweenMax.to(window, 1, {scrollTo: {y: $("#slide1").offset().top, autoKill: false}});
        TweenLite.fromTo($('#cloud1'), 1.5, {scale: 0}, {delay: 1, scale: 1, transformOrigin: "50% 100%", autoAlpha: 1, ease: Elastic.easeOut});
        tl.add(TweenLite.fromTo($('#ipad'), 1.5, {bottom: '-450px'}, {delay: 0.5, bottom: '-130px', autoAlpha: 1, ease: Back.easeOut}));
        tl.add(TweenLite.fromTo($('#cloud2'), 1.5, {scale: 0}, {scale: 1, transformOrigin: "50% 100%", autoAlpha: 1, ease: Elastic.easeOut}));
        tl.add(TweenLite.fromTo($('#star'), 1.5, {bottom: '0px', right: '350px'}, {bottom: '200px', right: '80px', autoAlpha: 1, ease: Cubic.easeInOut}));
        TweenMax.staggerFromTo($('.exclamation'), 0.6, {opacity: 0, scale: 2.5}, {delay: 1.5, opacity: 1, scale: 1, ease: Back.easeOut}, 0.4);
        animArray[0] = 1;
    }
    if (animArray[1] === 0 && scrollY > windoow + slide1 - (windoow - 100)) {
        TweenMax.to(window, 1, {scrollTo: {y: $("#slide2").offset().top, autoKill: false}});
        var tl1 = new TimelineLite();
        tl1.add(TweenLite.fromTo($('#Fb_slide1, #Fb_slide2'), 1.5, {scale: 0.5}, {scale: 1, autoAlpha: 1, ease: Back.easeOut}));
        tl1.add(TweenLite.fromTo($('#hand'), 1.5, {bottom: '-400px'}, {bottom: '-10px', autoAlpha: 1, ease: Back.easeOut}));
        tl1.add(TweenLite.fromTo($('#riple'), 1.5, {scale: 0}, {scale: 1, autoAlpha: 1, ease: Elastic.easeOut}));
        animArray[1] = 1;
    }
    if (animArray[2] === 0 && scrollY > windoow + slide1 + slide2 - (windoow - 100)) {
        TweenMax.to(window, 1, {scrollTo: {y: $("#slide3").offset().top, autoKill: false}});

        TweenLite.fromTo($('#palaroid1'), 1.5, {top: '-100px', left: '-200px'}, {top: '100px', left: '60px', autoAlpha: 1, ease: Cubic.easeOut});
        TweenLite.fromTo($('#palaroid2'), 1.5, {top: '-100px', left: '600px'}, {top: '170px', left: '290px', autoAlpha: 1, ease: Cubic.easeOut});

        TweenLite.fromTo($('#cloud3'), 1.5, {scale: 0}, {delay: 1.5, scale: 1, transformOrigin: "50% 100%", autoAlpha: 1, ease: Elastic.easeOut});
        TweenLite.fromTo($('#cloud4'), 1.5, {scale: 0}, {delay: 2, scale: 1, transformOrigin: "50% 100%", autoAlpha: 1, ease: Elastic.easeOut});

        animArray[2] = 1;
    }

});


