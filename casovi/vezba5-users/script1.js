    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");
    const container = document.querySelector('.container');

    async function getPosts(){
        let data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        let posts = await data.json();
        return posts;
    }

    getPosts().then(posts => {
        posts.forEach(post => {
            let div = document.getElementById('posts');

            div.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            console.log(posts);
            container.appendChild(div);

        })
    }
    )
