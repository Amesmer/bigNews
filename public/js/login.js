//登录按钮点击事件
$('#loginform').on('click', '#submit', function () {
    var usernam = $('#username').val();
    var pwd = $('#pwd').val();
    //判断邮箱 密码是否输入
    if (usernam.trim().length == 0) {
        alert('请输入用户名')
        return;
    }
    if (pwd.trim().length == 0) {
        alert('请输入密码')
        return;
    }
    //登录
    $.ajax({
        type: 'post',
        url: 'http://localhost:8000/admin/login',
        data: {
            username: usernam,
            password: pwd
        },
        success: function (response) {
            if (response.msg ==="登录成功") {
                location.href = 'http://localhost:8000/admin/index.html'
            } else {
                alert(response.msg)
            }
        },
        error: function () {
            alert(response.msg)
        }
    })

    return false;
})
//回车登录
$('body').on('keyup', function (e) {
    if (e.keyCode == '13') {
        $('#submit').click();
    }
})