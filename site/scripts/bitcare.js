$(function() {
	$('#header h1 a').click( function(event){
        $('html, body').stop().animate({
            scrollTop: 0
        }, 800);
        //event.preventDefault();
        return false;
    });
	$('ul#menu a').click( function(event){
        var i = $(this).attr('id').substr(2);
        var v = $('#section-' + i).offset().top - 60;
        
        $('#test').html(v);
        window.scrollTo(0, v);
        
//        $('html, body').stop().animate({
//            scrollTop: $($anchor.attr('href')).offset().top - 60
//        }, 800);
        //event.preventDefault();
        return false;
    });
});