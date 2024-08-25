document.addEventListener("DOMContentLoaded", function() {
    // Select the form element
    const form = document.querySelector('.login3 .form2');

    if (form) {
        console.log("Form found and event listener attached.");
        
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get the values of the input fields
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const subject = document.querySelector('#subject').value.trim();
            const message = document.querySelector('#message').value.trim();

            // Basic validation to check if the fields are empty
            if (name === "" || email === "" || subject === "" || message === "") {
                alert("Please fill out all fields.");
                console.log("Form validation failed. Empty fields detected.");
                return;
            }

            // Check for valid email format (basic validation)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                console.log("Form validation failed. Invalid email format.");
                return;
            }

            // Provide user feedback and reset the form
            alert("Your message has been sent successfully!");
            console.log("Form submitted successfully with the following data:", {
                name: name,
                email: email,
                subject: subject,
                message: message
            });

            // Reset the form fields after submission
            form.reset();
        });
    } 
});
