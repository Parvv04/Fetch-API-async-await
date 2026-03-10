let input = document.getElementById("username");
let button = document.getElementById("searchBtn");
let output = document.getElementById("profile");

async function getProfile(username){
    if(!username){
        return null;
    }

    let response = await fetch(`https://api.github.com/users/${username}`);
    let data = await response.json();
    if(data.message === "Not Found"){
        return null;
    }
    return data;
}

async function RunApp(){
    let username = input.value.trim();
    output.textContent = "Loading...";
    try{
        let profile = await getProfile(username);
        if(!profile){
            output.textContent = "User not found. Please try again.";
            return;
        }

        let avatar = profile.avatar_url;
        let followers = profile.followers;
        let repos = profile.public_repos;
        let bio = profile.bio || "No bio available.";

        output.innerHTML = `<img src="${avatar}" alt="Avatar" width="100">
<p>Followers: ${followers}</p>
<p>Public Repositories: ${repos}</p>
<p>Bio: ${bio}</p>
`;
    }
    catch(error){
        output.textContent = "An error occurred. Please try again later.";
    }
}
button.addEventListener("click", RunApp);