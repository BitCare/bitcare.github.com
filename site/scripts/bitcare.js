$(function() {
	$('#header h1 a').bind('click',function(event){
        $('html, body').stop().animate({
            scrollTop: 0
        }, 800);
        event.preventDefault();
        //return false;
    });
	$('ul#menu a').bind('click',function(event){
        var $anchor = $(this);
        var v = $($anchor.attr('href')).offset().top - 60;
        
        window.scrollTo(0, v);
        
//        $('html, body').stop().animate({
//            scrollTop: $($anchor.attr('href')).offset().top - 60
//        }, 800);
        event.preventDefault();
    });
});