$(function() {
	$('#header h1 a').bind('click', function(event){
//        $('html, body').stop().animate({
//            scrollTop: 0
//        }, 800);
        //window.scrollTo(0, 0);
        //event.preventDefault();
		$('#test').html('0');
        return false;
    });
	$('ul#menu a').bind('click touchstart', function(event){
        var i = $(this).attr('id').substr(2);
        var v = $('#section-' + i).offset().top - 60;
        
        $('#test').html(v);
        //window.scrollTo(0, v);
        
//        $('html, body').stop().animate({
//            scrollTop: $($anchor.attr('href')).offset().top - 60
//        }, 800);
        //event.preventDefault();
        return false;
    });
});