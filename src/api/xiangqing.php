<?php

//连接数据库
include 'conn.php';
//接收前端数据
$gid = isset($_POST['gid']) ? $_POST['gid'] : '';
$house = isset($_POST['house']) ? $_POST['house'] : '';
$goodsNum = isset($_POST['goodsNum']) ? $_POST['goodsNum'] : '';
$goodsSize = isset($_POST['goodsSize']) ? $_POST['goodsSize'] : '';
$uid = isset($_POST['uid']) ? $_POST['uid'] : '';
$sid = isset($_POST['sid']) ? $_POST['sid'] : '';
$num = isset($_POST['num']) ? $_POST['num'] : '';


if($house && $gid){
	//用户点击搜藏
	$sql = "UPDATE `seller&goods` SET house=$house WHERE gid=$gid";

	$res = $conn->query($sql);

	echo $res;
}
else if($gid && $goodsNum==''){
	//渲染页面
	$sql = "SELECT * FROM `seller&goods` WHERE gid=$gid ";

	$res = $conn->query($sql);//得到结果集

	$data = $res->fetch_all(MYSQLI_ASSOC);

	echo json_encode($data,JSON_UNESCAPED_UNICODE);//传给前端
}
else if($goodsNum && $goodsSize){
	//负责记录用户的购物车记录
	$sql = "INSERT INTO userhistory(uid,sid,gid,goodsNum,goodsSize) VALUES('$uid','$sid','$gid','$goodsNum','$goodsSize')";

	$res = $conn->query($sql);

	echo json_encode($res,JSON_UNESCAPED_UNICODE);
}
else if($num){
	//渲染页面
	$sql = "SELECT * FROM appraise WHERE gid=$num";

	$res = $conn->query($sql);//得到结果集

	$data = $res->fetch_all(MYSQLI_ASSOC);

	echo json_encode($data,JSON_UNESCAPED_UNICODE);//传给前端
}

?>