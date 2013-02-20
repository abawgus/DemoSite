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

	// $('#temp1').click(function(){
	// 	$('body').append($div);
	// }).

 // $(document).keydown(function(key) {
 //        switch(parseInt(key.which,10)) {
 //    		case 65:
	// 			$('img').animate({left: "-=10px"}, 'fast');
	// 			break;
	// 		case 83:
	// 			$('img').animate({top: "+=10px"}, 'fast');
	// 			break;
	// 		case 87:
	// 			$('img').animate({top: "-=10px"}, 'fast');
	// 			break;
	// 		case 68:
	// 			$('img').animate({left: "+=10px"}, 'fast');
	// 			break;
	// 		case 70:
	// 			$('body').append($('<div>empty</div>'));
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// });
});

function log(msg) {
    setTimeout(function() {
        throw new Error(msg);
    }, 0);
}

var colors = new Array('red','blue','green');

window.setInterval(function(){
  var randTop = Math.round(400*Math.random());
  var randLeft = Math.round(300*Math.random());
  var randColor = Math.round(3*Math.random());
  log(randColor);
  $('#boxGarden').append($('<div class="sudden" style=" border-radius:10px;position:absolute; top:'+randTop+';left:'+randLeft+';height:50px; width:50px; background-color:'+colors[randColor]+';"></div>'));
}, 500);

window.setInterval(function(){
  $( ".sudden" ).toggle( "explode" );
  $(".sudden").remove();
}, 2000);