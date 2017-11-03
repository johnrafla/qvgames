$(document).bind('keydown', function(e) {
  if (e.keyCode == 49) {
    $('#1').hide();
  } else if (e.keyCode == 50) {
    $('#2').hide();
  } else if (e.keyCode == 51) {
    $('#3').hide();
  }
  return false;
});

$(document).bind('keydown', function(e) {
  if (e.keyCode == 80) {
    $('#1').show(100);
    $('#2').show(100);
    $('#3').show(100);
  }
  return false;
});