function attachEvents() {
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnViewPosts = document.getElementById('btnViewPost');
    const BASE_URL = 'http://localhost:3030/jsonstore/blog/';
    const postDetails = document.getElementById('post-title');
    const posts = document.getElementById('posts');
    const postBody = document.getElementById('post-body');
    const commentsToPost = document.getElementById('post-comments');
    btnLoadPosts.addEventListener('click', btnLoadPostsHandler);
    btnViewPosts.addEventListener('click', btnViewPostsHandler);

    function btnLoadPostsHandler() {
        fetch(`${BASE_URL}posts`)
        .then((res) => res.json())
        .then((data) => {
            for (const postId in data) {
                const {body, id, title} = data[postId];
                const option = document.createElement('option');
                option.textContent = title;
                option.value = id;
                posts.appendChild(option);
            }
        })
    }
    
    function btnViewPostsHandler() {
        commentsToPost.innerHTML = '';

        fetch(`${BASE_URL}comments`)
        .then((res) => res.json())
        .then((data) => {
            
            let selectedOption = posts.options[posts.selectedIndex];
            fetch(`${BASE_URL}posts`)
            .then((res) => res.json())
            .then((data) => {
                for (const postId in data) {
                    const {body, id, title} = data[postId];
                    if (id === selectedOption.value) {
                        postBody.textContent = body
                        console.log(title);
                    }
                }
            });
            postDetails.textContent = selectedOption.textContent;
            for (const commentId in data) {
                const {id, postId, text} = data[commentId];
               if(postId === selectedOption.value) {
                const li = document.createElement('li');
                li.textContent = text;
                commentsToPost.appendChild(li);
               }
            }
        })
    }
}



attachEvents();