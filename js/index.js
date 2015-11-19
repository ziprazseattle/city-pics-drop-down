$(document).ready(function(){



/* JS IS CONNECTED  
function myFunction() {
    alert("Hello!");
}
myFunction();
*/ 




/*
	$("#city-form").submit(showCity);

I think if I take this line and change id to affect the select (#city-type) instead of the form (#city-form), then change .submit to .change that an action will happen when a change is made to the drop down. Not sure about the syntax or what action I want to happen. Maybe just run the function?

	$("#city-type").change(showCity);

_________________________________


Rubric says make an array with the city values ("NYC", "SF", "LA", "ATX", "SYD") to populate drop down. Referring to class notes this seems like the array needed. 

	var cities = ["NYC", "SF", "LA", "ATX", "SYD"] 

Rubric says use var to get the value. So may need a line that says to get the value of the city with .val. 

	var citySelected = $("option").val();

The rubric calls for append. Maybe could use append to add each item in the array to the bottom of the dropdown. Append with the next array item. Stop until value reaches the total of all array items (cities > 4)?

 	$("option").append("html", cities + 1) 
 Seems like totally wrong syntax?
	
Stealing from class code change this... 
	$("img").eq(0).attr("src", q2);

...to this? (Not sure what eq means)
	$("option").eq(0).append("html", cities);

Or do we use that forEach (element, index)?
	var citySelect = ["NYC", "SF", "LA", "ATX", "SYD"];
	city.forEach(function(elements){
	$("option").append("<li>" + elements + "</li>");
	}
	);
Something like that, but maybe the elements part is wrong? Seems like we should we call the number of the array element(0,1,2,3,4). Once it's over 4, stop appending. This is where we bring in the loop, I think.

Maybe could use the loop to get computer to circle through and check the value of the drop down item (a number in the array). 

Rubric suggested using attr function. I can use that to change the image class (.nyc .sf .la .austin .sydney) of the body tag depending on the selection. 

Then use if/else to specify which background image should show. 
	if ( citySelect == "NYC" ) {
			$("body").css("background-image", "url(images/nyc.jpg)");	
		} 
		else if ( citySelect == "SF" ) {
			$("body").css("background-image", "url(images/sf.jpg)");	
		} 
		else if ( citySelect == "LA" ) {
			$("body").css("background-image", "url(images/la.jpg)");	
		} 
		else if ( citySelect == "ATX") {
			$("body").css("background-image", "url(images/atx.jpg)");	
		} 
		else if ( citySelect == "SYD") {
			$("body").css("background-image", "url(images/syd.jpg)");	
		} 		
	}

I think you showed us a shorter way to write this in class. Using 'this'? Maybe since images and css classes are same name, we should call them with 'this.'  

function switchpic () {
	var citySelect = $(this).attr("class");
	$(this).attr("class")
}





*/

//end doc ready 
});