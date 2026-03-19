// Không cho truy cập trực tiếp qua link
// if (document.referrer.search("/nguoidung.html") === -1 && document.referrer.search("/admin.html") === -1) {
//     window.location.href = "/gioithieu.html";
// }

let navbarsAdmin = document.querySelectorAll('.navbar .nav-link');
let boxsAdmin = document.querySelectorAll('main > div');
let searchsAdmin = document.querySelectorAll('.dropdown .dropdown-item');
let contentSearchAdmin = document.querySelector('.dropdown .dropdown-toggle');
let boxsTbodyAdmin = document.querySelectorAll('main tbody');
let dataAdmin = [[], [], []];
let indexDataAdmin = 0;
let indexSearchAdmin = 0;

// Chuyển 3 trang
for(let i = 0; i < 3; i++){
    navbarsAdmin[i].addEventListener('click', () => {
        for(let j = 0; j < 3; j++) {
            navbarsAdmin[j].classList.remove("active");
            boxsAdmin[j].classList.remove("active");
        }
        navbarsAdmin[i].classList.add("active");
        boxsAdmin[i].classList.add("active");
        indexDataAdmin = i;
    })
}

// Chuyển nội dung dropdown
for(let i = 0; i < 2; i++) {
    searchsAdmin[i].addEventListener('click', () => {
        contentSearchAdmin.innerText = searchsAdmin[i].innerText;
        indexSearchAdmin = i;
    })
}

// Lấy dữ liệu
getBooks((books) => {
    dataAdmin[0] = books;
})

getUsers((users) => {
    dataAdmin[1] = users;
})

getOrders((orders) => {
    dataAdmin[2] = orders;
})

// Đọc dữ liệu in ra bảng
function readerBookAdmin() {
    boxsTbodyAdmin[0].innerHTML = dataAdmin[0].map((book, i) => {
        return `<tr>
            <td>${i + 1}</td>
            <td>${book.id}</td>
            <td><img width="50px" src="${book.image}" alt=""></td>
            <td>${book.title}</td>
            <td>${book.topic.join('<br>')}</td>
            <td>${book.status}</td>
            <td>${book.quantity}</td>
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

function readerOrderAdmin() {
    // boxsTbodyAdmin[2].innerHTML = dataAdmin[2].map((order, i) => {
    //     return `<tr>
    //         <td>${i++}</td>
    //         <td>${order.id}</td>
    //         <td>${order.user}</td>
    //         <td>${order.product.map(({id, quantity}) => {
    //             return 
    //         })}
    //             sp1[sl] x giá <br>
    //             sp2[sl] x giá
    //         </td>
    //         <td>${}100.000</td>
    //         <td>${}20.000</td>
    //         <td>${}80.000</td>
    //         <td>Chờ xử lý</td>
    //         <td>
    //             <button>Xác Nhận</button>
    //             <button>Hủy</button>
    //         </td>
    //     </tr>`
    // }).join('');
}