const loginFormHandler = async (event) => {
    event.preventDefault();

const loginUsername = document
.querySelector('#username-input-login')
.value.trim();

const loginPassword = document
.querySelector('#password-input-login')
.value.trim();

const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({ loginUsername, loginPassword }),
    header: { 'Content-Type': 'application/json' },
});

if (response.ok) {
    document.location.replace('/dashboard');
} else {
    alert(response.statusText);
}
};
document
.querySelector('#login-form')
.addEventListener('submit', loginFormHandler);