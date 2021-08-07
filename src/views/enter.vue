<template>
    <div class='enter_contain'>
        <canvas id="Meteor" class="enter_canvas"></canvas>
        <img src="https://img-1306126172.cos.ap-nanjing.myqcloud.com/img/enter_宇航员.png" alt="宇航员" style="z-index:1">
        <canvas id="canvas" class="enter_canvas">你的浏览器不支持canvas</canvas>
        <div @click="change()" class="enter-button"><p>enter</p></div>
    </div>
</template>

<script>
import canvas from '../assets/develop_js/enter_canvas.js'
export default {
    name:'enter',
    methods:{
      change(){
        // console.log(1)
        this.$router.push('/home')
      }
    },
    mounted(){
        let img = document.getElementsByTagName('img')
        if(document.body.clientWidth>800){img[0].width = document.body.clientWidth/2}
      else{img[0].width=document.body.clientWidth}
        // 画流星
        let elem = document.getElementById('Meteor')
        let div = document.getElementsByClassName('enter_contain')[0]
        // console.log(131312,document.getElementsByClassName('enter_contain')[0])
        // 画文字
        let txt=document.getElementById('canvas')
        let changecolor=document.getElementsByClassName('star')
        canvas.enter_canvas(txt,elem,div,img)
        canvas.changecolor(changecolor)
}
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .enter_canvas{
        position: absolute;
        width: 100%;
        height: 100%;
        /* border: 3px solid red; */
    }
    .enter_contain{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items:flex-end;
        z-index: 1;
    }
    .star {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0.2;
        border: 2px solid transparent;
        border-bottom: 4px solid #fff;
        animation: flash 2s infinite linear;
      }
      .star::before {
        content: "";
        position: absolute;
        left: -2px;
        top: 4px;
        border: 2px solid transparent;
        border-top: 4px solid #fff;
      }
       .c_star{
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0.2;
        border: 2px solid transparent;
        border-bottom: 4px solid blue;
        animation: flash 2s infinite linear;
      }
      .c_star::before{
        content: "";
        position: absolute;
        left: -2px;
        top: 4px;
        border: 2px solid transparent;
        border-top: 4px solid blue;
      }
      .d_star{
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0.2;
        border: 2px solid transparent;
        border-bottom: 4px solid rgb(163, 64, 138);
        animation: flash 2s infinite linear;
      }
      .d_star::before{
        content: "";
        position: absolute;
        left: -2px;
        top: 4px;
        border: 2px solid transparent;
        border-top: 4px solid rgb(163, 64, 138);
      }
      @keyframes flash {
        20% {
          opacity: 0.2;
        }
        40% {
          opacity: 0.5;
        }
        60% {
          opacity: 1;
        }
        80% {
          opacity: 0.5;
        }
        100% {
          opacity: 0.2;
        }
      }
      .enter-button{
        position: absolute;
        width: 10rem;
        height: 10rem;
        background-color: aqua;
        z-index: 1000;
      }
</style>