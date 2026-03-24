<?php
header('Content-Type: application/json');

$response = ['success'=>false, 'message'=>''];

if($_SERVER['REQUEST_METHOD']=='POST'){
    $email = trim($_POST['email']);
    if(empty($email)){
        $response['message'] = "Vui lòng nhập email";
        echo json_encode($response);
        exit;
    }

    $conn = new mysqli("localhost","root","","CT188_Project");
    if($conn->connect_error){
        $response['message'] = "Lỗi kết nối database";
        echo json_encode($response);
        exit;
    }

    $stmt = $conn->prepare("SELECT id FROM users WHERE email=?");
    $stmt->bind_param("s",$email);
    $stmt->execute();
    $stmt->store_result();

    if($stmt->num_rows == 0){
        $response['message'] = "Email chưa đăng ký";
        echo json_encode($response);
        exit;
    }

    // Tạo mật khẩu mới
    $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    $newPassword = "";
    for($i=0;$i<10;$i++){
        $newPassword .= $chars[rand(0, strlen($chars)-1)];
    }

    $hash = password_hash($newPassword, PASSWORD_DEFAULT);
    $update = $conn->prepare("UPDATE users SET password=? WHERE email=?");
    $update->bind_param("ss",$hash,$email);
    $update->execute();

    $response['success'] = true;
    $response['message'] = $newPassword;
    echo json_encode($response);
}
?>