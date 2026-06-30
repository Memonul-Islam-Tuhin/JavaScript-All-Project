const getButton = document.getElementById("get-data");
const sendButton = document.getElementById("send-data");
const output = document.getElementById("output");

let currentTodo = 1;
let postNumber = 1;

function sendRequest(method, url, data = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Request Failed"));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };

    xhr.send(data);
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
    .catch((error) => {
      console.error(error);
    });
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
    .catch((error) => {
      console.error(error);
    });
}

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);
