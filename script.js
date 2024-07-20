// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (for demonstration purposes)
    if (username === '' || password === '') {
        document.getElementById('error-message').innerText = 'Please fill in all fields.';
        document.getElementById('error-message').classList.remove('hidden');
    } else {
        document.getElementById('error-message').classList.add('hidden');
        // Perform login (e.g., send data to server)
        alert('Login successful!');
    }
});
