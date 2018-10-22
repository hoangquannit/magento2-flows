(function ($) {
    // USE STRICT
    "use strict";
     $(document).ready(function() {

        $("#owl-products").owlCarousel({
            nav: true, 
            margin:30,
            slideSpeed : 600,
            autoplay : false,
            responsive:{
                320:{
                    items:1
                },
                768:{
                    items:1
                },
                979:{
                    items:1
                },
            },
            pagination: false,
            navText: [
              "<span class='mdi mdi-chevron-left'></span>",
              "<span class='mdi mdi-chevron-right'></span>"
            ],
        });

        $("#owl-recent-blog").owlCarousel({
            nav: true, 
            margin:30,
            loop:true,
            slideSpeed : 600,
            items : 3,
            responsive:{
                320:{
                    items:1
                },
                768:{
                    items:2
                },
                979:{
                    items:3
                },
            },
            pagination: false,
            navText: [
              "<span class='mdi mdi-chevron-left'></span>",
              "<span class='mdi mdi-chevron-right'></span>"
            ],
        });
        $("#owl-recent-blog-4").owlCarousel({
            nav: true, 
            margin:30,
            loop:true,
            slideSpeed : 600,
            items : 2,
            responsive:{
                320:{
                    items:1
                },
                768:{
                    items:2
                },
                979:{
                    items:2
                },
            },
            pagination: false,
            navText: [
              "<span class='mdi mdi-chevron-left'></span>",
              "<span class='mdi mdi-chevron-right'></span>"
            ],
        });

        $("#owl-instagram").owlCarousel({
            nav: false,
            slideSpeed : 600,
            items : 3,
            responsive:{
                320:{
                    items:2
                },
                430:{
                    items:3
                },
                768:{
                    items:4
                },
                979:{
                    items:6
                },
                1240:{
                    items:8
                },
            },
            pagination: false,
        });

        $("#owl-partner").owlCarousel({
            nav: false,
            slideSpeed : 600,
            items : 3,
            responsive:{
                320:{
                    items:1
                },
                430:{
                    items:2
                },
                768:{
                    items:3
                },
                979:{
                    items:4
                },
                1240:{
                    items:5
                },
            },
            pagination: false,
        });
         $("#owl-our-team").owlCarousel({
            nav: false,
            slideSpeed : 600,
            margin:30,
            autoplay:true,
            dots:true,
            responsive:{
                430:{
                    items:2
                },
                768:{
                    items:3
                },
                979:{
                    items:4
                },
                1240:{
                    items:4
                },
            },
            pagination: false,
        });

         $("#owl-testimonial").owlCarousel({
            nav: true,
            slideSpeed : 600,
            margin:30,
            autoplay:true,
            dots:false,
            loop:true,
            responsive:{
                430:{
                    items:1
                },
                768:{
                    items:1
                },
                979:{
                    items:2
                },
                1240:{
                    items:2
                },
            },
            pagination: false,
            navText: [
              "<span class='mdi mdi-arrow-left'></span>",
              "<span class='mdi mdi-arrow-right'></span>"
            ],
        });
         $("#owl-item-product").owlCarousel({
            nav: false,
            slideSpeed : 600,
            margin:30,
            autoplay:true,
            dots:false,
            loop:true,
            responsive:{
                320:{
                    items:2
                },
                430:{
                    items:3
                },
                768:{
                    items:4
                },
                979:{
                    items:5
                },
                1240:{
                    items:6
                },
            },
            pagination: false,
        });
    });

})(jQuery);




