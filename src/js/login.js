window.onload = function() {	
                    //点击切换功能
                        $('#btn a').on('click',function(){
                            $(this).addClass('btn_active')
                                    .siblings().removeClass('btn_active');
                            $('.login_inputbox form>div').eq($(this).index())
                                                        .css('display','block')
                                                        .siblings().css('display','none');
                        });

                    
                    //点击右上角切换扫码登录功能
                    $('.login_tabEWM').click(function(){
                        $('#lg_content').addClass('none');
                        $('#login_ewm').removeClass('none');
                    });

                    $('#login_tab_dn').click(function(){
                        $('#login_ewm').addClass('none');
                        $('#lg_content').removeClass('none');
                    });















    				//找节点
    				var login = document.getElementById('login_normal');
    				var inputs = login.getElementsByTagName('input');
                    var infs = document.getElementById('pp');
    				var isok = {};//存验证通过的状态   ，假设如果通过就存1
                
    				//1、表单验证
    				for(var i = 0; i < inputs.length - 1; i++) {
    					inputs[i].index = i;
                    }
                    //账号验证
    				inputs[0].onblur = function() {
                        var mail = inputs[0].value.trim();
    					if(mail) {
                            //不为空:
                            infs.style.display = 'none';
                            isok[0] = true;
    					}else{
                            infs.innerHTML = '请输入用户名/邮箱/手机号';
                            infs.style.display = 'block';
                            isok[0] = false;
    					}
                    }
                    
    				//密码：控制长度
    				inputs[1].onblur = function() {
                        var psw = inputs[1].value.trim();
    					if(psw) {
                            //不为空：
                            infs.style.display = 'none';
                            isok[1] = true;
    					}else{
                            infs.innerHTML = '请输入密码';
                            infs.style.display = 'block';
                            isok[1] = false;
    					}
    				}
                
    				//2、点击提交验证
    				function checkall() {
    					var num = 0;
    					var istrue = true;
    					for(var key in isok) {
    						num++;
    						if(!isok[key]) {
    							//只要有一个为假
    							istrue = false;
    						}
    					}
    					return { //一次返回一个json对象
    						num : num,
    						istrue : istrue
    					}
    				}
    				$('#sub input').on('click',function(){
                        var obj = checkall();
                            //都通过才能跳转
                            if(obj.istrue && obj.num == 2) {
                                //调用ajax与数据库匹配
                                var p = new Promise(function(resolve){
                                    $.ajax({
                                        type : 'post',
                                        url : '../api/login.php',
                                        data : {
                                        name : $('#username input').val(),
                                        password : $('#pasw input').val()
                                        },
                                        success : function(str){
                                            var arr = JSON.parse(str);
                                            if(arr.length){
                                                infs.style.display = 'none';
                                                resolve(arr);
                                            }else{
                                                infs.innerHTML = '账号或密码有误';
                                                infs.style.display = 'block';
                                            }
                                        }
                                    }); 
                                });

                                p.then(function(arr){
                                        setCookie('uid', arr[0].uid, '7');
                                        setCookie('name',arr[0].name,'7');
                                        window.location = '../01index.html';
                                })
                            }else{
                                    alert('请完善信息');
                            }
                        
                    });
                    

                    //手机验证码登录
                    var phone = document.getElementById('login_phone_tel').children[0];
                    var yzm = document.getElementById('login_phone_yzm').children[1];
                    var yzmbtn = document.getElementById('login_phone_yzm').children[0];
                    var btn = document.getElementById('login_phone_btn').children[0];
                    var information = document.getElementById('information');
                    var lg_content = document.getElementById('lg_content');
                    var information_name = information.children[1];
                    var information_psw = information.children[2];
                    var information_btn = information.children[3];
                    var isok2 = {};
                    //手机号码失去焦点验证
                    phone.onblur = function() {
                        var tel = phone.value.trim();
                        if(tel) {
                            //不为空：正则  1开头 + 3-9第二位+  9个数字
                            var reg = /^1[3-9]\d{9}$/;
                            var res = reg.test(tel);
                            if(res) {
                                //正则匹配成功
                                infs.style.display = 'none';
                                isok2[this.index] = true;
                            }else{
                                infs.innerHTML = '请输入正确的手机号码';
                                infs.style.display = 'block';
                                isok2[this.index] = false;				
                            }
                        }else{
                            infs.innerHTML = '请输入手机号码';
                            infs.style.display = 'block';
                        }
                    }

                    
                    //4为随机验证码
                    function randomNum(){
                        // 1-9，a-z,A-Z的所有数生成数组
                        var html = "1234567890abcdefghijklmnopqrstuvwsyzABCDEFGHIJKLMNOPQRSTUVWSYZ";
                        var num = "";//用来装拼接的空变量
                        for(var i=0; i < 4 ;i++){
                            // 调用数组并拼接
                            var ps = parseInt(Math.random()*html.length);
                            num += html[ps];
                        }
                        return num;
                    }


                    istrue = true;
                    //点击获取验证码
                    if(istrue){
                         yzmbtn.onclick = function(){
                            istrue = false;
                            if($('#login_phone_tel').children().eq(0).val()){
                                var n = 60;
                                var timer = setInterval(function(){
                                    $('#login_phone_yzm').children().eq(0).val('获取动态密码(' + n + ')');
                                    n--;
                                    if(n<0){
                                        $('#login_phone_yzm').children().eq(0).css('background','#ff5777');
                                        $('#login_phone_yzm').children().eq(0).val('获取动态密码');
                                        clearInterval(timer);
                                    }
                                },1000);
                                $('#login_phone_yzm').children().eq(0).css('background','#ccc')
                                //点击的时候拿到表单内容
                                var  val  = phone.value;

                                var  num = randomNum();
                                var ps = new Promise(function(succes){

                                    ajax2({
                                        type : 'post',
                                        url : '../api/chit.php',
                                        data : 'tel=' + val + '&num=' + num,
                                        success : function(str){
                                            succes(num,val);
                                        }
                                    });
                                    succes(num);

                                });
                                // 点击的时候发送ajax发送请求
                                 ps.then(function(num){ 
                                    var val = phone.value;
                                    btn.onclick = function(){
                                    var yzmval = yzm.value
                                       //当点击登录的时候判断num与yzm的值是否一样，一直就执行
                                       if(num == yzmval){
                                            ajax2({
                                                type : 'post',
                                                url : '../api/login.php',
                                                data : 'tel=' + val,
                                                success : function(str){
                                                    if(str == '1'){
                                                        //返回true代表是新用户
                                                        // 新用户需要完善用户名和密码
                                                        information.style.display = 'block';
                                                        lg_content.style.display = 'none';

                                                        information_btn.onclick = function(){
                                                            console.log(1)
                                                            var name = information_name.value;
                                                            var psw = information_psw.value;
                                                            if(information_name && information_psw){
                                                                ajax2({
                                                                    type : 'post',
                                                                    url : '../api/login.php',
                                                                    data : 'information_name=' + name + '&information_psw=' + psw + '&information_val=' + val,
                                                                    success : function(str2){
                                                                        var arr3 = JSON.parse(str2);
                                                                        if(arr3.length){
                                                                            console.log(arr3);
                                                                            setCookie('uid',arr3[0].name,7);
                                                                            setCookie('name',arr3[0].name,7);
                                                                            window.location = '../01index.html';
                                                                        }
                                                                    }

                                                                });
                                                            }
                                                        }
                                                    }else{
                                                        var arr =JSON.parse(str); 
                                                        if(arr.length){
                                                            //有长度证明有返回值，正确可登陆
                                                            setCookie('uid',arr[0].uid, 7);
                                                            setCookie('name',arr[0].name,7);
                                                            window.location = '../01index.html';
                                                        }

                                                    }
                                                }

                                            });

                                       }

                                   }

                                });
                            }
                            

                        }
                        
                    }
                   setTimeout(function(){
                        istrue = true;
                   },6000);
                       

                    //==========================注册JS=========================
                    var login_ewm = document.getElementById('login_ewm');
                    var reg_box_ipt = login_ewm.getElementsByTagName('input');
                    var reg_username = document.getElementById('reg_username');
                    var reg_phone = document.getElementById('reg_phone');
                    var reg_pas = document.getElementById('reg_pas');
                    var reg_btn = document.getElementById('reg_btn');
                    var zhengque = document.getElementsByClassName('zhengque');
                    var cuowu = document.getElementsByClassName('cuowu');
                    var cbox = document.getElementsByClassName('cbox');
                    var obj = {};
                    //循环给每个input绑定索引，用于存入json对象
                    for( i = 0; i < reg_box_ipt.length; i++){
                        reg_box_ipt[i].index = i;
                    }


                    reg_username.onblur = function(){
                        var val = reg_username.value.trim();
                        if(val){
                            //满足
                            zhengque[0].style.display = 'block';
                            cuowu[0].style.display = 'none';
                            obj[this.index] = true;
                        }else{
                            cuowu[0].style.display = 'block';
                            zhengque[0].style.display = 'none';
                            obj[this.index] = false;
                        }

                    }


                    reg_phone.onblur = function(){
                        var val = reg_phone.value.trim();
                        if(val){
                            var reg = /^1(3|4|5|7|8)\d{9}$/;
                            var res = reg.test(val);
                            if(res){
                                zhengque[1].style.display = 'block';
                                cuowu[1].style.display = 'none';
                                obj[this.index] = true;
                            }else{
                                cuowu[1].style.display = 'block';
                                zhengque[1].style.display = 'none';
                                obj[this.index] = false;
                            }
                        }else{
                            cuowu[1].style.display = 'block';
                            zhengque[1].style.display = 'none';
                            obj[this.index] = false;
                        }

                    }


                    //密码
                    reg_pas.onblur = function(){
                        var num1 = 0;
                        var val = reg_pas.value.trim();
                        if(val){
                        var reg =  [/[a-z]/,/[A-Z]/,/[0-9]/,/[!@#$%^&*()]/];
                        if(val.length > 6){
                            cbox[0].style.display = 'block';
                            cbox[1].style.display = 'none';
                            cbox[2].style.display = 'none';
                            zhengque[2].style.display = 'block';
                            cuowu[2].style.display = 'none';
                            obj[this.index] = true;
                        }else{
                            cbox[0].style.display = 'none';
                            cbox[1].style.display = 'none';
                            cbox[2].style.display = 'none';
                            cuowu[2].style.display = 'block';
                            zhengque[2].style.display = 'none';
                            obj[this.index] = false;
                        }
                        for(i = 0; i < reg.length; i++){ //4
                                for(j = 0;j <val.length; j++){
                                    if(reg[i].test(val)){
                                        num1++
                                        break;
                                    }
                                }
                            }
                            if(num1 > 2 && num1 <= 3){
                                cbox[0].style.display = 'block';
                                cbox[1].style.display = 'block';
                                cbox[2].style.display = 'none';
                            }
                            if(num1 > 3){
                                cbox[0].style.display = 'block';
                                cbox[1].style.display = 'block';
                                cbox[2].style.display = 'block';
                            }
                        }else{
                            cuowu[2].style.display = 'block';
                            zhengque[2].style.display = 'none';
                            obj[this.index] = false;
                        }

                    }



                    reg_btn.onclick = function(){
                        var isok = true;
                        var num = 0;
                        for(var key in obj){
                            num++
                            if(!obj[key]){
                                isok = false;
                                break;
                            }
                        }
                        if(num == 3 && isok == true){
                            //注册成功
                            ajax2({

                                type : 'post',
                                url : '../api/login.php',
                                data : 'reg_name=' + reg_username.value.trim() + '&reg_pasw=' + reg_pas.value.trim() + '&reg_phone=' + reg_phone.value.trim(),
                                success : function(str){
                                    var arr = JSON.parse(str);
                                    setCookie('uid',arr[0].uid,7);
                                    setCookie('name',arr[0].name,7);
                                    window.location = '../01index.html';
                                }
                            });
                            
                        }else{
                            alert('请完善信息再提交')
                        }
                    }











    }