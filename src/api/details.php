<?php
//连接数据库
include 'conn.php';

//接收前端数据
$sPrice = isset($_POST['sPrice']) ? $_POST['sPrice'] : '';
$ePrice = isset($_POST['ePrice']) ? $_POST['ePrice'] : '';
$val = isset($_POST['val']) ? $_POST['val'] : '';
$page = isset($_POST['page']) ? $_POST['page'] : '';
$num = isset($_POST['num']) ? $_POST['num'] : '';
$start_price = isset($_POST['start_price']) ? $_POST['start_price'] : '';
$end_price = isset($_POST['end_price']) ? $_POST['end_price'] : '';
$db = ($page - 1) * $num;

if($sPrice && $ePrice){
	//读取数据库数据
	$sql = "SELECT * FROM `seller&goods` WHERE newprice BETWEEN $sPrice AND $ePrice";
	
	$res = $conn->query($sql);//得到结果集

	$data = $res->fetch_all(MYSQLI_ASSOC);

	echo json_encode($data,JSON_UNESCAPED_UNICODE);//传给前端

}

if($val && $end_price == ''){
	//读取数据库数据
	$sql = "SELECT * FROM `seller&goods` WHERE gname LIKE '%$val%' LIMIT $db,$num";

	$sql2 = "SELECT * FROM `seller&goods` WHERE gname LIKE '%$val%'";

	$res2 = $conn->query($sql2);

	$res = $conn->query($sql);//得到结果集

	$data = $res->fetch_all(MYSQLI_ASSOC);

	$nbs = array(
		'data' => $data,
		'total' => $res2->num_rows,
	);

	echo json_encode($nbs,JSON_UNESCAPED_UNICODE);//传给前端
}

if($end_price && $start_price){

	$sql = "SELECT * FROM `seller&goods`  WHERE  gname LIKE '%$val%' AND newprice BETWEEN $start_price AND $end_price  LIMIT $db,$num";

	$sql2 = "SELECT * FROM `seller&goods`  WHERE  gname LIKE '%$val%' AND newprice BETWEEN $start_price AND $end_price";

	$res = $conn->query($sql);//得到结果集

	$res2 = $conn->query($sql2);//得到结果集

	$data = $res->fetch_all(MYSQLI_ASSOC);

	$nbs = array(
		'data' => $data,
		'total' => $res2->num_rows,
	);


	echo json_encode($nbs,JSON_UNESCAPED_UNICODE);//传给前端


}

	

?>