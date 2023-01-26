$('.vitrine-flex').slick({
	dots: false,
	arrows:false,
  infinite: false,
  centerMode: false,
  speed:1000,
  slidesToShow: 6,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover:false,
        responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
  }]
	});

	$('.vitrine-wraper').hover(function(){
			$(this).css('z-index','5');
		})
		$('.vitrine-wraper').mouseout(function(){
			$(this).css('z-index','0');
		})

$('.titulo').hover(function(){
  $('.ver-tudo').css('opacity','1');
})
$('.titulo').mouseout(function(){
  $('.ver-tudo').css('opacity','0');
})
$('.titulo-emAlta').hover(function(){
  $('.ver-tudo-emAlta').css('opacity','1');
})
$('.titulo-emAlta').mouseout(function(){
  $('.ver-tudo-emAlta').css('opacity','0');
})
