$(function() {
    // ios8 test
    var isIOS8 = function() {
        var deviceAgent = navigator.userAgent.toLowerCase();
        return /(iphone|ipod|ipad).* os 8_/.test(deviceAgent);
    }

    if (isIOS8() == true) {
        $('.spinner_hol').css('display', 'none');
    }
});

 var bgVideoOptions = {
        version: 'v1',
        autoPlay: true,
        controlsVisibleOnLoad: false,
        fullscreenButton: false,
        playbar: false,
        playButton: false,
        volumeControl: false,
        volume: 0,
        settingsControl: false,
        endVideoBehavior: 'loop',
        pauseButton: false,
        playbackRateControl: false,
        smallPlayButton: false,
        qualityMax: 360,
        plugin: {
           cropFill: {
                src: '//fast.wistia.com/labs/crop-fill/plugin.js'
            }
        }
    }

    window._wq = window._wq || [];

    _wq.push({ 
        id: '57d4w0rtju', //our-people-Loop
        onReady: function(video1) {
            video1.play();
        },
        options: bgVideoOptions
    });

$(function() {

    $('#fullpage').fullpage({

        //Navigation
        menu: false,
        lockAnchors: false,
        anchors: ['Home', 'Testimonials', 'Leadership', 'Growth','Employee-Growth','Company-Achievements','Company-Volume', 'Culture', 'Contact-Us'],
        navigation: false,
        navigationPosition: 'left',
        navigationTooltips: [],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: null,
        
        scrollOverflow: false,
        // scrollOverflow: true,

        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,

        fixedElements: '.nav-wrapper, .menu, .form-contact, .video-overlay, .spinner_hol, .quarter-block, .growth-sec-content',
        responsiveWidth: 768,
        responsiveHeight: 0,
        responsiveSlides: null,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide-2',

         //events
        onLeave: function(index, nextIndex, direction) {

            if (index == 2 && nextIndex == 1) {
                $('#fp-nav').css('display', 'none');
                $('.logo-wrapper').css('display', 'block');
            }
            if (index == 4 && nextIndex == 3) {
                $('.quarter-block').removeClass('active'),
                $('.block-1').removeClass('active'),
                $('.map-wrapper').removeClass('active');
            }
            if (index == 3 && nextIndex == 4) {
                $('.quarter-block').addClass('active'),
                $('.block-1').addClass('active'),
                $('.map-wrapper').addClass('active');
            }
             if (index == 5 && nextIndex == 4) {
                $('.block-1').addClass('active'),
                $('.map-wrapper').addClass('active'),
                $('.block-2').removeClass('active'),
                $('.graph-wrapper').removeClass('active');
            }
            if (index == 4 && nextIndex == 5) {
                $('.block-1').removeClass('active'),
                $('.map-wrapper').removeClass('active'),
                $('.block-2').addClass('active'),
                $('.graph-wrapper').addClass('active');
            }
            if (index == 6 && nextIndex == 5) {
                $('.block-3').removeClass('active'),
                $('.achievements-wrapper').removeClass('active'),
                $('.block-2').addClass('active'),
                $('.graph-wrapper').addClass('active');
            }
            if (index == 5 && nextIndex == 6) {
                $('.block-2').removeClass('active'),
                $('.graph-wrapper').removeClass('active'),
                $('.block-3').addClass('active'),
                $('.achievements-wrapper').addClass('active');
            }
            if (index == 7 && nextIndex == 6) {
                $('.block-4').removeClass('active'),
                $('.volume-wrapper').removeClass('active'),
                $('.block-3').addClass('active'),
                $('.achievements-wrapper').addClass('active');
            }
            if (index == 6 && nextIndex == 7) {
                $('.block-3').removeClass('active'),
                $('.achievements-wrapper').removeClass('active'),
                $('.block-4').addClass('active'),
                $('.volume-wrapper').addClass('active');
            }
            if (index == 8 && nextIndex == 7) {
                $('.quarter-block').addClass('active'),
                $('.block-4').addClass('active'),
                $('.volume-wrapper').addClass('active');
            }
            if (index == 7 && nextIndex == 8) {
                $('.quarter-block').removeClass('active'),
                $('.block-4').removeClass('active'),
                $('.volume-wrapper').removeClass('active');
            }
              
            if (index == 10 && nextIndex == 11) {

                $('#fp-nav').css('display', 'none');
            }

        }, //End onLeave

        afterLoad: function(anchorLink, index) {
            if (index == 1) {

            } else {
                $('.logo-wrapper').css('display', 'none');
            }
            if (index == 2) {
                $('.local a[href="#Testimonials"]').addClass('active');
                $('.logo-wrapper').css('display', 'none');
               
            } else {
                $('.local a[href="#Testimonials"]').removeClass('active');                           
            }
            if (index == 3) {
                $('.local a[href="#Leadership"]').addClass('active');
            } else {
                $('.local a[href="#Leadership"]').removeClass('active');
            }           
            

            if (index == 1 || index == 3 ) {
                $('nav .nav-title a').css('text-shadow', 'none');
            } else {
                // $('nav .nav-title a').css('text-shadow', '2px 2px 4px #686868');
            }
          
            if ( index == 4 ){
                $('.quarter-block').addClass('active'),
                $('.map-wrapper').addClass('active'),
                $('.block-1').addClass('active');
            }
            if ( index == 5 ){
                $('.quarter-block').addClass('active'),
                $('.graph-wrapper').addClass('active'),
                $('.block-2').addClass('active');
            }
            if ( index == 6 ){
                $('.quarter-block').addClass('active'),
                $('.achievements-wrapper').addClass('active'),
                $('.block-3').addClass('active');
            }
            if ( index == 7 ){
                $('.quarter-block').addClass('active'),
                $('.volume-wrapper').addClass('active'),
                $('.block-4').addClass('active');
            }

        }, //End afterLoad

        afterResize: function() {},
        afterResponsive: function(isResponsive) {},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {

            
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {},

        afterRender: function() {

            $('#nav-icon').click(function() {
                $(this).toggleClass('open'),
                    $('.menu').toggleClass('active'),
                    $('.nav-local').toggleClass('active');
            });
            $('.block-1').click(function() {
                $('.block-1').addClass('active'),
                $('.block-2').removeClass('active'),
                $('.block-3').removeClass('active'),
                $('.block-4').removeClass('active'),
                $('.map-wrapper').addClass('active'),
                $('.achievements-wrapper').removeClass('active'),
                $('.graph-wrapper').removeClass('active');
                $('.volume-wrapper').removeClass('active');
                $.fn.fullpage.moveTo(4);
            });
            $('.block-2').click(function() {
                $('.block-2').addClass('active'),
                $('.block-1').removeClass('active'),
                $('.block-3').removeClass('active'),
                $('.block-4').removeClass('active'),
                $('.map-wrapper').removeClass('active'),
                $('.achievements-wrapper').removeClass('active'),
                $('.graph-wrapper').addClass('active');
                $('.volume-wrapper').removeClass('active');
                $.fn.fullpage.moveTo(5);
            });
            $('.block-3').click(function() {
                $('.block-3').addClass('active'),
                $('.block-2').removeClass('active'),
                $('.block-1').removeClass('active'),
                $('.block-4').removeClass('active'),
                $('.map-wrapper').removeClass('active'),
                $('.graph-wrapper').removeClass('active'),
                $('.achievements-wrapper').addClass('active');
                $('.volume-wrapper').removeClass('active');
                $.fn.fullpage.moveTo(6);
            });

            $('.block-4').click(function() {
                $('.block-4').addClass('active'),
                $('.block-2').removeClass('active'),
                $('.block-1').removeClass('active'),
                $('.block-3').removeClass('active'),
                $('.map-wrapper').removeClass('active'),
                $('.graph-wrapper').removeClass('active'),
                $('.achievements-wrapper').removeClass('active'),
                $('.volume-wrapper').addClass('active');
                $.fn.fullpage.moveTo(7);
            });

            $('.close-video').click(function() {               
                $('.video-overlay').removeClass('active');
            });

            $('#contact-button, .nav-contact').click(function() {
                $('.form-contact').addClass('active');
            });

            $('.form-contact .close').click(function() {
                $('.form-contact').removeClass('active');
            });


            $('.slide__col').click(function() {
                $('.slide__col').removeClass('active');

                $(this).addClass('active');

                if ($(window).width() <= 768) {
                    console.log('mobile');
                }
            });

            $('.slide__text-wrapper-small').click(function() {
                $(this).closest('.slide__col').addClass('active');
            });

            $('.slide__text-wrapper-large .slide__more').click(function(e) {
                $(this).closest('.slide__col').removeClass('active');
                e.stopPropagation();
            });

            $('.slide__next-double-arrow_left').click(function(e) {
                $(this).closest('.slide__col_quoted').removeClass('active');
                e.stopPropagation();
                $(this).closest('.slide__col_quoted').prevAll('.slide__col_quoted:first').addClass('active');
            });

            $('.slide__next-double-arrow_right').click(function(e) {
                $(this).closest('.slide__col_quoted').removeClass('active');
                e.stopPropagation();
                $(this).closest('.slide__col_quoted').nextAll('.slide__col_quoted:first').addClass('active');
            });

            //product page/ carousel navigation
            var overlay = document.getElementById('overlay');
            var carousel = document.getElementById('slide-container');

            var a = document.getElementById('footprint');
            var b = document.getElementById('employees');
            var c = document.getElementById('achievements');
            var d = document.getElementById('volume');           
           
            var items = carousel.querySelectorAll('.content li');
            // var current = items[0];
           
            function displayModalA(){
                carousel.classList.add('active');
                a.classList.add('current');
                navigate(0);
            }
            function displayModalB(){
                carousel.classList.add('active');
                b.classList.add('current');
                navigate(1);
            }
            function displayModalC(){
                carousel.classList.add('active');
                c.classList.add('current');
                navigate(2);
            }
            function displayModalD(){
                carousel.classList.add('active');
                d.classList.add('current');
                navigate(3);
            }
console.log('test');
            // carousel naviagtion
            var box = document.querySelector('.carouselbox');
            var next = box.querySelector('.left');
            var prev = box.querySelector('.right');
            var items = box.querySelectorAll('.content li');
            var counter = 0;
            var amount = items.length;
            var current = items[0];
            // box.classList.add('active');
            function navigate(direction) {
                
                current.classList.remove('current');
                counter = counter + direction;
                console.log(counter);

                if (direction === -1 && 
                    counter < 0) { 
                    counter = amount - 1; 
                }
                if (direction === 1 && 
                    !items[counter]) { 
                    counter = 0;
                }
                current = items[counter];
                current.classList.add('current');
            }

            next.addEventListener('click', function(ev) {
                navigate(1);
                console.log('next');
            });
            prev.addEventListener('click', function(ev) {
                navigate(-1);
                console.log('prev');
            });

            navigate(0);
            // closeModal();


        } //End afterRender


    }); //End $('#fullpage')

});
