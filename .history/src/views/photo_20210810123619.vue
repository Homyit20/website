<template>
  <div class="photo-back">
    <div class="photo-back-img">
    <img src="../assets/techlogin/images/照片墙背景.jpg">
    </div>
    <div class="photo-text">
      <h1>photo story</h1>
    </div>
    <div class="photo-content">
      <div class="photo-content-img">
        <img>
        <h1>初创南墙</h1>
        <p></p>
      </div>
      <div class="photo-content-img">
        <img>
        <h1>新生培训</h1>
      </div>
      <div class="photo-content-img">
        <img>
        <h1>奖状台</h1>
      </div>
      <div class="photo-content-img">
        <img>
        <h1>工作环境</h1>
      </div>
      <div class="photo-content-img">
        <img>
        <h1>新成员欢迎会</h1>
      </div>
      <div class="photo-content-img">
        <img>
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
}
  .photo-back .photo-back-img{
    width: 100vw;
    overflow: hidden;
  }
  .photo-back .photo-back-img img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200vh;
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
    width: 90%;
    background-color: azure;
  }
  .photo-content-img{
    width: 26rem;
    background-color: chocolate;
  }
</style>