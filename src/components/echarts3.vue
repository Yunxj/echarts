<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="myChart3" :style="{width: '390px', height: '250px'}"></div>
  </div>
</template>

<script>
export default {
  name: 'echarts3',
  data () {
    return {
      msg: 'echarts的折线图练习',
      dataPeopleX:[0, 2, 4, 6, 8, 10,12,14,16,18,20,22,24],
      dataPeopleY:[5192,6162,7162,5248,6140,11540,12140,14140,13740,12140,11140,10140,9420],
    }
  },
  methods:{
    drawLine(){
    // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart3'))//获取容器元素
      let options = {
        legend: {//图例
          data: [],//与series的name对应,右上角显示的名称
          right: '10%',//图例的位置，可以用像素，可以用百分比，也可以用center，right等
          top: '5%',//图例的位置orient: 'vertical',  //垂直显示
          // y: 'center',    //延Y轴居中
          // orient: 'vertical', //垂直方向显示
          // x:right,
          textStyle: {
            color: '#878787',//值的具体的颜色
          }
        },
        xAxis: {//x轴
          name:'(时)',
          type: 'category',
          data: this.dataPeopleX,//x轴的数据,可以直接拿到data中声明的数据
          splitLine: {show: false},//去除网格分割线
          // splitArea: {show: true},//保留网格区域
          nameGap:20,//控制name中的文字上下的距离
          nameLocation: 'start', //也是控制name
          boundaryGap: false,
          axisLine: {//坐标线
            lineStyle: {
              type: 'solid', //dashed 虚线
              color: '#d8d8d8',//轴线的颜色
              width:'1',//坐标线的宽度
            }
          },
          axisTick: {//刻度
            show: false//不显示刻度线
          },
          axisLabel: {
            textStyle: {
              color: '#878787',//坐标值的具体的颜色
            }
          },
          splitLine: {
            show: false//去掉分割线
          },
          axisLabel:{interval: 0} //x轴上的文字显示完全

        },
        grid:{
          x:62, //坐标轴左边与边框的距离
          y:45,//坐标轴顶端与边框的距离
          x2:67,//坐标轴右边与边框的距离
          y2:44,//坐标轴底端与边框的距离

        },
        backgroundColor: '#fff',//图得背景色
        yAxis: {
          name: '(人)          ',//轴的名字，默认位置在y轴上方显示,加空格可以控制距离
          max: 20000,//最大刻度
          type: 'value',
          //  nameGap:15,//控制name中的文字上下的距离
          // nameLocation: 'start', //也是控制name
          axisLine: {//坐标轴线
            show: false
          },
          axisTick: {//刻度
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#878787',//坐标值得具体的颜色
            }
          },
          minInterval: 5,//标值的最小间隔
          splitLine: { //Y轴的分割线颜色
            lineStyle: {
              type: 'solid', //dashed
              color: ['#f6f6f6'],//分割线的颜色
            }
          },
        },
        series: [
          {
            name: '总数量',//每组数据的名字，与图例对应
            data: this.dataPeopleY,//数据
            type: 'line',//折线图
            symbolSize: 0, //折点的大小
            areaStyle: {
              normal: {
                color:'#468ac7' //折线下面的背景颜色
              }
            },
            itemStyle: {
              normal: {
                // color:'#000', //折点的颜色
                lineStyle: {
                  color:'#059fc9' //折线的颜色
                }
              }
              
            },
          },

        ]
      }
      myChart.setOption(options)//设置option 
    },
    changeVue(path) {
      this.$router.push({path})
    }

  },
  mounted() {
    this.drawLine() 
  }
}
</script>

<style lang="less">
h1 {
  text-align: center;
  background-color: transparent ;
}
</style>
