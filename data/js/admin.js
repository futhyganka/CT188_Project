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

document.querySelector('form.search-box').onsubmit = function(e) {
    e.preventDefault();
}

document.querySelector('.add-product form').onsubmit = function(e) {
    e.preventDefault();
}

searchBtnAdmin.addEventListener('click', () => {
    evtSearch();
})

searchInputAdmin.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        evtSearch();
    }
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
                        if(indexSearchAdmin === 2) data = data.map(t => topic[t]).join(',');
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
            <td>${book.topic.map(b => topic[b]).join(',<br>')}</td>
            <td>${book.publish}</td>
            <td>${book.status}</td>
            <td>${book.quantity}</td>
            <td>${(book.price * (100 - book.discount) / 100).toLocaleString('vi-VN')}đ</td>
            <td>
                <button onclick="handlePatchBook('${book.id}')">Sửa</button>
                <button onclick="handleDeleteBook('${book.id}')">Xóa</button>
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
                <button onclick="changeRole('${user.id}')">${user.role === 'admin'? 'admin':'user'}</button>
            </td>
            <td>
                <button onclick="handleDeleteUser('${user.id}')">Xóa</button>
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
                        ? `<button onclick="confirmOrder('${order.id}')">Xác nhận</button>
                        <button onclick="cancelOrder('${order.id}')">Hủy</button>`: 
                        order.status === 'Đã duyệt'
                        ? `<button onclick="deliveryOrder('${order.id}')">Giao hàng</button>`:
                        order.status === 'Đang giao hàng'
                        ? `<button onclick="receiveOrder('${order.id}')">Đã nhận</button>
                        <button onclick="cancelOrder('${order.id}')">Hoàn hàng</button>`:''
                    }
                </td>
            </tr>`;
        })
    )).join('');
}

// Đóng mở hộp thêm sp
function openBoxAddProduct() {
    document.querySelector('.overlay').classList.add('active');
    document.querySelector('.add-product').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBoxAddProduct() {
    document.body.style.overflow = '';
    document.querySelector('.overlay').classList.remove('active');
    document.querySelector('.add-product').classList.remove('active');
    document.querySelector('.add-product .box h2').innerText = "Thêm sản phẩm";
    document.querySelector('.add-product .box .btn-add').innerText = "Thêm sản phẩm";
    document.querySelector('.add-product .box .btn-delete').style.display = 'inline-block';
    document.querySelector('.add-product .box .topic').innerHTML =
    `<select name="topic">
        <option value="none">Select</option>
        <option value="lichsu">Lịch sử</option>
        <option value="vhvn">Văn học Việt Nam</option>
        <option value="vhnn">Văn học nước ngoài</option>
        <option value="khoahoc">Khoa học</option>
        <option value="kynang">Kỹ năng</option>
        <option value="truyentranh">Truyện tranh</option>
    </select>`
    document.querySelector('.add-product .box .btn-add').onclick = handleCreateBook;
    deteleDataForm();
}

// Thêm input thể loại
function addBoxTopic() {
    document.querySelector('.add-product .box .topic').innerHTML +=
    `<select name="topic">
        <option value="none">Select</option>
        <option value="lichsu">Lịch sử</option>
        <option value="vhvn">Văn học Việt Nam</option>
        <option value="vhnn">Văn học nước ngoài</option>
        <option value="khoahoc">Khoa học</option>
        <option value="kynang">Kỹ năng</option>
        <option value="truyentranh">Truyện tranh</option>
    </select>`
}

function deteleDataForm() {
    document.querySelector('.add-product .box form').reset();
}

// Thêm sách
function handleCreateBook() {
    let formCreate = document.querySelector('.add-product .box form');

    let id = formCreate.id.value.trim();
    let title = formCreate.title.value.trim();
    let img = formCreate.img.files[0];

    let description = formCreate.dcr.value.trim().replace(/\n/g, '<br>');
    let author = formCreate.ath.value.trim().split('\n');

    let topic = [];
    if (formCreate.topic instanceof RadioNodeList) {
        for (let i = 0; i < formCreate.topic.length; i++) {
            if (formCreate.topic[i].checked && formCreate.topic[i].value !== 'none') {
                topic.push(formCreate.topic[i].value);
            }
        }
    } else if (formCreate.topic.value !== 'none') {
        topic.push(formCreate.topic.value);
    }

    let nxb = formCreate.nxb.value.trim();
    let date = formCreate.date.value.trim();
    let size = formCreate.size.value.trim();
    let weight = formCreate.weight.value.trim();
    let format = formCreate.format.value.trim();
    let price = formCreate.price.value.trim();
    let discount = formCreate.dis.value.trim();
    let status = formCreate.status.value.trim();
    let quantity = formCreate.sl.value.trim();

    // ktra lỗi
    if (!id) return alert('Nhập ID sản phẩm');
    if (!title) return alert('Nhập tên sản phẩm');

    if (img && !['image/png', 'image/webp', 'image/jpeg'].includes(img.type)) {
        return alert('File ảnh chỉ được .webp .png .jpg');
    }

    getBooks((books) => {
        let exist = books.find((b) => b.id === id);
        if (exist) {
            alert('ID sản phẩm đã tồn tại');
            return;
        }

        if (img) {
            const reader = new FileReader();
            reader.onload = function () {
                createNewBook(reader.result);
            };
            reader.readAsDataURL(img);
        } else {
            createNewBook("");
        }
    });

    function createNewBook(imageBase64) {
        let book = {
            id,
            title,
            image: imageBase64,
            description,
            author,
            topic,
            publish: nxb,
            date,
            size,
            weight,
            format,
            price,
            discount,
            status,
            quantity
        };

        // console.log(book);

        createBook(book, () => {
            closeBoxAddProduct();
        });
    }
}

// Sửa book
function handlePatchBook(id) {
    openBoxAddProduct();
    document.querySelector('.add-product .box h2').innerText = "Sửa sản phẩm " + id;
    document.querySelector('.add-product .box .btn-add').innerText = "Sửa sản phẩm";
    document.querySelector('.add-product .box .btn-delete').style.display = 'none';
    let formPatch = document.querySelector('.add-product .box form');
    
    getBook(id, (book) => {
        formPatch.id.value = book.id;
        formPatch.title.value = book.title;
        formPatch.dcr.value = book.description.replace(/<br>/g, '\n');
        formPatch.ath.value = book.author.join('\n');
        formPatch.topic.value = book.topic[0];
        if(book.topic.length > 1) {
            for(let i = 1; i < book.topic.length; i++) {
                addBoxTopic();
            }
            for(let i = 0; i < book.topic.length; i++) {
                formPatch.topic[i].value = book.topic[i];
            }
        }
        
        formPatch.nxb.value = book.publish;
        formPatch.date.value = book.date;
        formPatch.size.value = book.size;
        formPatch.weight.value = book.weight;
        formPatch.format.value = book.format;
        formPatch.price.value = book.price;
        formPatch.dis.value = book.discount;
        formPatch.status.value = book.status;
        formPatch.sl.value = book.quantity;

        document.querySelector('.add-product .box .btn-add').onclick = function() {
            let title = formPatch.title.value.trim();
            let img = formPatch.img.files[0];
            let description = formPatch.dcr.value.trim().replace(/\n/g, '<br>');
            let author = formPatch.ath.value.split('\n').map((a) => a.trim());
            let topic = [];
            if(formPatch.topic instanceof RadioNodeList === true) {
                for(let i = 0; i < formPatch.topic.length; i++) {
                    if(formPatch.topic[i].value !== 'none') topic.push(formPatch.topic[i].value);
                }
            }else if(formPatch.topic.value !== 'none'){
                topic.push(formPatch.topic.value);
            }
            let nxb = formPatch.nxb.value.trim();
            let date = formPatch.date.value.trim();
            let size = formPatch.size.value.trim();
            let weight = formPatch.weight.value.trim();
            let format = formPatch.format.value.trim();
            let price = formPatch.price.value.trim();
            let discount = formPatch.dis.value.trim();
            let status = formPatch.status.value.trim();
            let quantity = formPatch.sl.value.trim();

            // Xử lý ngoại lệ
            if(id !== formPatch.id.value.trim()) {
                alert('ID sản phẩm không được sửa');
                return;
            }
            if(title.length === 0) {
                alert('Nhập tên sản phẩm');
                return;
            }
            if(img && img.type !== 'image/png' && img.type !== 'image/webp' && img.type !== 'image/jpeg') {
                alert('File ảnh chỉ được có đuôi .webp .png .jpg');
                return;
            }
            if (img) {
                const reader = new FileReader();

                reader.onload = function () {
                    updateBook(reader.result); // có ảnh mới
                };

                reader.readAsDataURL(img);
            } else {
                updateBook(book.image); // giữ ảnh cũ
            }

            function updateBook(imageBase64) {
                let newBook = {
                    title,
                    description,
                    author,
                    topic,
                    "publish": nxb,
                    date,
                    size,
                    weight,
                    format,
                    price,
                    discount,
                    status,
                    quantity,
                    "image": imageBase64
                };

                setBook(id, newBook, (updatedBook) => {
                    let i = 0;
                    for (; i < dataAdmin[0].length; i++) {
                        if (dataAdmin[0][i].id === id) break;
                    }

                    if (i !== dataAdmin[0].length) {
                        dataAdmin[0][i] = updatedBook;
                    }

                    // console.log(dataAdmin[0][i]);
                    readerBookAdmin();
                    closeBoxAddProduct();
                });
            }
        }
    })
};

// Xóa sách
function handleDeleteBook(id) {
    let index = 0;
    for(; index < dataAdmin[0].length; index++) {
        if(dataAdmin[0][index].id === id) break;
    }
    if(index !== dataAdmin[0].length) {
        deleteBook(id, (book) => {
            dataAdmin[0].splice(index, 1);
            readerBookAdmin();
        })
    }
}

// Đặt giá trị cho số lượng
function defaultQuantity() {
    let form = document.querySelector('.add-product .box form');
    if(form.status.value === "Có hàng") {
        form.sl.value = '';
        form.sl.disabled = false;
    }else {
        form.sl.value = 0;
        form.sl.disabled = true;
    }
}

// thay đổi quyền
function changeRole(id) {
    getUser(id, (user) => {
        let newRole = 'admin';
        if(user.role === 'admin') {
            newRole = 'user';
        }
        let change = {
            'role': newRole
        }
        setUser(id, change, (newUser) => {
            dataAdmin[1].find((u) => u.id === newUser.id).role = newRole;
            readerUserAdmin();
        })
    })
}

// Xóa người dùng
function handleDeleteUser(id) {
    let index = 0;
    for(; index < dataAdmin[1].length; index++) {
        if(dataAdmin[1][index].id === id) break;
    }
    if(index !== dataAdmin[1].length) {
        deleteUser(id, (user) => {
            dataAdmin[1].splice(index, 1);
            readerUserAdmin();
            if(localStorage.getItem("userCurr") && localStorage.getItem("userCurr") === user.id) {
                localStorage.removeItem("userCurr");
            }
        })
    }
}

// xử lý đơn hàng
function confirmOrder(id) {
    let index = 0;
    for(; index < dataAdmin[2].length; index++) {
        if(dataAdmin[2][index].id === id) break;
    }
    if(index !== dataAdmin[2].length) {
        let update = {
            "status": "Đã duyệt"
        }
        setOrder(id, update, (order) => {
            dataAdmin[2][index] = order;
            readerOrderAdmin();
        })
    }
}

function cancelOrder(id) {
    let index = 0;
    for(; index < dataAdmin[2].length; index++) {
        if(dataAdmin[2][index].id === id) break;
    }
    if(index !== dataAdmin[2].length) {
        let update = {
            "status": "Đã hủy"
        }
        setOrder(id, update, (order) => {
            dataAdmin[2][index] = order;
            readerOrderAdmin();
        })
    }
}

function deliveryOrder(id) {
    let index = 0;
    for(; index < dataAdmin[2].length; index++) {
        if(dataAdmin[2][index].id === id) break;
    }
    if(index !== dataAdmin[2].length) {
        let update = {
            "status": "Đang giao hàng"
        }
        setOrder(id, update, (order) => {
            dataAdmin[2][index] = order;
            readerOrderAdmin();
        })
    }
}

function receiveOrder(id) {
    let index = 0;
    for(; index < dataAdmin[2].length; index++) {
        if(dataAdmin[2][index].id === id) break;
    }
    if(index !== dataAdmin[2].length) {
        let update = {
            "status": "Giao hàng thành công"
        }
        setOrder(id, update, (order) => {
            dataAdmin[2][index] = order;
            readerOrderAdmin();
        })
    }
}