window.addEventListener("load", function(){
	var vpered = document.querySelector("#clicker");
	var photos = document.querySelectorAll(".photos img");
	var counter = 0;
	vpered.addEventListener("click",function(){
		photos[counter].className = "";
		counter++;
		if(counter == photos.length)
		{
			counter = 0;
		}
		photos[counter].className = "show";
	});
	var nazad = document.querySelector("#click")
	var counter = 0;
	nazad.addEventListener("click",function(){
		photos[counter].className = "";
		counter--; 
		if(counter < 0){
			counter = photos.length - 1;
		}
		photos[counter].className = "show";
	});
});

