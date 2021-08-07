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
    mounted(){
        let img = document.getElementsByTagName('img')
        if(document.body.clientWidth>800){img[0].width = document.body.clientWidth/2}
        else{img[0].width=document.body.clientWidth}
        canvas.liuxing(document.getElementById('Meteor'),document.getElementsByClassName('enter_contain')[0])
        // console.log(131312,document.getElementsByClassName('enter_contain')[0])
        canvas.homyit(document.getElementById('canvas'))
        canvas.changecolor(document.getElementsByClassName('star'))
    },
    methods : {
      change(){
        this.$router.push('/home')
      }
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
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 100;
        top: 50%;
        width: 4rem;
        height: 4rem;
        background-color: #fff;
        border: 3px solid rgb(151, 212, 228);
        border-radius: 50%;
        color: #65dff5;
        box-shadow: 1px 1px 2px #65dff5;
      }
      .enter-button p{
        font-size: 2rem;
      }
</style>