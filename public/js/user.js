// alert('ok')

// 修改用户信息
$('#exampleInputFile').on('change',function(){
    // alert('ok')
    var file = this.files[0];
    var imgURL = URL.createObjectURL(file);
    $('#preview').prop('src',imgURL);
    $('#hiddenImg').val(imgURL); 
});
$('#userForm').on('submit',function(){
    // alert('ok')
    var formData = new FormData(this);
    $.ajax({
        type:'post',
        url:'/admin/userinfo_edit',
        data: formData,
        processData: false,
        contentType: false,
        success:function(rep){
            console.log(rep);
            // location.reload();
            location.reload();
            // alert('修改成功');
            // location.href = 'login.html'
            
        },
        error:function(error){
            console.log(error);
            alert('修改失败')
        
            
        }
    })
    return false;
});
// 获取用户信息
$.ajax({
    typr:'get',
    url:'/admin/userinfo_get',
    success:function(rep){
        console.log(rep);
        // location.reload();
        // var html = template('modifyTpl',rep);
        // console.log(html);
        // $('#modifyBox').html(html)
        $('.a1').val((rep.data.username));
        $('.a2').val((rep.data.nickname));
        $('.a3').val((rep.data.email));
        // $('#')
        $('.a4').val((rep.data.user_pic));
        $('.a4').val((rep.data.password));



    }
})

