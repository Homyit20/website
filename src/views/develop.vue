<template>
  <div id="develop">
    <NavBar></NavBar>
    <div class="develop_back"></div>
    <div class="develop_content">
    <div class="develop_txt_contain">
      <div class="develop_txt_back"></div>
      <p class="develop_txt_p">
        宏奕工作室2013年王宏凯创建，已留下许多<router-link
          to="/photo"
          class="nav-link-class"
          ><span class="develop_txt_wonder">美好瞬间</span></router-link
        >，同时也涌现出众多优秀的宏奕人,他们分布在全国各地，致力于WEB开发。他们入职阿里巴巴、腾讯、字节跳动、小米、京东等众多知名互联网公司，在前端、后端、UI等方面有自己的建树，为互联网发展做出了许多贡献。
      </p>
    </div>
    <canvas id="canvas" class="develop_canvas"
      >你的浏览器不支持canvas，请升级你的浏览器</canvas
    >
    </div>
    <img
      src="../assets/develop/develop_宇航员.png"
      alt="Not Found"
      class="develop_yu"
    />
    
  </div>
</template>

<script>
import NavBar from "../components/common/nav.vue";
import canvas from "../assets/develop_js/develop_canvas.js";
export default {
  name: "develop",
  data() {
    return {};
  },
  components: {
    NavBar,
  },
  mounted() {
    let elem = document.getElementById("canvas");
    canvas.draw(elem);
    canvas.back(document.getElementsByClassName("develop_back")[0]);
    window.onresize = () => {
      if (document.body.clientWidth < 800) {
        canvas.draw(elem);
      } else if (document.body.clientWidth > 800) {
        canvas.draw(elem);
      }
    };
  },
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
#develop {
  /* position: absolute;
  width: 100%;
  height: 100%;
  min-height: 500px; */
  /* overflow: hidden; */
  /* display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap; */
}
.develop_content{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.develop_back {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  right: 0;
  background-image: url("../assets/develop/develop_背景.png");
  background-size: 100% 100%;
  /* border: 3px solid red; */
  z-index: -1;
}
.develop_txt_contain {
  position: relative;
  /* border: 3px solid red; */
  width: 22vw;
  height: auto;
  left: 10vw;
  /* transform: translate(15vw,8vw); */
}
.develop_txt_back {
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
  letter-spacing: 0.2rem;
  font-size: 1.1rem;
  color: white;
  line-height: 2.5vw;
  text-indent: 2vw;
  margin: 0 auto;
  margin-top: 2.5vw;
  margin-bottom: 2.5vw;
  animation: develop_show 1.5s both;
  opacity: 1;
}
.develop_canvas {
  /* float: right; */
  margin-right: 0vw;
  transform: scale(0.5, 0.5);
}
.develop_yu {
  position: absolute;
  right: 4vw;
  bottom: 0;
  width: 15vw;
  height: auto;
}
.develop_logoimg {
  position: absolute;
}
.develop_txt_wonder {
  width: 100%;
  height: 100%;
  color: #4d4d4d;
  font-size: 1.4rem;
  border-radius: 1rem;
  text-decoration: none;
  letter-spacing: 0px;
  background-color: #65dff5;
  animation: developnice 1.5s infinite ease-in-out;
}
.develop_txt_wonder:hover {
  color: black;
}
@keyframes developnice {
    0%{}
    50%{
        box-shadow: 1px 1px 5px #fff;
    }
    100%{

    }
}

@media screen and (min-width: 1500px) {
  #develop div p {
    font-size: 1.3rem;
  }
}
@media only screen and (max-width: 500px) {
  .develop_txt_contain {
    width: 60vw;
    left: 0;
    top: 10vh;
  }
  #develop div p {
    width: 54vw;
    text-indent: 3vw;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    line-height: 7vw;
  }
  .develop_txt_wonder{
      font-size: 1.1rem;
  }
}
@keyframes develop_show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>