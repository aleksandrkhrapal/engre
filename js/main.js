$(document).ready(function () {
    // login registration
    $(".go-to-login").click(function () {
        $('.form-enter-section').removeClass('move-position');
        $(".signIn").addClass("active-sx");
        $(".signUp").addClass("inactive-dx");
        $(".signUp").removeClass("active-dx");
        $(".signIn").removeClass("inactive-sx");
    });

    $(".go-to-register").click(function () {
        $('.form-enter-section').addClass('move-position');
        $(".signUp").addClass("active-dx");
        $(".signIn").addClass("inactive-sx");
        $(".signIn").removeClass("active-sx");
        $(".signUp").removeClass("inactive-dx");
    });

    // input focus
    $('.input-row input, .input-row textarea').on('change', function () {
        if ($(this).val()) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

    $('.video-bg').click();

    $(".dropdown-select-lang .dropdown-menu a").click(function () {
        $(".selected-lang").html($(this).text() + ' <span class="mdi mdi-chevron-down"></span>');

        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $(".dropdown-select-lang .dropdown-menu a").removeClass('selected');
            $(this).addClass('selected');
        }
    });

    // video page slider
    $('.hp-main-text').slick({
        arrows: false,
        dots: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 900,
        infinite: true
    });

    // mobile menu
    $('.mobile-menu-button').on('click', function (e) {
        e.preventDefault();

        if ($('body').hasClass('overflow-h')) {
            $('body').removeClass('overflow-h');
        } else {
            $('body').addClass('overflow-h');
        }

        if ($('.main-nav').hasClass('open')) {
            $('.main-nav').removeClass('open');
        } else {
            $('.main-nav').addClass('open');
        }

        if ($('.mobile-menu-mask').hasClass('open')) {
            $('.mobile-menu-mask').removeClass('open');
        } else {
            $('.mobile-menu-mask').addClass('open');
        }

        if ($('.mobile-menu-button').hasClass('open')) {
            $('.mobile-menu-button').removeClass('open');
        } else {
            $('.mobile-menu-button').addClass('open');
        }
    });

    $('.mobile-menu-mask').on('click', function (e) {
        e.preventDefault();

        if ($('body').hasClass('overflow-h')) {
            $('body').removeClass('overflow-h');
        }
        if ($('.main-nav').hasClass('open')) {
            $('.main-nav').removeClass('open');
        }
        if ($('.mobile-menu-mask').hasClass('open')) {
            $('.mobile-menu-mask').removeClass('open');
        }
        if ($('.mobile-menu-button').hasClass('open')) {
            $('.mobile-menu-button').removeClass('open');
        }
    });

    $('.step-tags').on('click', 'a', function (e) {
        e.preventDefault();
        $(this.dataset.target).click();
    });

    // landing page top slider
    var slider = $('.slider');

    slider.slick({
        draggable: true,
        arrows: false,
        dots: true,
        fade: true,
        speed: 900,
        infinite: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100
    });

    slider.on("beforeChange", function(event, slick, currentSlide, nextSlide) {
        var stepLinks = $(".step-tags a");
        stepLinks.removeClass('active');
        $(stepLinks[nextSlide]).addClass('active');
    });

    // aos init
    if ($(window).width() > 750) {
        AOS.init();
    }

    if ($(window).width() < 750) {
        $('img, div, section').removeAttr('data-aos');
    }

    // search effect
    if ($(window).width() > 901) {
        $('.search-button').on('click', function (e) {
            e.preventDefault();
            if ($('.categories-wrapper').hasClass('search-active')) {
                $('.categories-wrapper').removeClass('search-active');
            } else {
                $('.categories-wrapper').addClass('search-active');
            }

            if ($('.categories-dropdown a').hasClass('active')) {
                $('.categories-dropdown a.active').clone().prependTo($('.category-active'));
            } else {
                $('.category-active a').hide();
            }
        });

        $('.category-active').on('click', function (e) {
            e.preventDefault();
            if ($('.categories-dropdown').hasClass('show-dropdown')) {
                $('.categories-dropdown').removeClass('show-dropdown');
            } else {
                $('.categories-dropdown').addClass('show-dropdown');
            }
        });
    }

    // mobile categories
    $('.category-active-mobile').on('click', function (e) {
       e.preventDefault();
       $('.categories-dropdown').toggleClass('mobile-toggle');
    });

    // don't close dropdown on click by element inside
    $(document).on('click', '.more-filter-dropdown .dropdown-menu', function (e) {
        e.stopPropagation();
    });

    // video page slider
    $('.about-slider').slick({
        arrows: true,
        dots: false,
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        centerPadding: '130px',
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev"><span class="mdi mdi-chevron-left"></span> Previous</div>',
        nextArrow: '<div class="slick-next">Next <span class="mdi mdi-chevron-right"></span></div>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    centerPadding: '30px'
                }
            },
            {
                breakpoint: 680,
                settings: {
                    centerPadding: '90px'
                }
            },
            {
                breakpoint: 575,
                settings: {
                    centerPadding: '15px'
                }
            }
        ]

    });

    $('.about-slider').on('wheel', (function(e) {
        e.preventDefault();

        if (e.originalEvent.deltaY > 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    }));

    // textarea on click make new line
    $('textarea').each(function () {
        this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
});