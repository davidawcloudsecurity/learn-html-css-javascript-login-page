// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send a POST request to the backend
    fetch('http://localhost:3306/login', { // Update this URL if your server runs on a different port or domain
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        const errorMessageElement = document.getElementById('error-message');
        if (data.success) {
            alert(data.message); // Show success message
            // Redirect or handle successful login here
        } else {
            errorMessageElement.innerText = data.message; // Show error message
            errorMessageElement.classList.remove('hidden');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error scenario
    });
});
