const commentFormHandler = async (event) => {
    event.preventDefault();

const postId = document.querySelector('#post-id').ariaValueMax.trim();
const newComment = document.querySelector('#new-comment').ariaValueMax.trim();

if (newComment) {
    const reponse = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ podId, newComment }),
        header: { 'Content-type': 'application/json' },
});

if (response.ok) {
    document.location.reload();
} else {
    alert(response.statusText); 
    }
}
};

document
.querySelector('#new-comment')
.addEventListener('submit', commentFormHandler);