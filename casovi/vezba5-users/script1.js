// const params =new URLSearchParams(window.location.search);
// const id = params.get('id');
// let container = document.querySelector('.container');

// console.log("id"+id)

// async function getPosts(){
//     let data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
//     let posts = await data.json();
//     console.log(posts);
//     return posts;
// }

// getPosts().then(posts => {
//     posts.forEach(post => {
//         let div = document.createElement('div');
//         div.innerHTML = `
//         <h2>${post.title}</h2>
//         <p>${post.body}</p>
//         `;
//         container.appendChild(div);
//     })
// }

// )

// const urlParams = new URLSearchParams(window.location.search);
// const userId = urlParams.get('id');
// const postsContainer = document.getElementById('posts');

// async function getPosts() {
// 	try {
// 		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
// 		const posts = await response.json();
// 		return posts;
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// async function displayPosts() {
// 	const posts = await getPosts();
// 	posts.forEach(post => {
// 		const postDiv = document.createElement('div');
// 		postDiv.innerHTML = `
// 			<h2>${post.title}</h2>
// 			<p>${post.body}</p>
// 		`;
// 		postsContainer.appendChild(postDiv);
// 	});
// }

// displayPosts();




// let btnSearch = document.getElementById('btn-search');
// let inputUserId = document.getElementById('user-id');
// let postsContainer = document.getElementById('posts-container');

// btnSearch.addEventListener('click', () => {
//     let userId = inputUserId.value;
//     getPosts(userId);
// });

// async function getPosts(userId) {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
//     let posts = await response.json();
//     console.log(posts);
//     displayPosts(posts);
// }

// function displayPosts(posts) {
//     postsContainer.innerHTML = '';
//     posts.forEach(post => {
//         let postDiv = document.createElement('div');
//         let title = document.createElement('h2');
//         let body = document.createElement('p');
//         title.innerText = post.title;
//         body.innerText = post.body;
//         postDiv.appendChild(title);
//         postDiv.appendChild(body);
//         postsContainer.appendChild(postDiv);
//     });
// }







// const params = new URLSearchParams(window.location.search);
// const userId = params.get("id");
// const container = document.querySelector('.container');

// async function getPosts(){
//     let data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
//     let posts = await data.json();
//     return posts;
// }
    
// getPosts().then(posts => {
//     posts.forEach(post => {
//         let div = document.createElement('div');
//         div.innerHTML = `
//             <h2>${post.title}</h2>
//             <p>${post.body}</p>
//         `;
//         container.appendChild(div);
//     })
// });


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
