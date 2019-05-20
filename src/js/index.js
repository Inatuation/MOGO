$(function(){
	//瀑布流插件(旧版随机生成)
	//url data function dataType

	// function loadMeinv(){
	// 	var data = 0;

	// 	for(var i=0;i<=30;i++){//每次加载时模拟随机加载图片

	// 		data = parseInt(Math.random()*9);
			
	// 		var html = "";

			// html = `<li class="ppl_goods" style="top:0px;">
			// 			<div class="shade">
			// 				<ul class="goods_human">
			// 					<li></li>
			// 					<li></li>
			// 					<span class="goods_human_number">10</span>
			// 				</ul>
			// 				<div class="goods_date">
			// 					<a href="javascript:;">
			// 					#偷师网红小姐姐，满分穿搭预定！
			// 					</a>
			// 					宽松阔腿的高腰版型不光显瘦而且又显腿长哦，包容性也hin好～随性卷边的个性设计， 整体看上去不会单调，又能凸显细节弹力棉牛仔布~ 穿起来舒适感佳，对腰部也很有包容性～两侧插袋的设计 也是贴心实用的～这种简约版型的短裤搭配什么上衣都可以演绎出不一样的风格版型基本不会挑人，而且很显瘦哦！搭配各种上装都不会逊色实穿的季节性也是蛮强的～百搭经典时髦单品说的就是ta 黑色显瘦百搭~ 白色气质不挑人~灰色时髦个性~ 怎么穿怎么搭都不会出错
			// 				</div>
			// 			</div>
			// 			<img src = "images/ppl${data}.jpg"/>
			// 			<div class="content_goods_list">
			// 				<a href="javascript:;">H&M</a>
			// 				<a href="javascript:;">NIKE</a>
			// 				<a href="javascript:;">puma</a>
			// 			</div>
			// 		</li>`;
	// 		$minUl = getMinUl();
	// 		$minUl.append(html);
	// 	}

	// }

function loadMeinv(page){//瀑布流数据渲染修改版
		//发送请求拿数据
		var p = new Promise(function(succes){
			var pages = page
			var num = 20; //一页显示的数据
			$.ajax({
				type : 'get',
				url : 'api/01index.php',
				data : 'page=' + pages + '&num=' + num,
				success : function(str){
					var arr = JSON.parse(str);
					console.log(arr);
					succes(arr);
				}
			});

		});
		p.then(function(arr){

			//拿到数据后循环渲染
			for(let i = 0;i < arr.length; i++){
				var item = arr[i];//进入一次循环就要获取一次最短的ul
				var html = '';
				var html2 = '';
				$minUl = getMinUl();
					
				html = `<li class="ppl_goods" data-id="${item.gid}" style="top:0px;">
							<div class="shade">
								<div class="goods_date">
									${item.gname}
								</div>
							</div>
							<ul class="goods_human">
								<li class="zan"></li>
								<li class="house"></li>
								<span class="goods_human_number">${item.zan}</span>
							</ul>
							<img src = "${item.images}"/>
							<div class="content_goods_list">`;
							
					var tagval = item.tag.split('&');

					for(var j = 0; j < tagval.length; j++){
						html2 += `<a href="javascript:;">${tagval[j]}</a>`;
					}

					html2 +=`</div></li>`

					$minUl.append(html+html2);//生成节点之后立刻渲染到页面
			}

		});

	}

	loadMeinv(1);
	var numb = 0;
	$(window).on("scroll",function(){
		$minUl = getMinUl();//这个是最短的ul
		if($minUl.height() <= $(window).scrollTop()+$(window).height()){
			//触发一次numb++一次\
			numb++;
			if(numb > 6){
				numb = 1;
			}
		//当最短的ul的高度比窗口滚出去的高度+浏览器高度大时加载新图片
			loadMeinv(numb);
		}
	})
	function getMinUl(){//每次获取最短的ul,将图片放到其后
		var $arrUl = $("#container .col");
		var $minUl =$arrUl.eq(0);
		$arrUl.each(function(index,elem){
			if($(elem).height()<$minUl.height()){
				$minUl = $(elem);
			}

		});
		return $minUl;//拿到最短的ul
	}

	//事件委托,鼠标移入商品，出现遮罩 + 动画top + li里面的#content_goods_list背景颜色改变
		$('#container').on('mouseover mouseout','.col li',function(){
		//利用索引获得移入盒子的高度并赋予shade盒子
		var ih = $(this).children().eq(2).outerHeight();
		if($(this).hasClass('ppl_goods')){
			$(this).children().eq(0).css('height',ih)
									.toggle();
		}
	});

	$('#container').on('mouseover','.col li',function(){
		if($(this).hasClass('ppl_goods')){
			$(this).stop().animate({
				top : -10
			});
			$(this).children().eq(2).css('background','rgba(0,0,0,.1)');
			$(this).children().eq(1).css('display','block');
		}
	});
	$('#container').on('mouseout','.col li',function(){
		if($(this).hasClass('ppl_goods')){
			$(this).stop().animate({
				top : 0
			});
			$(this).children().eq(2).css('background','');
			$(this).children().eq(1).css('display','none');
		}
	});






	//以上是瀑布流jq




	//以下是轮播图jq
		$(".carousel-content").carousel({
			carousel : ".carousel",//轮播图容器
			indexContainer : ".img-index",//下标容器
			prev : ".carousel-prev",//左按钮
			next : ".carousel-next",//右按钮
			timing : 3000,//自动播放间隔
			animateTime : 700,//动画时间
			autoPlay : true,//是否自动播放 true/false
			direction : "left",//滚动方向 right/left
		});

		$(".carousel-content").hover(function(){
			$(".carousel-prev,.carousel-next").fadeIn(300);
		},function(){
			$(".carousel-prev,.carousel-next").fadeOut(300);
		});

		$(".carousel-prev").hover(function(){
			$(this).find("img").attr("src","./images/left2.png");
		},function(){
			$(this).find("img").attr("src","./images/left1.png");
		});
		$(".carousel-next").hover(function(){
			$(this).find("img").attr("src","./images/right2.png");
		},function(){
			$(this).find("img").attr("src","./images/right1.png");
		});

		//以上是轮播图jq


})





$(function(){
	//移入显示二级菜单
                $('#search_menu,#search_menu_nav').on('mouseover',function(){
                    $('#search_menu_nav_onoff').css('display','block');
                });
                //移出隐藏
                $('#search_menu,#search_menu_nav').on('mouseout',function(){
                    $('#search_menu_nav_onoff').css('display','none');
                });

                //点击登录按钮跳转到登录页面
                //判断是否已经登录
                var uid = getCookie('uid');
                var name = getCookie('name');
                if(uid){
                    //代表已经登录
                    //将用户名输出到.search_login a的html中
                    $('.search_login a').html('<img src="images/login_on" alt="">' + name + '<i class="iconfont icon-jiantou"></i>');
                    $('.search_login,.search_login_set').on('mouseover',function(){
                    	$('.search_login_set').css('display','block');
	                });
	                $('.search_login_set,.search_login').on('mouseout',function(){
	                    $('.search_login_set').css('display','none');
	                });

                }else{
                    //没有登录\
                    $('.search_login a').html('<img src="images/search_login.png" alt="">登录');
                    $('.search_login a').on('click',function(){

                        window.location = 'html/login.html';
                    });
                }

                


                //吸顶菜单
                //鼠标滚动超出.header_search + 100px 的时候创建吸顶菜单
                $(window).on('scroll',function(){
                    if($(window).scrollTop() > $('#header').outerHeight(true) + 100){
                        //到达临界点添加样式
                        //瞬间让高度从0开始利用animate动画
                        $('.header_search').css({
                            'position' : 'fixed',
                            'top' : '0',
                            'left' : '50%',
                            'marginLeft' : '-600px',
                            'z-index' : '999999'
                        });
                        $('#search_menu').css('display','none');
                    }else{
                        $('.header_search').css({
                            'position' : '',
                            'top' : '',
                            'left' : '',
                            'marginLeft' : '',
                            'z-index' : ''
                        });
                        $('#search_menu').css('display','block');
                    }
                });












	
    
    // 给每个商品绑定点击事件
    $('#container').on('click','.shade',function(){
    	//点击商品获得商品的data-id
    	var goodsdataID = $(this).parent().attr('data-id');
    	//跳转页面并将id传过去
    	window.open('html/dianpu.html?' + goodsdataID);//ok!
    });


    var isok = true;
    //每个商品的赞和收藏
    $('#container').on('click','.goods_human li',function(){
    	//点赞
    	var goodsdataID = $(this).parent().parent().attr('data-id');//商品id
    	var zan = $(this).next().next().html();//目前被赞数量
    	var thiss = $(this);
    	if($(this).hasClass('zan')){
    		//点击变色
    		$(this).css('backgroundPosition','-57px -57px');
    		zan++;
    		// 点击数量++
    		$.ajax({
    			type : 'get',
    			url : 'api/01index.php',
    			data : {
    				gid : goodsdataID,
    				zan :  zan//zan++之后传过去修改数据库
    			},
    			success : function(str){
    				if(str){//返回值为1代表成功
    					//渲染数据
    					thiss.next().next().html(zan);
    				}
    		
    			}
    		});
    	}
    	if($(this).hasClass('house')){
    		if(isok){
	    		//点击变色加入收藏
	    		$(this).css('backgroundPosition','-57px -5px');
	    		isok = !isok;
    		}else{
    			//取消收藏
    			$(this).css('backgroundPosition','-5px -57px');
    			isok = !isok;
    		}
    		// 点击之后将数据存到用户的数据库
    	}
    });



//======================================点击搜索=================================================
    $('.search_box_btn').on('click',function(){
    	if($('.search_box_txt').val()){
	    	var vla =$('.search_box_txt').val().trim();

	    	window.open('html/details.html?' + vla);

    	}else{

    	}
    });

    
//======================================回车搜索=================================================
	$('.search_box_txt').focus(function(){
		//获取焦点之后执行
		$('.search_box_txt').on('keydown',function(ev){
			if(ev.keyCode == 13){
				//按下了回车键
				var vla =$('.search_box_txt').val().trim();
				window.open('html/details.html?' + vla);
			}
		});

	});



//======================================点击商城图标跳转=================================================
$('.guide_top_goods').eq(0).on('click',function(){

	var gogogo = $('.guide_top_goods').eq(0).children().eq(0).html();

	window.open('html/details.html?' + gogogo);

});
		
$('.guide_top_goods').eq(1).on('click',function(){

	var gogogo = $('.guide_top_goods').eq(1).children().eq(0).html();

	window.open('html/details.html?' + gogogo);
	
});


//======================================点击购物车=================================================
$('.cart').on('click',function(){
	window.open('html/cart.html');
});

//======================================点击退出登录=================================================
$('.search_login_set').children().eq(2).click(function(){
	window.location.reload();
	removeCookie('uid',-1);
	removeCookie('name',-1);
});




});