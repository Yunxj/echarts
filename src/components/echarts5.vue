<template>
  <div class="echarts5">
    <h1>{{ msg }}</h1>
    <div id="dashBoard" style="width: 430px;height: 180px"></div>    
  </div>
</template>

<script>
export default {
  name: "echarts5",
  data() {
    return {
      chart: null,
      msg:'第二个环状图',
    };
  },
  mounted() {
    this.Board()
  },
  methods: {
    // chart
    Board () {
      let bord = this.$echarts.init(document.getElementById('dashBoard'))
      if (!bord) return
      let bordOption = {
        cursor: 'pointer',
        xAxis: {
          show: false,
          splitLine: {
            lineStyle: {
              show: true,
              type: 'dashed'
            }
          },
        },
        series: [
          {
            // name: '',
            type: 'pie',
            radius: ['55%', '70%'],
            avoidLabelOverlap: false,
            startAngle: 180,
            color: [
              {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: '#1C1DE3'
                  }, {
                    offset: 0.25,
                    color: '#03FCF2'
                  }, {
                    offset: 0.5,
                    color: '#50CB63'
                  }, {
                    offset: 0.75,
                    color: '#FFBB02'
                  }, {
                    offset: 1,
                    color: '#BE0019'
                  }
                ],
                globalCoord: false
              }, 'none'],
            hoverAnimation: false,
            legendHoverLink: false,

            label: {
              normal: {
                show: false,
                position: 'center'
              },
              // emphasis: {
              //   show: true,
              //   textStyle: {
              //     fontSize: '30',
              //     fontWeight: 'bold'
              //   }
              // }
            },
                          pointer: {				// 仪表盘指针。
                show: true,				// 是否显示指针,默认 true。
                length: "70%",			// 指针长度，可以是绝对数值，也可以是相对于半径的百分比,默认 80%。
                width: 5,				// 指针宽度,默认 8。
              },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 100,
                name: '1'
              }, {
                value: 100,
                name: '2'
              }
            ]
          },
          {
            name: '',
            type: 'gauge',
            radius: ['55%', '70%'],
            avoidLabelOverlap: false,
            startAngle: 0,
            hoverAnimation: false,
            legendHoverLink: false,
            clockwise: false,
            itemStyle: {
              // normal: {
              //   borderColor: '#000',
              //   borderWidth: 5
              // },
              // emphasis: {
              //   borderColor: 'transparent',
              //   borderWidth: 20
              // }
            },
            z: 10,
            label: {
              normal: {
                show: false,
                position: 'center'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            // data: [
            //   {
            //     value: (1) * 262 / 360,
            //     name: ''
            //   }, {
            //     value: 1,
            //     name: ''
            //   }, {
            //     value: 100 - (10) * 262 / 360,
            //     name: ''
            //   }
            // ]
          }
        ]
      }
      bord.setOption(bordOption, true)
    }
  }
}
</script>

<style lang="less">
    h1 {
        text-align: center;
        color: pink;
        cursor: pointer;
    }

</style>
