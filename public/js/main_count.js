//获取总文章数  日增数量
  $.ajax({
    type: 'get',
    url: 'http://localhost:8000/admin/article_count',
    success: function (response) {
        // console.log(response);
     if(response.code==200){
        $('#articles-total').html(response.data.all_count);
        $('#articles-daily').html(response.data.day_count)
     }
    }
})


//评论数量
$.ajax({
    type: 'get',
    url: 'http://localhost:8000/admin/comment_count',
    success: function (response) {
        // console.log(response);
     if(response.code==200){
        $('#comments-total').html(response.data.all_count);
        $('#comments-daily').html(response.data.day_count)
     }
    }
})

//月新增文件数量
$.ajax({
    type: 'get',
    url: 'http://localhost:8000/admin/month_article_count',
    success: function (response) {
        // console.log(response);
     if(response.code==200){
        $('#comments-total').html(response.data.all_count);
        $('#comments-daily').html(response.data.day_count)
     }
    }
})
