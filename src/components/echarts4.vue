<template>
  <div class="echarts4">
    <h1>{{ msg }}</h1>
    <div id="myChart4" :style="{width: '430px', height: '180px'}"></div>    
     <div class="visitor-img">
     <!-- <div  class='canvas '><circleDraw  color = '#00cdfe' :value = 'visited.registed' :totalPoint = 'visited.total'></circleDraw></div> -->
        <div  class="canvas">
            <circleDraw  
            colordeno="#f3af4b"
            color="red" 
            start="2.5" 
            :value="property.all"
            :totalPoint="property.alltotal" 
            isdenominator="true" 
            radius="20" 
            lineWidth="4" 
            img="property2">
            </circleDraw>
        </div>
            <!-- colordeno="#f3af4b"  -->
    </div>
  </div>
</template>

<script>
import circleDraw from '@/components/circleDraw'
export default {
  name: "echarts4",
  components:{circleDraw},
  data() {
    return {
      chart: null,
      msg:'第二个环状图',
      visited:{registed:86,unleave:33,total:100},
      property:{today:3,all:27,alltotal:28,serverTime:'8 : 00-12 : 00'},
      data:[
        {value:25, name:'直达'},
        {value:25, name:'邮件营销'},
        {value:20, name:'搜索引擎'},
        {value:10, name:'营销广告'},
        {value:25, name:'联盟广告'},
      ]
    };
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      let myChart = this.$echarts.init(document.getElementById('myChart4'))//获取容器元素
      let option = {
        // tooltip: {
        //     trigger: 'item',
        //     // formatter: "{a} <br/>{b}: {c} ({d}%)"
        // },
        legend: {
          show:false,
          x: 'right',
            // data:['直达','营销广告','搜索引擎','邮件营销','联盟广告']
        },
        series: [
            {
                type:'pie',
                radius: ['40%', '55%'], //控制圆环的大小
                data: this.data,
                label: {
                    normal: {
                        formatter: ' {b|{b}} \n{hr|}\n {per|{d}%}', //线条引出显示文字的布局
                        rich: {
                            a: {
                                color: '#999',
                                lineHeight: 22,
                                align: 'right',
                                radius: ['60%', '75%']
                            },
                            hr: {
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            b: {
                                // fontSize: 16,
                                lineHeight: 33
                            },
                            per: {
                                color: '#333',
                                // backgroundColor: '#334455',
                                // padding: [2, 4],
                                align: 'right',
                            }
                        }
                    }
                },
            }
        ]
      } 
      myChart.setOption(option)//设置option 
    },
  }
}
</script>

<style lang="less">
    h1 {
        text-align: center;
        color: pink;
    }

    .visitor-img{width:300px;height:400px;position: relative;
      margin: 0 auto;
      circle{width:100%;height:100%;}
    }
</style>
