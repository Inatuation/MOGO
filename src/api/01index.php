<?php
//连接数据库
include 'conn.php';

//接收前端数据
$gid = isset($_GET['gid']) ? $_GET['gid'] : '';
$zan = isset($_GET['zan']) ? $_GET['zan'] : '';
$page = isset($_GET['page']) ? $_GET['page'] : '';
$num = isset($_GET['num']) ? $_GET['num'] : '';
$ed = $page * $num;
if($gid){
	//修改数据库
	$sql = "UPDATE `seller&goods` SET zan=$zan WHERE gid=$gid";

	$res = $conn->query($sql);//得到结果集

	echo $res;
}
if($page && $num ){
	//读取数据库数据
	$sql = "SELECT * FROM `seller&goods` LIMIT $ed,$num";

	$res = $conn->query($sql);//得到结果集
	// var_dump($res);
	$data = $res->fetch_all(MYSQLI_ASSOC);

	echo json_encode($data,JSON_UNESCAPED_UNICODE);//传给前端

}





?>