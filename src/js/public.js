/*
公共类头部js
⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
*/
function towMenu(){
    //移入显示二级菜单
        $('#search_menu,#search_menu_nav').on('mouseover', function() {
            $('#search_menu_nav_onoff').css('display', 'block');
        });
        //移出隐藏
        $('#search_menu,#search_menu_nav').on('mouseout', function() {
            $('#search_menu_nav_onoff').css('display', 'none');
        });

        //点击登录按钮跳转到登录页面
        //判断是否已经登录
        var uid = getCookie('uid');
        var name = getCookie('name');
        if (uid) {
            //代表已经登录
            //将用户名输出到.search_login a的html中
            $('.search_login a').html('<img src="../images/login_on" alt="">' + name + '<i class="iconfont icon-jiantou"></i>');
            $('.search_login,.search_login_set').on('mouseover', function() {
                $('.search_login_set').css('display', 'block');
            });
            $('.search_login_set,.search_login').on('mouseout', function() {
                $('.search_login_set').css('display', 'none');
            });

        } else {
            //没有登录\
            $('.search_login a').html('<img src="../images/search_login.png" alt="">登录');
            $('.search_login a').on('click', function() {

                window.location = 'html/login.html';
            });
        }


        //点击搜索
        $('.search_box_btn').on('click',function(){
            if($('.search_box_txt').val()){
                //不为空
                var vla =$('.search_box_txt').val().trim();

                window.location = 'details.html?' + vla;
            }else{
                // 为空
                
            }

        });
//======================================回车搜索=================================================
    $('.search_box_txt').focus(function(){
        //获取焦点之后执行
        $('.search_box_txt').on('keydown',function(ev){
            if(ev.keyCode == 13){
                //按下了回车键
                var vla =$('.search_box_txt').val().trim();
                window.open('../html/details.html?' + vla);
            }
        });

    });

//======================================点击购物车=================================================
    $('.cart').on('click',function(){
        window.open('cart.html');
    });


//======================================点击退出登录=================================================
    $('.search_login_set').children().eq(2).click(function(){
        window.location.reload();
        removeCookie('uid',-1);
        removeCookie('name',-1);
    });

}
function topMenu(){
        //吸顶菜单
        //鼠标滚动超出.header_search + 100px 的时候创建吸顶菜单
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > $('#header').outerHeight(true) + 100) {
                //到达临界点添加样式
                //瞬间让高度从0开始利用animate动画
                $('.header_search').css({
                    'position': 'fixed',
                    'top': '0',
                    'left': '50%',
                    'marginLeft': '-600px',
                    'z-index': '999999'
                });
                //吸顶时把目录隐藏
                $('#search_menu').css('display','none');
            } else {
                $('.header_search').css({
                    'position': '',
                    'top': '',
                    'left': '',
                    'marginLeft': '',
                    'z-index': ''
                });
                $('#search_menu').css('display','block');
            }
        });
}
/*
⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆
公共类头部js
*/


/*
公共类右侧导航栏js
⬇⬇⬇⬇⬇⬇⬇⬇⬇
*/
function navigationRight(){

    $('#navr').load('02navRight.html',function(){
       //回到顶部
        $(window).on('scroll',function(){
            if($(window).scrollTop() > $('#header').outerHeight(true) + 100){
                //显示回到顶部
                $('.navRight_top').css('display','block');
            }else{
                $('.navRight_top').css('display','none');
            }
        });

        //点击回到顶部
        $('.navRight_top').on('click',function(){
            $(window).scrollTop(0);
        });
    });
	
}
/*
⬆⬆⬆⬆⬆⬆⬆⬆⬆
公共类右侧导航栏js
*/


/*
公共类底部js
⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
*/
function footerMenu(){
    $('#foot').load('footer.html');
}

/*
⬆⬆⬆⬆⬆⬆⬆⬆⬆
公共类底部js
*/






