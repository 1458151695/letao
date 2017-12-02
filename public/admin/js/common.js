//关闭进度环
// NProgress.configure({
//   showSpinner: false
// });

// $(document).ajaxStart(function () {
//   //开始进度条
//   NProgress.start();
// });

// $(document).ajaxStop(function () {
//   //结束进度条
//   setTimeout(function () {
//     NProgress.done();
//   }, 500);
// });


//二级菜单显示与隐藏效果
$(".child").prev().on("click", function () {
  $(this).next().slideToggle();
});


//侧边栏显示与隐藏效果
$(".icon_menu").on("click", function () {
  $(".lt-aside").toggleClass("now");
  
  $(".lt-main").toggleClass("now");
});

$(".icon_logout").on("click",function(){
  $("#logoutModal").modal("show");
  $(".btn-logout").off().on("clicl",function(){
    $.ajax({
      type:"get",
      url:"/employee/employeeLogout",
      success:function(data){
          if(data.success){
             location.href="login.html";
          }
      }
    });
  });
});