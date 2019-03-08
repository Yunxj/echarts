export default{
	strTempl(str, coverStr, format){
		return str.replace(RegExp(coverStr, 'g'), function(word){
			return format.replace('><', '>' + word + '<')
		})
	},
	dateFormat(time, format){    //把时间戳转换成正常时间
		let timeStr= new Date(time*1000)
		let date = {
			"M+": timeStr.getMonth() + 1,
			"d+": timeStr.getDate(),
			"h+": timeStr.getHours(),
			"m+": timeStr.getMinutes(),
			"s+": timeStr.getSeconds(),
			"q+": Math.floor((timeStr.getMonth() + 3) / 3),
			"S+": timeStr.getMilliseconds()
		}
		if (/(y+)/i.test(format)) {
			format = format.replace(RegExp.$1, (timeStr.getFullYear() + '').substr(4 - RegExp.$1.length))
		}
		for (var k in date) {
			if (new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length))
			}
		}
	   return format
	},
    resize(dom){
        let ratioX = window.innerWidth / 1920
            ,ratioY = window.innerHeight / 1080
            ,con = dom && document.querySelector(dom)
            ,style = con && con.style
        if(style){
            style.transform = "scale(" + ratioX + "," + ratioY + ")"
            style.transformOrigin = "left top"
            style.width = "1920px"
            style.height = '1080px'
        }
	},
	maxCount(arr) { //获取当前的echarts的Y轴总量的上限
		let max = Math.max.apply(null,arr);  //最大值
		let maxfloat = Math.ceil(max / (Math.pow(10,max.toString().length-1))) //向上取整
		let numx = maxfloat*(Math.pow(10,max.toString().length-1))
		return numx
	},
}