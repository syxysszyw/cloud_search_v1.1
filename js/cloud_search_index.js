$(function(){
	var min_height = 200;
	
	$('.nav li').on('click', function(){
		$(this).addClass('current').siblings().removeClass('current');
	}); 

	$(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if( scrollTop > min_height){
            $(".btn_goToTop").fadeIn(100);
        }else{
            $(".btn_goToTop").fadeOut(200);
        };
    });	

	$('.btn_goToTop').on('click', function(){
		$('html,body').animate({scrollTop:0},400);
    });
});