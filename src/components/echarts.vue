<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="myChart" :style="{width: '390px', height: '250px'}"></div>
    <input type="button" @click="changeVue('echarts2')" value="按钮echarts2">
    <input type="button" @click="changeVue('echarts3')" value="按钮echarts3">
    <input type="button" @click="changeVue('echarts4')" value="按钮echarts4">
    <input type="button" @click="changeVue('canvas1')" value="canvas1圆环">
    <input type="button" @click="changeVue('hchartspie')" value="Hcharts的饼状图练习">
    <input type="button" @click="changeVue('echarts5')" value="南通的饼状图练习">
    <input type="button" @click="changeVue('echarts6')" value="南通的仪表练习">
  </div>
</template>

<script>
export default {
  name: 'echarts',
  data () {
    return {
      msg: 'echarts的柱状图练习',
      dataX:['燃气', '供水', '消防', '技防', '物防'],
      dataY1:[192,162,162,248,140],
      dataY2:[168,157,162,239,140]
    }
  },
  methods:{
    drawLine(){
    // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))//获取容器元素
      let options = {
        title: {
          text: '单位(条)',
          right:'right',
          top:2,
          right:60,
          textStyle:{
              color:'#d6ebff',
              fontStyle:'normal',
              fontWeight:'normal',
              fontFamily:'微软雅黑',
              fontSize:14
          }
        },
        color:['#00CDFE','#3DDD7D','#DEB545','#FD6001'], //设置legend中data对应的颜色
        legend: {//图例
          data: ['总数量','正常运行数'],//与series的name对应,右上角显示的名称
          right: '10%',//图例的位置，可以用像素，可以用百分比，也可以用center，right等
          top: '5%',//图例的位置orient: 'vertical',  //垂直显示
          // y: 'center',    //延Y轴居中
          // orient: 'vertical', //垂直方向显示
          // x:right,
          itemWidth: 10,//图例图标的宽
          itemHeight: 10,//图例图标的高
          textStyle: {
            color: '#878787',//值的具体的颜色
          }
        },
        xAxis: {//x轴
          type: 'category',
          data: this.dataX,//x轴的数据,可以直接拿到data中声明的数据
          splitLine: {show: false},//去除网格分割线
          // splitArea: {show: true},//保留网格区域

          axisLine: {//坐标线
            lineStyle: {
              type: 'solid', //dashed 虚线
              color: '#d8d8d8',//轴线的颜色
              width:'1'//坐标线的宽度
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
          name: '(台)          ',//轴的名字，默认位置在y轴上方显示,加空格可以控制距离
          max: 300,//最大刻度
          type: 'value',
           nameGap:15,//控制name中的文字上下的距离
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
            data: this.dataY1,//数据
            type: 'bar',//柱状图
            barGap:0.5, //条之间的距离
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,[  //颜色渐变
                  {offset: 0, color: 'rgba(197,140,74,1)'},
                  {offset: 1, color: 'rgba(193,167,86,1)'}
                ]),
                // color: '#c58d4b',//设置柱子颜色
                // borderWidth: 6, //给柱子加边框
                // borderColor: '#59519f',
                // color:(params)=>{ //多个柱子不同颜色渐变
                //   var colorList = [
                //         ['#F49D41','#FE4705'], //右边的是下面颜色
                //         ['#C3A959','#C58441'],
                //         ['#03C8DD','#0A69AC'],
                //         ['#2CC19B','#02A972'],
                //         ['#2E8ADC','#3051BE'],
                //         ['#9973DD','#0F44B1']
                //   ];
                //   var index=params.dataIndex;
                //   if(params.dataIndex >= colorList.length){
                //       index=params.dataIndex-colorList.length;
                //   }
                //   return new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,[
                //           {offset: 0, color: colorList[index][0]},
                //           {offset: 1, color: colorList[index][1]}
                //       ])
                // },
                label: {
                  show: false,//柱子上显示值
                  position: 'top',//值在柱子上方显示
                  textStyle: {
                    color: '#FD6B71'//值得颜色
                  }
                }
              }
            },
            barWidth: 7//设置柱子宽度，单位为px
          },
          {
            name: '正常运行数',//每组数据的名字，与图例对应
            data: this.dataY2,//数据
            type: 'bar',//柱状图
            itemStyle: {
              normal: {
                color: '#0883bd',//设置柱子颜色
              }
            },
            barWidth: 7//设置柱子宽度，单位为px

          }
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
