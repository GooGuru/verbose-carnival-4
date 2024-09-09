const usernameEl = document.getElementById("username");
const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");

const formEl = document.getElementById("blogPost");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("do i work");

  // const userNameValue = userNameEl.value;
  // const titleElValue = titleEl.value;
  // const contentElValue = contentEl.value;

  // const blogData = {
  //     userName: userNameValue,
  //     title: titleElValue,
  //     content: contentElValue
  // }

  // localStorage.setItem('blog', JSON.stringify(blogData));
});
