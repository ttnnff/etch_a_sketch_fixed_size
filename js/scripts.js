var gridSize = 64;

$(document).ready(function() {
	newGrid(gridSize);

});

function newGrid(gridSize) {
	$('#sketch_bkg').append('<div id="gridContainer"></div>');				//create container for blocks
	var blockSize = $('#gridContainer').width()/gridSize;	//calculate size of blocks based on grid resolution
	for(var i = 1; i <= gridSize; i++){ 						//create rows and blocks
		for(var j = 1; j <= gridSize; j++){
			$('#gridContainer').append('<div class="gridBlock"></div>');
		}
		$('#gridContainer').append('<div class="row"></div>');
	}
	$('.gridBlock').css('width',blockSize);						//adjust size of blocks to fit grid resolution
	$('.gridBlock').css('height',blockSize);
	blackColor();													
}

function clearGrid() {											
	$('#gridContainer').remove();
	newGrid(gridSize);
}

function isInteger(x) {											//used for input validation in clearGrid()
        return x % 1 === 0;
}

function blackColor() {											//sets drawing color to black
	$('.gridBlock').mouseenter(function() {
		$(this).css('background-color', 'black');
	});
}

function randomColor() {										//sets drawing color to random selections
    $('.gridBlock').mouseenter(function() {
        var r =Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        $(this).css("background-color", "rgb(" + r +"," + g + "," + b +")");
    });
}

