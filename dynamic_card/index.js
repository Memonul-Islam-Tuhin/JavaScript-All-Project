const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Server Error");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("something wrong!");
  }
};

const postsElement = document.querySelector(".posts");

const loadData = async () => {
  const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
  posts.map((post) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
    <h4 class="post-title">${post.title}</h4>
    <p class="post-body">${post.body}</p>
    `;

    postsElement.appendChild(postDiv);
  });
};

loadData();
