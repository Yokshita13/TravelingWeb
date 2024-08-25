document.addEventListener("DOMContentLoaded", function() {
    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById('nametype').value.trim();
        const bio = document.getElementById('biotype').value.trim();
        const dob = document.getElementById('dob').value;
        const pronouns = document.getElementById('user_profile_pronouns').value;
        const twitter = document.getElementById('twitter').value.trim();
        const instagram = document.getElementById('instagram').value.trim();
        const linkedin = document.getElementById('linkedin').value.trim();
        const currentPassword = document.getElementById('currentpassword').value;
        const newPassword = document.getElementById('newpassword').value;
        const confirmPassword = document.getElementById('confirmpassword').value;

        // Basic validation
        if (!name || !bio || !dob || !pronouns || !twitter || !instagram || !linkedin || !currentPassword || !newPassword || !confirmPassword) {
            alert('Please fill out all fields.');
            return;
        }

        if (newPassword !== confirmPassword) {
            alert('New password and confirm password do not match.');
            return;
        }

        // Process form data (e.g., send it to the server)
        alert('Profile updated successfully!');
    }

    // Attach event listener to form submission
    const form = document.querySelector('main');
    form.addEventListener('submit', handleFormSubmit);
});
