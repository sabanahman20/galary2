window.addEventListener("load", function(){
	var click = document.querySelector("#clicker");
	var testarray = document.querySelectorAll(".test");
    click = addEventListener("click",function(){
	for(var i = 0;i < testarray.length;i++){
		testarray[i].style.backgroundColor = "green";
	}
	/*for(var i = testarray.length-1;i > -1;i--){
		testarray[i].style.backgroundColor = "green";
	}*/
	});
 });


