<template>
  <div class="echarts2">
    <h1>{{ msg }}</h1>
    <div id="myChart2" :style="{width: '430px', height: '180px'}"></div>   
    <animated :valueChange="paramsNumber"></animated>
  </div>
</template>
<script>
import animated from '@/components/common/animated'
import circleDraw from '@/components/circleDraw'
export default {
  name: "echarts2",
  data() {
    return {
      chart: null,
      msg:'第一个环状图',
      paramsNumber: 20
    };
  },
  components: {animated},
  mounted() {
    this.initChart()
    this.changeNum(true)
  },
  methods: {
    initChart() {
      let myChart = this.$echarts.init(document.getElementById('myChart2'))//获取容器元素
      // var img = new Image(); //新建对象
      // img.src = '../assets/img/yuanqun.png'
      let option = {
        // backgroundColor: {
        //   type: "pattern",
        //   repeat: "repeat",
        //   image: img // 赋值
        // },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
        },
        series: [
            // {
            //     name:'访问来源',
            //     type:'pie',
            //     selectedMode: 'single',
            //     radius: [0, '30%'],

            //     label: {
            //         normal: {
            //             position: 'inner'
            //         }
            //     },
            //     labelLine: {
            //         normal: {
            //             show: false
            //         }
            //     },
            //     data:[
            //         {value:335, name:'直达', selected:true},
            //         {value:679, name:'营销广告'},
            //         {value:1548, name:'搜索引擎'}
            //     ]
            // },
            {
                name:'访问来源',
                type:'pie',
                radius: ['40%', '55%'],
                label: {
                    normal: {
                        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                        backgroundColor: '#eee',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        // shadowBlur:3,
                        // shadowOffsetX: 2,
                        // shadowOffsetY: 2,
                        // shadowColor: '#999',
                        // padding: [0, 7],
                        rich: {
                            a: {
                                color: '#999',
                                lineHeight: 22,
                                align: 'center'
                            },
                            // abg: {
                            //     backgroundColor: '#333',
                            //     width: '100%',
                            //     align: 'right',
                            //     height: 22,
                            //     borderRadius: [4, 4, 0, 0]
                            // },
                            hr: {
                                borderColor: '#aaa',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            b: {
                                fontSize: 16,
                                lineHeight: 33
                            },
                            per: {
                                color: '#eee',
                                backgroundColor: '#334455',
                                padding: [2, 4],
                                borderRadius: 2
                            }
                        }
                    }
                },
                data:[
                    {value:335, name:'直达'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1048, name:'百度'},
                    {value:251, name:'谷歌'},
                    {value:147, name:'必应'},
                    {value:102, name:'其他'}
                ]
            }
        ]
      } 
      myChart.setOption(option)//设置option 
    },
    changeNum(a) {
        console.log(3333)
      if(a) {
        setInterval(()=>{
          this.paramsNumber =this.paramsNumber + 200

        },5000)
        console.log(this.paramsNumber)
      }
    }
  },
  // computed: {
  //   paramsNumber () {
  //         debugger;

  //     // return this.firstNumber + this.secondNumber
  //     return this.paramsNumber
  //   }
  // }
}
</script>

<style lang="less">
    h1 {
        text-align: center;
        color: pink;
        font-size: 20px;
    }
    div {
      // margin: 0 auto;
    }
</style>
