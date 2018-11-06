/*
* @Author: feng
* @Date:   2018-09-09 12:21:34
* @Last Modified by:   feng
* @Last Modified time: 2018-09-09 16:00:11
*/

'use strict';

var $key=0;//记录滚动到哪一个
var canscroll = true;//用来限制滚动频率

/**********JQuery  Ready主进程事件段*********/
jQuery(document).ready(function($) {
	change_size();
	$(window).on('resize', function(event) {
		event.preventDefault();

		change_size();

	});

	//**滚动鼠标
	$(".nave ").on('mousewheel',function(event,delta){

		if (canscroll) {
			//限制滚动
			canscroll = false;
			 $key-=delta;
			 if($key<0)   
			 {
			 	$key=0
			 }else if($key > 6)
			 {
			 	$key=7;
			 	canscroll = true;
			 	return;
			 }
			 console.log($key);
			 //滚动页面
			 $("body,html").stop().animate({
		 		"scrollTop":$(".main_box>div").eq($key).offset().top- $(window).height() /10
		 	},700,function(){
		 		//释放滚动条
		 		canscroll = true;
         var agb=$(".nave ul li").eq($key).css('background-color');
         $(".head p").css({'color':agb}).fadeTo(1,0).fadeTo(1000,1);
		 	});
	 		//添加菜单当前色

	 		$(".nave ul li").eq($key).addClass('current').siblings().removeClass('current');

		};

	})

	/*****点击侧边菜单***/
	$(".nave ul li").click(function(event) {
		$key = $(this).index();
		$(".nave ul li").eq($(this).index()).toggleClass('current','slow','easeInExpo').siblings().removeClass('current');

		 $("body,html").stop().animate({
		 		"scrollTop":$(".main_box>div").eq($(this).index()).offset().top- $(window).height() /10
		 	},700,function () {
      //var agb=$(".nave ul li").eq($key).css('background-color');
       var id=".page"+($key+1);
       var agb=$(id).css('background');
      $(".head p").css({'color':agb}).fadeTo(1,0).fadeTo(1000,1);
      //$(".head p").css.animate({color:agb},{duration:'slow',queue:false}).fadeTo(1,0).fadeTo(1000,1);
    });


	});

	/*****鼠标悬停事件*****/
	$(".nave ul li").hover(function () {
    $(this).toggleClass('hovers').siblings().removeClass('hovers');
    //$(this).parents('.nave').css('background','#000');
  },function () {
    $(".nave ul li").eq($(this).index()).removeClass('hovers');
  });

  //禁止一些按键的默认行为
	$(document).keydown(function (event) {
	  //禁止 page按键、上下左右控制键的默认行为
	  if(event.which ==33 || event.which ==34 ||event.which == 37 ||event.which == 38||event.which == 39 ||event.which == 40){
	    event.preventDefault();return false;
    }

  });

	$(".head").mousewheel(function (event){event.preventDefault();});
  $(".main_box > div").on('mousewheel',function (event){event.stopPropagation();event.preventDefault();});
 // $(".tabdata").mousewheel(function (event){event.defaultElement;});

//窗口的拖动

    var bool=false;
    var offsetX=0;
    var offsetY=0;
    $("#mainviewsid").mousedown(function(event){
      bool=true;
      offsetX = event.offsetX;
      offsetY = event.offsetY;
      console.log(offsetX);
      $("#topview").css('cursor','move');
    })
      .mouseup(function(){
        bool=false;
      })
    $(document).mousemove(function(event){
      if(!bool)
        return;
      var x = event.clientX-offsetX;
      var y = event.clientY-offsetY;
      console.log(x);
      $("#mainviewsid").css("left", x);
      $("#mainviewsid").css("top", y);
    })
//窗口的关闭
    //$("#img").click(function() {


   // });



});

//动态设置大小
function change_size(){
	var window_height = $(window).height();
	$(".nave").height(window_height - window_height/10);
	var size = Number($(".nave ul li").size());
	$(".head").css({'font-size':window_height/30+"px"});
	$(".nave ul li").css({'line-height':$(".nave").height()/size+"px",'height':$(".nave").height()/size+"px"});
	$(".main_box>div").height(window_height - window_height/10);
	$("body,html").stop().animate({
 		"scrollTop":$(".main_box>div").eq($key).offset().top-window_height/10
 	},700,function(){
 		//释放滚动条
 		canscroll = true;
 	});
	//添加菜单当前色
	$(".nave ul li").eq($key).addClass('current').siblings().removeClass('current');
  var agb=$(".nave ul li").eq($key).css('background-color');
	$(".head p").css({'color':agb});
}

