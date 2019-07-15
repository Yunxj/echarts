<!--水波纹组件-->
<template>
  <div ref="water" class="water">
    <div class="cenmid waterSC">
      <canvas ref="canva" class="waterCan"></canvas>
      <input :style="{display:'none'}" type="range" name="range" min="0" max="100" step="1">
    </div>
  </div>
</template>
<script>
export default {
  name: "waterDraw",
  props: {
    color: { type: null, default: "#00cdfe" },  //水波颜色
    bg: { type: null, default: "waterbg1" },   //水波的背景图
    total: { type: null },     //水波的总值（用于计算百分比）
    finished: { type: null }    //已经完成的值（用于计算白粉比）
  },
  data () {
    return {
      ow: "",
      oH: "",
      radius: "",
      cRadius: "",
      nowdata: 0,
      data: "",
      nowrange: "",
      range: "",
      waveupsp: 0.006,
      sp: 0,
      axisLength: "",
      unit: "",
      xoffset: "",
      value: ""
    }
  },
  watch: {
    finished () {
      let oRange = document.getElementsByName("range")[0]
      oRange.value = parseInt((this.finished / this.total) * 100)
      this.data = ~~oRange.value / 100
      this.render()
    }
  },
  methods: {
    drawSine () {
      let canvas = this.$refs.canva
      if (!canvas) return
      let ctx = canvas.getContext("2d")
      ctx.beginPath()
      ctx.save()
      let Stack = [] // 记录起始点和终点坐标
      for (
        let i = this.xoffset;
        i <= this.xoffset + this.axisLength;
        i += 20 / this.axisLength
      ) {
        let x = this.sp + (this.xoffset + i) / this.unit

        let y = Math.sin(x) * this.nowrange
        let dx = i
        let dy =
          2 * this.cRadius * (1 - this.nowdata) +
          (this.radius - this.cRadius) -
          this.unit * y
        ctx.lineTo(dx, dy)
        Stack.push([dx, dy])
      }
      // 获取初始点和结束点
      let startP = Stack[0]
      let endP = Stack[Stack.length - 1]
      ctx.lineTo(this.xoffset + this.axisLength, this.oW)
      ctx.lineTo(this.xoffset, this.oW)
      ctx.lineTo(startP[0], startP[1])
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.restore()
    },
    render () {
      let canvas = this.$refs.canva
      if (!canvas) return
      let ctx = canvas.getContext("2d")
      let oRange = document.getElementsByName("range")[0]
      ctx.clearRect(0, 0, this.oW, this.oH)
      // 控制波幅
      oRange.addEventListener(
        "change",
        () => {
          this.data = ~~oRange.value / 100
        },
        0
      )
      if (this.data >= 0.85) {
        if (this.nowrange > this.range / 4) {
          let t = this.range * 0.01
          this.nowrange -= t
        }
      } else if (this.data <= 0.1) {
        if (this.nowrange < this.range * 1.5) {
          let t = this.range * 0.01
          this.nowrange += t
        }
      } else {
        if (this.nowrange <= this.range) {
          let t = this.range * 0.01
          this.nowrange += t
        }
        if (this.nowrange >= this.range) {
          let t = this.range * 0.01
          this.nowrange -= t
        }
      }
      if (this.data - this.nowdata > 0) {
        this.nowdata += this.waveupsp
      }
      if (this.data - this.nowdata < 0) {
        this.nowdata -= this.waveupsp
      }
      this.sp += 0.07
      // 开始水波动画
      this.drawSine()
      requestAnimationFrame(this.render)
    }
  },
  mounted () {
      console.log(this.total,this.finished)
    let canvas = this.$refs.canva
    if (!canvas) return
    this.$refs.water.classList.add(this.bg)
    let ctx = canvas.getContext("2d")
    // let oRange = document.getElementsByName("range")[0]
    // oRange.value= parseInt((this.finished /this.total)*100 )
    this.oW = canvas.width = 250
    this.oH = canvas.height = 250
    // 线宽
    let lineWidth = 2
    // 大半径
    this.radius = this.oW / 2
    this.cRadius = this.radius - 10 * lineWidth
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    // 水波动画初始参数
    this.axisLength = 2 * this.radius - 16 * lineWidth // Sin 图形长度
    this.unit = this.axisLength / 9 // 波浪宽
    this.range = 0.4
    this.nowrange = this.range
    this.xoffset = 8 * lineWidth // x 轴偏移量
    // this.data = ~~(oRange.value) / 100   // 数据量
    // 圆动画初始参数
    let arcStack = [] // 圆栈
    let bR = this.radius - 8 * lineWidth
    let soffset = -(Math.PI / 2) // 圆动画起始位置
    let circleLock = true // 起始动画锁
    // 获取圆动画轨迹点集
    for (let i = soffset; i < soffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
      arcStack.push([
        this.radius + bR * Math.cos(i),
        this.radius + bR * Math.sin(i)
      ])
    }
    // 圆起始点 
    let cStartPoint = arcStack.shift()
    ctx.moveTo(cStartPoint[0], cStartPoint[1])  
  }
}
</script>
<style lang="less" scoped>
.waterCan {
  width: 120px;
  height: 120px;
  position: absolute;
  top: 10px;
}
.waterSC {
  width: 12px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
}
.water {
  width: 124px;
  height: 124px;
  margin: 0 0 0 10%;
  position: relative;
}
.waterbg1 {
  background: url("../../assets/img/water1.png") no-repeat center center;
  background-size: 124px 124px;
}
.waterbg2 {
  background: url("../../assets/img/water2.png") no-repeat center center;
  background-size: 124px 124px;
}
.unfinish {
  position: absolute;
  top: -11px;
  left: 108px;
  white-space: nowrap;
}
.finish {
  position: absolute;
  top: 62px;
  left: 153px;
  white-space: nowrap;
}
</style>
