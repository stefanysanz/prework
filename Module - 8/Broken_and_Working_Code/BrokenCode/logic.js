// Randomize the facts
$("#factButton").on("click", function () {
	// Select a random index from the array
	var number = Math.floor((Math.random() * booFacts.length));
	// Display a new fact with the randomized index
	$("#factText").text(booFacts[number])
})

// Array of boo facts
var booFacts = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books"]

// Change the color to pink
$("#textPink").on("click", function () {
	$("#funText").css("color", "pink")
})

// Change the color to orange
$("#textOrange").on("click", function () {
	$("#funText").css("color", "orange")
})

// Change the color to green
$("#textGreen").on("click", function () {
	$("#funText").css("color", "green")
})

// Grow the box
$("#boxGrow").on("click", function () {
	$("#box").animate({ height: "+=35px", width: "+=35px" }, "fast");
})

// Shrink the box
$("#boxShrink").on("click", function () {
	$("#box").animate({ height: "-=35px", width: "-=35px" }, "fast");
})