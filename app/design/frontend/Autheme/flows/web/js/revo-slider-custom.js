require([
    'jquery',
    'revolution/js/jquery.themepunch.tools.min',
    'revolution/js/jquery.themepunch.revolution.min'
],function(){
    // USE STRICT
    "use strict";

    jQuery(document).ready(function () {
        /* initialize the slider based on the Slider's ID attribute from the wrapper above */
        jQuery('#js-slider').show().revolution({
            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            responsiveLevels: [1900,1200, 992, 768, 480],
            gridwidth:[1900,1240, 1000, 800, 500],
            gridheight:[850, 550, 550, 550],
            delay: 5000,
            spinner: 'spinner2',
            visibilityLevels:[1900,1200, 992, 768, 480],
            /* basic navigation arrows and bullets */
            navigation: {
                onHoverStop: "off",
                arrows: {
                    enable: true,
                    style: 'uranus',
                    hide_onleave: false
                },

                bullets: {
                    enable: false,
                    style: 'hermes',
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5
                }
            }
        });
        jQuery('#js-slider-1').show().revolution({
            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            responsiveLevels: [1200, 992, 768, 480],
            gridwidth:[1240, 1000, 800, 500],
            gridheight:[850, 550, 550, 550],
            delay: 5000,
            spinner: 'spinner2',
            visibilityLevels:[1200, 992, 768, 480],
            /* basic navigation arrows and bullets */
            navigation: {
                onHoverStop: "off",
                arrows: {
                    enable: true,
                    style: 'uranus',
                    hide_onleave: false
                },

                bullets: {
                    enable: false,
                    style: 'hermes',
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5
                }
            }
        });
        jQuery('#js-slider-4').show().revolution({
            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            responsiveLevels: [1900,1200, 992, 768, 480],
            gridwidth:[1900,1240, 1000, 800, 500],
            gridheight:[850, 550, 550, 550],
            delay: 5000,
            spinner: 'spinner2',
            visibilityLevels:[1900,1200, 992, 768, 480],
            /* basic navigation arrows and bullets */
            navigation: {
                onHoverStop: "off",
                arrows: {
                    enable: true,
                    style: 'uranus',
                    hide_onleave: false
                },

                bullets: {
                    enable: false,
                    style: 'hermes',
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5
                }
            }
        });
        jQuery('#js-slider-home-3').show().revolution({
            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            responsiveLevels: [1200, 992, 768, 480],
            gridwidth:[1240, 1000, 800, 500],
            gridheight:[735,550, 550, 550, 550],
            sliderLayout: 'auto',
            delay: 5000,
            spinner: 'spinner2',
            /* basic navigation arrows and bullets */
            navigation: {
                onHoverStop: "off",
                arrows: {
                    enable: true,
                    style: 'uranus',
                    hide_onleave: false
                },

                bullets: {
                    enable: false,
                    style: 'hermes',
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5
                }
            }
        });
        jQuery('#js-slider-home-5').show().revolution({
            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            responsiveLevels: [1200, 992, 768, 480],
            gridwidth:[1240, 1000, 800, 500],
            gridheight:[999,550, 550, 550, 550],
            sliderLayout: 'auto',
            delay: 5000,
            spinner: 'spinner2',
            /* basic navigation arrows and bullets */
            navigation: {
                onHoverStop: "off",
                arrows: {
                    enable: true,
                    style: 'uranus',
                    hide_onleave: false
                },

                bullets: {
                    enable: false,
                    style: 'hermes',
                    hide_onleave: false,
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 20,
                    space: 5
                }
            }
        });
    });

})(jQuery);