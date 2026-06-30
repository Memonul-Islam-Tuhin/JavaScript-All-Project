const getButton = document.getElementById("get-data");
const sendButton = document.getElementById("send-data");
const output = document.getElementById("output");

let currentTodo = 1;
let postNumber = 1;

function sendRequest(method, url, data = null) {
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network Error");
    }

    return response.json();
  });
}

// ======================
// GET DATA (One by One)
// ======================

function getData() {
  sendRequest(
    "GET",
    `https://jsonplaceholder.typicode.com/todos/${currentTodo}`,
  )
    .then((todo) => {
      output.innerHTML += `
        <div class="card">
          <h3>Todo #${todo.id}</h3>

          <p><strong>User ID:</strong> ${todo.userId}</p>

          <p><strong>Title:</strong> ${todo.title}</p>

          <p><strong>Completed:</strong> ${todo.completed}</p>
        </div>
      `;

      currentTodo++;

      if (currentTodo > 200) {
        currentTodo = 1;
      }
    })
    .catch((err) => console.error(err));
}

// ======================
// POST DATA
// ======================

function sendData() {
  sendRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify({
      title: `Post ${postNumber}`,
      body: `This is body number ${postNumber}`,
      userId: 1,
    }),
  )
    .then((post) => {
      output.innerHTML =
        `
        <div class="card">
          <h3>New Post Created</h3>

          <p><strong>ID:</strong> ${post.id}</p>

          <p><strong>Title:</strong> ${post.title}</p>

          <p><strong>Body:</strong> ${post.body}</p>

          <p><strong>User ID:</strong> ${post.userId}</p>
        </div>
      ` + output.innerHTML;

      postNumber++;
    })
    .catch((err) => console.error(err));
}

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);
