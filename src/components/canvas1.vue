<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div ref = 'canvas' class="canvasfor">   
        <canvas id="canvas" width="97" height="97" ref="canvasD"></canvas>
    </div>
  </div>
</template>
<script>
export default {
    name:'canvas1',
    data(){
        return{
            msg: 'canvas的圆环',
            lineWidth1:1,
            lineWidth2:6,
            colorSmall:'#0A78C3',
            colorSthick1:'',
            colorSthick2:'',
            process:10
        }   
    },
    methods:{
        drawCircle() {
            let canvas = this.$refs.canvasD
            let ctx = canvas.getContext('2d')
            let width = canvas.width
            let height = canvas.height
            let r = width / 2
            let grd=ctx.createLinearGradient(0,500,500,0)   // 渐变
            //前两个代表起始x，y坐标，后两个代表起点颜色和终点颜色的坐标
            grd.addColorStop(0,"blue")
            grd.addColorStop(1,"green")
            ctx.translate(r/20, r/20)
            ctx.save();
            ctx.lineWidth = this.lineWidth2;
            ctx.strokeStyle = grd;
            ctx.lineCap = 'round';
            let rad = 2 * Math.PI / 100 * this.process;
            let interval = Math.PI / 2;
            ctx.beginPath();
            ctx.arc(-3, -3, r-10, -interval, rad - interval, false);
            ctx.stroke();
            ctx.restore();
        },
        drawText() {
        let canvas = this.$refs.canvasD
        let ctx = canvas.getContext('2d')
        let width = canvas.width
        let height = canvas.height
        let r = width / 2
        ctx.translate(r/20, r/20) //中心位置
        ctx.save();
        ctx.fillStyle = 'red';
        ctx.font = '18px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('%', 10, -3);
        ctx.stroke();
        ctx.restore();

        }
    },
    created(){
    },
    watch:{

    },
    mounted(){ 
        let canvas = this.$refs.canvasD
        let ctx = canvas.getContext('2d')
        let width = canvas.width
        let height = canvas.height
        let r = width / 2
        let grd=ctx.createLinearGradient(0,500,500,0)   // 渐变
        //前两个代表起始x，y坐标，后两个代表起点颜色和终点颜色的坐标
        grd.addColorStop(0,"#C97F42")
        grd.addColorStop(1,"#F1953E")
        ctx.translate(r, r) //中心位置
        ctx.save();
        ctx.lineWidth = this.lineWidth1;
        ctx.strokeStyle = this.colorSmall;
        ctx.beginPath();
        ctx.arc(0, 0, r-10, 0, 2 * Math.PI, false);
        //文字
        ctx.fillStyle = grd;
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.process, 6, 0);
        ctx.stroke();
        ctx.restore();
        this.drawCircle()
        this.drawText()
    },

}

</script>
<style>
    canvas {
        margin: 0 auto;
    }
    .canvasfor {
        width: 97px;
        height: 97px;
    }
</style>