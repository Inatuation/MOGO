
$(function(){
	//接收前端穿过来的数据进行数据渲染
	var things = decodeURI(location.search);
	var val1 = things.split('?')[1];
    var val2 = val1.split('&');
    var num = val2[0]; //gid
    var sid = val2[1];                      //注意不能用slice切割，商品数据多的时候就会出错
	var p = new Promise(function(succs){
		//拿到商品id后传给后端进行数据库查询
		$.ajax({
			type : 'post',
			url : '../api/xiangqing.php?' + new Date(),
			data : {
				gid : num
			},
			success : function(str){
				var arr = JSON.parse(str);
				succs(arr);
			}
		});

	});

	p.then(function(data){
		//拿到数据进行数据渲染，
		var html = data.map(function(item){
			return `
                <div class="content_shopping_left">
                	<div class="m">
                    	<div class="jqueryzoom">
                        	<img id="img" class="cloudzoom" src="../${item.images}" data-cloudzoom="zoomSizeMode:'image',zoomImage: '..${item.images}',autoInside: 30" title="鼠标滚轮控制放大缩小" />
                        </div>
	                    <ul>
	                        <li>
	                            <img class="cloudzoom-gallery" src="../${item.images}" data-cloudzoom="useZoom:'.cloudzoom',image:'../${item.images}'" />
	                        </li>
	                        <li>
	                            <img class="cloudzoom-gallery" src="../${item.otherimg}" data-cloudzoom="useZoom:'.cloudzoom',image:'../${item.otherimg}',zoomImage:'../${item.otherimg}'" />
	                        </li>
	                    </ul>
	                </div>
                </div>
                <div class="content_shopping_right">
                    <h1>${item.gname}</h1>
                    <div class="goods_main">
                        <div class="goods_main_top">
                            <dl>
                                <dt>价格：</dt>
                                <dd><del>￥${item.oldprice}</del></dd>
                            </dl>
                            <dl>
                                <dt>促销价：</dt>
                                <dd class="goods_redtxt">￥${item.newprice}</dd>
                                <dd class="goods_sellbox">
                                    <span>评价：<span class="appr">${item.appr}</span></span>
                                    <span class="sell">累计销量：<span></span>${item.sell}</span>
                                </dd>
                            </dl>
                        </div>
                        <div class="goods_main_bottom">
                            <div class="goods_main_bottom_title">店铺优惠：</div>
                            <div class="goods_main_bottom_con">
                                <div>
                                    <a href="javascript:;">
                                        <span>满399立减40元</span>
                                        <span class="draw">领取</span>
                                    </a>
                                    <a href="javascript:;">
                                        <span>满399立减40元</span>
                                        <span class="draw">领取</span>
                                    </a>
                                    <a href="javascript:;">
                                        <span>满399立减40元</span>
                                        <span class="draw">领取</span>
                                    </a>
                                </div>
                            </div>
                            <div class="goods_more">
                                <span>更多优惠</span>
                                <i class="iconfont icon-jiantou"></i>
                            </div>
                        </div>
                    </div>
                    <div class="goods_kefu">
                        <dl>
                            <dt>客服：</dt>
                            <dd>
                                <div class="kefu"></div>
                            </dd>
                        </dl>
                    </div>
                    <div class="goods_sku">
                        <div class="goods_sku_content">
                            <dl class="goods_color">
                                <dt>颜色</dt>
                                <dd>
                                    <div class="goods_color_img"><img src="../${item.images}" alt=""></div>
                                </dd>
                            </dl>
                            <dl class="goods_size">
                                <dt>尺码</dt>
                                <dd>
                                    <ul>
                                        <li class="goods_size_active">S</li>
                                        <li>M</li>
                                        <li>L</li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl class="goods_num">
                                <dt>数量</dt>
                                <dd>
                                    <div class="ipt">
                                        <span class="jiaNum"></span>
                                        <input type="text" value="1">
                                        <span class="jianNum"></span>
                                    </div>
                                    <div class="goods_kucun">
                                        <span>库存${item.stock}件</span>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div class="goods_sku_buy">
                            <a class="goods_sku_buy_goumai" href="javascript:;">立即购买</a>
                            <a class="goods_sku_buy_jiaru" href="javascript:;">加入购物车</a>
                        </div>
                    </div>
                    <div class="goods_social">
                        <div class="goods_social_house">
                            <span></span>
                            <span>${item.house}</span>
                        </div>
                        <div class="fenxiang">
                            <b></b>
                            分享
                        </div>
                        <div class="jubao">
                            举报
                        </div>
                    </div>
                    <div class="goods_extra">
                        <div class="goods_fuwu">
                            服务说明:
                        </div>
                        <ul class="goods_fuwu_ul">
                            <li><img src="../images/xiangqing_gougou.png" alt="">72小时发货</li>
                            <li><img src="../images/xiangqing_gougou.png" alt="">7天无理由退货</li>
                            <li><img src="../images/xiangqing_gougou.png" alt="">延误必赔</li>
                            <li><img src="../images/xiangqing_gougou.png" alt="">退货补运费</li>
                            <li><img src="../images/xiangqing_gougou.png" alt="">全国包邮</li>
                        </ul>
                        <div class="goods_pay">
                            <div class="goods_pay_txt">支付方式：</div>
                            <div class="goods_pay_img"></div>
                        </div>
                    </div>
                </div>
                <div id="liuhanming">
                	<div class="liuhanmingbox">
                		<p>热门推荐</p>
                		<div class="liuhanming_list">
                			<ul>
                				<li>
                					<a href="javascript:;"><img src="../images/ppl22.jpg" alt=""></a>
                					<div class="liuhanming_price">￥59</div>
                				</li>
                				<li>
                					<a href="javascript:;"><img src="../images/ppl22.jpg" alt=""></a>
                					<div class="liuhanming_price">￥99</div>
                				</li>
                				<li>
                					<a href="javascript:;"><img src="../images/ppl22.jpg" alt=""></a>
                					<div class="liuhanming_price">￥109</div>
                				</li>
                			</ul>
                		</div>`;
                	
		});

            $('#content_shopping').html(html);

            CloudZoom.quickStart();

	});	





    //鼠标滑入更多优惠显示所有优惠券
    $('#content_shopping').on('mouseover','.goods_main_bottom',function(){

        $('.goods_main_bottom').css({
            overflow:'visible',
            zIndex: '666'
        });

        $('.goods_main_bottom_con').css('backgroundColor','#fff');

    });
    $('#content_shopping').on('mouseout','.goods_main_bottom_con',function(){

        $('.goods_main_bottom').css({
            overflow:'hidden',
            zIndex: '0'
        });

        $('.goods_main_bottom_con').css('backgroundColor','#f6f6f6');

    });


    //点击选择尺码
    $('#content_shopping').on('click','.goods_size ul li',function(){

        $(this).addClass('goods_size_active')
                .siblings().removeClass('goods_size_active');

    });


    //点击加减数量
    // 加号
    $('#content_shopping').on('click','.jianNum',function(){

        var piece = $(this).parent().children().eq(1).val();
        piece++;

        if(piece > $(this).parent().next().children().eq(0).html().slice(2,-1) * 1){
            piece = $(this).parent().next().children().eq(0).html().slice(2,-1) * 1;
        }

        if(piece < 1){
           piece = 1; 
        }

        $(this).parent().children().eq(1).val(piece);
    });

    //减号
    $('#content_shopping').on('click','.jiaNum',function(){

        var piece = $(this).parent().children().eq(1).val();

        piece--;

        if(piece < 1){
           piece = 1; 
        }

            $(this).parent().children().eq(1).val(piece);
    });

    //手动输入失去焦点判断
    $('#content_shopping').on('blur','.ipt input',function(){

        var piece = $(this).val();

        if(piece > $(this).parent().next().children().eq(0).html().slice(2,-1) * 1){
            piece = $(this).parent().next().children().eq(0).html().slice(2,-1) * 1;
        }

        if(piece < 1){
           piece = 1; 
        }

        $(this).val(piece);
    });




    //点击收藏++
    $('#content_shopping').one('click','.goods_social_house',function(){
        var houseNum = $(this).children().eq(1).html();
        //拿到目前的收藏量++
        houseNum++;
        //赋值回去并传给后台存入数据库
        $(this).children().eq(1).html(houseNum);

        $.ajax({
            type : 'post',
            url : '../api/xiangqing.php?' + new Date(),
            data : {
                house : houseNum,
                gid : num
            },
            success : function(str){
            }
        });

    });




    //点击加入购物车
    /*
        点击加入购物车将商品id、数量、尺码、用户id、商家id传给后端录入数据库
    */
    $('#content_shopping').on('click','.goods_sku_buy_jiaru,.goods_sku_buy_goumai',function(){

        var goodsNum = $('.ipt input').val();//商品数量

        var goods_size = $('.goods_size').children().find('.goods_size_active').html();//尺码

        var uid = getCookie('uid');//id

        var inputthis = $(this);
        var prms = new Promise(function(succs){
            $.ajax({
                type : 'post',
                url : '../api/xiangqing.php',
                data : {
                    uid  : uid,
                    goodsNum : goodsNum,
                    goodsSize : goods_size,
                    gid  : num,
                    sid : sid
                },
                success : function(str){
                    if(str){
                        //加入成功后生成提示框
                        succs(inputthis);
                    }
                }

            });

        });

        prms.then(function(inputthis){
            //判断点击的是购买还是加入购物车
            if(inputthis[0].className == 'goods_sku_buy_goumai'){
                //点击的是购买，直接跳转页面
                window.location = 'cart.html';    
            }else{
                //点击的是加入购物车,生成提示框
                //生成提示框，字符串拼接
                var cartHtml = `<div id="cart_box">
                                    <div id="cart">
                                        <div class="cart_close">
                                            <span></span>
                                        </div>
                                        <div class="cart_body">
                                            <div class="cart_body_hader">
                                                <p class="tishi">
                                                    <span>已将商品添加到购物车</span>
                                                </p>
                                                <p class="jiezhang">
                                                    <a href="javascript:;">
                                                        去购物车结算
                                                    </a>
                                                </p>
                                            </div>
                                            <div class="cart_body_tuijian">
                                                <h3>购买过该商品的菇凉还购买了：</h3>
                                                <ul>
                                                    <li>
                                                        <div class="tuijianul">
                                                            <a href="javascript:;"><img src="../images/ppl28.jpg" alt=""></a><a href="javascript:;">夏季新款韩版小清新</a>
                                                            <span>97.00</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="tuijianul">
                                                            <a href="javascript:;"><img src="../images/ppl28.jpg" alt=""></a><a href="javascript:;">夏季新款韩版小清新</a>
                                                            <span>97.00</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="tuijianul">
                                                            <a href="javascript:;"><img src="../images/ppl28.jpg" alt=""></a><a href="javascript:;">夏季新款韩版小清新</a>
                                                            <span>97.00</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="tuijianul">
                                                            <a href="javascript:;"><img src="../images/ppl28.jpg" alt=""></a><a href="javascript:;">夏季新款韩版小清新</a>
                                                            <span>97.00</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
                //输出到页面

                $(document.body).append(cartHtml);
                //点击close删除节点
                $('.cart_close span').on('click',function(){

                    $('#cart_box').remove();

                });

                //点击结算跳转到购物车页面
                $('.jiezhang a').on('click',function(){

                    window.location = 'cart.html';

                });

            }
            
        });

    });


//================================评论区渲染========================================
$.ajax({
    type : 'post',
    url : '../api/xiangqing.php',
    data : 'num=' + num,
    success : function(str){
        var arrN = JSON.parse(str);
        //数据渲染
        var hh2 = arrN.map(function(item){
            return `<div class="buyer_main_item">
                        <div class="info">
                            <div class="info_w">
                                <div class="info_t">
                                    <span class="name">${item.cname}</span>
                                    <span class="date">${item.time}</span>
                                </div>
                                <div class="info_m">${item.content}</div>
                                <div class="info_b">
                                    <p>
                                        <span class="sku_choose">
                                            颜色:${item.color} 尺码:${item.size}
                                        </span>
                                    </p>
                                    <p>
                                        <span class="height_weight">
                                            身高: 165 cm
                                        </span>
                                        <span class="height_weight">
                                            体重: 45 kg
                                        </span>
                                        <span class="height_weight">
                                            是否合身: 合身
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>`

        });
        $('.buyer_main_box').html(hh2);
    }
});











});