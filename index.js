// Select the dodger element for manipulation
const dodger = document.getElementById("dodger");
dodger.style.left ="180px";
// Hint: Use document.getElementById to select the element with id "dodger"
document.addEventListener("keydown", function(event) {
    console.log(event.key);
}
);
function moveDodgerLeft() {    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }
    
    function moveDodgerRight() {
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);

        if (left < 380) {
            dodger.style.left = `${left + 10}px`;
        }
    }
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowLeft") {
            moveDodgerLeft();
        } else if (event.key === "ArrowRight") {
            moveDodgerRight();
        }
    }); 