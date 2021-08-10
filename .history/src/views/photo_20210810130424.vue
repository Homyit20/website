<template>
  <div class="photo-back">
    <img src="../assets/techlogin/images/照片墙背景.jpg" class="photo-back-img">
    <div class="photo-text">
      <h1>photo story</h1>
    </div>
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
        <img>
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
.photo-back{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}
  .photo-back .photo-back-img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    object-fit: cover;
    z-index: -100;
  }
  .photo-text{
    /* position: absolute;
    top: 2rem; */
    color: #fff;
  }
  .photo-content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 95%;
  }
  .photo-content-img{
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid #fff;
  }
  .photo-content-img img{
    width: 27rem;
    height: 15rem;
    object-fit: cover;
  }
  @media screen and (max-width: 500px){
    .photo-content-img img{
      width: 22rem;
      height: 12rem;
    }
  }
</style>