/* ****OVERVIEW:
------------------------
Form Submission is an excellent way to get a feel for your customers/target audience. 
Forms have so many uses and the information collected can be analyzed to help make business improvements
*/

/* ***SETUP***
-----------------
First step is to add an event listener that references our HTML document. Make sure that your event listener
loads in Content from the DOM ----> "DOMContentLoaded"
*/
document.addEventListener("DOMContentLoaded", () => {
    //Next we need a constant variable that gets the element for your form by Id
    //Hint: getElementById should be used; you did this when creating your variables in previous Javascript assignments (i.e., Modal Pop Up)

    const form = document.getElementById("myForm")

    /* After you made the constant variable for your form
    You need to reference your variable and add an Event listener to it that works when you
    1. Submit the form
    2. Creates a function with event as a parameter 
    */

    form.addEventListener('submit', function(event) {
        //Great! You have your event listener now started, but you still have a few more things to code

        /*The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, 
        its default action should not be taken as it normally would be.
        */
        event.preventDefault();


        //Add Varibles from index.html (hint: Use document.get function)
        //Hint: You need 3 variables for name, email, message

        //*** variable for name of user ***
        //*** variable for email of user ***
        //*** variable for message from the user ***
        
        let name; 
        let email; 
        let message;  

        /* The last piece of making sure your form functions correctly is to add an if-else statement.
        The if-else statement needs to alert the user that either the form was completed successfully or to fill in all fields
        
        Your if statement should meet ALL 3 of following conditions to work:
        1. variable that stores the user's name
        2. variable that stores the user's email
        3. variable that stores the user's message
        */
        name = document.getElementById("name");
        name = document.getElementById("email");
        name = document.getElementById("message");

        if (name && email && message) {
            
            //add an alert message that tells the user they submitted the form successfully
            //I started you off with the alert function and including the name they submit in the form
            //MAKE SURE YOUR ALERT INCLUDES THE NAME OF THE USER, THEIR EMAIL, AND THEIR MESSAGE

            alert(`Form submitted successfully!\nName: ${username}\nEmail: ...`);

        } else {
            //alert the user to "Fill all the fields" in);
            alert("fix the error ")
        }
    });
});