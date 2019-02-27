<template>
    <div ref = 'canvas' class="canvasfor">
        <canvas  ref='canvasD' class='canvasD' width="200" height="200"></canvas>
        <div class='canvasPop denoCan' v-if='this.isdenominator'>
            <span ref='numer' class="numerator">{{this.value}}</span><span ref = 'denomin' class="denominator"></span>
        </div>
        <div v-else ref='numer' class='canvasPop'>{{this.value}}</div>
    </div>
</template>
<script>
export default {
    name:'circleDraw',
    props:{ 
        color:{type:null,default:'#00cdfe'},
        colordeno:{type:null,default:'#00cdfe'},
        start:{type:null,default:1},
        radius:{type:null,default:8},
        value:null,
        isdenominator:{type: null,default: false},
        totalPoint:{type:null,default:500},
        lineWidth:{type:null,default:4},
        img:{type:null,default:'visited'}
    },
    data(){
        return{
            centerX:'',
            centerY:'',
            radiusBa:'',
            startfor:'',
            oldVal:0,
            distance:0
        }   
    },
    methods:{
        circle(i){
            if (this.$refs == undefined) {
                return
            }
            let canvas = this.$refs.canvasD
            if (canvas == undefined) return
            let context = canvas.getContext('2d');  //获取画图环境，指明为2d
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.lineWidth = this.lineWidth;
            context.beginPath(); //路径开始
            context.arc(this.centerX, this.centerY, this.radiusBa , this.startfor, this.startfor+ i*2*Math.PI/this.totalPoint, false);
            context.strokeStyle= this.color;    
            context.stroke(); //绘制
            context.closePath(); //路径结束
            context.restore();
        },
    },
    created(){
    },
    watch:{
        value:function (newValue, oldValue){
        }
    },
    mounted(){ 
        let canvas = this.$refs.canvasD; //获取canvas元素
        this.$refs.canvas.classList.add(this.img);
        this.$refs.numer.style.color =  this.color;
        if(this.isdenominator && this.colordeno){
            this.$refs.denomin.style.color = this.colordeno;
        }
        this.startfor = this.start;     
        this.startfor *= -Math.PI/2;
        let context = canvas.getContext('2d');  //获取画图环境，指明为2d
        canvas.width = this.$refs.canvas.offsetWidth ;
        canvas.height = this.$refs.canvas.offsetHeight;
        this.centerX = canvas.width/2;  //Canvas中心点x轴坐标
        this.centerY = canvas.height/2;
        this.radiusBa = this.centerX/2 + parseFloat(this.radius);
        context.save();      
        this.circle(this.value)

    },
    beforeDestroy(){
        clearInterval(this.timer);
        this.timer = null;
    }
}
</script>
<style  lang="less">
    .canvasfor{
        width:100%;height:100%;position:absolute;
        background-repeat:  no-repeat;
        background-position:  center;
        background-size: 100%;
        }
   .canvasD {    position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 100%;
    }
    .canvasPop{
        width:100%;height:100%;
            position: relative;
            left: 50%;
            top: 50%;
            font-size: 30px;
            transform: translate(-50%,-50%);
            color:#00cdfe;
            span{
                left: 0;
                right: 0;
                position: absolute;
                text-align: center;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
            }
            label{color:#6c7a97}
    }
    .visited{
        background-image: url('../assets/img/visited.png');
    }
    .property1{
        background-image: url('../assets/img/property1.png');
    }
    .property2{
        background-image: url('../assets/img/property2.png');
    }
</style>
