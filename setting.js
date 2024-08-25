document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const emailNotificationsToggle = document.getElementById("emailNotificationsToggle");
    const locationToggle = document.getElementById("locationToggle");
    const profilePublicToggle = document.getElementById("profilePublicToggle");
    const twoFactorToggle = document.getElementById("twoFactorToggle");
    const languageSelect = document.getElementById("languageSelect");
    const deleteAccountButton = document.getElementById("deleteAccountButton");
    const exportDataButton = document.getElementById("exportDataButton");
    const timeZoneSelect = document.getElementById("timeZoneSelect");
    const textSizeSelect = document.getElementById("textSizeSelect");
    const statusMessage = document.getElementById("statusMessage");

    // Dark Mode Toggle
    darkModeToggle.addEventListener("change", function() {
        document.body.classList.toggle("dark-mode", darkModeToggle.checked);
        showStatusMessage("Dark Mode " + (darkModeToggle.checked ? "Enabled" : "Disabled"));
    });

    // Other Toggles
    emailNotificationsToggle.addEventListener("change", function() {
        showStatusMessage("Email Notifications " + (emailNotificationsToggle.checked ? "Enabled" : "Disabled"));
    });

    locationToggle.addEventListener("change", function() {
        showStatusMessage("Location " + (locationToggle.checked ? "Enabled" : "Disabled"));
    });

    profilePublicToggle.addEventListener("change", function() {
        showStatusMessage("Profile Publicly " + (profilePublicToggle.checked ? "Visible" : "Hidden"));
    });

    twoFactorToggle.addEventListener("change", function() {
        showStatusMessage("Two Factor " + (twoFactorToggle.checked? "Enabled" : "Disabled"));
    });

    languageSelect.addEventListener("change", function() {
        showStatusMessage("Language changed to " + languageSelect.value);
    });

    deleteAccountButton.addEventListener("click", function() {
        if(confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            showStatusMessage("Account deleted.");
        }
    });
    
    exportDataButton.addEventListener("click", function() {
        showStatusMessage("Data export initiated...");
    });

    timeZoneSelect.addEventListener("change", function() {
        showStatusMessage("Time Zone set to " + timeZoneSelect.options[timeZoneSelect.selectedIndex].text);
    });
    
    textSizeSelect.addEventListener("change", function() {
        document.body.style.fontSize = textSizeSelect.value;
        showStatusMessage("Text size set to " + textSizeSelect.value);
    });
    
    function showStatusMessage(message) {
        statusMessage.textContent = message;
        statusMessage.classList.add("show");
        setTimeout(() => {
            statusMessage.classList.remove("show");
        }, 2000);
    }
});

// function speak() {
//     const input = document.getElementById('input');
//     const text = input.value;
//     const utterance = new SpeechSynthesisUtterance(text);
//     speechSynthesis.speak(utterance);
// }

