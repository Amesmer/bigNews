
//从浏览器的地址栏中获取查询参数
function getUrlParams(name) {
    //substr 从1下标截取到最后
    //split    
    //location.search获取地址栏参数 ?id=12313412
    var parmsAry = location.search.substr(1).split('&');
    for (var i = 0; i < parmsAry.length; i++) {
        temp = parmsAry[i].split('=')
        if (temp[0] == name) {
            return temp[1];
        };
    }
    return -1;
}


   //时间格式拼接
   function formateDate(date) {
    date = new Date(date);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }