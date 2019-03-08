<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="container" :style="{width: '390px', height: '250px'}"></div>
  </div>
</template>
<script>
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';
HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
export default {
  name: 'hchartspie',
  data () {
    return {
      msg: 'Hcharts的饼状图练习',
      statistics:{unfinished:2, processing:6, completed:20},
    }
  },
  methods:{
    innitHcharts() {
        Highcharts.chart('container', {
            title: {
                text: null
            },
            credits:{
                enabled: false // 禁用版权信息
            },
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0,
                },
                backgroundColor:'transparent',
                plotBackgroundColor:'transparent',
            },
            plotOptions: {
                column: {
                    depth: 25,
                    groupZPadding: 4, // z 轴间距，用于 3D 图形中的多个数据列间距
                },
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 65,
                    dataLabels: {
                        enabled: true,
                        color:'#fff',
                        style: {fontSize:'20px'},
                        connectorColor:'#00CDFE',
                        connectorWidth: 2,
                    },
                },
            },
            series: [{
                colors: ['#0094C7', '#C7B251', '#27CCBB'],
                type: 'pie',
                style: {fontSize:'30px'},
                // name: '总数',
                data: [
                    ['未完成  '+this.statistics.unfinished,this.statistics.unfinished],
                    ['进行中  '+this.statistics.processing,this.statistics.processing],
                    {
                        name: '已完成  '+this.statistics.completed,
                        y: this.statistics.completed,
                        sliced: true,
                        selected: true,
                        fontSize:'30px'
                    },
                ]
            }]
        })
    },

  },
  mounted() {
    this.innitHcharts() 
  }
}
</script>

<style lang="less">
h1 {
  text-align: center;
  background-color: transparent ;
}
</style>
