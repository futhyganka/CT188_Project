// Không cho truy cập trực tiếp qua link
// if (document.referrer.search("/nguoidung.html") === -1 && document.referrer.search("/admin.html") === -1) {
//     window.location.href = "/gioithieu.html";
// }

let navbarsAdmin = document.querySelectorAll('.navbar .nav-link');
let boxsAdmin = document.querySelectorAll('main > div');
let dropdownMenuAdmin = document.querySelector('.dropdown .dropdown-menu');
let dropdownDataAdmin = document.querySelector('.dropdown .dropdown-toggle');
let searchBtnAdmin = document.querySelector('.search-btn');
let searchInputAdmin = document.querySelector('.search-input');
let boxsTbodyAdmin = document.querySelectorAll('main tbody');
let dataAdmin = [[], [], []];
let indexDataAdmin = 0;
let indexSearchAdmin = 0;
let searchData = [
    ["id", "title", "topic", "author", "publish", "status"],
    ["id", "name", "email", "address", "role"],
    ["id", "user", "status"]
]
startAdminPage();

searchBtnAdmin.addEventListener('click', () => {
    evtSearch();
})

// Chuyển 3 trang
for(let i = 0; i < 3; i++){
    navbarsAdmin[i].addEventListener('click', () => {
        for(let j = 0; j < 3; j++) {
            navbarsAdmin[j].classList.remove("active");
            boxsAdmin[j].classList.remove("active");
        }
        handleDropdown(i);
        indexSearchAdmin = 0;
        dropdownDataAdmin.innerText = 'Tìm kiếm theo id';
        searchInputAdmin.value = '';
        navbarsAdmin[i].classList.add("active");
        boxsAdmin[i].classList.add("active");
        indexDataAdmin = i;
    })
}

// reset dropdown mỗi lần chuyển trang
function handleDropdown(i) {
    if(i === 0) {
        dropdownMenuAdmin.innerHTML = 
            `<li><div class="dropdown-item">Tìm kiếm theo id</div></li>
            <li><div class="dropdown-item">Tìm kiếm theo tên</div></li>
            <li><div class="dropdown-item">Tìm kiếm theo thể loại</div></li>
            <li><div class="dropdown-item">Tìm kiếm theo tác giả</div></li>
            <li><div class="dropdown-item">Tìm kiếm theo nxb</div></li>
            <li><div class="dropdown-item">Tìm kiếm theo trạng thái</div></li>`
    }else if(i === 1) {
        dropdownMenuAdmin.innerHTML = 
            `<li><div class="dropdown-item">Tìm kiếm theo id</div></li>
            <li><div class="dropdown-item">Tìm kiếm theo tên</div></li>
            <li><div class="dropdown-item">Tìm kiếm theo email</div></li>
            <li><div class="dropdown-item">Tìm kiếm theo địa chỉ</div></li>
            <li><div class="dropdown-item">Tìm kiếm theo quyền</div></li>`
    }else {
        dropdownMenuAdmin.innerHTML = 
            `<li><div class="dropdown-item">Tìm kiếm theo id</div></li>
            <li><div class="dropdown-item">Tìm kiếm theo người dùng</div></li>
            <li><div class="dropdown-item">Tìm kiếm theo trạng thái</div></li>`
    }
    for(let j = 0; j < dropdownMenuAdmin.children.length; j++) {
        dropdownMenuAdmin.children[j].addEventListener('click', () => {
            evtDropdownAdmin(j, dropdownMenuAdmin.children[j]);
        })
    }
}

// Sự kiện của dropdown
function evtDropdownAdmin(index, item) {
    // console.log(index);
    indexSearchAdmin = index;
    dropdownDataAdmin.innerText = item.innerText;
}

// Tìm kiếm
function evtSearch() {
    if(searchInputAdmin.value.length === 0) return;
    let dataSearch = searchInputAdmin.value;
    switch(indexDataAdmin) {
        case 0:
            getBooks((books) => {
                dataAdmin[0] = books.filter((book) => {
                    let data = book[searchData[indexDataAdmin][indexSearchAdmin]];
                    // console.log(data);
                    if(typeof data === 'object') {
                        if(indexSearchAdmin === 2) data = data.map(t => type[t]).join(',');
                        else data = data.join(',');
                    }
                    return data.toLowerCase().search(dataSearch.toLowerCase()) !== -1;
                })
                readerBookAdmin();
            })
            break;
        case 1:
            getUsers((users) => {
                dataAdmin[1] = users.filter((user) => {
                    let data = user[searchData[indexDataAdmin][indexSearchAdmin]];
                    // console.log(data);
                    if(typeof data === 'object') data = data.join(',');
                    return data.toLowerCase().search(dataSearch.toLowerCase()) !== -1;
                })
                readerUserAdmin();
            })
            break;
        case 2:
            getOrders((orders) => {
                dataAdmin[2] = orders.filter((order) => {
                    // console.log(dataSearch)
                    let data = order[searchData[indexDataAdmin][indexSearchAdmin]];
                    // console.log(data);
                    if(typeof data === 'object') data = data.join(',');
                    // console.log(data.toLowerCase().search(dataSearch.toLowerCase()));
                    return data.toLowerCase().search(dataSearch.toLowerCase()) !== -1;
                })
                readerOrderAdmin();
            })
            break;
    }
}

function startAdminPage() {
    getAllBook();
    getAllUser();
    getAllOrder();
    handleDropdown(0);
}

// Lấy dữ liệu
function getAllBook() {
    getBooks((books) => {
        dataAdmin[0] = books;
        readerBookAdmin();
    })
}

function getAllUser() {
    getUsers((users) => {
        dataAdmin[1] = users;
        readerUserAdmin();
    })
}

function getAllOrder() {
    getOrders((orders) => {
        dataAdmin[2] = orders;
        readerOrderAdmin();
    })
}

// Hàm đọc dữ liệu in ra bảng
function readerBookAdmin() {
    boxsTbodyAdmin[0].innerHTML = dataAdmin[0].map((book, i) => {
        return `<tr>
            <td>${i + 1}</td>
            <td>${book.id}</td>
            <td><img width="50px" src="${book.image}" alt=""></td>
            <td>${book.title}</td>
            <td>${book.author.join(',<br>')}</td>
            <td>${book.topic.map(b => type[b]).join(',<br>')}</td>
            <td>${book.publish}</td>
            <td>${book.status}</td>
            <td>${book.quantity}</td>
            <td>${(book.price * (100 - book.discount) / 100).toLocaleString('vi-VN')}đ</td>
            <td>
                <button>Sửa</button>
                <button>Xóa</button>
            </td>
        </tr>`
    }).join('');
}

function readerUserAdmin() {
    boxsTbodyAdmin[1].innerHTML = dataAdmin[1].map((user, i) => {
        return `<tr>
            <td>${i+1}</td>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.email}</td>
            <td>${user.address}</td>
            <td>
                <button>${user.role}</button>
            </td>
            <td>
                <button>Sửa</button>
                <button>Xóa</button>
            </td>
        </tr>`
    }).join('');
}

async function readerOrderAdmin() {
    // async function getBook(id) {
    //     let res = await fetch(booksApi + '/' + id);
    //     return await res.json();
    // }

    async function getBook(id) {
        let db = getDB();
        return book = db.books.find(b => b.id === id);
    }

    boxsTbodyAdmin[2].innerHTML = (await Promise.all(
        dataAdmin[2].map(async (order, i) => {

            let products = await Promise.all(
                order.product.map(async ({id, quantity}) => {
                    let book = await getBook(id);
                    let price = book.price * (100 - book.discount) / 100;
                    quantity = Number(quantity);

                    return {
                        html: `${book.title} [${quantity}] x ${price.toLocaleString('vi-VN')}`,
                        total: price * quantity
                    };
                })
            );

            let productHTML = products.map(p => p.html).join('<br>');
            let price = products.reduce((sum, p) => sum + p.total, 0);
            let discount = Number(order.discount);
            let discountMoney = price * discount / 100;
            let final = price - discountMoney;

            return `<tr>
                <td>${i+1}</td>
                <td>${order.id}</td>
                <td>${order.user}</td>
                <td>${productHTML}</td>
                <td>${price.toLocaleString('vi-VN')}đ</td>
                <td>${discountMoney.toLocaleString('vi-VN')}đ</td>
                <td>${final.toLocaleString('vi-VN')}đ</td>
                <td>${order.status}</td>
                <td>
                    ${order.status === 'Chờ xử lý'
                        ? `<button>Xác nhận</button>
                        <button>Hủy</button>`: 
                        order.status === 'Đã duyệt'
                        ? `<button>Giao hàng</button>`:
                        order.status === 'Đang giao hàng'
                        ? `<button>Đã nhận</button>
                        <button>Hoàn hàng</button>`:''
                    }
                </td>
            </tr>`;
        })
    )).join('');
}