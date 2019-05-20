
$(function(){
	// 首先拿到传过来的数据gid
	var things = decodeURI(location.search);
	var val = things.split('?')[1];
	// 数据渲染，通过ajax拿到点击的商品相关数据
	var p = new Promise(function(suces){

		$.ajax({
			type : 'post',
			url : '../api/dianpu.php',
			async: false,
			data : 'gid=' + val,
			success : function(str){

				var arr = JSON.parse(str);
				var html = arr.map(function(item){
					return `<div class="show">
						<div class="show_lookImg">
							<div class="show_lookImg_container">
								<div class="shadel fl"></div>
								<div class="shader fr"></div>
								<div class="show_lookImg_swiper">
									<div class="swiper_slide">
										<img src="../${item.images}" alt="">
									</div>
									<div class="swiper_slide">
										<img src="../${item.otherimg}" alt="">
									</div>
								</div>
							</div>
						</div>
						<div class="show_tabImg">
							<div class="show_tabImg_item">
								<div class="activebox on">
									<div class="tabImg_imgbox">
										<img src="../${item.images}" alt="">
									</div>
								</div>
							</div>
							<div class="show_tabImg_item">
								<div class="activebox">
									<div class="tabImg_imgbox">
										<img src="../${item.otherimg}" alt="">
									</div>
								</div>
							</div>
						</div>
						<div class="show_suggest">
							<div class="show_suggest_cont">
								${item.gname}
							</div>
						</div>
						<div class="show_other">
							<div class="show_other_l fl">
								<span>7天前</span>
								<span class="text-splitter"></span>
								<span>4.5万浏览</span>
								<span class="text-splitter"></span>
								<span>2评论</span>
							</div>
							<div class="show_other_r fr">
								<span></span>
								<span class="house">
									<span></span>
									<span>收藏${item.house}</span>
								</span>
								<span class="zan">
									<span></span>
									<span>${item.zan}</span>
								</span>
							</div>
						</div>
					</div>`
				});
				$('.wrapper_l').html(html);
				suces(arr);
			}

		});

	});
	

	//以上渲染的是展示区show的图片模块
	//以下渲染评论区信息
	$.ajax({

		type : 'post',
		url : '../api/dianpu.php',
		async: false,
		data : 'liuyan=' + val,
		success : function(str){
			var arr = JSON.parse(str);

			var html = arr.map(function(item){
				return `<div class="liuyan">
							<div class="liuyan_ipt">
								<input type="text" placeholder="长得这么好看的你也来评论以下吧~" class="liuyan_ipt_txt">
								<input type="button" value="发表" class="liuyan_ipt_btn">
							</div>
							<div class="liuyan_main">
								<div class="liuyan_main_item">
									<a href="javascript:;">
										<div class="liuyan_main_item_imgbox">
											<img src="../images/dianpu_liuyan_touxiang.jpg" alt="">
										</div>
									</a>
									<div class="liuyan_main_item_commen">
										<div class="item_hd">
											<div class="item_hd_name">${item.liuyanname}</div>
											<div class="item_hd_time">${item.time}</div>

										</div>
										<div class="item_bd">
											<div class="item_bd_conten">
												${item.content}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>`
			});
			$('.wrapper_l').append(html);

		}

	});


	//以上是渲染留言板内容
	//接下来渲染商家资料
	p.then(function(data){
		//将data的商家名称提取出来
		var sname = data[0].sname;
		$.ajax({
			type : 'post',
			url : '../api/dianpu.php',
			async: false,
			data : 'sname=' + sname,
			success : function(str2){
				var arr = JSON.parse(str2);
				// 渲染
				var html = arr.map(function(item){
					return `<a class="more_touxiang" href="javascript:;">
								<div>
									<img src="../images/ppl0.jpg">
								</div>
							</a>
							<a class="more_name" href="javascript:;">
								<span>${item.sname}</span>
							</a>
							<div class="more_txt">
		            			165cm 45kg | ${item.city} | 店主
		        			</div>
		        			<div class="more_guanzhu">
		        				<div class="more_guanzhu_center">
		        					<div class="more_guanzhu_center_l">
		        						关注
		        					</div>
		        					<div class="more_guanzhu_center_r">
		        						私聊
		        					</div>
		        				</div>
		        			</div>
		        			<div class="more_fensi">
		        				<div class="more_fensi_l">
		        					<div>
		        						<p>${item.fans}</p>
		        						<p>粉丝</p>
		        					</div>
		        				</div>
		        				<div class="more_fensi_r">
		        					<div>
		        						<p>${item.guanzhu}</p>
		        						<p>关注</p>
		        					</div>
		        				</div>
		        			</div>`

				});
				$('.more').html(html);

			}

		});

		//接下来渲染店铺其他商品
		$.ajax({

			type : 'post',
			url : '../api/dianpu.php',
			async: false,
			data : 'goodssname=' + sname,
			success : function(val){
				var arr2 = JSON.parse(val);
				var som = arr2.map(function(item){

					return `
		        				<a class="lixiuzhu" data-id="${item.gid}" href="javascript:;">
		        					<div >
		        						<img src="../${item.images}" alt="">
		        					</div>
		        				</a>
		        			`;

				});
				//将节点盒子插入到$('.more')里
				var nbs = `<div class="more_imgbox"></div><a class="more_more" href="javascript:;">
        				查看更多
        			</a>`
				$('.more').append(nbs)
				$('.more_imgbox').append(som);

			}

		});

	});
	

//tab选项卡切换 + 大图跟着小图切换
$('.wrapper_l').on('mouseover','.show_tabImg_item',function(){
	var iw = $('.swiper_slide').outerWidth();
	
	tabActive($(this).index());
	$('.show_lookImg_swiper').css('left',-iw*$(this).index());

});

function tabActive(val=0){
	$('.activebox').removeClass('on');
	$('.activebox').eq(val).addClass('on');
}
tabActive();
//鼠标滑入大图遮罩显示左右按钮 + 点击切换图片
//移入左边
$('.wrapper_l').on('mouseover','.shadel',function(){
	$('.shadel').css('cursor',"url('../images/left1.png'),default");
	
});
$('.wrapper_l').on('mouseover','.shader',function(){
	$('.shader').css('cursor',"url('../images/right1.png'),default");
});

var num = 0;
$('.wrapper_l').on('click','.shadel',function(){
	num--;
	$('.show_lookImg_swiper').animate({
		left : 0
	});
	
	if(num < 0){
		num = 0;
	}	
	tabActive(num)
});
$('.wrapper_l').on('click','.shader',function(){
	num++;
	var iw = $('.swiper_slide').outerWidth();
	//show_lookImg_swiper 移动iw距离
	$('.show_lookImg_swiper').animate({
		left : -iw
	});
	
	if(num > 1){
		num = 1;
	}
	tabActive(num);
});



//点击店铺其他商品
$('.wrapper_r').on('click','.lixiuzhu',function(){

	window.location = 'dianpu.html?' + $(this).attr('data-id');

});

var isok = true;
//点击关注
$('.wrapper_r').on('click','.more_guanzhu_center_l',function(){

	if(isok){
		$('.more_guanzhu_center_l').css({
			    border: '1px solid #999',
    			color: '#999'
		}).html('已关注');
		isok = !isok
	}else{
		$('.more_guanzhu_center_l').css({
			    border: '1px solid #f46',
    			color: '#f46'
		}).html('关注');
		isok = !isok
	}

});














});