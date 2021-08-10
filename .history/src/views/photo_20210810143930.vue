<template>
  <div class="photos-back">
    <div class="photo-content">
      <div class="photo-content-img">
        <img src="../assets/techlogin/images/南墙.png">
        <h1>初创南墙</h1>
        <p></p>
      </div>
      <div class="photo-content-img">
        <img src="../assets/techlogin/images/新生培训.jpg">
        <h1>新生培训</h1>
      </div>
      <div class="photo-content-img">
        <img src="../assets/techlogin/images/新生培训.jpg">
        <h1>奖状台</h1>
      </div>
      <div class="photo-content-img">
        <img src="../assets/techlogin/images/工作环境.png">
        <h1>工作环境</h1>
      </div>
      <div class="photo-content-img">
        <img src="../assets/techlogin/images/2020.jpg">
        <h1>新成员欢迎会</h1>
      </div>
      <div class="photo-content-img">
        <img src="../assets/techlogin/images/2021.jpg">
        <h1>2021期待加入</h1>
        <p>就是你们呀，快来报名吧</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'photo'
  }
</script>

<style>
.photos-back{
  width: 100vw;
  background-color: #000;
  display: flex;
  justify-content: center;
}
.photo-content{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 95%;
}
.photo-content-img{
  color: #fff;
}
.photo-content-img img{
  border: 8px solid #fff;
  width: 26rem;
  height: 15rem;
  object-fit: cover;
}
@media screen and (max-width : 500px){
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
</style>