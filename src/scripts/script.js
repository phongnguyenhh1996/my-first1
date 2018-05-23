$(document).ready(function(){
   $('.multiple-items').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  arrows: false,
	  autoplay: true,
  	autoplaySpeed: 2000,
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
	});
	$('.brand .left').click(function(){
		$('.brand-slide').slick('slickPrev');
	});
	$('.brand .right').click(function(){
		$('.brand-slide').slick('slickNext');
	});
});