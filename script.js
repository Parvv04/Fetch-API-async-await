let container = document.getElementById("posts");

fetch("https://jsonplaceholder.typicode.com/posts")
.then(function (response) {
    return response.json();
})
.then(function (posts) {
    for (let i = 0; i < 5; i++) {
    let p = document.createElement("p");
    p.textContent = posts[i].title;
    container.appendChild(p);
    }
});


async function getPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();
    return posts;    
}
async function displayPosts() {
    let posts = await getPosts();
    for (let i = 0; i < 5; i++) {
        let p = document.createElement("p");
        p.textContent = posts[i].title;
        container.appendChild(p);
    }
}
displayPosts();