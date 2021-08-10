<template>
  <div class="photos-back">
    <h1>PHOTO STORY</h1>
    <div class="photo-content">
      <div class="photo-content-img">
        <img src="../assets/techlogin/images/南墙.png" class="photo-animate-one our-photo" @click="changephoto(0)">
        <h2>初创南墙</h2>
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
        <p></p>
      </div>
      <div class="photo-content-img">
        <img src="../assets/techlogin/images/2020.jpg" class="our-photo" @click="changephoto(4)">
        <h2>新成员欢迎会</h2>
        <p></p>
      </div>
      <div class="photo-content-img">
        <img src="../assets/techlogin/images/2021.jpg" @click="phototojoin()">
        <h2>2021期待加入</h2>
        <p>就是你们呀，快来报名吧</p>
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
  margin-top: 2rem;
  color: #fff;
}
.photo-content-img img{
  border: 8px solid #fff;
  width: 26rem;
  height: 15rem;
  object-fit: cover;
}
  .photo-animate-one{
    box-shadow: 2px 2px 10px #65dff5;
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
   .photo-content-img img{
    width: 22rem;
    height: 12rem;
  }
}
@media screen and (min-width: 1500px){
  .photo-content-img img{
    width: 35rem;
    height: 20rem;
  }
}
</style>