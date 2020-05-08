const hero = document.querySelector(".hero");
const logo = document.querySelector(".logo");
const nav = document.querySelector("nav");
const landimg = document.querySelector(".landimg");
const headline1 = document.querySelector(".headline1");
const headline2 = document.querySelector(".headline2");
const headline3 = document.querySelector(".headline3");
const headline4 = document.querySelector(".headline4");
const menuitems = document.querySelector(".menu-items");
const nos = document.querySelector(".nos");
const aheader = document.querySelector(".aheader");
const divholder = document.querySelector(".div-holder");
const dheader = document.querySelector(".dheader");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");
const clientes = document.querySelector(".climg");


landing()

function landing() {
    const tl = gsap.timeline();

    tl.from(logo, { opacity: 0, x: "-100%", duration: 3, ease: Power2.easeInOut })
        .from(menuitems, { opacity: 0, y: "-100%", duration: 3, ease: Power2.easeInOut }, "-=3")
        .from(headline1, { duration: 1.5, x: -300, opacity: 0, scale: 0.5, ease: Power2.easeInOut }, "-=1")
        .from(headline2, { duration: 1.5, x: 300, opacity: 0, scale: 0.5, ease: Power2.easeInOut })
        .from(headline3, { duration: 1.5, x: -300, opacity: 0, scale: 0.5, ease: Power2.easeInOut })
        .from(headline4, { duration: 1, opacity: 0, scale: 0.5, ease: Power2.easeInOut })
        .from(landimg, 6.5, { scale: 1.4, ease: Power2.easeIn }, "-=6");
}

function nosotros() {
    const tl1 = gsap.timeline();
    tl1.fromTo(nos, 3, { width: "120%", scale: 1.2 }, { width: "100%", x: 0, scale: 1, ease: Power2.easeInOut })
        .from(aheader, { duration: 2, opacity: 0, scale: 0.5, ease: Power2.easeInOut }, "-=1")
        .from(".aabout", { duration: 2, opacity: 0, ease: Power2.easeInOut })
        .from(".firma", { duration: 2, x: 200, opacity: 0, ease: Power2.easeInOut })
        .from(".cv", { duration: 1, opacity: 0, ease: Power2.easeInOut }, "-=1");
}

function divisiones() {
    const tl1 = gsap.timeline();
    tl1.from(dheader, { duration: 2, opacity: 0.3, scale: 0.5, x: "-200%", ease: Power2.easeInOut })
        .from(".ddesc", { duration: 1, opacity: 0, y: 30, ease: Power2.easeInOut })
        .from(card1, { duration: 2, opacity: 0, scale: 0, y: 50, x: -500, ease: Power2.easeInOut }, "+=1")
        .from(card2, { duration: 2, opacity: 0, scale: 0, y: 100, x: -800, ease: Power2.easeInOut })
        .from(card3, { duration: 2, opacity: 0, scale: 0, y: -200, x: -500, ease: Power2.easeInOut })
        .from(card4, { duration: 2, opacity: 0, scale: 0, y: -200, x: -800, ease: Power2.easeInOut });

}
function expertise() {
    const tl1 = gsap.timeline();
    tl1.from(".eheader", { duration: 2, opacity: 0.3, scale: 0.5, x: "-200%", ease: Power2.easeInOut })
        .from(".edesc", { duration: 1, opacity: 0, y: 30, ease: Power2.easeInOut })
        .from(".exp-holder", { duration: 3, opacity: 0, scale: 0.5, x: "-50%", ease: Power2.easeInOut }, "+=1")
        .from(".sige", { duration: 1, opacity: 0, y: 30, ease: Power2.easeInOut }, "+=2");

}


function cl() {
    const tl1 = gsap.timeline();
    tl1.from(clientes, 3, { scale: 2 })
        .from(".botclientes", 2, { opacity: 0, x: -500, ease: Power2.easeInOut })
        .from(".cli", 2, { opacity: 0 }, "-=1")
        .from(".botalianzas", 2, { opacity: 0, x: 200, ease: Power2.easeInOut })
        .from(".ali", 2, { opacity: 0, x: 200 }, "-=1")

}

function blog() {
    const tl1 = gsap.timeline();
    tl1.from(".links", 3, { opacity: 0, x: "-100%" })
        .from(".tnews", { duration: 1, opacity: 0, ease: Power2.easeInOut });
}

function contacto() {
    const tl1 = gsap.timeline();
    tl1.from(".sal", 3, { opacity: 0, x: "-100%" })
        .from(".datos", { duration: 1, opacity: 0, y: 30, ease: Power2.easeInOut });
}

$(function () {
    "use strict";

    var hl,
        newsList = $('.esp-headlines'),
        newsListItems = $('.esp-headlines li'),
        firstNewsItem = $('.esp-headlines li:nth-child(1)'),
        newsPreview = $('.esp-preview'),
        elCount = $('.esp-headlines').children(':not(.highlight)').index(),
        vPadding = (parseInt(firstNewsItem.css('padding-top').replace('px', ''), 10)) +
            (parseInt(firstNewsItem.css('padding-bottom').replace('px', ''), 10)),
        vMargin = (parseInt(firstNewsItem.css('margin-top').replace('px', ''), 10)) +
            (parseInt(firstNewsItem.css('margin-bottom').replace('px', ''), 10)),
        cPadding = (parseInt($('.esp-content').css('padding-top').replace('px', ''), 10)) +
            (parseInt($('.esp-content').css('padding-bottom').replace('px', ''), 10)),
        speed = 8000, // this is the speed of the switch
        myTimer = null,
        siblings = null,
        totalHeight = null,
        indexEl = 1,
        i = null;

    // the css animation gets added dynamicallly so 
    // that the news item sizes are measured correctly
    // (i.e. not in mid-animation)
    // Also, appending the highlight item to keep HTML clean
    newsList.append('<li class="highlight nh-anim"></li>');
    hl = $('.highlight');
    newsListItems.addClass('nh-anim');

    function doEqualHeight(c) {

        if (newsPreview.height() < newsList.height()) {
            newsPreview.height(newsList.height());
        } else if ((newsList.height() < newsPreview.height()) && (newsList.height() > parseInt(newsPreview.css('min-height').replace('px', ''), 10))) {
            newsPreview.height(newsList.height());
        }

        if ($('.esp-content:nth-child(' + c + ')').height() > newsPreview.height()) {
            newsPreview.height($('.esp-content:nth-child(' + c + ')').height() + cPadding);
        }
    }

    function doTimedSwitch() {

        myTimer = setInterval(function () {
            if (($('.selected').prev().index() + 1) === elCount) {
                firstNewsItem.trigger('click');
            } else {
                $('.selected').next(':not(.highlight)').trigger('click');
            }
        }, speed);

    }

    $('.news-content').on('mouseover', function () {
        clearInterval(myTimer);
    });

    $('.news-content').on('mouseout', function () {
        doTimedSwitch();
    });

    function doClickItem() {

        newsListItems.on('click', function () {

            newsListItems.removeClass('selected');
            $(this).addClass('selected');

            siblings = $(this).prevAll();
            totalHeight = 0;

            // this loop calculates the height of individual elements, including margins/padding
            for (i = 0; i < siblings.length; i += 1) {
                totalHeight += $(siblings[i]).height();
                totalHeight += vPadding;
                totalHeight += vMargin;
            }

            // this moves the highlight vertically the distance calculated in the previous loop
            // and also corrects the height of the highlight to match the current selection
            hl.css({
                top: totalHeight,
                height: $(this).height() + vPadding
            });

            indexEl = $(this).index() + 1;

            $('.esp-content:nth-child(' + indexEl + ')').siblings().removeClass('top-content');
            $('.esp-content:nth-child(' + indexEl + ')').addClass('top-content');
            clearInterval(myTimer);
            doTimedSwitch();
            doEqualHeight(indexEl);
        });
    }

    function doWindowResize() {
        $(window).resize(function () {
            clearInterval(myTimer);
            // click is triggered to recalculate and fix the highlight position
            $('.selected').trigger('click');
        });
    }

    doClickItem();
    doWindowResize();
    $('.selected').trigger('click');
});

