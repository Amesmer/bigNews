// 封装函数，实现分页效果
function AjaxPaginator(obj) {
    // 发送请求，获取文章列表数据
    $.ajax({
        type: 'get',
        url: '/admin/search',
        success: function (data) {  
            $.ajax({
                type: 'get',
                url: '/admin/search',               
                success: function (response) {
                    // 拼接文章列表字符串
                    var html = template('listTpl', {
                        data: response.data
                    });

                    // 渲染页面
                    $('#listBox').html(html);

                }
            });    
            // 设置分页控件
            var options = {
                currentPage: data.page, //当前页
                totalPages: data.totalPage, //总页数
                numberOfPages: 5, //设置控件显示的页码数
                bootstrapMajorVersion: 3,//如果是bootstrap3版本需要加此标识，并且设置包含分页内容的DOM元素为UL,如果是bootstrap2版本，则DOM包含元素是DIV
                useBootstrapTooltip: false,//是否显示tip提示框
                itemTexts: function (type, page, current) {
                    switch (type) {
                        case "first":
                            return "首页";
                        case "prev":
                            return "上一页";
                        case "next":
                            return "下一页";
                        case "last":
                            return "尾页";
                        case "page":
                            return page;
                    }
                   
                },
                // 封装函数，实现分页的点击事件
                onPageClicked: function (event, originalEvent, type, page) {
                    //给每个页眉绑定一个事件，其实就是ajax请求
                    $.ajax({
                        type: 'get',
                        url: '/admin/search',
                        data:{
                            page:page
                        },
                        success: function (response) {
                            // 拼接文章列表字符串
                            var html = template('listTpl', {
                                data: response.data
                            });

                            // 重新渲染页面
                            $('#listBox').html(html);

                        }
                    });
                },
               
            }
            obj.bootstrapPaginator(options);
        }
    })
}
// 调用函数
AjaxPaginator($('#pageBox'));



// 通过事件委托，为删除按钮注册点击事件
$('#listBox').on('click', '.delete', function () {
    // 获取当前点击的id
    var id = $(this).attr('data-id');
    // console.log(id);
    // 发送请求
    $.ajax({
        type: 'get',
        url: '/admin/article_delete',
        data: {
            id: id
        },
        success: function (response) {
            // console.log(response);
            // 重载页面
            location.reload();

        }
    })
})