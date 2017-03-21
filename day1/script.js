$(document).ready(function(){
	
var createGrid = function(n){
	$('.grid').html('');
	for (i = 0; i < n; i++){
		for(j=0; j < n; j++){ 

		$('.grid').append('<div class="square"></div>');
		$('.square').width(640/n-2);
		$('.square').height(640/n-2);

	}
}
}

createGrid(16);

var draw = function(){
	$('.square').mouseover(function(){
		$(this).addClass('colored');
		var currentOpacity = $(this).css('opacity');
					if(currentOpacity > 0){
						$(this).css('opacity', currentOpacity - 0.1);
					}
	})
}

draw();

$('.reset').click(function(){
	var input = prompt("Please enter new size");
			
			if(input != null){
				createGrid(input);
			}
			else {
				alert("You din't enter a number!");
			}
			draw();
})


});
