$(function(){
   var currentPage=1;
   var pageSize=5;
   $.ajax({
       type:"get",
       url:"/user/queryUser",
       data:{
           page:currentPage,
           pageSize:pageSize
       },
       success:function(data){
           console.log(data);
         var html=template("tpl",data);
         $("tbody").html(html);

       }
   })

});