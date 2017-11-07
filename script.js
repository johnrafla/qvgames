$(document).bind('keydown', function(e) {

    // * Jumping Factor * //
    if (e.keyCode == 32 || e.keyCode == 38) {
      $('#maincharacter').html('<img src="jump.gif" height="90px" width="120px">');
      setTimeout (function() {
      $('#maincharacter').html('<img src="running.gif" height="80px">')
        }, 900);

    // * Sliding Factor * //
  }
  else if (e.keyCode == 83 || e.keyCode == 40) {
    $('#maincharacter').html('<img src="sliding.gif" height="90px" width="120px">');
    setTimeout (function() {
    $('#maincharacter').html('<img src="running.gif" height="80px">')
      }, 840);
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