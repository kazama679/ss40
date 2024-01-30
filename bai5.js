document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username: username, email: email });

    localStorage.setItem('users', JSON.stringify(users));
});