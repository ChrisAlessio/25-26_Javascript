//List of buttons
const buttons = document.querySelectorAll('button');
//Input for displaying calculations
const display = document.querySelector('.display')

//Add an onclick to each button
buttons.forEach(
    function(button){
        button.addEventListener("click", calculate);
    }
);
//Performs the calculations
function calculate(event){
    //What was clicked?
    const clickedValue = event.target.value;

    //Handle what was clicked
    //if it's an =
    if(clickedValue === "="){
        // Is the display empty?
        if(display.value !== ""){
            // Calculate the value and display
            display.value = eval(display.value);

        }
        //Did I click clear?
    }else if(clickedValue === "C"){
        //Empty the display
        display.value = "";
    }
    //Otherwise add it to the display
    else{
        // Add whatever I clicked to the display
        display.value += clickedValue;
    }
}