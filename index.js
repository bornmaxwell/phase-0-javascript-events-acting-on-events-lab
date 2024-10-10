// Select the DODGER element
const dodger = document.getElementById('dodger');

// Move Dodger to the left
function moveDodgerLeft() {
    // Get the current left position of the dodger
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    // Move dodger left if it's not at the edge of the container (left > 0)
    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}

// Move Dodger to the right
function moveDodgerRight() {
    // Get the current left position of the dodger
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);

    // Move dodger right if it's not at the edge of the container (assuming container width is 400px)
    if (left < 360) { // Assuming the container is 400px wide and dodger is 40px wide
        dodger.style.left = `${left + 10}px`;
    }
}

// Add event listeners to listen for key presses
document.addEventListener('keydown', function(event) {
    // When the left arrow is pressed
    if (event.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
    // When the right arrow is pressed
    if (event.key === 'ArrowRight') {
        moveDodgerRight();
    }
});