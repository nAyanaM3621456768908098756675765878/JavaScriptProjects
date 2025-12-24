// Define the post1 object
let post1 = {
  id: 1,
  author: 'John',
  content: 'My first Post!',
  likes: 10,
  comments: ['Great post!', 'Nice photo!'],
  image: 'https://files.codingninjas.in/image2-28694.jpg'
};

function renderPosts() {
  // Get the existing posts container
  let postsDiv = document.getElementById("posts");

  // Create post div
  let postDiv = document.createElement("div");
  postDiv.className = "post";

  // Author name
  let author = document.createElement("h3");
  author.textContent = post1.author;

  // Image
  let image = document.createElement("img");
  image.src = post1.image;
  image.alt = "Post Image";

  // Content
  let content = document.createElement("p");
  content.textContent = post1.content;

  // Like button
  let likeBtn = document.createElement("button");
  likeBtn.textContent = "Like";

  // Comment input
  let commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.placeholder = "Write a comment...";

  // Comment button
  let commentBtn = document.createElement("button");
  commentBtn.textContent = "Comment";

  // Post footer
  let footer = document.createElement("div");
  footer.className = "post-footer";
  footer.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;

  // Comments container
  let commentsContainer = document.createElement("div");
  commentsContainer.className = "comments-container";
  commentsContainer.style.display = "none";

  // Add comments
  post1.comments.forEach(comment => {
    let p = document.createElement("p");
    p.textContent = comment;
    commentsContainer.appendChild(p);
  });

  // Toggle comments on footer click
  footer.addEventListener("click", () => {
    commentsContainer.style.display =
      commentsContainer.style.display === "none" ? "block" : "none";
  });

  // Append elements in required order
  postDiv.append(
    author,
    image,
    content,
    likeBtn,
    commentInput,
    commentBtn,
    footer,
    commentsContainer
  );

  // Append post to posts container
  postsDiv.appendChild(postDiv);
}

// Render post
renderPosts();
