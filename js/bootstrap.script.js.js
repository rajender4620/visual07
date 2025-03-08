//   all ------------------
function initMindstudio() {
    "use strict";
    //   loader ------------------
    $(".spinner").fadeOut(500, function() {
        $("#main").animate({
            opacity: "1"
        }, 500);
    });
    //   Background image ------------------
    var a = $(".bg");
    a.each(function(a) {
        if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
    });
    //   css ------------------
    function dhk() {
        $(".alt").each(function() {
            $(this).css({
                "top": "50%",
                "margin-top": -$(this).height() / 2 + "px"
            });
        });
    }
    dhk();
    $(window).on("resize", function() {
        dhk();
    });
    //   Isotope------------------
    function e() {
        if ($(".gallery-items").length) {
            var a = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
                transformsEnabled: true,
                transitionDuration: "700ms",
                resizable: true
            });
            a.imagesLoaded(function() {
                a.isotope("layout");
            });
            $(".gallery-filters").on("click", "a.gallery-filter", function(b) {
                var c = $(this).attr("data-filter"),
                    d = $(this).text();
                b.preventDefault();
                var c = $(this).attr("data-filter");
                a.isotope({
                    filter: c
                });
                $(".gallery-filters a.gallery-filter").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
            });
        }
    }
    e();
    $(window).on("load", function() {
        e();
    });
    $(".gallery-item").on('touchstart', function() {
        $(this).trigger('hover');
    }).on('touchend', function() {
        $(this).trigger('hover');
    });
    //   Swiper------------------
    if ($(".slider-wrap").length > 0) {
        var g = new Swiper(".slider-wrap .swiper-container", {
            slidesPerView: "auto",
            centeredSlides: false,
            spaceBetween: 10,
            grabCursor: true,
            freeMode: true,
            mousewheelControl: true,
            mousewheelReleaseOnEdges: true,
            mousewheelSensitivity: 1,
            preloadImages: true,
            updateOnImagesReady: true,
            pagination: '.swiper-pagination',
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev"
        });
    }

    $(".filter-buttons").on("click", function() {
        var value = $(this).attr('data-filter');
        $(".filter-buttons").removeClass("active-cat");
        $(this).addClass("active-cat");
        if (value == "all") {
            $('.filter-gal .swiper-slide').show('1000', function() {
                prwrap.update({
                    updateTranslate: true
                });
            });
        } else {
            $('.filter-gal .swiper-slide').not('.' + value).hide('3000', function() {
                prwrap.update({
                    updateTranslate: true
                });
            });
            $('.filter-gal .swiper-slide').filter('.' + value).show('3000', function() {
                prwrap.update({
                    updateTranslate: true
                });

            });
        }
    });
    if ($(".center-carousel").length > 0) {
        var cf = $(".center-carousel").data("cen");
        var cfl = $(".center-carousel").data("loopcar");
        var g = new Swiper(".center-carousel .swiper-container", {
            slidesPerView: "auto",
            centeredSlides: cf,
            spaceBetween: 20,
            grabCursor: true,
            freeMode: false,
            loop: cfl,
            mousewheelControl: true,
            mousewheelReleaseOnEdges: true,
            mousewheelSensitivity: 1,
            preloadImages: false,
            updateOnImagesReady: false,
            pagination: '.swiper-pagination',
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev"
        });
    }
    $(".shibtn").on("click", function() {
        $(".det-overlay").fadeIn(400);
        $(".hid-det-anim").animate({
            left: 0
        }, 400);
        return false;
    });
    $(".close-det , .det-overlay").on("click", function() {
        $(".det-overlay").fadeOut(400);
        $(".hid-det-anim").animate({
            left: "-650px"
        }, 400);
        return false;
    });
    if ($(".fs-gallery-wrap").length > 0) {
        var h = $(".fs-gallery-wrap").data("autoplayslider"),
            i = $(".fs-gallery-wrap").data("slidereffect");
        var j = new Swiper(".fs-gallery-wrap .swiper-container", {
            autoplay: h,
            autoplayDisableOnInteraction: false,
            pagination: '.swiper-pagination',
            effect: i,
            speed: 1000,
            grabCursor: true,
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            loop: true,
            mousewheelControl: true,
            mousewheelReleaseOnEdges: true,
            mousewheelSensitivity: 1,
        });
    }

    function showfs() {
        $("#wrapper").addClass("fs-mode-active");
        $("footer.fixed-footer").animate({
            bottom: "-100px"
        }, 200);
        $("header.main-header").animate({
            top: "-100px"
        }, 200);

        $(".fs-mode").removeClass("isfs");

        $(".det-overlay , .fix-pr-det").addClass("isfsdet");
    }

    function hidefs() {
        $("#wrapper").removeClass("fs-mode-active");
        $("footer.fixed-footer").animate({
            bottom: 0
        }, 200);
        $("header.main-header").animate({
            top: 0
        }, 200);

        $(".fs-mode").addClass("isfs");
        $(".det-overlay , .fix-pr-det").removeClass("isfsdet");

    }
    $(".fs-mode").on("click", function() {
        if ($(".fs-mode").hasClass("isfs")) showfs();
        else hidefs();
        return false;
    });
    var m = new Swiper(".single-slider .swiper-container", {
        pagination: ".swiper-pagination",
        effect: $(".single-slider").data("effects"),
        loop: true,
        grabCursor: true,
        autoHeight: true,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev"
    });
    var swiper = new Swiper('.album-list .swiper-container', {
        scrollbarHide: true,
        slidesPerView: 'auto',
        centeredSlides: false,
        spaceBetween: 5,
        grabCursor: true,
        freeMode: true,

    });
    //   lightGallery------------------
    $(".image-popup , .single-popup-image").lightGallery({
        selector: "this",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        counter: false
    });
    var o = $(".lightgallery"),
        p = o.data("looped");
    o.lightGallery({
        selector: ".lightgallery a.popup-image , .lightgallery  a.popgal",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        loop: p,
        counter: false
    });

    $(".filter-button").on("click", function() {
        $(".hid-filter").slideToggle(500);
    });
    $(".show-exfilter").on("click", function(a) {
        a.preventDefault();
        $(".product-mainfilter").slideToggle(500);
    });
    //   appear------------------
    $(".stats").appear(function() {
        $(".num").countTo();
    });
    $(".skillbar-box").appear(function() {
        $("div.skillbar-bg").each(function() {
            $(this).find(".custom-skillbar").delay(600).animate({
                width: $(this).attr("data-percent")
            }, 1500);
        });
    });
    //   share------------------
    var r = $(".share-wrapper");

    function s() {
        A();
        r.animate({
            right: 0
        }, 500);
        r.removeClass("isShare");
    }

    function t() {
        r.animate({
            right: "-130px"
        }, 500);
        r.addClass("isShare");
    }
    $(".show-share").on("click", function() {
        if (r.hasClass("isShare")) s();
        else t();
    });
    var u = $(".share-container");
    u.share({
        networks: ["facebook", "pinterest", "googleplus", "twitter", "linkedin"]
    });
    //   tabs------------------
    $(".tabs-menu a").on("click", function(a) {
        a.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var b = $(this).attr("href");
        $(".tab-content").not(b).css("display", "none");
        $(b).fadeIn();
    });
    //   scroll to------------------
    $(".custom-scroll-link").on("click", function() {
        var a = 70;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
    //   to top------------------
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {

            $(".to-top").fadeIn(500);
        } else {

            $(".to-top").fadeOut(500);
        }
    });
    $('<a class="to-top"><i class="fa fa-angle-up"></i></a>').appendTo("#main");
    $(".to-top").on("click", function(a) {
        a.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    //   show hide------------------
    $(".show-cart").on("click", function() {
        $(".cart-overlay").fadeIn(400);
        $(".cart-modal").animate({
            right: 0
        }, 400);
        return false;
    });
    $(".cart-overlay , .close-cart").on("click", function() {
        $(".cart-overlay").fadeOut(400);
        $(".cart-modal").animate({
            right: "-350px"
        }, 400);
        return false;
    });


    //   show hide------------------
    $(".menubutton").on("click", function() {
        $(".top-bar-menu").slideToggle(300);
    });
    $(".cat-button").on("click", function() {
        $(".category-nav-inner ul").slideToggle(300);
    });
    $(".product-cat-mains").matchHeight();

    var x = $(".show-fixed-search"),
        y = $(".fixed-search");

    function z() {
        x.removeClass("vissearch");
        y.fadeIn(300);
        t();
    }

    function A() {
        x.addClass("vissearch");
        y.fadeOut(300);
    }
    x.on("click", function() {
        if ($(this).hasClass("vissearch")) z();
        else A();
    });
    $(".search-form-bg").on("click", function() {
        A();
    });
    $(".blog-btn").on("click", function() {
        $(this).parent(".blog-btn-filter").find("ul").slideToggle(500);
        return false;
    });
    $(".scroll-nav").addClass("black-bg");
    //   Window scroll------------------
    $(window).bind("scroll", function() {
        $("section").each(function() {
            var a = $(this);
            var sn = $(".scroll-nav");
            var b = a.position().top - $(window).scrollTop();
            if (b <= 0) {
                $("section").removeClass("current2");
                a.addClass("current2");
            } else {
                a.removeClass("current2");
                sn.removeClass("black-bg");
            }
            if ($(".current2").hasClass("parallax-section")) sn.addClass("black-bg");
            else sn.removeClass("black-bg");
        });
    });
    //   Sidebar /  menu ------------------
    var sbo = $(".sb-overlay "),
        sbm = $(".hiiden-sidebar-wrap"),
        sbmb = $(".sidebar-button-wrap");

    function B() {
        sbo.fadeIn(300);
        sbm.animate({
            right: 0
        });
        sbmb.removeClass("vis-m");
        $("html, body").addClass("hidhtml")
    }

    function C() {
        sbm.animate({
            right: "-470px"
        });
        sbo.fadeOut(300);
        sbmb.addClass("vis-m");
        $("html, body").removeClass("hidhtml")
    }
    sbo.on("click", function() {
        C();
    });
    sbmb.on("click", function() {
        if ($(this).hasClass("vis-m")) B();
        else C();
    });
    $(".nav-button-wrap").on("click", function() {
        $(this).toggleClass("active");
        $(".nav-holder").slideToggle(500);
    });
    var D = function() {
        $(".box-item").on("touchstart", function() {
            $(this).trigger("hover");
        }).on("touchend", function() {
            $(this).trigger("hover");
        });
    };
    D();
    if ($(window).width() < 1064) {
        $(".nav-holder nav li").on("click", function() {
            $(this).find("ul").toggleClass("visul");
        });
        $(".nav-holder nav li ul").parent("li").addClass("lidec")
    }


}
// parallax ------------------
function initparallax() {
    var a = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
        }
    };
    trueMobile = a.any();
    if (null == trueMobile) {
        var b = new Scrollax();
        b.reload();
        b.init();
    }
    if (trueMobile) $(".background-video").remove();
}

$(window).load(function() {
    initMindstudio();
    initparallax();
});