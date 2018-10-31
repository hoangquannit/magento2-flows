require([
    'jquery'
],function(){
    // USE STRICT
    "use strict";

    jQuery(document).ready(function () {

        /*Preloader animsition*/

        jQuery(window).on('load', function () {
            $('.page-loader').fadeOut('slow', function () {
                $(this).remove();
            });
        });
        // // fixed navbar when scroll
        // var navbarFix = $(".header-windown");
        // var headerOffset = navbarFix.offset().top + 1;
        // $(window).on('scroll', function () {
        //     if ($(window).scrollTop() > headerOffset) {
        //         navbarFix.addClass('fixed').removeClass("unfixed");
        //     } else {
        //         navbarFix.addClass('unfixed').removeClass("fixed");
        //     }
        // });

        var navbarSelect = document.querySelector("#js-navbar-fixed.section-navbar-4, #js-navbar-fixed.section-navbar-6");

        if (navbarSelect) {
            var headroom  = new Headroom(navbarSelect, {
                classes : {
                    // when element is initialised
                    initial : "headroom",
                    // when scrolling up
                    pinned : "headroom--pinned",
                    // when scrolling down
                    unpinned : "headroom--unpinned",
                    // when above offset
                    top : "unfixed",
                    // when below offset
                    notTop : "headroom--not-top",
                    // when at bottom of scoll area
                    bottom : "headroom--bottom",
                    // when not at bottom of scroll area
                    notBottom : "headroom--not-bottom"
                }
            });
            // initialise
            headroom.init();
        }


        // --------------------------------------------------
        // Back To Top
        // --------------------------------------------------
        var offset = 450;
        var duration = 500;
        var upToTop = $("#up-to-top");
        upToTop.hide();
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > offset) {
                upToTop.fadeIn(duration);
            } else {
                upToTop.fadeOut(duration);
            }
        });

        upToTop.on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        });
    });


    /*Hamburger Button*/
    $('.hamburger').on("click", function () {
        $(this).toggleClass("is-active");
        $('.au-navbar-mobile').slideToggle(200, 'linear');
    });

    // Navbar menu dropdown
    $('.au-navbar-mobile .au-navbar-menu .drop .arrow').on('click', function (e) {
        $(this).siblings('.drop-menu').slideToggle(200, 'linear');
        $(this).toggleClass('clicked');
        e.stopPropagation();
    });

    // $('#clock').countdown('2018/08/10', function(event) {
    //   var $this = $(this).html(event.strftime(''
    //     + '<span class="clock days"><span class="date-1">%D</span></br><span class="date-2">Days</span> </span>'
    //     + '<span class="clock hours"><span class="date-1">%H</span></br><span class="date-2">Hours</span></span>'
    //     + '<span class="clock minutes"><span class="date-1">%M</span></br><span class="date-2">Minutes</span> </span>'
    //     + '<span class="clock seconds"><span class="date-1">%S</span></br><span class="date-2">Seconds</span></span>'));
    // });

    // Navbar menu dropdown
    $(document).ready(function() {
        $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
        $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
    });
     // Mini Cart
    $('.mini-cart-btn').on('click', function () {
      $('.mini-cart').slideToggle("500");
    });
     // Menu sidebar
    $('.drop-sidebar').on('click', function () {
      $('.drop-menu-ul').slideToggle("500");
    });
     // View product
    $('.view-product').on('shown.bs.modal', function () {
      $('.content-product').focus()
    })

    try {
        // Price Filter
        var html5Slider = document.getElementById('pricepicker');
        if (html5Slider !== null) {
            noUiSlider.create(html5Slider, {
                start: [ 0, 999 ],
                connect: true,
                step: 1,
                tooltips: true,
                range: {
                    'min': 0,
                    'max': 999
                }
            });
        }

    } catch (error) {
        console.log(error);
    }


    try {
    $('.quantity').each(function () {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.on('click', function(){
        var oldValue = parseFloat(input.val());
        var newVal = oldValue + 1;
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.on('click', function(){
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });


    });
  } catch (error) {
    console.log(error);
  }

});

