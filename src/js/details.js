

$(function(){
	//接收主页传过来的数据
	var things = decodeURI(location.search);
	var val = things.split('?')[1];
	$('.tab_content').html(val);
	var total = 0;
	// 后台拿到数据进行数据渲染
function apply(page){
	var pages = page;
	var num = 15;
	var start_price = $('.start_price').val().trim() * 1;
	var end_price = $('.end_price').val().trim() * 1;
	if($('.price_btn').hasClass('click')){
		var p = new Promise(function(resolve){
		// 进行了筛选
		 	$.ajax({

		 		type : 'post',
		 		url : '../api/details.php',
		 		data : {
		 			start_price : start_price,
		 			val : val,
		 			end_price : end_price,
		 			num : num,
		 			page : pages
		 		},
		 		success : function(str){
		 			// console.log(1);
		 			var arr = JSON.parse(str);
		 			resolve(arr);
		 			
		 		}

		 	});

		});



	}else{
		//没有进行筛选
		var p = new Promise(function(resolve){
				//判断val如果不为undefined，证明从搜索框跳转过来的
					$.ajax({
						type : 'post',
						url :'../api/details.php',
						data : 'val=' + val + '&page=' + pages + '&num=' + num,
						success : function(str){
							var arr = JSON.parse(str);
							//拿到数据传到外部处理，减少嵌套
							resolve(arr);
						}
					});

		});
	}

		var html ='';
		p.then(function(arr){
			total = Math.ceil(arr.total / num);
			//需要判断data是否为空，为空则证明搜索的关键字没有该商品，显示提示框 + 隐藏显示更多
			if(arr.data.length){
				//进行数据渲染到页面中
				//此处+=是因为数据不够，所以就把数据重复拼接起来做出懒加载效果
				html = arr.data.map(function(item){
					return `<div class="goods_item fl" data-id="${item.gid}" sid="${item.sid}">
								<a href="javascript:;" class="goods_item_like">找相似</a>
								<a href="javascript:;" class="goods_item_img">
									<img src="../${item.images}" alt="">
								</a>
								<a href="javascript:;" class="goods_item_txt">
									<p class="item_title fl">
										${item.gname}
									</p>
									<div class="price fl">
										<b class="nowprice fl">￥${item.newprice}</b>
										<p class="oldprice fl">￥<del>${item.oldprice}</del></p>
										<span class="housenum fr">
											<p></p>
											${item.house}
										</span>
									</div>
								</a>
							</div>`
				}).join('');
				//输出
				$('#goods_box').html(html);

				

			}


		});	




	}//函数尾
	
apply(1);
function fenye(){
	setTimeout(function(){
//输出完之后渲染分页
	var html2 = '';
		for(var i = 0; i < total; i++){

			html2 += `<li class="page_li">${i + 1}</li>`;

		}
			$('.paging_page').html(html2);
			$('.paging_page li').eq(0).addClass('paging_pageActive');

	},500)
}
fenye();
//======================================筛选============================================

	$('.price_btn').on('click',function(){//点击筛选确定按钮时
		if($('.start_price').val().trim() && $('.end_price').val().trim()){
			$('search_empty1').css('display','none');
			//不为空就执行
			$(this).addClass('click');
			apply(1);
			fenye();
		}

	});


//======================================页码============================================
				//给页码绑定事件
				var page = 1;
				$('#paging').on('click','.page_li',function(){
					page = $(this).html();
					 pageUl(page);
					apply(page);

				});





				//下一页
				$('.paging_right').on('click',function(){

					page++;
					if(page > $('.paging_page li').size()){
						page = $('.paging_page li').size();
					}
					pageUl(page);
					apply(page);

				});

				//上一页
				$('.paging_left').on('click',function(){

					page--;
					if(page < 1){
						page = 1;
					}
					pageUl(page);
					apply(page);

				});

				function pageUl(page){
						$('.page_li').eq(page - 1).addClass('paging_pageActive')
							.siblings().removeClass('paging_pageActive');
						if($('.paging_page li').size() > 3){

							if(page > $('.paging_page li').size() - 2){
								page = $('.paging_page li').size() - 2;
							}
							var lf = 50 - (page - 1) * 60;
							$('.paging_page').css('left',lf + 'px');
					}
					
				}

	



//选项卡切换    border-top: 2px solid #f46;
$('#diessing_tab ul li').on('click',function(){
	//给对应那个diessing_box类名diessing_box_block
	$('.diessing_box').eq($(this).index()).addClass('diessing_box_block')
								.siblings().removeClass('diessing_box_block');
	$('#diessing_tab ul li').eq($(this).index()).addClass('diessing_tab_liactive')
							.siblings().removeClass('diessing_tab_liactive');
});





	//点击每个商品时
	$('#goods_box').on('click','.goods_item',function(){
		// 点击的时候拿到id传到详情页
		var dataId = $(this).attr('data-id');
		var sid = $(this).attr('sid');
		window.open('xiangqing.html?' + dataId + '&'+ sid);
	});




















});