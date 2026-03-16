// Sách

let booksApi = 'http://localhost:3000/books';

// lấy mảng books
function getBooks(callback) {
    fetch(booksApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

/** để đây cho mọi người tham khảo cách dùng
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
 */

// Thêm book
function createBook(book, callback){
    var option = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    }
    fetch(booksApi, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// sửa sách
function setBook(id, book, callback) {
    var option = {
        method: 'patch',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    }
    fetch(booksApi + '/' + id, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// Xóa sách
function deleteBook(id, callback) {
    var option = {
        method: 'delete'
    }
    fetch(booksApi + '/' + id, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}


// người dùng

let usersApi = 'http://localhost:3000/users';

// lấy mảng users
function getUsers(callback) {
    fetch(usersApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// Thêm user
function createUser(user, callback){
    var option = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    fetch(usersApi, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// sửa user
function setUser(id, user, callback) {
    var option = {
        method: 'patch',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }
    fetch(usersApi + '/' + id, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// Xóa user
function deleteUser(id, callback) {
    var option = {
        method: 'delete'
    }
    fetch(usersApi + '/' + id, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}


// đơn hàng

let ordersApi = 'http://localhost:3000/orders';

// lấy mảng orders
function getOrders(callback) {
    fetch(ordersApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// Thêm order
function createOrder(order, callback){
    var option = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    }
    fetch(ordersApi, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// sửa order
function setOrder(id, order, callback) {
    var option = {
        method: 'patch',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    }
    fetch(ordersApi + '/' + id, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}

// Xóa order
function deleteOrder(id, callback) {
    var option = {
        method: 'delete'
    }
    fetch(ordersApi + '/' + id, option)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
}