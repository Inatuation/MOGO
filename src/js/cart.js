
// jq购物车插件

$(function () {
//======================数据渲染===============================================

//首先需要拿到用uid查找用户购买过的商品
var uid = getCookie('uid');

if(uid == undefined){//说明已经登录
	window.location = 'login.html';
}
//拿到uid传给后端查询数据库
var p = new Promise(function(succs){

	$.ajax({
		type : 'post',
		url : '../api/cart.php?' + new Date(),
		data : {
			uid : uid
		},
		success : function(str){
			var nom = JSON.parse(str);
			succs(nom);
		}

	});

});

p.then(function(data){
	var wrapper = document.querySelector('.bar-wrapper');
	// console.log(data);
	//拿到是还没有分商家的所有购物车记录
	var arr = [];
	var arr2 = [];

	var html = data.map(function(item){
		//将所有商家id存进数组，然后去重，得出总共有多少个商家
		arr.push(item.sid);
	});
	//去掉重复的数字
	for(var i = 0;i < arr.length; i++){
		if(arr2.indexOf(arr[i]) == -1){
			arr2.push(arr[i]);
		}
	}
	//去重完之后拿到商家数量的arr2.length，循环生成节点
	for(var val in arr2){
		var html2 = ` <div class="cartBox" data-sid="${arr2[val]}">
			            <div class="shop_info">
			                <div class="all_check">
			                    <input type="checkbox" id="shop_a" class="shopChoice">
			                    <label for="shop_a" class="shop"></label>
			                </div>
			                <div class="shop_name">
			                    <a href="javascript:;">搜猎人艺术生活</a>
			                    <a href="javascript:;"></a>
			                </div>
			            </div>
			        </div>`
        //将商家的id添加自定义属性
        $(html2).insertBefore($('.bar-wrapper'));
	}




	//重新遍历data将数据插入html2
	for(let j = 0; j < data.length;j++){
		var shangpinNum = 0;
		var pps = new Promise(function(succes){
			//循环拿商品数据
			$.ajax({
				type : 'post',
				url : '../api/cart.php',
				data : {
					gid : data[j].gid
				},
				success : function(str){
					var how = JSON.parse(str);
					shangpinNum++;
					$('.tab_num').eq(0).html(shangpinNum);
					succes(how);
				}

			});

		});

		pps.then(function(how){
			//拿到数据进行数据渲染
				for(var k = 0; k < how.length;k++){
					var item = how[k]
					var cent =`<div class="order_content">
		                <ul class="order_lists">
		                    <li class="list_chk">
		                        <input type="checkbox" id="checkbox_2" class="son_check">
		                    </li>
		                    <li class="list_con">
		        						<a href="javascript:;">
		        							<img src="../${item.images}">
		        						</a>
		                        <a href="javascript:;">${item.gname}</a>
		                    </li>
		                    <li class="list_info">
		                        <p>颜色：默认</p>
		                        <p>尺寸：${data[j].goodsSize}</p>
		                    </li>
		                    <li class="list_price">
		                    	<p><del>${item.oldprice}</del></p>
		                        <p class="price">￥${item.newprice}</p>
		                    </li>
		                    <li class="list_amount">
		                        <div class="amount_box">
		                            <a href="javascript:;" class="reduce"></a>
		                            <input type="text" value="${data[j].goodsNum}" class="sum">
		                            <a href="javascript:;" class="plus"></a>
		                        </div>
		                    </li>
		                    <li class="list_sum">
		                        <p class="sum_price">￥${item.newprice * data[j].goodsNum}</p>
		                    </li>
		                    <li class="list_op">
		                        <a href="javascript:;" class="del delBtn" data-gouwuid="${data[j].gouwuid}">删除</a>
		                    </li>
		                </ul>
		            </div>`
					var tou = "div[data-sid='";
					var wei = "']";
					var box = tou + how[k].sid + wei;
					//每循环一次就append到对应的盒子里
					$(box).append($(cent));
					$(box).children().eq(0).children().eq(1).children().eq(0).html(item.sname)
				}



		

		});

		
	}
//===============================================购物车jq================================================
	    //全局的checkbox选中和未选中的样式
 var //全局的全部checkbox
     $wholeChexbox = $('.whole_check'),
     $cartBox = $('.cartBox'), //每个商铺盒子
     $shopCheckbox = $('.shopChoice') //每个商铺的checkbox

 //===============================================全局全选与单个商品的关系================================
 $wholeChexbox.click(function() {

     var $checkboxs = $cartBox.find('input[type="checkbox"]');
     if ($(this).is(':checked')) {
         $checkboxs.prop("checked", true);
     } else {
         $checkboxs.prop("checked", false);
     }
     totalMoney();
 });


 // $sonCheckBox.each(function() {
 //     $(this).click(function() {
 //         if ($(this).is(':checked')) {
 //             //判断：所有单个商品是否勾选
 //             var len = $sonCheckBox.length;
 //             var num = 0;
 //             $sonCheckBox.each(function() {
 //                 if ($(this).is(':checked')) {
 //                     num++;
 //                 }
 //             });
 //             if (num == len) {
 //                 $wholeChexbox.prop("checked", true);
 //             }
 //         } else {
 //             //单个商品取消勾选，全局全选取消勾选
 //             $wholeChexbox.prop("checked", false);
 //         }
 //     })
 // })


//修改版事件委托：所有商品选择框控制全选
 $('.cartMain').on('click','.son_check',function(){
 	var len = $('.son_check').size();
 	var num = 0;
 	for(var i = 0; i < len; i++){
 		if($('.son_check').eq(i).prop('checked')){
 			num++
 		}
 	}
 		if(num==len){
 			$wholeChexbox.prop("checked", true);
 		}else{
 			$wholeChexbox.prop("checked", false);
 		}
 });

 //=======================================每个店铺checkbox与全选checkbox的关系/每个店铺与其下商品样式的变化===================================================

 //店铺有一个未选中，全局全选按钮取消对勾，若店铺全选中，则全局全选按钮打对勾。
 $shopCheckbox.each(function() {
     $(this).click(function() {
         if ($(this).is(':checked')) {
             //判断：店铺全选中，则全局全选按钮打对勾。
             var len = $shopCheckbox.length;
             var num = 0;
             $shopCheckbox.each(function() {
                 if ($(this).is(':checked')) {
                     num++;
                 }
             });
             if (num == len) {
                 $wholeChexbox.prop("checked", true);
             }

             //店铺下的checkbox选中状态
             $(this).parents('.cartBox').find('.son_check').prop("checked", true);
         } else {
             //否则，全局全选按钮取消对勾
             $wholeChexbox.prop("checked", false);
             $wholeChexbox.next('label').removeClass('mark');

             //店铺下的checkbox选中状态
             $(this).parents('.cartBox').find('.son_check').prop("checked", false);
         }
         totalMoney();
     });
 });


 //========================================每个店铺checkbox与其下商品的checkbox的关系======================================================

 //店铺$sonChecks有一个未选中，店铺全选按钮取消选中，若全都选中，则全选打对勾

 setTimeout(function(){ 			//修改：//利用定时器延时执行里面的函数，使得each能够找到节点
	 $cartBox.each(function() {
	     var $this = $(this);
	     var $sonChecks = $this.find('.son_check');
	     $sonChecks.each(function() {
	         $(this).click(function() {
	             if ($(this).is(':checked')) {
	                 //判断：如果所有的$sonChecks都选中则店铺全选打对勾！
	                 var len = $sonChecks.length;
	                 var num = 0;
	                 $sonChecks.each(function() {
	                     if ($(this).is(':checked')) {
	                         num++;
	                     }
	                 });
	                 if (num == len) {
	                     $(this).parents('.cartBox').find('.shopChoice').prop("checked", true);
	                 }

	             } else {
	                 //否则，店铺全选取消
	                 $(this).parents('.cartBox').find('.shopChoice').prop("checked", false);
	             }
	             totalMoney();
	         });
	     });
	 });
 },1000);
 


 //=================================================商品数量==============================================
 $('.cartMain').on('click','.plus',function() {
     var $inputVal = $(this).prev('input'),
         $count = parseInt($inputVal.val()) + 1,
         $obj = $(this).parents('.amount_box').find('.reduce'),
         $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
         $price = $(this).parents('.order_lists').find('.price').html(), //单价
         $priceTotal = $count * parseInt($price.substring(1));
     $inputVal.val($count);
     $priceTotalObj.html('￥' + $priceTotal);
     if ($inputVal.val() > 1 && $obj.hasClass('reSty')) {
         $obj.removeClass('reSty');
     }
     totalMoney();
 });

 $('.cartMain').on('click','.reduce',function() {
     var $inputVal = $(this).next('input'),
         $count = parseInt($inputVal.val()) - 1,
         $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
         $price = $(this).parents('.order_lists').find('.price').html(), //单价
         $priceTotal = $count * parseInt($price.substring(1));
     if ($inputVal.val() > 1) {
         $inputVal.val($count);
         $priceTotalObj.html('￥' + $priceTotal);
     }
     if ($inputVal.val() == 1 && !$(this).hasClass('reSty')) {
         $(this).addClass('reSty');
     }
     totalMoney();
 });

 $('.cartMain').on('keyup','.sum',function() {
     var $count = 0,
         $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
         $price = $(this).parents('.order_lists').find('.price').html(), //单价
         $priceTotal = 0;
     if ($(this).val() == '') {
         $(this).val('1');
     }
     $(this).val($(this).val().replace(/\D|^0/g, ''));
     $count = $(this).val();
     $priceTotal = $count * parseInt($price.substring(1));
     $(this).attr('value', $count);
     $priceTotalObj.html('￥' + $priceTotal);
     totalMoney();
 })

 //======================================移除商品========================================

 var $order_content = '';
 $('.cartMain').on('click','.delBtn',function() {
 	$gouwuid = $(this).attr('data-gouwuid');
 	 $this= $(this).parent().parent().parent().parent();
     $order_content = $(this).parents().parents('.order_content');
     $('.my_model').fadeIn(300);
 });
 //关闭模态框
 $('.closeModel').click(function() {
     closeM();
 });
 $('.dialog-close').click(function() {
     closeM();
 });

 function closeM() {
     $('.my_model').fadeOut(300);
 }
 //确定按钮，移除商品
 	
 $('.dialog-sure').click(function() {

     $order_content.remove();//删除节点，还要删除数据库,先拿到存好的购物id，然后传入数据库

     $.ajax({
     	type : 'post',
     	url : '../api/cart.php',
     	data : {
     		gouwuid : $gouwuid
     	},
     	success : function(str){
     		console.log(str);
     	}
     });

     if ($this.children().size() == 1) {
        $this.remove();
     }
     closeM();
     totalMoney();
 })

 //======================================总计==========================================

 function totalMoney() {
     var total_money = 0;
     var total_count = 0;
     var calBtn = $('.calBtn a');
     $('.son_check').each(function() {
         if ($(this).is(':checked')) {
             var goods = parseInt($(this).parents('.order_lists').find('.sum_price').html().substring(1));
             var num = parseInt($(this).parents('.order_lists').find('.sum').val());
             total_money += goods;
             total_count += num;
         }
     });
     $('.total_text').html('￥' + total_money);
     $('.piece_num').html(total_count);

     // console.log(total_money,total_count);

     if (total_money != 0 && total_count != 0) {
         if (!calBtn.hasClass('btn_sty')) {
             calBtn.addClass('btn_sty');
         }
     } else {
         if (calBtn.hasClass('btn_sty')) {
             calBtn.removeClass('btn_sty');
         }
     }
 }
// ====================================================================================================
	
	


});



});












