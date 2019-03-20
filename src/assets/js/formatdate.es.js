function formatDate(date,fmt){ 
  //author: meizz
  var zArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  var o = {
      "M+": date.getMonth() + 1,                 //月份
      "d+": date.getDate(),                    //日
      "h+": date.getHours(),                   //小时
      "m+": date.getMinutes(),                 //分
      "s+": date.getSeconds(),                 //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds(),             //毫秒
      "z": zArr[date.getDay()]                       //周
  };
  if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
function toDotNetString () {
  var str = '\/Date(' + this.getTime() + '+0800)\/';
  return str;
}
function convertDotNetString2Date (dateStr) {
  var T, tz, off;
  var dobj = dateStr.match(/(\d+)|([+-])|(\d{4})/g);
  T = parseInt(dobj[0]);
  tz = dobj[1];
  off = dobj[2];
  if (!!off) {
    off = parseInt(off.substring(0, 2), 10) * 3600000 + parseInt(off.substring(2), 10) * 600000;
    if (tz == "-") off *= -1;
  } else {
    off = 0;
  }
  return new Date(T);
}
function convertDbDate(date,fmt){
  if(!date) return ''
  let time = new Date(date)
  return formatDate(time, fmt)
}
// 获取当前日期的上个月
function getPreMonth() {
 var date = formatDate(new Date(), 'yyyy-MM-dd')
            var arr = date.split('-');  
            var year = arr[0]; //获取当前日期的年份  
            var month = arr[1]; //获取当前日期的月份  
            var day = arr[2]; //获取当前日期的日  
            var days = new Date(year, month, 0);  
            days = days.getDate(); //获取当前日期中月的天数  
            var year2 = year;  
              var month2 = parseInt(month) - 1;  
              if (month2 == 0) {  
                  year2 = parseInt(year2) - 1;  
                  month2 = 12;  
              }  
              var day2 = day;  
              var days2 = new Date(year2, month2, 0);  
              days2 = days2.getDate();  
              if (day2 > days2) {  
                  day2 = days2;  
              }  
              if (month2 < 10) {  
                  month2 = '0' + month2;  
              }  
              var t2 = year2 + '-' + month2 + '-' + day2;  
              return t2;  
  }
function getLastWeek(day) {
  let curDate = new Date();
  return formatDate(new Date(curDate.getTime() - 24*60*60*1000*day), 'yyyy-MM-dd 00:00:00')
}
export default{formatDate,convertDbDate,toDotNetString,convertDotNetString2Date,getPreMonth,getLastWeek}
