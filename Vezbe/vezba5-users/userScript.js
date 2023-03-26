const userList = document.getElementById("userList");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="#" data-id="${user.id}">${user.name}  <br> <br>  ${user.email}</a>`;
      userList.appendChild(li);
    });

    userList.addEventListener("click", event => {
      event.preventDefault();
      const userId = event.target.dataset.id;
      if (userId) {
        window.location.href = `posts.html?userId=${userId}`;
      }
    });
  })
  .catch(error => console.error(error));
