document.addEventListener("DOMContentLoaded", function() {
    // Example notifications data
    const notifications = [
        {
            icon: 'fa-plane-departure',
            message: 'Your flight to Paris has been confirmed! Departure: 12th Sep 2024, 10:00 AM.',
            time: '2 hours ago'
        },
        {
            icon: 'fa-hotel',
            message: 'Your hotel booking in Rome is now complete. Check-in: 15th Sep 2024, 3:00 PM.',
            time: '5 hours ago'
        },
        {
            icon: 'fa-car',
            message: 'Your car rental for the Los Angeles trip is confirmed. Pick-up: 20th Sep 2024, 9:00 AM.',
            time: '1 day ago'
        },
        {
            icon: 'fa-credit-card',
            message: 'Payment successful for your Bali tour package. Enjoy your trip!',
            time: '2 days ago'
        }
    ];

    const notificationContainer = document.querySelector('.notification-container');

    // Function to create and append notifications
    function displayNotifications() {
        notificationContainer.innerHTML = ''; // Clear existing notifications
        notifications.forEach(notification => {
            const notificationElement = document.createElement('div');
            notificationElement.className = 'notification';

            const iconElement = document.createElement('i');
            iconElement.className = `fa-solid ${notification.icon}`;
            
            const messageElement = document.createElement('p');
            messageElement.textContent = notification.message;
            
            const timeElement = document.createElement('span');
            timeElement.className = 'notification-time';
            timeElement.textContent = notification.time;

            notificationElement.appendChild(iconElement);
            notificationElement.appendChild(messageElement);
            notificationElement.appendChild(timeElement);

            notificationContainer.appendChild(notificationElement);
        });
    }

    // Call the function to display notifications
    displayNotifications();
});
