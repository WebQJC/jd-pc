$(function () {

//轮播图部分  //
    function chageImg(a){
        $(".jd-clo2-hd ul li").eq(a).fadeIn().siblings("li").fadeOut();
        $(".jd-clo2-hd ol li").eq(a).addClass('current').siblings().removeClass('current');
    }
    var count = 0;
    //自动轮播
    var timer = null; //为了让以下的可以访问
    function selfPlay(){
        timer = setInterval(function(){
            count++;
            if(count==$(".jd-clo2-hd ul li").length){
                count = 0;
            }
            chageImg(count);
            // $(".jd-clo2-hd ul li").eq(count).fadeIn().siblings("li").fadeOut();
            // $(".jd-clo2-hd ol li").eq(count).addClass('current').siblings().removeClass('current');
        },2000);
    }
    selfPlay();
    //自动轮播结束

    //右箭头
    $(".arrow-r").click(function () {
        clearInterval(timer);
        count++;
        if(count == $(".jd-clo2-hd ul li").length){
            count = 0;
        }
        //   console.log(count);
      //让count渐渐的显示，其他兄弟渐渐的隐藏
        // $(".jd-clo2-hd ul li").eq(count).fadeIn().siblings("li").fadeOut();
        // $(".jd-clo2-hd ol li").eq(count).addClass('current').siblings().removeClass('current');
        chageImg(count);
        selfPlay();
    });
    //右箭头结束

    //左箭头
    $(".arrow-l").click(function () {
        clearInterval(timer);
        count--;
    
        if(count == -1){
            count = $(".jd-clo2-hd ul li").length - 1;
        }
        //  console.log(count);
      //让count渐渐的显示，其他兄弟渐渐的隐藏
        // $(".jd-clo2-hd ul li").eq(count).fadeIn().siblings("li").fadeOut();
        // $(".jd-clo2-hd ol li").eq(count).addClass('current').siblings().removeClass('current');
        chageImg(count);
        selfPlay();
    });
    //左箭头结束

    //焦点事件
    $(".jd-clo2-hd ol li").click(function(){
        clearInterval(timer);
        count = $(this).index();
        // $(".jd-clo2-hd ul li").eq(count).fadeIn().siblings("li").fadeOut();
        // $(".jd-clo2-hd ol li").eq(count).addClass('current').siblings().removeClass('current');
        chageImg(count);
        selfPlay();
    });
    //焦点事件结束
    $(".jd-clo2-hd ul").mouseenter(function(){
        clearInterval(timer);
    });
    $(".jd-clo2-hd ul").mouseleave(function(){
        selfPlay();
    });
//轮播图部分结束  //

// 热词部分  //
    var zi = 0;
    var timer1 = null;
    function hotwords(){
    timer1=setInterval(function(){
        zi++;
        if(zi==$(".hotwords>ul>li>ul>li").length){
            zi = 0;
        }
        console.log(zi);
        $(".hotwords>ul>li>ul>li").eq(zi).fadeIn().siblings("li").fadeOut();
    },3000);
    }
    hotwords();
    $(".hotwords>ul>li>ul>li").mouseenter(function(){
        clearInterval(timer1);
    });
    $(".hotwords>ul>li>ul>li").mouseleave(function(){
        hotwords();
    });

//热词部分结束  //

    /*右边导航条*/
    $(".right-nav-bottom> .right-nav-item").click(function () {
        $("html,body").stop().animate({scrollTop:0},5000);
    });
    /*右边导航条结束*/

    $(window).scroll(function () {
        if($(window).scrollTop() >= 200 ){
            $(".flex-input").slideDown(1000);

        }else {
            $(".flex-input").slideUp(1000);
        }
    });
  });