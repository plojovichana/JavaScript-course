const postList = document.getElementById("postList");
const userId = new URLSearchParams(window.location.search).get("userId");

if (!userId) {
  window.location.href = "index.html";
}

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      const li = document.createElement("li");
      li.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      postList.appendChild(li);
    });
  })
  .catch(error => console.error(error));
