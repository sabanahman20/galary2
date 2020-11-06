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
});

