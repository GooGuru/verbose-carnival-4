const usernameEl = document.getElementById('username');
const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content');
const submitBtn = document.getElementById('submitBtn')
const formEl = document.getElementById('blogPost');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const userNameValue = usernameEl.value;
  const titleElValue = titleEl.value;
  const contentElValue = contentEl.value;

  const blogData = {
      userName: userNameValue,
      title: titleElValue,
      content: contentElValue
  }

  if (userNameValue === '') {
    alert('Username cannot be blank')
  } else if (titleElValue === ''){
    alert('Title cannot be blank')
  } else if (contentElValue === '') {
    alert('Conctent cannot be blank')
  } else {
    location.href = "./blog.html";
  }
  

  localStorage.setItem('blog', JSON.stringify(blogData));
});
