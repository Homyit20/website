<template>
    <div id="develop">
        <NavBar></NavBar>
        <div class="develop_back"></div>
        <div class = 'develop_txt_contain'>
            <div class="develop_txt_back"></div>
            <p>宏奕工作室从2013年王宏凯创建，到现在，已经涌现处众多优秀的宏奕人,他们分布在全国各地，致力于WEB开发，他们入职阿里巴巴、腾讯、字节跳动等众多知名互联网公司，为互联网发展做出了许多贡献.</p>
        </div>
        <img src="https://img-1306126172.cos.ap-nanjing.myqcloud.com/img/develop_宇航员.png" alt="Not Found" class="develop_yu">
        <!-- <img src="../assets/develop_imgs/develop_star.png" alt="Noe Found" class="develop_star"> -->
        <canvas id="canvas" class="develop_canvas">你的浏览器不支持canvas，请升级你的浏览器</canvas>
    </div>
</template>

<script>
    import NavBar from '../components/common/nav.vue'
    import canvas from '../assets/develop_js/develop_canvas.js'
    export default{
        name:'develop',
        data(){
            return{
            }
        },
        components : {
            NavBar
        },
        mounted(){
            let elem = document.getElementById('canvas')
            canvas.draw(elem)
            canvas.back(document.getElementsByClassName('develop_back')[0])
            window.onresize=()=>{
                if(document.body.clientWidth<800){
                    console.log('small')
                    canvas.draw(elem)
                }else if(document.body.clientWidth>800){
                    console.log(123123)
                    canvas.draw(elem)
                }
                // canvas.draw(elem)
            }
        }
        
    }
</script>


<style>
*{
    margin: 0;
    padding: 0;
}
/* html{
    font-size: calc(1vw);
} */
#develop{
    position: absolute;;
    width: 100%;
    height: 100%;
    min-height: 500px;
    /* min-width: 1000px; */
    /* background: black; */
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
}
.develop_back{
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
    background-image: url("https://img-1306126172.cos.ap-nanjing.myqcloud.com/img/develop_背景.png");
    background-size:100% 100%;
    /* border: 3px solid red; */
    z-index: -1;
}
.develop_txt_contain{
    position: relative;
    /* border: 3px solid red; */
    width: 22vw;
    height: auto;
    left: 5vw;
    /* transform: translate(15vw,8vw); */

}
.develop_txt_back{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.26;
    background-color: white;
    border-radius: 20px;
}
#develop div p {
    width: 19vw;
    text-align: center;
    letter-spacing: 0.8vw;
    font-size: 1.4vw;
    color: white;
    line-height: 2.5vw;
    text-indent: 2vw;
    margin: 0 auto;
    margin-top: 2.5vw;
    margin-bottom: 2.5vw;
    animation: develop_show 1.5s both;
    opacity: 1;
}
.develop_canvas{
    float: right;
    margin-right: 10vw;
}
.develop_yu{
    position: absolute;
    right: 4vw;
    bottom: 0;
    width: 15vw;
    height: auto;
}
@media only screen and (max-width: 500px) {
    .develop_txt_contain{
        width: 60vw;
        left: 0;
        top: 8vh;
    }
    #develop div p{
        width:54vw;
        text-indent: 3vw;
        font-size: 1.5vw;
        line-height: 7vw;
       
    }
    
}
@keyframes develop_show {
    0%{
        opacity: 0;
    }
    100% {
      opacity: 1;
    }
}
</style>