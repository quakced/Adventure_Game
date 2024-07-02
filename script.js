// Declare variables below to save the different divs of your story.
let storyOpening = document.querySelector(".story-opening")
let optionOneScreen = document.querySelector(".option-one-screen")
let optionTwoScreen = document.querySelector(".option-two-screen")
let optionOne = document.querySelector(".option-one")
let optionTwo = document.querySelector(".option-two")
let optionOneEnd = document.querySelector(".option-one-end")
let optionTwoEnd = document.querySelector(".option-two-end")
let optionOneTwo = document.querySelector(".option-one-two")
let optionTwoOne = document.querySelector(".option-two-one")
let img = document.querySelector("imgButton")







// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


optionOne.addEventListener('click', function(){
    storyOpening.style.display = "none";
    optionOneScreen.style.display = "block";
});
optionTwo.addEventListener('click', function(){
    storyOpening.style.display = "none";
    optionTwoScreen.style.display = "block";
});
optionOneTwo.addEventListener('click', function(){
    optionOneScreen.style.display = "none";
    optionOneEnd.style.display = "block";
    
});
optionTwoOne.addEventListener('click', function(){
    optionTwoScreen.style.display = "none";
    optionTwoEnd.style.display = "block";
});
img.addEventListener('click', function(){

});