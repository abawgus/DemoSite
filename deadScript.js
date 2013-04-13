$div = $("<div>empty<div>");

$(document).ready(function(){

	var $item = $('.item');

	$($item).mouseenter(function(){
		$(this).fadeTo('fast',.25)
	});

	$($item).mouseleave(function(){
		$(this).fadeTo('fast',1)
	});
	
	$( "#carousel" ).rcarousel({
			auto: {enabled: true}
		});
});
	// $('#temp1').click(function(){
	// 	$('body').append($div);
	// }).

function log(msg) {
    setTimeout(function() {
        throw new Error(msg);
    }, 0);
}

var colors = new Array('red','blue','green');

function generateBoxes(){
	var refreshIntervalId = window.setInterval(function(){
	  var randTop = Math.round(400*Math.random());
	  var randLeft = Math.round(300*Math.random());
	  var randColor = Math.round(3*Math.random());
	  log(randColor);
	  $('#boxGarden').append($('<div class="sudden" style=" border-radius:10px;position:absolute; top:'+randTop+';left:'+randLeft+';height:50px; width:50px; background-color:'+colors[randColor]+';"></div>'));
	}, 500);
}

$( document ).keydown(function(key) {
  switch(parseInt(key.which,10)){
  	case 81: //letter q
  	 	generateBoxes();
  	 break
  	case 68: //letter d
  		$(".sudden").remove();
	break
	case 65: //letter a
  		$( ".sudden" ).toggle( "shake" );
  	break
  	case 87:
  		clearInterval(refreshIntervalId);
  	default:
  	break;  	
  }
});