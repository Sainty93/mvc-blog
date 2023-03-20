const newPostFormHandler = async (event) => {
    event.preventDefault();

const postTitle = document.querySelector('.post-title').value.trim();
const postBody = document.querySelector('.post-body').value.trim();

const response = await fetch('api/post', {
    method: 'POST',
    body: JSON.stringify({ postTitle, postBody }),
    headers: { 'Content-Type': 'application/json' },
});

if (response.ok) {
    document.location.replace('/dashboard');
} else {
    alert(response.statusText);
    }
};

document
.querySelector('#new-post')
.addEventListener('submit', newPostFormHandler);