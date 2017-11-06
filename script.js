$(document).bind('keydown', function(e) {

    // * Jumping Factor * //
    if (e.keyCode == 32) {
    $('#running').hide;
    $('#jump').show;
    $('#jump').animate({bottom: '300px'});

    // * Sliding Factor * //
  }
  else if (e.keyCode == 83) {
    $('#running').fadeOut().delay(450).fadeIn().hide();
    $('#slide').fadeIn().fadeOut();
  }
  return false;
});

$(function() {
  $('#startingframe').click(function() {    
  $('#startingframe').hide();
  $('#starting').hide();
  $('#starttext').hide();
  $('#running').show();
  });
});