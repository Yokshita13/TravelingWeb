document.addEventListener("DOMContentLoaded", function() {
    // Select the form element
    const form = document.querySelector('.login2 .form');

    if (form) {
        console.log("Form found and event listener attached.");
        
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get the values of the input fields
            const username = document.querySelector('.username2').value.trim();
            const password = document.querySelector('.pass').value.trim();

            // Basic validation to check if the fields are empty
            if (username === "" || password === "") {
                alert("Please fill out both fields.");
                console.log("Form validation failed. Empty fields detected.");
                return;
            }

            // Provide user feedback and reset the form
            alert("Your request has been submitted successfully!");
            console.log("Form submitted successfully with username:", username);

            // Reset the form fields after submission
            form.reset();
        });
    } else {
        console.error('Form not found. Check your HTML structure.');
