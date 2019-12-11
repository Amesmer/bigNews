// 发送请求，获取所有文章
$.ajax({
    type:'get',
    url:'http://localhost:8000/admin/search',
    success:function(response){
        console.log(response);
        // 拼接字符串
        var html=template('listTpl',{
            data:response
        });

        
    }
})