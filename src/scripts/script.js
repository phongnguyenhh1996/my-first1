$(document).ready(function(){
    $('.multiple-items').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  arrows: false
	});
	$('.left').click(function(){
		$('.multiple-items').slick('slickPrev');
	});
	$('.right').click(function(){
		$('.multiple-items').slick('slickNext');
	});
});