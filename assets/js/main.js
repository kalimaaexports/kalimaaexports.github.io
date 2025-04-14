document.addEventListener("DOMContentLoaded", function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Handle navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Handle navbar toggler animation
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            navbarToggler.classList.toggle('active');
        });
    }

    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Prevent default form submission and add validation
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add('was-validated');
        });
    });
});

// Add navbar background on mobile when menu is expanded
document.querySelector('.navbar-toggler')?.addEventListener('click', function() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    
    if (!isExpanded) {
        document.querySelector('.navbar').classList.add('mobile-nav-active');
    } else {
        document.querySelector('.navbar').classList.remove('mobile-nav-active');
    }
});