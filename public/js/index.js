// alert('ok')
// 用户退出
$('#logout').on('click',function(){
    // alert('ok')
    var isConfirm = confirm('您确定要退出吗?');
    if(isConfirm){
        $.ajax({
            type:'post',
            url:'/admin/logout',
            success:data=>{
                location.href = 'login.html'
            },
            error:()=>{
                alert('退出失败')
            }
        })
    }
});