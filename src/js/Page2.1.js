/*
* @Author: feng
* @Date:   2018-09-26 12:21:34
* @Last Modified by:   feng
* @Last Modified time: 2018-09-26 16:00:11
*/
//page 2 button func....
var postData={};
function clearview() {
  $("#candiv div").remove();
}

function viewset() {
  postData.delete;
  if (g_views ==0)
  {
    alert("空场景");
    return false ;
  }
  //自动单元最大化....
  $.each($('#candiv').children('div'),function () {
    $(this).find(".topview_max button").click();
  });

  //收集场景布置数据
 console.log(postData);

    //第一步：定义json格式数据

  /**ajax的type,url,dataType,contentType,data属性*/
  $.ajax({
    async : true,
    cache : false,
    type : 'POST',
    url : './H5/src/text.php',
    dataType : "json",
    contentType : 'application/json', //第二步：定义格式
    data :{'view': postData }, //第二步；把json转为String传递给后台
    error : function() {
      alert('请求失败 ');
    },
    success : function(data) {
      alert(data);
    }
  });

}
