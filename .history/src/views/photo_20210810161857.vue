<template>
  <div class="photos-back">
    <h1>PHOTO STORY</h1>
    <div class="photo-content">
      <div class="photo-content-img">
        <img src="../assets/techlogin/images/南墙.png" class="photo-animate-one our-photo" @click="changephoto(0)">
        <h2 class="active-photo">初创南墙</h2>
        <p></p>
      </div>
      <div class="photo-content-img">
        <img src="../assets/techlogin/images/新生培训.jpg" class="our-photo" @click="changephoto(1)">
        <h2>新生培训</h2>
        <p></p>
      </div>
      <div class="photo-content-img">
        <img src="../assets/techlogin/images/新生培训.jpg" class="our-photo" @click="changephoto(2)">
        <h2>奖状台</h2>
        <p></p>
      </div>
      <div class="photo-content-img">
        <img src="../assets/techlogin/images/工作环境.png" class="our-photo" @click="changephoto(3)">
        <h2>工作环境</h2>
        <p>工作室成员每人拥有自己的工位，可供于学习，并且春夏秋冬，空调都在，不用担心热或者冷，还具备投影仪，显示屏，打印机等多种工具，让我们工作学习更方便</p>
      </div>
      <div class="photo-content-img">
        <img src="../assets/techlogin/images/2020.jpg" class="our-photo" @click="changephoto(4)">
        <h2>新成员欢迎会</h2>
        <p>经过培训,通过考核后，我们也会组织新成员欢迎会哟，因为宏奕不仅可以让我们学习进步，也能让我们一起玩耍，成为好朋友</p>
      </div>
      <div class="photo-content-img">
        <img src="../assets/techlogin/images/2021.jpg" @click="phototojoin()">
        <h2>2021</h2>
        <p>期待你们的到来，快来报名吧</p>
      </div>
    </div>
  </div>
</template>

<script>
  let photobefore = 0;
  export default {
    name : 'photo',
    methods:{
      changephoto(value){
        let ourphoto = document.getElementsByClassName('our-photo');
        let photoh2 = document.getElementsByTagName('h2');
        photoh2[value].style.color = '#65dff5';
        photoh2[photobefore].style.color = '#fff';
        ourphoto[0].classList.remove('photo-animate-one');
        ourphoto[photobefore].classList.remove('photo-animate-one');
        ourphoto[value].classList.add('photo-animate-one');
        photobefore = value;
      },
      phototojoin(){
      this.$router.push({
        path : '/login/loginform'
      })
    }
    }
  }
</script>

<style>
.photos-back{
  position: absolute;
  width: 100vw;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #65dff5;
}
.photo-content{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.photo-content-img{
  width: 27rem;
  margin-top: 2rem;
  color: #fff;
}
.photo-content-img .active-photo{
  color: #65dff5;
}
.photo-content-img img{
  border: 8px solid #fff;
  width: 26rem;
  height: 15rem;
  object-fit: cover;
}
  .photo-content-img .photo-animate-one{
    border: 8px solid #65dff5;
    animation: photoone 2s infinite ease-in-out;
  }
/* 动画 */
@keyframes photoone {
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(10deg);
  }
  100%{
    transform: rotate(0deg);
  }
}


@media screen and (max-width : 800px){
  .photo-content{
    display: flex;
    flex-direction: column;
    align-items: center;
 }
 .photo-content-img{
   width: 23rem;
 }
   .photo-content-img img{
    width: 22rem;
    height: 12rem;
  }
}
@media screen and (min-width: 1500px){
  .photo-content-img{
    width: 36rem;
  }
  .photo-content-img img{
    width: 35rem;
    height: 20rem;
  }
}
</style>