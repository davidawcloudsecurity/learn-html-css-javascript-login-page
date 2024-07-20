// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send a POST request to the backend
    fetch('http://localhost:3000/login', {
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
            alert(data.message);
        } else {
            errorMessageElement.innerText = data.message;
            errorMessageElement.classList.remove('hidden');
        }
    })
    .catch(error => console.error('Error:', error));
});
