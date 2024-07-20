// script.js

// Predefined credentials
const validUsername = 'user2';
const validPassword = '123';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation against predefined credentials
    if (username === validUsername && password === validPassword) {
        document.getElementById('error-message').classList.add('hidden');
        alert('Login successful!');
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password.';
        document.getElementById('error-message').classList.remove('hidden');
    }
});
