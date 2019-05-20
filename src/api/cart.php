<?php

include 'conn.php';

//接收前端数据
$uid = isset($_POST['uid']) ? $_POST['uid'] : '';
$gid = isset($_POST['gid']) ? $_POST['gid'] : '';
$gouwuid = isset($_POST['gouwuid']) ? $_POST['gouwuid'] : '';

if($gid){
	$sql = "SELECT * FROM `seller&goods` WHERE gid=$gid";

	$res = $conn->query($sql);

	$data = $res->fetch_all(MYSQLI_ASSOC);
	    
	echo json_encode($data,JSON_UNESCAPED_UNICODE);
}
if($uid){
	$sql = "SELECT * FROM userhistory WHERE uid=$uid ";

	$res = $conn->query($sql);

	$data = $res->fetch_all(MYSQLI_ASSOC);
	    
	echo json_encode($data,JSON_UNESCAPED_UNICODE);
}
if($gouwuid){
	$sql = "DELETE FROM userhistory WHERE gouwuid=$gouwuid";

	$res = $conn->query($sql);
	   
	echo $res;
}

?>