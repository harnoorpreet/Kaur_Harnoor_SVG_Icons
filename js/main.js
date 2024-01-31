//The Window.console property returns a reference to the console object, which provides methods for logging information to the browser's console.
console.log("JS file connected");

console.log('JavaScript is running!');

const vectorGraphic = document.querySelector('#icon1');
//console.log(vectorGraphic);
console.log(this);


function logThisId(colour) {
    console.log(this);
    console.log('clicked on this element:', this.id);

}




vectorGraphic.addEventListener('click', logThisId);