var current=$(".slide.active");

$("#right").click(function(){

	    console.log("clicked right");

		current=$(".slide.active");
		console.log(current);

		var next=current.next();
		console.log(next);

		if(next.length==0){

			console.log("no next");
			$(".slide").first().fadeIn(200).addClass("active");
		}

		current.fadeOut(200,function(){
			current.removeClass("active");
			next.fadeIn(200).addClass("active");
			console.log("done");


		});

		
	});

$("#left").click(function(){

	console.log("prev");

	current=$(".slide.active");

	var prev=current.prev();

	if(prev.length==0){
		$(".slide").last().fadeIn(200).addClass("active");
	}

	current.fadeOut(200,function(){
		current.removeClass("active");
		prev.fadeIn(200).addClass("active");

	});

});
var i=0
while(i<100){

var x=setInterval(change,2000);
i++;
}

function change(){
	var curr=$(".slide.active");

	var next=curr.next();

	curr.fadeOut(200,function(){
		curr.removeClass(".active");
		next.fadeIn(200).fadeIn(200).addClass(".active");
			x=setInterval(change,2000);
	});


}