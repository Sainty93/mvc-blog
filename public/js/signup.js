const signupFormHandler = async (event) => {
    event.preventDefault();

const signupUsername = document 
.querySelector('#username-input-signup')
    .value.trim();
const signupPassword = document
.querySelector('#password-input-signup')
.value.trim();

const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({ signupUsername, signupPassword }),
    headers: { 'Content-type': 'application/json' },
});

if (response.ok) {
    document.location.replace('/dashboard');
} else {
    alert(response.statusText);
}
};

document
.querySelector('#signup-form')
.addEventListener('submit', signupFormHandler);
