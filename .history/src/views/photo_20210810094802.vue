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
        <h1>2013年成员</h1>
        <p>王宏凯</p>
      </div>
      <div class="photo-content-img">
        <img>
        <h1>2014年成员</h1>
      </div>
      <div class="photo-content-img">
        <img>
        <h1>2015年成员</h1>
      </div>
      <div class="photo-content-img">
        <img>
        <h1>2016年成员</h1>
      </div>
      <div class="photo-content-img">
        <img>
        <h1>2017年成员</h1>
      </div>
      <div class="photo-content-img">
        <img>
        <h1>2018年成员</h1>
      </div>
      <div class="photo-content-img">
        <img>
        <h1>2019年成员</h1>
      </div>
      <div class="photo-content-img">
        <img>
        <h1>2020年成员</h1>
      </div>
      <div class="photo-content-img">
        <img>
        <h1>2021年成员</h1>
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
    width: 90%;
    background-color: azure;
  }
  .photo-content-img{
    width: 30rem;
    background-color: chocolate;
  }
</style>