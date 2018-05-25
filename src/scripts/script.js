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
	addAnimation(".tablet-landscape", "fadeInLeft", "1.1s");
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
	$('body').scrollspy({target: ".navbar", offset: 50});   
	$("#top-menu a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
	// grab the initial top offset of the navigation 
 	var stickyNavTop = $('.b-nav').offset().top;
 	
 	// our function that decides weather the navigation bar should have "fixed" css position or not.
 	var stickyNav = function(){
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
         
    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative
    if (scrollTop > stickyNavTop) { 
        $('.b-nav').addClass('sticky');
        $('.b-nav .col-12').addClass('animated slideInDown');
        $('.bg-top').css("margin-bottom",($(".b-nav").outerHeight()));
    } else {
        $('.b-nav').removeClass('sticky'); 
        $('.b-nav .col-12').removeClass('animated slideInDown');
        $('.bg-top').css("margin-bottom","0");
    }
	};

	stickyNav();
	// and run it again every time you scroll
	$(window).scroll(function() {
		stickyNav();
	});
});