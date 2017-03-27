// preloader spinner
$(window).on('load', function(){
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
});


$(function() {
    // ios8 test
    var isIOS8 = function() {
      var deviceAgent = navigator.userAgent.toLowerCase();
      return /(iphone|ipod|ipad).* os 8_/.test(deviceAgent);
    }

    if( isIOS8() == true ){
        $('.spinner_hol').css('display', 'none');
    }
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
           
            fixedElements: '#header, .footer, #navigation, .nav-wrapper, .menu, .form-contact, .video-overlay', 
            responsiveWidth: 768,
            responsiveHeight: 0,
            responsiveSlides: false,

            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide-2',

            //events
            onLeave: function(index, nextIndex, direction){

                if(index == 2 && nextIndex == 1 ){
                   
                    $('video').get(0).play();
                    $('#fp-nav').css('display', 'none'); 
                    $('.logo-wrapper').css('display', 'block');
                    $('video').get(1).pause();
                    $('video').get(2).pause();
                    $('video').get(3).pause();
                    $('video').get(4).pause();
                    $('video').get(5).pause();
                    $('video').get(6).pause();
                    $('video').get(7).pause();
                    $('video').get(8).pause();
                }

                if(index == 3 && nextIndex == 4  ){
                    $('.block-1').addClass('active'),
                    $('.map-wrapper').addClass('active');
                    $('video').get(1).pause();
                    $('video').get(2).pause();
                    $('video').get(3).pause();
                    $('video').get(4).pause();
                    $('video').get(5).pause();
                    $('video').get(6).pause();
                    $('video').get(7).pause();
                    $('video').get(8).pause();
                }

                if(index == 4 && nextIndex != 4  ){
                    $('.block-1').removeClass('active'),
                    $('.map-wrapper').removeClass('active');
                }

                if(index == 10 && nextIndex == 11 ){
                   
                    $('#fp-nav').css('display', 'none'); 

                }

            },

           
            afterLoad: function(anchorLink, index){
                if(index == 1 || index >= 11){
               
                }
                if(index == 1 ){
                    $('video').get(0).play();
                }else{
                    $('.logo-wrapper').css('display', 'none');   
                }
                if(index == 2){
                    $('.logo-wrapper').css('display', 'none');
                }else{
                    $('video').get(1).pause();
                    $('video').get(2).pause();
                    $('video').get(3).pause();
                    $('video').get(4).pause();
                    $('video').get(5).pause();
                    $('video').get(6).pause();
                    $('video').get(7).pause();
                    $('video').get(8).pause();
                }
                if(index == 4){
                    $('.block-1').addClass('active'),
                    $('.block-2').removeClass('active'),
                    $('.block-3').removeClass('active'),
                    $('.block-4').removeClass('active'),
                    $('.map-wrapper').addClass('active'),
                    $('.achievements-wrapper').removeClass('active'),
                    $('.graph-wrapper').removeClass('active');
                }
                if(index == 1 || index == 3 || index == 4){
                    $('nav .nav-title a').css('text-shadow', 'none');
                }else{
                    $('nav .nav-title a').css('text-shadow', '2px 2px 4px #686868');
                }
                   
            },
           
            afterResize: function(){},
            afterResponsive: function(isResponsive){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){},
            afterRender: function () {
                $('#nav-icon').click(function(){
                    $(this).toggleClass('open'),
                    $('.menu').toggleClass('active'),
                    $('.nav-local').toggleClass('active');
                });

              
                $('video').get(0).play();

                $('.block-1').click(function(){
                    $('.block-1').addClass('active'),
                    $('.block-2').removeClass('active'),
                    $('.block-3').removeClass('active'),
                    $('.block-4').removeClass('active'),
                    $('.map-wrapper').addClass('active'),
                    $('.achievements-wrapper').removeClass('active'),
                    $('.graph-wrapper').removeClass('active');
                    $('.volume-wrapper').removeClass('active');
                });
                $('.block-2').click(function(){
                    $('.block-2').addClass('active'),
                    $('.block-1').removeClass('active'),
                    $('.block-3').removeClass('active'),
                    $('.block-4').removeClass('active'),
                    $('.map-wrapper').removeClass('active'),
                    $('.achievements-wrapper').removeClass('active'),
                    $('.graph-wrapper').addClass('active');
                    $('.volume-wrapper').removeClass('active');
                });
                $('.block-3').click(function(){
                    $('.block-3').addClass('active'),
                    $('.block-2').removeClass('active'),
                    $('.block-1').removeClass('active'),
                    $('.block-4').removeClass('active'),
                    $('.map-wrapper').removeClass('active'),
                    $('.graph-wrapper').removeClass('active'),
                    $('.achievements-wrapper').addClass('active');
                    $('.volume-wrapper').removeClass('active');
                });

                $('.block-4').click(function(){
                    $('.block-4').addClass('active'),
                    $('.block-2').removeClass('active'),
                    $('.block-1').removeClass('active'),
                    $('.block-3').removeClass('active'),
                    $('.map-wrapper').removeClass('active'),
                    $('.graph-wrapper').removeClass('active'),
                    $('.achievements-wrapper').removeClass('active'),
                    $('.volume-wrapper').addClass('active');
                });

                $('.video-frame-1, #video-testimonial-1 ').click(function(){
                    $('#video-testimonial-1').toggleClass('active');
                    $('video').get(1).play();
                    if(!$('#video-testimonial-1').hasClass('active')){
                        $('video').get(1).pause();
                    }
                });
                $('.video-frame-2, #video-testimonial-2 ').click(function(){
                    $('#video-testimonial-2').toggleClass('active');
                    $('video').get(2).play();
                    if(!$('#video-testimonial-2').hasClass('active')){
                        $('video').get(2).pause();
                    }
                });
                $('.video-frame-3, #video-testimonial-3 ').click(function(){
                    $('#video-testimonial-3').toggleClass('active');
                    $('video').get(3).play();
                    if(!$('#video-testimonial-3').hasClass('active')){
                        $('video').get(3).pause();
                    }
                });
                 $('.video-frame-4, #video-testimonial-4 ').click(function(){
                    $('#video-testimonial-4').toggleClass('active');
                    $('video').get(4).play();
                    if(!$('#video-testimonial-4').hasClass('active')){
                        $('video').get(4).pause();
                    }
                });
                $('.video-frame-5, #video-testimonial-5 ').click(function(){
                    $('#video-testimonial-5').toggleClass('active');
                    $('video').get(5).play();
                    if(!$('#video-testimonial-5').hasClass('active')){
                        $('video').get(5).pause();
                    }
                });
                $('.video-frame-6, #video-testimonial-6 ').click(function(){
                    $('#video-testimonial-6').toggleClass('active');
                    $('video').get(6).play();
                    if(!$('#video-testimonial-6').hasClass('active')){
                        $('video').get(6).pause();
                    }
                });
                 $('.video-frame-7, #video-testimonial-7 ').click(function(){
                    $('#video-testimonial-7').toggleClass('active');
                    $('video').get(7).play();
                    if(!$('#video-testimonial-7').hasClass('active')){
                        $('video').get(7).pause();
                    }
                });
                $('.video-frame-8, #video-testimonial-8 ').click(function(){
                    $('#video-testimonial-8').toggleClass('active');
                    $('video').get(8).play();
                    if(!$('#video-testimonial-8').hasClass('active')){
                        $('video').get(8).pause();
                    }
                });
                $('.video-frame-9').click(function(){
                    $('#video-testimonial-2').toggleClass('active');
                    $('video').get(2).play();
                    if(!$('#video-testimonial-2').hasClass('active')){
                        $('video').get(2).pause();
                    }
                });


                $('#contact-button, .nav-contact').click(function(){
                    $('.form-contact').addClass('active');
                });
                $('.form-contact .close').click(function(){
                    $('.form-contact').removeClass('active');
                });




                $('.slide__col').click(function(){
                    $('.slide__col').removeClass('active');

                    $(this).addClass('active');


    
                    if( $( window ).width() <= 768 ){
                        console.log('mobile');

                    }
                });

                $('.slide__text-wrapper-small').click(function(){
                    $(this).closest('.slide__col').addClass('active');
                });
              


                $('.slide__text-wrapper-large .slide__more').click(function(e){
                    $(this).closest('.slide__col').removeClass('active');
                    e.stopPropagation();
                });

                $('.slide__next-double-arrow_left').click(function(e){
                    $(this).closest('.slide__col_quoted').removeClass('active');
                    e.stopPropagation();
                    $(this).closest('.slide__col_quoted').prevAll('.slide__col_quoted:first').addClass('active');
                });

                $('.slide__next-double-arrow_right').click(function(e){
                    $(this).closest('.slide__col_quoted').removeClass('active');
                    e.stopPropagation();
                    $(this).closest('.slide__col_quoted').nextAll('.slide__col_quoted:first').addClass('active');
                });

                if( $( window ).width() <= 768 ){
                    console.log('mobile');
                    

                }


            }
      
        	// scrollOverflow: true,
        	// normalScrollElements: '.history-block'
        });
});

