
$(document).ready(function(){
    const slider = $("#top_slider").owlCarousel({
        loop:true,
        margin:20,
        nav:false,
		dots:true,
		/* autoplay:true, */
		autoplayTimeout:4000,
		
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});
$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        loop:true,
        margin:20,
        nav:true,
		dots:false,
		autoplay:true,
		autoplayTimeout:3000,
		navText: [
          '<svg width="25" height="38" viewBox="0 0 25 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.06263 21.3531L19.1939 36.3406C21.2126 38.1093 24.3751 36.6718 24.3751 33.9874V4.01245C24.3756 3.41168 24.203 2.8235 23.8778 2.31835C23.5527 1.81319 23.0888 1.41247 22.5417 1.16417C21.9947 0.915868 21.3876 0.830517 20.7933 0.918335C20.199 1.00615 19.6426 1.26342 19.1908 1.65932L2.06576 16.6468C1.7301 16.9401 1.46108 17.3019 1.27676 17.7077C1.09243 18.1136 0.99707 18.5542 0.99707 18.9999C0.99707 19.4457 1.09243 19.8863 1.27676 20.2922C1.46108 20.698 1.7301 21.0598 2.06576 21.3531H2.06263Z" fill="#78816B"/></svg>',
          '<svg width="23" height="36" viewBox="0 0 23 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9517 20.3355L5.09746 35.2258C3.11136 36.9831 1.1305e-06 35.5549 1.1305e-06 32.888V3.10739C-0.000505625 2.51053 0.169366 1.92616 0.489273 1.42428C0.809181 0.922402 1.26556 0.524279 1.80377 0.27759C2.34197 0.0309008 2.93918 -0.0538968 3.52388 0.0333518C4.10858 0.1206 4.65598 0.376196 5.10054 0.769532L21.9486 15.6598C22.2788 15.9512 22.5435 16.3106 22.7248 16.7139C22.9062 17.1171 23 17.5548 23 17.9977C23 18.4405 22.9062 18.8783 22.7248 19.2815C22.5435 19.6847 22.2788 20.0441 21.9486 20.3355H21.9517Z" fill="#78816B"/></svg>'
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});$(document).ready(function(){
    const slider = $("#popular").owlCarousel({
        loop:true,
        margin:20,
        nav:true,
		dots:false,
		autoplay:true, 
		autoplayTimeout:3000,
		navText: [
          '<svg width="25" height="38" viewBox="0 0 25 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.06263 21.3531L19.1939 36.3406C21.2126 38.1093 24.3751 36.6718 24.3751 33.9874V4.01245C24.3756 3.41168 24.203 2.8235 23.8778 2.31835C23.5527 1.81319 23.0888 1.41247 22.5417 1.16417C21.9947 0.915868 21.3876 0.830517 20.7933 0.918335C20.199 1.00615 19.6426 1.26342 19.1908 1.65932L2.06576 16.6468C1.7301 16.9401 1.46108 17.3019 1.27676 17.7077C1.09243 18.1136 0.99707 18.5542 0.99707 18.9999C0.99707 19.4457 1.09243 19.8863 1.27676 20.2922C1.46108 20.698 1.7301 21.0598 2.06576 21.3531H2.06263Z" fill="#78816B"/></svg>',
          '<svg width="23" height="36" viewBox="0 0 23 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9517 20.3355L5.09746 35.2258C3.11136 36.9831 1.1305e-06 35.5549 1.1305e-06 32.888V3.10739C-0.000505625 2.51053 0.169366 1.92616 0.489273 1.42428C0.809181 0.922402 1.26556 0.524279 1.80377 0.27759C2.34197 0.0309008 2.93918 -0.0538968 3.52388 0.0333518C4.10858 0.1206 4.65598 0.376196 5.10054 0.769532L21.9486 15.6598C22.2788 15.9512 22.5435 16.3106 22.7248 16.7139C22.9062 17.1171 23 17.5548 23 17.9977C23 18.4405 22.9062 18.8783 22.7248 19.2815C22.5435 19.6847 22.2788 20.0441 21.9486 20.3355H21.9517Z" fill="#78816B"/></svg>'
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            },
            1800:{
                items:5
            }
        }
    });
});
$(function() {

  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus");
    var $quantityArrowPlus = $(".quantity-arrow-plus");
    var $quantityNum = $(".quantity-num");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();

});