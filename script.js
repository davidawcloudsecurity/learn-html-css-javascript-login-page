document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Submitting login with:', { username, password });

    fetch('https://5500-davidawclou-learnhtmlcs-u0d5vrpjmnb.ws-us115.gitpod.io:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        console.log('Response Status:', response.status);
        return response.json();
    })
    .then(data => {
        console.log('Response Data:', data);
        const errorMessageElement = document.getElementById('error-message');
        if (data.success) {
            alert(data.message);
        } else {
            errorMessageElement.innerText = data.message;
            errorMessageElement.classList.remove('hidden');
        }
    })
    .catch(error => {
        console.error('Fetch Error:', error);
    });
});
