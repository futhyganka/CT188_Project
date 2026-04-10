let navOrder = document.querySelectorAll('.order .navbar-nav .nav-link');
let boxOrder = document.querySelectorAll('.order .content-order > div');

for(let i = 0; i < 4; i++) {
    navOrder[i].addEventListener('click', () => {
        for(let j = 0; j < 4; j++) {
            navOrder[j].classList.remove('active');
            boxOrder[j].classList.remove('active');
        }
        navOrder[i].classList.add('active');
        boxOrder[i].classList.add('active');
    }); 
}

function maskString(str) {
  if (str.length <= 6) return str; // tránh lỗi nếu chuỗi quá ngắn
  return str.slice(0, 3) + "****" + str.slice(-3);
}

let statusConvertIndex = {
    "Chờ xử lý": 0,
    "Đang giao hàng": 1,
    "Đã duyệt": 1,
    "Giao hàng thành công": 2,
    "Đã hủy": 3
}

function displayOrderPageUser() {
    for(let i = 0; i < 4; i++) {
        boxOrder[i].innerHTML = '';
    }
    if(localStorage.getItem('userCurr')) {
        let id = localStorage.getItem('userCurr');
        getUser(id, (user) => {
            user.order.forEach((idOder) => {
                getOrder(idOder, (order) => {
                    if(!order) return;

                    let indexOrder = statusConvertIndex[order.status];
                    
                    let priceTotal = 0;

                    let productHtml = order.product.map(({id, quantity}) => {
                        let product;
                        getBook(id, (book) => {
                            priceTotal += (book.price * (100 - book.discount) / 100) * quantity;
                            product = book;
                        })
                        return `<div class="product">
                                    <div class="img">
                                        <img src="${product.image}" alt="">
                                    </div>
                                    <div class="detail-product">
                                        <div class="title">${product.title}</div>
                                        <div class="price">
                                            <span class="price-old">${product.price.toLocaleString('vi-VN')}đ</span>
                                            <span class="price-new">${(product.price * (100 - product.discount) / 100).toLocaleString('vi-VN')}đ</span>
                                        </div>
                                        <div class="qty">x ${quantity}</div>
                                    </div>
                                </div>`
                    }).join('');

                    boxOrder[indexOrder].innerHTML += `<div class="detail">
                            <div class="info">
                                <table>
                                    <tr class="id">
                                        <td><b>Id:</b></td>
                                        <td>${order.id}</td>
                                    </tr>
                                    <tr class="date">
                                        <td><b>Ngày:</b></td>
                                        <td>${order.date}</td>
                                    </tr>
                                </table>
                                <div class="receiver">
                                    <b>Người nhận:</b>
                                    <table>
                                        <tr class="name">
                                            <td><b>Tên:</b></td>
                                            <td>${user.name}</td>
                                        </tr>
                                        <tr class="phone">
                                            <td><b>Sđt:</b></td>
                                            <td>${maskString(user.phone)}</td>
                                        </tr>
                                        <tr class="address">
                                            <td><b>ĐChỉ:</b></td>
                                            <td>${maskString(user.address)}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="products">
                                ${productHtml}

                                <div class="ship">
                                    Vận chuyển:
                                    <b>${order.ship.toLocaleString('vi-VN')}đ</b>
                                </div>

                                <div class="price">
                                    Tổng tiền:
                                    <b>${(priceTotal + order.ship).toLocaleString('vi-VN')}đ</b>
                                </div>
                            </div>
                        </div>`
                })
            })
        })
    }
}

displayOrderPageUser();

window.addEventListener('storage', (e) => {
    displayOrderPageUser();
});