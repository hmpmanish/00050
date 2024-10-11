// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Log message to console on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Manish's Portfolio!");
});
