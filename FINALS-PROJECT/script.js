document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('greeting') && document.getElementById('datetime')) {
        updateGreeting();
        updateDateTime();
        setInterval(updateDateTime, 1000);
    }

    if (document.getElementById('signupForm')) {
        const signupForm = document.getElementById('signupForm');
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateSignupForm()) {
                alert('Signup successful! (Note: This is a demo BTW - no real account created ^^ )');
            }
        });
    }
});

function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = 'Hello';
    if (hour >= 6 && hour < 12) {
        greeting = 'Good morning';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }
    document.getElementById('greeting').textContent = `${greeting}, Art Enjoyer!`;
}

function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit', 
        second: '2-digit' 
    };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    document.getElementById('datetime').textContent = `Current Date and Time: ${formattedDateTime}`;
}

function validateSignupForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    clearErrors();

    let isValid = true;

    if (username === '') {
        showError('username', 'Username is required.');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        showError('email', 'Email is required.');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('email', 'Please enter a valid email address.');
        isValid = false;
    }

    if (password === '') {
        showError('password', 'Password is required.');
        isValid = false;
    } else if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    return isValid;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.createElement('div');
    errorElement.className = 'text-danger mt-1';
    errorElement.textContent = message;
    field.parentNode.appendChild(errorElement);
}

function clearErrors() {
    const errors = document.querySelectorAll('.text-danger');
    errors.forEach(error => error.remove());
}