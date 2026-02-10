let container = document.getElementById("posts-container");
let reloadButton = document.getElementById("reload-posts-btn");

async function getPosts() {
    container.innerHTML = "";

    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();

    for (let i=0; i < 10; i++) {
        let postDiv = document.createElement("div");

        let h3 = document.createElement("h3");
        h3.textContent = posts[i].title;

        let p = document.createElement("p");
        p.textContent = posts[i].body;

        postDiv.appendChild(h3);
        postDiv.appendChild(p);
        container.appendChild(postDiv);
    }
}

reloadButton.addEventListener("click", getPosts());

getPosts();