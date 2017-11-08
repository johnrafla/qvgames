$(document).bind('keydown', function(e) {

    // * Jumping Factor * //
    if (e.keyCode == 32 || e.keyCode == 38) {
      $('#maincharacter').html('<img src="jump.gif" height="90px" width="120px">');
      setTimeout (function() {
      $('#maincharacter').html('<img src="running.gif" height="80px">')
        }, 990);

    // * Sliding Factor * //
  }
  else if (e.keyCode == 83 || e.keyCode == 40) {
    $('#maincharacter').html('<img src="sliding.gif" height="100px" width="130px">');
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

$(function() {
    $('#Flash_Games_Button').click(function() {
    $('#Game_Container').hide();
    $('#Flash_Games').show();
    document.title = "Flash Games";
    });

    $('#My_Game_Button').click(function() {
    $('#Game_Container').show('<iframe src="My Game.html" id="mainframe" scrolling="no"></iframe>');
    $('#Flash_Games').hide();
    document.title = "My Stickman Game";
    });
});