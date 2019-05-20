<?php
    include 'conn.php';

    //接收前端数据
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $information_name = isset($_POST['information_name']) ? $_POST['information_name'] : '';
    $information_psw = isset($_POST['information_psw']) ? $_POST['information_psw'] : '';
    $information_val = isset($_POST['information_val']) ? $_POST['information_val'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    $tel = isset($_POST['tel']) ? $_POST['tel'] : '';
    $reg_name = isset($_POST['reg_name']) ? $_POST['reg_name'] : '';
    $reg_pasw = isset($_POST['reg_pasw']) ? $_POST['reg_pasw'] : '';
    $reg_phone = isset($_POST['reg_phone']) ? $_POST['reg_phone'] : '';


if($name && $password){

	$sql = "SELECT * FROM user WHERE name='$name' AND password='$password'";

    $res = $conn->query($sql);

    $data = $res->fetch_all(MYSQLI_ASSOC);
    
    echo json_encode($data,JSON_UNESCAPED_UNICODE);

}
if($tel){

	$sql = "SELECT * FROM user WHERE phone='$tel'";

    $res = $conn->query($sql);

    if($res->num_rows == 1){
	    $data = $res->fetch_all(MYSQLI_ASSOC);
	    
	    echo json_encode($data,JSON_UNESCAPED_UNICODE);
    }else{
    	$sql2 = "INSERT INTO `user`(phone) VALUES($tel)";
    	$res2 = $conn->query($sql2);
    	echo $res2;
    }

}
if($information_name && $information_psw && $information_val){
	$sql = "UPDATE `user` SET name='$information_name' WHERE phone='$information_val'";
	$sql2 = "UPDATE `user` SET password=$information_psw WHERE phone='$information_val'";

    $res = $conn->query($sql);

    $res2 = $conn->query($sql2);

    $sql3 = "SELECT * FROM user WHERE phone='$information_val'";

    $res3 = $conn->query($sql3);

    $data = $res3->fetch_all(MYSQLI_ASSOC);
    
    echo json_encode($data,JSON_UNESCAPED_UNICODE);	
}
if( $reg_name && $reg_pasw && $reg_phone){
    $sql = "INSERT INTO `user`(name,phone,password) VALUES ('$reg_name','$reg_pasw','$reg_phone')";

    $res = $conn->query($sql);

    $sql2 = "SELECT * FROM user WHERE name='$reg_name'";

    $res2 = $conn->query($sql2);

    $data = $res2->fetch_all(MYSQLI_ASSOC);
    
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
}
    


?>