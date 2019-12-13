$.ajax({
	type: 'get',
	url: 'http://localhost:8000/admin/comment_search',
	success: function (response) {
        // console.log(response)
        var html=template("commentTpl",response);
        $("#tbodyBox").html(html);
        var pages=template("pageTpl",response);
        $("#pageBox").html(pages)
	}
});


$("#tbodyBox").on("click",".anniu",function(){
    var comfirm=confirm("您真的要执行修改操作吗");
    var id= $(this).attr("data-id");
    var data_status= $(this).attr("data_status");
    if(comfirm){
        if(data_status == 0){
                $.ajax({
                    type: 'post',
                    url: 'http://localhost:8000/admin/comment_pass',
                    success: function () {
                        location.reload();
                    }
                })
            }else{
                $.ajax({
                    type: 'post',
                    url: 'http://localhost:8000/admin/comment_reject',
                    success: function () {
                        location.reload();
                    }
                })
            } 
    }
});


$("#tbodyBox").on("click",".delete",function(){
    if(confirm("您真的要执行删除操作吗")){
       var id= $(this).attr("data-id");
       $.ajax({
        type: 'post',
        url: 'http://localhost:8000/admin/comment_delete',
        success: function () {
            location.reload();
        }
    })
    }
})