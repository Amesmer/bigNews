//获取文章分类数据
$.ajax({
    type:'get',
    url:'http://localhost:8000/admin/category_search',
    success:function(response){
        console.log(response)
        var html=template("articleTpl",response);
        $("#formBox").html(html)
    }
});


//为表单注册submit提交事件
$("#articleBox").on("submit",function(){
    // 获取管理员在表单中输入的内容
    var formData=$(this).serialize();
    $.ajax({
        type:'post',
        url:'http://localhost:8000/admin/article_publish',
        data:formData,
        success:function(){
            location.href="/admin/article_list.html"
        }
    });
    return false
});
