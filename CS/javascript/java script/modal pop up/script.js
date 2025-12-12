/*Lets make a call to our document and add an Event Listener
    We need to make sure that Event Listener will load the content from the DOM --> in using this method, ".addEventListener()", 
    we can handle an event for when "DOMContentLoaded" fires. The thing with DOMContentLoaded it doesn't wait to load content, 
    it fires immediately when the HTML document has been completely parsed/synched */

//1st. line of code should start with document.addEventListener("DOMContentLoaded", () => {)
document.addEventListener("DOMContentLoaded", () => {
    /* Next we need constant variables to store our elements from our HTML document
    Each variable should get the elements your modal by Id  
    Variables you need --> modal, open button, and close button*/

    // Here's the code for to get your modal by it's appropriate ID
    const modal = document.getElementById("myModal");
    //Write out the next two...
    const openModalButton = document.getElementById("openModal");
    const closeModalButton = document.getElementById("closeModal");

    /* Now that you have all three of your variables, we need to set up an event listener for your 
    two button (*open and close button* ****THE BUTTONS YOU MADE EARLIER****) 
    That event listener need to fire when you click the button*/

    // Here's some code to help you set up the event listener to open your modal
    openModalButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeModalButton.addEventListener("click", () => {
        modal.style.display = "none";
    })



    // Try to write out your last Event listener to close modal when clicking on the 'X' button
    // MAKE SURE YOUR CLOSE BUTTON WILL CHANGE THE DISPLAY TO DISPLAY NOTHING --> ("none") 


    /* Ya know what since your getting the hang of it,
    As an added event listener let's set it up to close the modal when we click outside of modal
    
    Things you'll need
    ------------------
    1. A call to the window --> window.This is your event listener (It should fire when you click) => { */
    // Event listener to close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        //You'll need an if statement for you to set the event.target as your modal variable

        if (event.target == modal){
            modal.style.display = "none";
        }
         //if (event.target == variable_name that stores you modal){
            //Last line of code is to change the modal display to display nothing -----> HINT: You did it earlier
    });
});