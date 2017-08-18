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
    qualityMax: 720,
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
        anchors: ['Home', 'Testimonials', 'Leadership', 'Growth', 'Culture', 'Contact-Us'],
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

        fixedElements: '.nav-wrapper, .menu, .form-contact, .video-overlay, .spinner_hol ',
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

            if (index == 4 && nextIndex == 5) {
               
                $('.block-2').removeClass('active'),
                $('.block-3').removeClass('active'),
                $('.block-4').removeClass('active'),
                $('.achievements-wrapper').removeClass('active'),
                $('.graph-wrapper').removeClass('active'),
                $('.volume-wrapper').removeClass('active'),
                $('.block-1').addClass('active'),
                $('.map-wrapper').addClass('active');
            }
           
            if (index == 10 && nextIndex == 11) {

                $('#fp-nav').css('display', 'none');
            }

        }, //End onLeave

        afterLoad: function(anchorLink, index) {
            if (index == 1 || index >= 11) {

            }
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
            if (index == 4) {
                $('.local a[href="#Growth"]').addClass('active');
                $('.block-1').addClass('active'),
                $('.block-2').removeClass('active'),
                $('.block-3').removeClass('active'),
                $('.block-4').removeClass('active'),
                $('.map-wrapper').addClass('active'),
                $('.achievements-wrapper').removeClass('active'),
                $('.graph-wrapper').removeClass('active'),
                $('.volume-wrapper').removeClass('active');
            } else {
                $('.local a[href="#Growth"]').removeClass('active');
            }
            if (index == 5) {
                $('.local a[href="#Culture"]').addClass('active');
            } else {
                $('.local a[href="#Culture"]').removeClass('active');
            }
            if (index == 1 || index == 3 || index == 4) {
                $('nav .nav-title a').css('text-shadow', 'none');
            } else {
                $('nav .nav-title a').css('text-shadow', '2px 2px 4px #686868');
            }

        }, //End afterLoad

        afterResize: function() {},
        afterResponsive: function(isResponsive) {},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {},
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
        } //End afterRender


    }); //End $('#fullpage')

});