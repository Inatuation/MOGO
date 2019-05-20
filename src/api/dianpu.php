<?php
	include 'conn.php';

	$gid = isset($_POST['gid']) ? $_POST['gid'] : '';
	$liuyan = isset($_POST['liuyan']) ? $_POST['liuyan'] : '';
	$sname = isset($_POST['sname']) ? $_POST['sname'] : '';
	$goodssname = isset($_POST['goodssname']) ? $_POST['goodssname'] : '';

if($gid){
	$sql = "SELECT * FROM `seller&goods` WHERE gid=$gid";

	$res = $conn->query($sql);

	$data = $res->fetch_all(MYSQLI_ASSOC);
	    
	echo json_encode($data,JSON_UNESCAPED_UNICODE);
}
if($liuyan){
	$sql = "SELECT * FROM `liuyanban` WHERE gid=$liuyan";

	$res = $conn->query($sql);

	$data = $res->fetch_all(MYSQLI_ASSOC);
	    
	echo json_encode($data,JSON_UNESCAPED_UNICODE);
}
if($sname){
	$sql = "SELECT * FROM `dianpu` WHERE sname='$sname'";

	$res = $conn->query($sql);

	$data = $res->fetch_all(MYSQLI_ASSOC);
	    
	echo json_encode($data,JSON_UNESCAPED_UNICODE);
}
if($goodssname){
	$sql = "SELECT * FROM `seller&goods` WHERE sname='$goodssname'";

	$res = $conn->query($sql);

	$data = $res->fetch_all(MYSQLI_ASSOC);
	    
	echo json_encode($data,JSON_UNESCAPED_UNICODE);
}

?>