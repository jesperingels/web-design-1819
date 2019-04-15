const bookMenuItem = document.getElementById('books-link');
const bookList = document.querySelector('.collapsed');

bookMenuItem.addEventListener('click', (e)=>{
    bookList.classList.toggle('active');
});



