$(document).ready(function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Smooth scroll for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top - 70
        }, 1000);
    });

    // Navbar background change on scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').css('background', 'rgba(139, 0, 0, 0.95)');
        } else {
            $('.navbar').css('background', 'rgba(139, 0, 0, 0.8)');
        }
    });

    // Form submission handling
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
});
