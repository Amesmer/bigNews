
//新增分类
//为表单注册submit事件
$('#slugForm').on('submit',function(){
    var formData = $(this).serialize();
    $.ajax({
        type:'post',
        url:'http://localhost:8000/admin/category_add',
        data:formData,
        success:function(response){
            alert('文字信息增加成功')
            location.reload();
            
        },
        error:function(response){
            alert('文字信息增加失败')
        }
    })
    
    return false;
})

//分类列表展示
$.ajax({
    type:'get',
    url:'http://localhost:8000/admin/category_search',
    success:function(response){
        console.log(response);
        
        //准备模板
        //拼接字符串
       var html = template('slugTpl',response)
       $('#slugBox').html(html)

        
    }

})



//分类信息的修改
//1.给编辑按钮注册点击事件--利用事件委托
$('#slugBox').on('click','.edit',function(){
    var id = $(this).attr('data-id');
    var name = $(this).parent().siblings('.myname').attr('data-name')
    var slug = $(this).parent().siblings('.myslug').attr('data-slug')
    
    $.ajax({
        type:'post',
        url:'http://localhost:8000/admin/category_edit',
       data:{
            id:id,
            name:name,
            slug:slug
       },
        success:function(response){
           // console.log(response);
           //准备模板

           //字符串拼接
            var html = template('changeTpl',response)
            console.log(html);
           //渲染数据
            $('#changeBox').html(html)
            
        }

    })
    
})



//分类信息的删除
//给删除按钮注册一个点击事件--事件委托
$('#slugBox').on('click','.delete',function(){
    if(confirm('您真的要删除吗?')){
        var id = $(this).attr('data-id');
        $.ajax({
            type:'post',
            url:'http://localhost:8000/admin/category_delete',
            data:{id:id},
            success:function(response){
                location.reload();
            },
            error:function(){
                alert('删除失败');
            }
        })
    }
})






