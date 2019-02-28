<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div ref = 'canvas' class="canvasfor">   
        <canvas id="canvas" width="500" height="500" ref="canvasD"></canvas>

    </div>
  </div>
</template>
<script>
export default {
    name:'canvas1',
    data(){
        return{
            msg: 'canvas的圆环',
            lineWidth1:10,
            lineWidth2:20,
            colorSmall:'#1F8FFF',
            process:20
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
            ctx.translate(r/10, r/10)
            ctx.save();
            ctx.lineWidth = this.lineWidth2;
            ctx.strokeStyle = grd;
            ctx.lineCap = 'round';
            let rad = 2 * Math.PI / 100 * this.process;
            let interval = Math.PI / 2;
            ctx.beginPath();
            ctx.arc(-25, -25, r-10, -interval, rad - interval, false);
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
        ctx.translate(r, r) //中心位置
        ctx.save();
        ctx.lineWidth = this.lineWidth1;
        ctx.strokeStyle = this.colorSmall;
        ctx.beginPath();
        ctx.arc(0, 0, r - 10, 0, 2 * Math.PI, false);
        //文字
        ctx.fillStyle = '#000';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.process + '%', 0, 0);
        ctx.stroke();
        ctx.restore();
        this.drawCircle()
    },
    beforeDestroy(){
    }
}

</script>
<style>
    canvas {
        margin: 0 auto;
    }
    .canvasfor {
        width: 500px;
        height: 500px;
    }
</style>