let booksApi = 'http://localhost:3000/books';
let books;

function getBooks(callback) {
    fetch(booksApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

getBooks((books) => {
    let listItem = document.querySelector(".bs-content .list-item");
    listItem.innerHTML = books.map((book) => {
        return `
        <div class="item">
            <form action="">
                <div class="box-item">
                    <div class="img"><img src="${book.image}" alt=""></div>
                    <h4 class="title-item">${book.title}</h4>
                    <div class="discount">-${book.discount}%</div>
                    <div class="price">
                        <span class="price-new">${book.price * (100 - book.discount) / 100}₫</span>
                        <span class="price-old">${book.price}₫</span>
                    </div>
                </div>
            </form>
        </div>`
    }).join("");
});

function setBooks(book, callback) {
    
}