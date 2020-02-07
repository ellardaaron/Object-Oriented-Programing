const MAX = 800; //sets the max pixels for the position the the square div will be placed inside the square div

let container = document.getElementById('square-container'); //sets the variable container to the square container div in the html

class Square {
    constructor (x, y, size){
        this.div = document.createElement('div'); //creates a new div 
        this.div.classList.add('square');          // adds a css class 
        this.div.style.left = `${x}px`;           //sets x coordinate
        this.div.style.top = `${y}px`;            //sets y coordinate
        this.div.style.width = `${size}px`;         //setting the width to the size which is a random number
        this.div.style.height = `${size}px`;        
        this.div.addEventListener('click',() => {  //use an arrow function to address the the square that we made. if we where trying to address the div that the squares are in we would use a regular function
            console.log(this);
            this.updateColor();
            this.updateLocation();
        })

        this.updateColor();                         // calls the update color function to set a random color for the created div
        container.appendChild(this.div); //uses the variable 'container' and appends this div inside of square container div
    }

   updateLocation() {
        let xVal = randomVal(0,MAX);
        let yVal = randomVal(0,MAX);
        this.div.style.left = `${xVal}px`; 
        this.div.style.top = `${yVal}px`; 
    }


    updateColor () {
        let randomColor = `rgb(${randomVal(0,255)}, ${randomVal(0,255)}, ${randomVal(0,255)})`  //calls on randomVal function to pick a number from 0-255 which then inturn will give us a rgb color value
        // chooses a random color
        this.div.style.backgroundColor = randomColor;  //sets the random color to the background of the div that is being created inside square container div
    }

 

}

let sqButton = document.getElementById('sq-button'); //assigns sqButton to the html button "sq-button"
sqButton.addEventListener('click', insertSquare);       //adds an event listener that when clicked executes the insert square function

function insertSquare () {
    let xVal = randomVal(0,MAX);  //calls on randomVal function. picks a number from 0-800 because MAX is set to 800 px
    let yVal = randomVal(0,MAX);
    let size = randomVal(25, 100);
    let sq = new Square(xVal, yVal, size);
}

function randomVal (min,max) {    //a random value function that pics a number between the inserted min and max values
    return Math.floor(Math.random() * (max - min)) + min;
}