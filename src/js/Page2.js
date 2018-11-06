/*
* @Author: feng
* @Date:   2018-09-09 12:21:34
* @Last Modified by:   feng
* @Last Modified time: 2018-09-09 16:00:11
*/
 //demo  鼠标拖动调节大小控件
/*
(function ($) {
  $.fn.dragDivResize = function () {
    var deltaX, deltaY, _startX, _startY;
    var resizeW, resizeH;
    var size = 20;
    var minSize = 10;
    var scroll = getScrollOffsets();
    var _this = this;
    for (var i = 0; i < _this.length; i++) {
      var target = this[i];
      $(target).on("mouseover mousemove", overHandler);
    }
    function outHandler() {
      for (var i = 0; i < _this.length; i++) {
        target.style.outline = "none";
      }
      document.body.style.cursor = "default";
    }
    function overHandler(event) {
      target = event.target || event.srcElement;
      var startX = event.clientX + scroll.x;
      var startY = event.clientY + scroll.y;
      var w = $(target).width();
      var h = $(target).height();
      _startX = parseInt(startX);
      _startY = parseInt(startY);
      if ((0 < target.offsetLeft + w - _startX && target.offsetLeft + w - _startX < size) || (0 < target.offsetTop + h - _startY && target.offsetTop + h - _startY < size)) {
        target.style.outline = "2px dashed #333";
        if ((0 > target.offsetLeft + w - _startX || target.offsetLeft + w - _startX > size) && 0 < target.offsetTop + h - _startY && target.offsetTop + h - _startY < size) {
          resizeW = false;
          resizeH = true;
          document.body.style.cursor = "s-resize";
        }
        if (0 < target.offsetLeft + w - _startX && target.offsetLeft + w - _startX < size && (0 > target.offsetTop + h - _startY || target.offsetTop + h - _startY > size)) {
          resizeW = true;
          resizeH = false;
          document.body.style.cursor = "w-resize";
        }
        if (0 < target.offsetLeft + w - _startX && target.offsetLeft + w - _startX < size && 0 < target.offsetTop + h - _startY && target.offsetTop + h - _startY < size) {
          resizeW = true;
          resizeH = true;
          document.body.style.cursor = "se-resize";
        }
        $(target).on('mousedown', downHandler);
      } else {
        resizeW = false;
        resizeH = false;
        $(target).off('mousedown', downHandler);
      }
    }
    function downHandler(event) {
      target = event.target || event.srcElement;
      var startX = event.clientX + scroll.x;
      var startY = event.clientY + scroll.y;
      _startX = parseInt(startX);
      _startY = parseInt(startY);
      if (document.addEventListener) {
        document.addEventListener("mousemove", moveHandler, true);
        document.addEventListener("mouseup", upHandler, true);
      } else if (document.attachEvent) {
        target.setCapture();
        target.attachEvent("onlosecapeture", upHandler);
        target.attachEvent("onmouseup", upHandler);
        target.attachEvent("onmousemove", moveHandler);
      }
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    }
    function moveHandler(e) {
      if (!e) e = window.event;
      var w, h;
      var startX = parseInt(e.clientX + scroll.x);
      var startY = parseInt(e.clientY + scroll.y);
      target = target || e.target || e.srcElement;
      if (target == document.body) {
        return;
      }
      if (resizeW) {
        deltaX = startX - _startX;
        w = $(target).width() + deltaX < minSize ? minSize : $(target).width() + deltaX;
        target.style.width = w + "px";
        _startX = startX;
      }
      if (resizeH) {
        deltaY = startY - _startY;
        h = $(target).height() + deltaY < minSize ? minSize : $(target).height() + deltaY;
        target.style.height = h + "px";
        _startY = startY;
      }
      if (e.stopPropagation) {
        e.stopPropagation();
      } else {
        e.cancelBubble = true;
      }
    }
    function upHandler(e) {
      if (!e) {
        e = window.event;
      }
      resizeW = false;
      resizeH = false;
      target = e.target || e.srcElement;
      $(target).on("mouseout", outHandler);
      if (document.removeEventListener) {
        document.removeEventListener("mousemove", moveHandler, true);
        document.removeEventListener("mouseup", upHandler, true);
      } else if (document.detachEvent) {
        target.detachEvent("onlosecapeture", upHandler);
        target.detachEvent("onmouseup", upHandler);
        target.detachEvent("onmousemove", moveHandler);
        target.releaseCapture();
      }
      if (e.stopPropagation) {
        e.stopPropagation();
      } else {
        e.cancelBubble = true;
      }
    }
    function getScrollOffsets(w) {
      w = w || window;
      if (w.pageXOffset != null) {
        return { x: w.pageXOffset, y: w.pageYOffset };
      }
      var d = w.document;
      if (document.compatMode == "CSS1Compat") {
        return { x: d.documentElement.scrollLeft, y: d.documentElement.scrollTop };
      }
      return { x: d.body.scrollLeft, y: d.body.scrollTop };
    }
  }
}(jQuery));
*/

document.ondragover = function (evt) {
  return false;
}
document.ondrop = function (evt) {
  evt = evt||window.event;
  evt.stopPropagation();
  evt.preventDefault();


}

document.ondragend = function(ev) {
  ev.preventDefault();
};

/******绘制处理区********/

  var Canvasview = document.getElementById("base_canvas");
  var paint = Canvasview.getContext("2d");
  Canvasview.width = Canvasview.offsetWidth;
  Canvasview.height = Canvasview.offsetHeight;
  var cx=Canvasview.width;
  var cy=Canvasview.height;
  var g_views = 0 ;
  function initview() {
  Canvasview.width = Canvasview.offsetWidth;
  Canvasview.height = Canvasview.offsetHeight;
  cx=Canvasview.width;
  cy=Canvasview.height;
    paint.strokeStyle = " rgba(250, 185, 54, 1)";
    paint.fillStyle = 'blue';
    paint.lineWidth = 5;
}

  function drawline_y(vnum) {
    if (vnum == 1) return false;
    var linenum = Math.sqrt(vnum) - 1;
    for (var i = 1; i <= linenum; i++) {
      paint.beginPath();
      paint.moveTo(cx * (i / (linenum + 1)), 0);
      paint.lineTo(cx * (i / (linenum + 1)), cy);
      paint.stroke();
    }
  }

  function drawline_x(vnum) {
    if (vnum == 1) return false;
    var linenum = Math.sqrt(vnum) - 1;
    for (var i = 1; i <= linenum; i++) {
      paint.beginPath();
      paint.moveTo(0, cy * (i / (linenum + 1)));
      paint.lineTo(cx, cy * (i / (linenum + 1)));
      paint.stroke();
    }
  }

  function drawrect() {
    paint.beginPath();
    paint.moveTo(0, 0);
    paint.lineTo(cx, 0);
    paint.save();
    paint.moveTo(0, 0);
    paint.lineTo(0, cy);
    paint.save();
    paint.moveTo(cx, cy);
    paint.lineTo(0, cy);
    paint.save();
    paint.moveTo(cx, cy);
    paint.lineTo(cx, 0);
    paint.stroke();
  }

  function drawchange(vnum) {
    var col=Math.sqrt(vnum);
    var t_offsetx= cx/col;
    var t_offsety= cy/col;
    var texts = 1 ;
    paint.font = "bold "+(t_offsetx/2)+"px"+"'字体','字体','微软雅黑','宋体'";
    for(var i=1 ;i<=col ;i++) {
      for (var j = 1; j <= col; j++) {
        var tx = j *t_offsetx - (2.75*t_offsetx / 4);
        var ty = i *t_offsety - (t_offsety / 4.35);
        paint.strokeText("" +(texts++), tx, ty, t_offsety / 2);
      }
    }

  }

/*******拖放操作***********/
var idnum = 1 ;var id =0;
var newflag = false ;
const move = function (evt) {
 evt=evt||window.event;
  if(g_views ==0 ) {
      evt.preventDefault();alert("请先选择画面数量！");
      return false;
    }
  evt.dataTransfer.setData("text", "<item>" + evt.target.innerHTML);
  newflag =true ;
  id=0;
};
const dests = document.getElementById("candiv");
var positionX =0;
var positionY =0;
dests.ondrop = function (evt) {
  evt= evt||window.event;
  evt.stopPropagation();
  evt.preventDefault();
  //evt.dataTransfer = evt.originalEvent.dataTransfer;

 // 新加入元素
  if (newflag) {
    newflag = false;
    var text = evt.dataTransfer.getData("text");
    var newelemain = document.createElement("div");
    newelemain.className = "mainviews";
    newelemain.id = "mainviewsid"+idnum;
    newelemain.draggable=true;
    newelemain.ondragstart=function (evt) {
    // evt.preventDefault();//console.log(evt.target.id);
      evt =evt||window.event;
      evt.stopPropagation();
      id=evt.target.id;
      newflag = false;
      $("#"+id).attr('class',"mainviews1");

    };
    newelemain.ondrop =function (evt) {
    evt = evt||window.event;
    evt.stopPropagation();
    evt.preventDefault();
    $("#"+id).attr('class',"mainviews");
     // return false ;
      if (evt.target.id != id)
      alert("此处已经有窗口！禁止堆叠");
   };
    newelemain.onclick=function (evt) {
      evt = evt||window.event;
      evt.stopPropagation();
      evt.preventDefault();
    };
    var neweletop = document.createElement("div");
    neweletop.className = "topview";
    neweletop.id = "topviewid";
    neweletop.draggable =false;
    var neweletop_close = document.createElement("div");
    neweletop_close.className = "topview_close";
    neweletop_close.id = "topviewid_close"+idnum;
    var neweletop_max = document.createElement("div");
    neweletop_max.className = "topview_max";
    neweletop_max.id = "topviewid_max"+(idnum++);
    var neweletop_max_button = document.createElement("button");
    neweletop_max_button.className = "topview_max_button";
    neweletop_max_button.id = "topviewid_max_button";
    neweletop_max_button.onclick =function() {
      var thisnode = this.parentElement.parentElement.parentElement;
      var cxx =$("#candiv").width();
      var cyy = $("#candiv").height();
      var marksizex = 0 ;
      var marksizey = 0 ;
      var sizex =cxx/Math.sqrt(g_views);
      var sizey =cyy/Math.sqrt(g_views);
     // console.log(sizex+'::'+sizey+thisnode.id);
     // console.log((0.5*sizey+thisnode.offsetTop)+'::'+sizey);
      var leftmark = (0.5*sizex+thisnode.offsetLeft) /sizex;
      var topmark = (0.5*sizey+thisnode.offsetTop) /sizey;
      var i =0 ;
      for ( i  ;i < Math.sqrt(g_views) ; i++){
        if( i< leftmark && leftmark <=i+1  )
          marksizex = i ;
        if( i< topmark && topmark<=i+1 )
          marksizey = i ;
      }
      if( i < leftmark  )
        marksizex = i ;
      if( i< topmark  )
        marksizey = i ;
    //  console.log(marksizex+'::'+marksizey);
      $("#"+thisnode.id).css({'left':marksizex/Math.sqrt(g_views)*100+'%','top':marksizey/Math.sqrt(g_views)*100+'%','width':(1/Math.sqrt(g_views)-0.001)*100+'%','height':(1/Math.sqrt(g_views)-0.001)*100+'%'});
     var channge = marksizey*Math.sqrt(g_views)+marksizex+1;
     postData[channge] = $(thisnode).children('.views').html() ;
    // console.log(postData);
    };
    var neweletop_close_button = document.createElement("button");
    neweletop_close_button.className = "topview_close_button";
    neweletop_close_button.id = "topviewid_close_button";
    neweletop_close_button.onclick=function(){
      var isnode = this.parentElement.parentElement.parentElement;
        if (isIE() || isIE11()) {
         isnode.removeNode(true);//IE/IE11 方法
        } else {
          isnode.remove();
        }
    };
    let newEle = document.createElement("div");
    newEle.id = "vi";
    newEle.className = "views";
    newEle.innerHTML = text.substring(6);
    neweletop_max.appendChild(neweletop_max_button);
    neweletop_close.appendChild(neweletop_close_button);
    neweletop.appendChild(neweletop_close);
    neweletop.appendChild(neweletop_max);
    newelemain.appendChild(neweletop);
    newelemain.appendChild(newEle);
    dests.appendChild(newelemain);
    var dropwidth = $("#candiv").width()/Math.sqrt(g_views)*0.75;
    var dropheight = $("#candiv").height()/Math.sqrt(g_views)*0.75;
    var dropleft =evt.offsetX - dropwidth*0.5;
    var droptop =evt.offsetY - dropheight*0.5;
    if(dropwidth+dropleft > $("#candiv").width())
      dropleft = $("#candiv").width() - dropwidth ;
    if(dropheight+droptop > $("#candiv").height())
      droptop = $("#candiv").height() - dropheight ;
    $("#"+newelemain.id).css({'left':dropleft ,'top':droptop,'width':dropwidth,'height':dropheight});
    $("#"+neweletop_max.id).css({'left':-($("#"+neweletop.id).height()/$("#"+neweletop.id).width()*100)+'%','width':($("#"+neweletop.id).height()/$("#"+neweletop.id).width()*100)+'%'});
    $("#"+neweletop_close.id).css({'width':($("#"+neweletop.id).height()/$("#"+neweletop.id).width()*100)+'%'});
  }
  //触发本地拖动行为
  newflag =false ;
  $("#"+id).mousemove(function(e) {
    e=e||window.event;
    positionX=e.pageX-$(this).offset().left; //获取当前鼠标相对元素的X坐标
    positionY=e.pageY-$(this).offset().top; //获取当前鼠标相对元素的Y坐标
  //  console.log(positionX+'    '+positionY);
  });
   var is = $("#"+id);
   var newx = evt.offsetX-positionX;
   var newy =evt.offsetY-positionY;
 // console.log(positionX+' :   '+positionY);
  //防止左溢出
  if(newx < 0 )
    newx = 1;
  //防止顶溢出
  if(newy < 0 )
    newy =  1;
  //防止右溢出
  if(newx  >$("#candiv").width() - is.width() )
    newx = $("#candiv").width() - is.width()
  //防止底溢出
  if (newy >$("#candiv").height() - is.height() )
    newy = $("#candiv").height() - is.height();
  is.attr('class',"mainviews");
  is.css({'left':newx,'top':newy});

};//绘图区drop域结束

// Ie 浏览器判定
function isIE(){
  if(!!window.ActiveXObject || "ActiveXObject" in window){
    return true;
  }else{
    return false;
  }
}
//IE11 浏览器判定
function isIE11(){
  if((/Trident\/7\./).test(navigator.userAgent)){
    return true;
  }else{
    return false;
  }
}
// 兼容火狐的默认事件
const defaultdrop =function (evt) {
  evt= window.event||evt;
  evt.stopPropagation();
  evt.preventDefault();

}

/******按钮功能区********/

//选择画面数量
function draw() {
  var vnum = $('.viwelist option:selected').val();
  g_views=vnum;
  $('#candiv div').remove();
  idnum = 1 ;
  paint.moveTo(0, 0);
  paint.clearRect(0,0,cx,cy);
  initview();
  drawline_x(vnum);
  drawline_y(vnum);
  drawrect();
  drawchange(vnum);
}

