$(document).ready(function(){
    $('#modal-product .modal__inner').on('click', function(e) {
        if (e.target !== this)
            return;
         
        $('#modal-product').removeClass('modal--active');
        $('body').removeClass('body-hidden');
    });

    function headerFixed() {
        var scrollTop = $(window).scrollTop();

        if(scrollTop > 100) {
            $('.header').addClass('header--scroll');
        }else {
            $('.header').removeClass('header--scroll');
        }
    }

    headerFixed();
    $(window).scroll(function () {
        headerFixed();
    });

    // welcome slider
    var time = 10;
    var $bar,
        $welcomeSlider,
        isPause,
        tick,
        percentTime;

    $welcomeSlider = $('.welcome-slider');
    $welcomeSlider.on('init', function(event, slick) {
        var current = slick.currentSlide + 1,
            total = slick.slideCount;
        $('.welcome-slider__number-current').text(String(current).padStart(2, '0'));
        $('.welcome-slider__number-total').text(String(total).padStart(2, '0'));
    });
    $welcomeSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.welcome-slider__number-current').text(String(nextSlide + 1).padStart(2, '0'));
    });
    $welcomeSlider.slick({
        draggable: true,
        adaptiveHeight: false,
        dots: false,
        mobileFirst: true,
        pauseOnDotsHover: true,
        speed: 1000,
        prevArrow: $('.welcome-slider__arrows-item--prev'),
        nextArrow: $('.welcome-slider__arrows-item--next')
    });

    $bar = $('.welcome-slider__progress-inner');

    function barNumber() {
        var bw = $bar.width(),
            bPosition = (bw/2) -30;

        $bar.find('.welcome-slider__number').css('left',bPosition);
    }

    barNumber();

    $(window).resize(function () {
        barNumber();
    });

    $('.welcome').on({
        mouseenter: function() {
            isPause = true;
        },
        mouseleave: function() {
            isPause = false;
        }
    })

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if(isPause === false) {
            percentTime += 1 / (time+0.1);
            $bar.css({
                width: percentTime+"%"
            });
            if(percentTime >= 100)
            {
                $welcomeSlider.slick('slickNext');
                startProgressbar();
            }
        }
    }

    function resetProgressbar() {
        $bar.css({
            width: 0+'%'
        });
        clearTimeout(tick);
    }

    startProgressbar();

    // welcome slider
    var time2 = 10;
    var $bar2,
        $suppliersSlider,
        isPause2,
        tick2,
        percentTime2;

    $suppliersSlider = $('.suppliers-slider');
    $suppliersSlider.on('init', function(event, slick) {
        var current = slick.currentSlide + 1,
            total = slick.slideCount;
        $('.suppliers-slider__number-current').text(String(current).padStart(2, '0'));
        $('.suppliers-slider__number-total').text(String(total).padStart(2, '0'));
    });
    $suppliersSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.suppliers-slider__number-current').text(String(nextSlide + 1).padStart(2, '0'));
    });
    $suppliersSlider.slick({
        draggable: true,
        adaptiveHeight: false,
        dots: false,
        mobileFirst: true,
        pauseOnDotsHover: true,
        speed: 1000,
        prevArrow: $('.suppliers-slider__arrows-item--prev'),
        nextArrow: $('.suppliers-slider__arrows-item--next')
    });

    $bar2 = $('.suppliers-slider__progress-inner');

    function barNumber2() {
        var bw = $bar2.width(),
            bPosition = (bw/2) -30;

        $bar2.find('.suppliers-slider__number').css('left',bPosition);
    }

    barNumber2();

    $(window).resize(function () {
        barNumber2();
    });

    $('.suppliers-slider-w').on({
        mouseenter: function() {
            isPause2 = true;
        },
        mouseleave: function() {
            isPause2 = false;
        }
    })

    function startProgressbar2() {
        resetProgressbar2();
        percentTime2 = 0;
        isPause2 = false;
        tick2 = setInterval(interval2, 10);
    }

    function interval2() {
        if(isPause2 === false) {
            percentTime2 += 1 / (time2+0.1);
            $bar2.css({
                width: percentTime2+"%"
            });
            if(percentTime2 >= 100)
            {
                $suppliersSlider.slick('slickNext');
                startProgressbar2();
            }
        }
    }

    function resetProgressbar2() {
        $bar2.css({
            width: 0+'%'
        });
        clearTimeout(tick2);
    }

    startProgressbar2();

    // popular-slider
    if(window.innerWidth > 650) {
        $('.popular-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            prevArrow: '<div class="popular-slider__arrow popular-slider__arrow--prev"><i class="icon-arrow-left"></i></div>',
            nextArrow: '<div class="popular-slider__arrow popular-slider__arrow--next"><i class="icon-arrow-right"></i></div>',
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });

        $('.popular-slider-small').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            prevArrow: '<div class="popular-slider-small__arrow popular-slider-small__arrow--prev"><i class="icon-arrow-left"></i></div>',
            nextArrow: '<div class="popular-slider-small__arrow popular-slider-small__arrow--next"><i class="icon-arrow-right"></i></div>',
        });
    }


    // lightcase
    $('a[data-rel^=lightcase]').lightcase();

    // .comments-slider
    if(window.innerWidth <= 568) {
        $('.comments-slider__item').unwrap('.comments-slider__col');

        $('.comments-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="comments__m-arrows comments__m-arrows--prev"><i class="icon-arrow-left"></i></div>',
            nextArrow: '<div class="comments__m-arrows comments__m-arrows--next"><i class="icon-arrow-right"></i></div>'
        });
    }else {
        $('.comments-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
            prevArrow: $('.comments__arrows-item--prev'),
            nextArrow: $('.comments__arrows-item--next'),
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        prevArrow: '<div class="comments__m-arrows comments__m-arrows--prev"><i class="icon-arrow-left"></i></div>',
                        nextArrow: '<div class="comments__m-arrows comments__m-arrows--next"><i class="icon-arrow-right"></i></div>'
                    }
                }
            ]
        });
    }

    // .p-c-select
    if(window.innerWidth <= 568) {
        $('.p-c-select__selected').click(function (e) {
            e.preventDefault();

            $(this).toggleClass('p-c-select__selected--active');
            $(this).siblings('.p-c-select__list').slideToggle();
        });

        $('.p-catalog__list-item').eq(0).addClass('p-catalog__list-item--active');

        $('.p-c-select__list-item').click(function () {
            var num = $(this).index();

            $('.p-catalog__list-item').removeClass('p-catalog__list-item--active');
            $('.p-catalog__list-item').eq(num).addClass('p-catalog__list-item--active');
            $('.p-c-select__list').slideUp();
            $('.p-c-select__selected').removeClass('p-c-select__selected--active');
        });
    }

    // .header-menu__drop-head

    $('.header-menu__drop-head').click(function () {
        $(this).parents('.header-menu__drop').toggleClass('header-menu__drop--active');
        $(this).siblings('.header-menu__drop-list').slideToggle();
    });

    // .header--btn-menu

    $('.header__btn-menu').click(function(e){
        e.preventDefault();

        $(this).toggleClass('header__btn-menu--active');
        $("#overlay").fadeToggle();
        $('.header-menu').toggleClass('header-menu--active');
        $('body').toggleClass('body-hidden');
    });

    $('.header-menu__close, #overlay').click(function (e) {
        e.preventDefault();

        $('.header__btn-menu').removeClass('header__btn-menu--active');
        $("#overlay").fadeOut();
        $('.header-menu').removeClass('header-menu--active');
        $('body').removeClass('body-hidden');
    });
    // catalog-filter__btn
    $('.catalog-filter__btn').click(function(e){
        e.preventDefault();

        $(this).toggleClass('catalog-filter__btn--active');
    });

    // .certificate-slider

    $('.certificate-slider').slick({
        prevArrow: $('.certificate-slider__arrow-item--prev'),
        nextArrow: $('.certificate-slider__arrow-item--next')
    });

    // .product-m-slider

    $('.product-m-slider').slick({
        prevArrow: '<div class="product-m-slider__arrow product-m-slider__arrow--prev"><i class="icon-arrow-left"></i></div>',
        nextArrow: '<div class="product-m-slider__arrow product-m-slider__arrow--next"><i class="icon-arrow-right"></i></div>',
        slidesToShow: 1,
        slidesToScroll: 1,
        //autoplay: true,
        //autoplaySpeed: 2000
    });

    // .modal-btn
    $('.modal-btn').click(function (e) {
        e.preventDefault();

        var modal = $(this).attr('href');

        $('.modal').removeClass('modal--active');
        $(modal).addClass('modal--active');
        $('body').addClass('body-hidden');

        if($('#done').is('.modal--active')) {
            setTimeout(function () {
                $('#done').removeClass('modal--active');
                $('body').removeClass('body-hidden');
            },5000);
        }
    });

    $('.modal__close').click(function (e) {
        e.preventDefault();

        if(!$(this).hasClass('modal-btn')) {
            $('.modal').removeClass('modal--active');
            $('body').removeClass('body-hidden');
        }
    });

    // $('.modal').on('click', function(e) {
    //     if (e.target !== this)
    //         return;
    //
    //     $('.modal').removeClass('modal--active');
    //     $('body').removeClass('body-hidden');
    // });


    // .basket-table__remove
    // $('.basket-table__remove').click(function (e) {
    //     e.preventDefault();
    //     $(this).parents('.basket-table__tr').fadeOut('600',function () {
    //         $(this).remove();
    //     });
    // });

    // // spinner
    // $(document).on('click','.spinner__btn--up',function () {
    //     e.preventDefault();
    //
    //     var num = $(this).siblings('.spinner__num'),
    //         val = parseInt(num.text());
    //
    //     num.text(val + 1);
    // });
    //
    // $(document).on('click','.spinner__btn--down',function () {
    //     e.preventDefault();
    //
    //     var num = $(this).siblings('.spinner__num'),
    //         val = parseInt(num.text());
    //
    //     num.text(val + 1);
    //
    //     if(val <= 1) {
    //         num.text('1');
    //     }else {
    //         num.text(val - 1);
    //     }
    // });

    // v code
    var vcode = (function(){
        //cache dom
        var $inputs = $(".vcode").find("input");

        //bind events
        $inputs.on('keyup', processInput);

        //define methods
        function processInput(e) {
            var x = e.charCode || e.keyCode;
            if( (x == 8 || x == 46) && this.value.length == 0) {
                var indexNum = $inputs.index(this);
                if(indexNum != 0) {
                    $inputs.eq($inputs.index(this) - 1).focus().parents('.vcode__item').removeClass('vcode__item--active').next('.vcode__item').removeClass('vcode__item--active');
                }
            }

            if( ignoreChar(e) )
                return false;
            else if (this.value.length == this.maxLength) {
                $(this).parents('.vcode__item').addClass('vcode__item--active').next('.vcode__item').find('input').focus();
            }
        }
        function ignoreChar(e) {
            var x = e.charCode || e.keyCode;
            if (x == 37 || x == 38 || x == 39 || x == 40  )
                return true;
            else
                return false
        }

    })();

    $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    };

    $(".vcode__item input").inputFilter(function(value) {return /^-?\d*$/.test(value); });

    // countdowntimer
    // var timeleft = 100;
    // var downloadTimer = setInterval(function(){
    //     timeleft--;
    //     document.getElementById("countdowntimer").textContent = timeleft;
    //     if(timeleft <= 0)
    //         clearInterval(downloadTimer);
    // },1000);
    // .image-slider
    $('.image-slider').on('init', function (event, slick, direction) {
        // check to see if there are one or less slides
        if (!($('.image-slider .slick-dots li').length > 1)) {
            $('.image-slider .slick-dots').hide();
        }
    });
    $('.image-slider').slick({
        prevArrow: '<div class="image-slider__arrow image-slider__arrow--prev"><i class="icon-arrow-left"></i></div>',
        nextArrow: '<div class="image-slider__arrow image-slider__arrow--next"><i class="icon-arrow-right"></i></div>',
        dots: true
    });



    // .filters__theme-text
    $('.filters__theme-text').click(function () {
        $(this).siblings('.filters__theme-drop').toggleClass('filters__theme-drop--active');
    });

    $('.filters__theme-list-link').click(function (e) {
        e.preventDefault();

        $(this).parents('.filters__theme-list').find('.filters__theme-list-link').removeClass('filters__theme-list-link--active');
        $(this).addClass('filters__theme-list-link--active');
        $('.filters__theme-drop').removeClass('filters__theme-drop-link--active');
    });

    $(document).on('click',function (e) {
        if(!$(e.target).closest('.filters__theme-text').length) {
            $('.filters__theme-drop').removeClass('filters__theme-drop--active');
        }
    });

    // phone mask
    Inputmask("+7 999 999 99 99").mask(document.querySelectorAll(".phone-mask"));

    //
    $('.popular-slider__text p, .popular-slider-small__text p').each(function(index, element) {
        var heading = $(element), word_array, last_word, first_part;

        word_array = heading.html().split(/\s+/);
        last_word = word_array.pop();
        first_part = word_array.join(' ');

        heading.html([first_part, ' <span class="last">', last_word, '</span>'].join(''));
    });

    //
    $('.select-styler').select2({
        width: 'resolve',
        minimumResultsForSearch: -1
    });
});



