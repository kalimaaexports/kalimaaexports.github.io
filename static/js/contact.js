document.addEventListener("DOMContentLoaded", function() {
    // Form validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            if (!validateForm()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            contactForm.classList.add('was-validated');
        });
    }
    
    // Form validation function
    function validateForm() {
        let isValid = true;
        
        // Name validation
        const nameInput = document.getElementById('name');
        if (nameInput && nameInput.value.trim() === '') {
            nameInput.classList.add('is-invalid');
            isValid = false;
        } else if (nameInput) {
            nameInput.classList.remove('is-invalid');
            nameInput.classList.add('is-valid');
        }
        
        // Email validation
        const emailInput = document.getElementById('email');
        if (emailInput) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailInput.classList.add('is-invalid');
                isValid = false;
            } else {
                emailInput.classList.remove('is-invalid');
                emailInput.classList.add('is-valid');
            }
        }
        
        // Subject validation
        const subjectInput = document.getElementById('subject');
        if (subjectInput && subjectInput.value.trim() === '') {
            subjectInput.classList.add('is-invalid');
            isValid = false;
        } else if (subjectInput) {
            subjectInput.classList.remove('is-invalid');
            subjectInput.classList.add('is-valid');
        }
        
        // Message validation
        const messageInput = document.getElementById('message');
        if (messageInput && messageInput.value.trim() === '') {
            messageInput.classList.add('is-invalid');
            isValid = false;
        } else if (messageInput) {
            messageInput.classList.remove('is-invalid');
            messageInput.classList.add('is-valid');
        }
        
        // Consent validation
        const consentCheckbox = document.getElementById('consent');
        if (consentCheckbox && !consentCheckbox.checked) {
            consentCheckbox.classList.add('is-invalid');
            isValid = false;
        } else if (consentCheckbox) {
            consentCheckbox.classList.remove('is-invalid');
            consentCheckbox.classList.add('is-valid');
        }
        
        return isValid;
    }
    
    // Real-time validation feedback
    const formInputs = document.querySelectorAll('.form-control');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.id === 'name' || this.id === 'subject') {
                if (this.value.trim() === '') {
                    this.classList.add('is-invalid');
                } else {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                }
            } else if (this.id === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(this.value.trim())) {
                    this.classList.add('is-invalid');
                } else {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                }
            } else if (this.id === 'message') {
                if (this.value.trim() === '') {
                    this.classList.add('is-invalid');
                } else {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                }
            }
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid') && this.value.trim() !== '') {
                if (this.id === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (emailRegex.test(this.value.trim())) {
                        this.classList.remove('is-invalid');
                        this.classList.add('is-valid');
                    }
                } else {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                }
            }
        });
    });
    
    // Consent checkbox validation
    const consentCheckbox = document.getElementById('consent');
    
    if (consentCheckbox) {
        consentCheckbox.addEventListener('change', function() {
            if (this.checked) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else {
                this.classList.remove('is-valid');
                this.classList.add('is-invalid');
            }
        });
    }
});
