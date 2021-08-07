<template>
  <div>
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
    <div class="big-background">
      <div class="background">
        <transition mode="out-in">
          <div v-if="show">
            <div class="content">
              <h1 class="head1">宏奕工作室（Homyit Studio）</h1>
              <p class="lead1">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;宏奕工作室成立于2013年9月，
              是在江西师范大学计算机信息工程学院各领导、老师
              的大力支持下迅速成长起来的学生自主研发的工作室。
              该工作室致力于Web开发，以社团的模式传承在12级
              创始人王宏凯及十余名长老员共同努力下本着“有爱同行，
              踏实求新”的侠客情怀，致力于为学生提供一个专业的Web
              开发修炼圣地,培养出更多就业型人才。
              </P>
              <button @click="handleClick">下一页</button>
            </div>
          </div>
          <div v-else>
            <div class="content">
              <p class="lead2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              专业方面,工作室主要以承接商业项目、开办技术培训参加专业竞赛、
              开发团队产品等,且就业质量非常高,宏奕的前辈们已成功挑战阿里巴巴
              、腾讯、百度三大巨头及字节跳动等知名互联网公司 HR ,博得 Offer ,
              现已成为学院这么多年来就业质量最高的团队!非专业方面,工作室偶尔会进行公费聚餐,
              还有唱 K ,桌游等娱乐项目。而且工作室有免费空调、冰箱,让你在炎炎夏日有个避暑的好去处。
              </P>
              <h1 class="head2">快来加入我们吧！&nbsp;JOIN&nbsp;&nbsp;US</h1>
              <button @click="handleClick">上一页</button>
            </div>
          </div>
        </transition>
        <div class="star">
          <img src="../assets/background/star.png">
        </div>
        <div class="ast">
          <img src="../assets/background/ast.png">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'animate.css'
export default {
    name:'background',
    data(){
      return{
        show:true
      }
    },
    methods:{
      handleClick(){
        this.show=!this.show
      }
    }
}
</script>

<style>
.big-background{
  background: url('../assets/background/background.png') no-repeat center center/cover;
  height: 100vh;
  color: white;
  position: relative;
}
 .big-background .background{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 0 2rem;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    
.star{
  width: 20vw;
  position: absolute;
  left: 5vw;
  top: 15vh;
}
.star img{
  width: 20vw;
}
.ast{
  width: 20vw;
  position: absolute;
  right: 6vw;
  bottom: 22vh;
}
.ast img{
  width: 10vw;
}
@media screen and (max-width: 500px) {
  .star{
    top: 10vh;
  }
}

.v-enter-from{
  opacity: 0;
}
.v-enter-active,
.v-leave-active{
  transition: opacity 1s;
}
.v-enter-to,
.v-leave-from{
  opacity: 1;
}
v-leave-to{
  opacity: 0;
}
.content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    padding: 0 2.5rem;
    width: 45vw;
    padding-bottom: 3vh;
    /* height: 60%; */
    background: white;
    //opacity: 0.6;
    color: #000;
    border-radius: 5%;
    z-index: 100;
  }
  .head1{
    color: #65dff5;
    font-size: 2rem;
    margin-top: 3vh;
    margin-bottom: 2vh;
  }
  .lead1{
    font-size: 1.3rem;
    margin-left: 2vw;
    margin-right: 2vw;
  }
  .head2{
    color: #65dff5;
    font-size: 2rem;
    /* margin-bottom: 2vh; */
  }
  .lead2{
    margin-bottom: 2vh;
    margin-top: 5vh;
    font-size: 1.3rem;
    margin-left: 2vw;
    margin-right: 2vw;
  }
  button{
    width: 6vw;
    /* padding-bottom: 1rem; */
    font-size: 1.5rem;
    margin-top: 2rem;
    background-color: #65dff5;
    opacity: 0.7;
    color:white;
  }

  @media screen and (max-width : 800px){
       .content{
         width: 60vw;
         height: 35vh;
         padding-bottom: 0;
         bottom: 3vh;
         padding: 0 2rem;
         padding: 1rem;
       }
       .head1{
         font-size: 1rem;
         margin-top: 0;
         margin-bottom: 1vh;
       }
       .lead1{
         font-size: 1rem;
         margin-left: 0;
         margin-right: 0;
       }
       .head2{
         font-size: 1rem;
         margin-top: 0;
         margin-bottom: 1vh;
       }
       .lead2{
         font-size: 1rem;
         margin-left: 0;
         margin-right: 0;
         margin-top: 0.1rem;
         margin-bottom: 0.1rem;
       }
       button{
         width: 15vw;
         margin-top:0.3rem ;
         font-size: 0.1vw;
       }
   }

   @media screen and (max-width : 500px){
       .content{
         width: 60vw;
         height: 50vh;
         padding-bottom: 0;
         bottom: 5vh;
         padding: 0 1rem;
         padding: 1rem;
       }
       .head1{
         font-size: 0.1rem;
         margin-top: 0;
         margin-bottom: 1vh;
       }
       .lead1{
         font-size: 0.1rem;
         margin-left: 0;
         margin-right: 0;
       }
       .head2{
         font-size: 0.1rem;
         margin-top: 0;
         margin-bottom: 1vh;
       }
       .lead2{
         font-size: 0.01rem;
         margin-left: 0;
         margin-right: 0;
         margin-top: 0.1rem;
         margin-bottom: 0.1rem;
       }
       button{
         width: 15vw;
         margin-top:0.3rem ;
         font-size: 0.1vw;
       }
   }
</style>