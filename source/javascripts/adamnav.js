//toggle menu view   
$(function() {
	if ($(window).width() > 480) {
	    $('nav strong').css('display','none');
	    $('nav ul').show();
	}
	else {
	    $('nav strong').css('display','block');
	    $('nav ul').hide();
	}
});
// check for window resize - show nav again for larger screens after hiding
$(window).resize(function() {
    if ($(window).width() > 480) {
        $('nav strong').css('display','none');
        $('nav ul').show();
    }
    else {
        $('nav strong').css('display','block');
        $('nav ul').hide();
    }
});

// show menu (smallest screens)
$("nav strong").click(function(e){
    e.preventDefault();
    $("nav ul").slideToggle("fast");   
	  return false;
});
