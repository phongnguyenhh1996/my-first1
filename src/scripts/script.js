$(document).ready(function(){
   $('.multiple-items').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  arrows: false,
	  autoplay: true,
  	autoplaySpeed: 2000,
  	responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  	]
	});
	$('.team-member .left').click(function(){
		$('.multiple-items').slick('slickPrev');
	});
	$('.team-member .right').click(function(){
		$('.multiple-items').slick('slickNext');
	});
	$('.quote-slide').slick({
		arrows: false,
		autoplay: true,
  	autoplaySpeed: 2000,
	});
	$('.quote .left').click(function(){
		$('.quote-slide').slick('slickPrev');
	});
	$('.quote .right').click(function(){
		$('.quote-slide').slick('slickNext');
	});
	$('.brand-slide').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  arrows: false,
	  autoplay: true,
  	autoplaySpeed: 2000,
  	responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      }
    }
  	]
	});
	$('.brand .left').click(function(){
		$('.brand-slide').slick('slickPrev');
	});
	$('.brand .right').click(function(){
		$('.brand-slide').slick('slickNext');
	});
	//add header animation
	$('.main-text').addClass('animated fadeInDown');
	setTimeout(
  function() 
  {
    $('.navbar-brand').addClass('animated fadeInLeft');
    $('.b-nav').addClass('animated fadeInRight');
  }, 300);
  //add animation to heading 
  function addAnimation(sl,ani,del){
  	$(sl).addClass('wow '+ani);
  	$(sl).attr("data-wow-delay", del);
  }
	addAnimation(".main-container .start-doing .text", "fadeInUp", "0.3s");
	addAnimation(".main-container .start-doing p:last-child", "fadeInLeft", "0.6s");
	//add animation to offer content
	var offer= $('.offer-item');
	addAnimation($(offer), "fadeInUp", "0.8s");
	for (var i = 0; i < offer.length; i++) {
		var content = $(offer[i]).find(".big-icon").siblings();
		for (var j = 0; j< content.length; j++) {
			addAnimation($(content[j]), "fadeInLeft", (i/2.0 +0.5)+"s");
		}
	};
	addAnimation(".tablet", "fadeInLeft", "1s");
	addAnimation(".tablet-landscape", "fadeInLeft", "1.3s");
	var featureList= $('.features-list li');
	addAnimation($(featureList), "fadeInRight", "0.8s");
	for (var i = 0; i < featureList.length; i++) {
		var content = $(featureList[i]).find("i").next();
		for (var j = 0; j< content.length; j++) {
			addAnimation($(content[j]), "fadeInDown", (j/2.0 +0.5)+"s");
		}
	};
	addAnimation(".feature-all .item", "fadeInDown", "0.5s");
	addAnimation(".percent-circle", "fadeInUp", "0.5s");
	var sampleWork = $('.sample-work').children("div");
	for (var i=0; i< sampleWork.length; i++) {
		addAnimation($(sampleWork[i]),"rotateInUpLeft", ((i+1)/10.0)+"s");
	}
	addAnimation($('.sample-work button'), "fadeInUp", "0.5s");
	addAnimation($('.facts'), "fadeInUp", "0.5s");
	addAnimation($('.purchase-now div'), "fadeInUp", "0.5s");
	addAnimation($('.quote-slide'), "fadeInUp", "0.5s");
	addAnimation($('.unique div'), "fadeInUp", "0.5s");
	var member = $('.multiple-items .card');
	for (var i = 0; i < member.length; i++) {
		addAnimation($(member[i]),"fadeInRight", ((i+1)/5.0)+"s");
	}
	var plan = $('.plan');
	for (var i=0; i< plan.length; i++) {
		addAnimation($(plan[i]),"fadeInDown", ((i+1)/5.0)+"s");
	}
	var icon= $('.footer .list-unstyled li');
	for (var i=0; i< icon.length; i++) {
		addAnimation($(icon[i]),"fadeInDown", ((i+1)/5.0)+"s");
	}
	new WOW().init();
	///
	// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});
});