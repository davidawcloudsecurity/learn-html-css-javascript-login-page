// script.js

// Predefined credentials
const validUsername = 'user2';
const validPassword = '123';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Clear previous error messages
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.classList.add('hidden');
    
    // Validate credentials
    if (username !== validUsername && password !== validPassword) {
        errorMessageElement.innerText = 'Both username and password are incorrect.';
        errorMessageElement.classList.remove('hidden');
    } else if (username !== validUsername) {
        errorMessageElement.innerText = 'Username is incorrect.';
        errorMessageElement.classList.remove('hidden');
    } else if (password !== validPassword) {
        errorMessageElement.innerText = 'Password is incorrect.';
        errorMessageElement.classList.remove('hidden');
    } else {
        alert('Login successful!');
    }
});
