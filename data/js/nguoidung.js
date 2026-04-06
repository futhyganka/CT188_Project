if(localStorage.getItem("userCurr") === null) {
    document.querySelector('.not-found').classList.add('active');
}else{
    let idUser = localStorage.getItem("userCurr");
    document.querySelector('main .user').classList.add('active');
    document.querySelector('main .order').classList.add('active');
    getUser(idUser, (user) => {
        let boxUser = document.querySelector('main .user');
        boxUser.innerHTML = `<h4>Xin chào, ${user.name}!</h4>
            <form>
                <h5>Thông tin tài khoản</h5>
                <div class="info">
                    <table>
                        <tr>
                            <td>Tên đăng nhập</td>
                            <td><input type="text" name="id" value="${user.id}" disabled></td>
                        </tr>
                        <tr>
                            <td>Họ Tên</td>
                            <td><input type="text" name="name" value="${user.name}" disabled></td>
                        </tr>
                        <tr>
                            <td>Số điện thoại</td>
                            <td><input type="number" name="phone" value="${user.phone}" disabled></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="email" name="email" value="${user.email}" disabled></td>
                        </tr>
                        <tr>
                            <td>Địa chỉ</td>
                            <td><textarea name="address" disabled>${user.address}</textarea></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="button" class="modify" onclick="handleEditInfoUser('${user.id}'); return false;">Sửa thông tin</button>
                                <button type="button" class="log-out" onclick="logOutUser(); return false;">Đăng xuất</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </form>`
        document.querySelector('main .user form').onsubmit = function(e) {
            e.preventDefault();
        }
        if(user.role === 'admin') {
            boxUser.innerHTML += '<a class="to-adminpage" href="./admin.html">Đến trang admin</a>'
        }
    })

    let isEditingUser = false;
    function handleEditInfoUser(id) {
        let btnModifyUser = document.querySelector('.modify');
        let formUser = document.querySelector('main .user form');
        isEditingUser = !isEditingUser;
        if(isEditingUser) {
            btnModifyUser.innerText = 'Cập nhật';
            formUser.name.disabled = false;
            formUser.phone.disabled = false;
            formUser.email.disabled = false;
            formUser.address.disabled = false;
        }else {
            if(formUser.name.value.trim().length === 0) {
                alert('Tên người dùng không được để trống');
                isEditingUser = !isEditingUser;
                return;
            }
            if(formUser.phone.value.length < 9 || formUser.phone.value.length > 11) {
                alert('Số điện thoại không hợp lệ');
                isEditingUser = !isEditingUser;
                return;
            }
            if(!/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,4}$/g.test(formUser.email.value.trim())) {
                alert('Email không hợp lệ');
                isEditingUser = !isEditingUser;
                return;
            }
            if(formUser.address.value.trim().length < 12) {
                alert('Vui lòng nhập rõ địa chỉ');
                isEditingUser = !isEditingUser;
                return;
            }
            let modifyUser = {
                'name': formUser.name.value.trim(),
                'phone': formUser.phone.value,
                'email': formUser.email.value.trim(),
                'address': formUser.address.value.trim()
            }

            // getUser(idUser, (user) => {
                // modifyUser.id = user.id;
                // modifyUser.role = user.role;
                // modifyUser.password = user.password;
                // modifyUser.order = user.order;

                setUser(id, modifyUser, () => {
                    btnModifyUser.innerText = 'Sửa thông tin';
                    formUser.name.value = formUser.name.value.trim();
                    formUser.email.value = formUser.email.value.trim();
                    formUser.address.value = formUser.address.value.trim();
                    formUser.name.disabled = true;
                    formUser.phone.disabled = true;
                    formUser.email.disabled = true;
                    formUser.address.disabled = true;
                })
            // })
        }
    }

}

function logOutUser() {
    localStorage.removeItem("userCurr");
    window.location.href = "./gioithieu.html";
}