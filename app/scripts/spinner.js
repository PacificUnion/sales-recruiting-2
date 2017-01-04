// preloader spinner

    $('.spinner_hol').fadeIn('fast');
    $('.spinner svg').css('visibility', 'visible');

    function animate() {
        TweenMax.set('.house-icon-line', {drawSVG: 0});
        TweenMax.to('.house-icon-line', 3, {drawSVG: true});
        TweenMax.to('.house-icon-line', 3, {drawSVG: '100% 100%', delay: 3});
    }

    animate();
    setTimeout(function(){
        $('.spinner_hol').fadeOut('slow', function(){
            $('.spinner svg').css('visibility', 'hidden');
            
        });
    }, 2000);
