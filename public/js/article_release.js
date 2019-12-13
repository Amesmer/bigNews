//获取文章分类数据
$.ajax({
    type:'get',
    url:'http://localhost:8000/admin/category_search',
    success:function(response){
        // console.log(response)
        var html=template("articleTpl",response);
        $("#formBox").html(html)
    }
});

//为表单注册提交事件   已发布
$("#articleBox").on("click",'#issue',function(){
    var formData = new FormData();
	// 将选择到的文件追加到formData对象中
    formData.append('cover', $("#exampleInputFile")[0].files[0]);
    formData.append('title', $("#inputEmail3").val());
    formData.append('type',  $("#formBox").val());
    formData.append('date', $("#dateinput").val());
    formData.append('content',tinyMCE.get('rich_content').getContent().slice(3,-4));
    formData.append('status',"已发布");

    // 获取管理员在表单中输入的
    $.ajax({
        type:'post',
        url:'http://localhost:8000/admin/article_publish',
        data:formData,
        processData:false,
        contentType:false,
        success:function(){
            location.href="/admin/article_list.html"
        }
    });
    return false
});


//为表单注册提交事件  草稿
$("#articleBox").on("click",'#draft',function(){
    var formData = new FormData();

    // 将选择到的文件追加到formData对象中
    // console.log( tinyMCE.get('rich_content').getContent().slice(3,-4));
    formData.append('cover', $("#exampleInputFile")[0].files[0]);
    formData.append('title', $("#inputEmail3").val());
    formData.append('type',  $("#formBox").val());
    formData.append('date', $("#dateinput").val());
    formData.append('content',tinyMCE.get('rich_content').getContent().slice(3,-4));
    formData.append('status',"草稿");

    // 获取管理员在表单中输入的
    $.ajax({
        type:'post',
        url:'http://localhost:8000/admin/article_publish',
        data:formData,
        processData:false,
        contentType:false,
        success:function(){
            location.href="/admin/article_list.html"
        }
    });
    return false
});