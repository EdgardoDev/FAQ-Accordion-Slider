// Let's start by declaring some variables.
var action="click";
var speed="500";

$(document).ready(function(){
	// This takes care of the question handler.
	$('li.q').on(action ,function(){
		// And this get next element.
		$(this).next()
			.slideToggle(speed)
				// Now we select all other answers.
				.siblings('li.a')
					.slideUp();
		// Here we get the image for active question.
		var img = $(this).children('img');
		// Now we remove the 'rotate' class for all images except the active one.
		$('img').not(img).removeClass('rotate');
		// And finally we toggle the rotate class.
		img.toggleClass('rotate');
	});
});