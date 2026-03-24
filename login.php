<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = trim($_POST['email']);
    if(empty($email)){
        echo "Vui lòng nhập email"; // thông báo lỗi
        exit;
    }

    $conn = new mysqli("localhost", "root", "", "users_db");
    if($conn->connect_error){
        echo "Lỗi kết nối database"; // thông báo lỗi
        exit;
    }

    $stmt = $conn->prepare("SELECT id FROM users WHERE email=?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if($stmt->num_rows == 0){
        echo "Email chưa đăng ký"; // thông báo lỗi server
        exit;
    }

    // Tạo mật khẩu mới và cập nhật database...
}
?>