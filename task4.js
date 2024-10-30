let users = [];

document.getElementById('registerBtn').addEventListener('click', register);
document.getElementById('loginBtn').addEventListener('click', login);
document.getElementById('logoutBtn').addEventListener('click', logout);

function register() {
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value.trim();

    if (username === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        alert('Username already exists.');
        return;
    }

    users.push({ username, password });
    alert('Registration successful! You can now log in.');
    document.getElementById('regUsername').value = '';
    document.getElementById('regPassword').value = '';
}

function login() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        document.getElementById('authContainer').style.display = 'none';
        document.getElementById('securedPage').style.display = 'block';
    } else {
        alert('Invalid username or password.');
    }

    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
}

function logout() {
    document.getElementById('authContainer').style.display = 'block';
    document.getElementById('securedPage').style.display = 'none';
    alert('You have logged out.');
}