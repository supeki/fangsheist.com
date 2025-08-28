// Get the background element

// Set initial position and speed
let xPos = 0;
let yPos = 0;
const speed = 5; // Adjust this value to change the speed of the animation

// Function to update the background position
function updateBackground() {
	var element = document.querySelector('.diagonal-background');
	var style = window.getComputedStyle(element);

	style.top += speed
	style.left += speed

	// Request the next animation frame
	requestAnimationFrame(updateBackground);
}

// Start the animation loop
requestAnimationFrame(updateBackground);