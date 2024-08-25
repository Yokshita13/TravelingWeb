document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example functionality for service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle visibility of the detailed description or perform other actions
            const info = this.querySelector('.info');
            if (info.style.display === 'none' || info.style.display === '') {
                info.style.display = 'block';
            } else {
                info.style.display = 'none';
            }
        });
    });

    // Optional: Print a message to the console
    console.log('JavaScript loaded and ready.');
});
