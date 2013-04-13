$div = $("<div>empty<div>");

$(document).ready(function(){

	var $item = $('.item');

	$( "#carousel" ).rcarousel({
			width: 200,
			height: 200,
			margin: 10,
			auto: {enabled: true}
		});
});