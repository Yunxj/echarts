<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <canvas id="myCanvas1" data-percent="60" ref="canvasD"> 
    您的浏览器不支持canvas标签。 
    </canvas>
  </div>
</template>
<script>
export default {
    name:'canvas1',
    data(){
        return{

        }   
    },
    methods:{

    },
    created(){
    },
    watch:{

    },
    mounted(){ 

    },
    beforeDestroy(){

    }
}
var pper=0; 
 var pper_interal;  
 var dushu=document.getElementById('dushu');
 
 var aaa=drawCanvanPercent('myCanvas1','rem',2,'#93BF55',0.2,'#fff', dushu);  
 var canvasMianJi = this.$refs.canvasD
 function drawCanvanPercent(ele_id,dw,cir_r,cir_color,line_w,fill_color,dushu_ele){ 
     if(dw=="rem"){ 
         cir_r=cir_r*(canvasMianJi.width/5); 
         line_w=line_w*(window.screen.width/5); 
     } 
     var canvas = document.getElementById(ele_id); 
     var circle = { 
         r : cir_r/2,      //圆的半径 
         per : canvas.getAttribute('data-percent'),      //百分比分子 
         color : cir_color,      //圆环的颜色 
         lineWidth : line_w      //圆环的宽度 
     }; 
     canvas.width=canvas.height=circle.r*2; 
     canvas.style.borderRadius="50%"; 
     if(canvas.getContext){ 
         var ctx2 = canvas.getContext("2d"); 
         ctx2.fillStyle = fill_color; 
         ctx2.arc(circle.r, circle.r, circle.r-circle.lineWidth/2, 0, Math.PI*2, false); 
         ctx2.fill(); 
         var ctx = canvas.getContext("2d"); 
         pper_interal= setInterval(function () {  //间隔10ms调用一次drawmove
             drawMove(ctx,circle,dushu_ele); 
         }, 10);
 
         var ctx3 = canvas.getContext("2d");  //绘制底色为灰色的圆圈
         ctx3.beginPath(); 
     ctx3.strokeStyle = "#ddd"; 
     ctx3.lineWidth=circle.lineWidth; 
     ctx3.arc(circle.r, circle.r, circle.r, Math.PI*0, Math.PI*2, false); 
     ctx3.stroke();
     } 
 } 
 
 function drawMove(ctx,circle,dushu_ele){   //根据data-percent的值，实现递进效果
     if(pper>=circle.per){ 
         pper=circle.per; 
         clearTimeout(pper_interal); 
     }else{ 
         pper++; 
     } 
     dushu_ele.innerText=pper+'%'; 
     ctx.beginPath(); 
     ctx.strokeStyle = circle.color; 
     ctx.lineWidth=circle.lineWidth; 
     ctx.arc(circle.r, circle.r, circle.r, 0, Math.PI*(pper/100)*360/180, false); 
     ctx.stroke(); 
 }
</script>