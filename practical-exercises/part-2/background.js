		//Getting current height and width of the window
		var height = $(window).height();
		var width = $(window).width();

		//Setting canvas for background
		$('#canvasContainer').html('<canvas id="canvas1" height="' + height + '" width="' + width + '"   style=" position:absolute;  left:0; top:0;"></canvas>');

		//Drawing Background
		draw();

		//Changing Canvas on resize
		$(window).resize(function() {
		  var height = $(window).height();
		  var width = $(window).width();

		  $('#canvasContainer').html('<canvas id="canvas1" height="' + height + '" width="' + width + '"   style=" position:absolute;  left:0; top:0;"></canvas>');
		  draw();
		  console.log(height);
		});


		//Function to draw background
		function draw() {
		  var can = document.getElementById('canvas1');
		  var ctx = can.getContext('2d');

		  //Set up a pattern
		  var pattern = document.createElement('canvas');
		  pattern.width = 80;
		  pattern.height = 80;
		  var pctx = pattern.getContext('2d');

		  //Draw squares
		  pctx.beginPath();
		  pctx.lineWidth = "3";
		  pctx.strokeStyle = "green";
		  pctx.rect(74, 74, 2, 2);
		  pctx.stroke();

		  //Filling in the pattern repeatedly
		  var _pattern = ctx.createPattern(pattern, "repeat");
		  ctx.rect(0, 0, can.width, can.height);
		  ctx.fillStyle = _pattern;
		  ctx.fill();
		}
