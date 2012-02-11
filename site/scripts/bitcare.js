$(function() {
	$('#header h1 a').bind('click',function(event){
        $('html, body').stop().animate({
            scrollTop: 0
        }, 800);
	
        return false;
    });
	$('ul#menu a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 60
        }, 800);
        return false;
    });
});