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

window.setInterval(function(){
  var randTop = 1000*Math.random()+200;
  var randLeft = 500*Math.random()+100;
  $('body').append($('<div class="sudden" style="position:absolute; top:',randTop,';left:',randLeft,';height:100px; width:100px; background-color:blue;"></div>'));
}, 1000);

window.setInterval(function(){
  $( ".sudden" ).toggle( "explode" );
}, 500);