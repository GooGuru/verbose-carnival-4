const storedBlog = [];

function renderBlog() {
   const li = document.createElement('li');
   li.textContent = storedBlog;
   storedBlog.appendChild(li);
}
function init() {
    const storedBlog = localStorage.getItem('blog');
    console.log(storedBlog)

    renderBlog();
}

init();