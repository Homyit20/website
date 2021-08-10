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
      </div>
      <div class="photo-content-img">
        <img>
      </div>
      <div class="photo-content-img">
        <img>
      </div>
      <div class="photo-content-img">
        <img>
      </div>
      <div class="photo-content-img">
        <img>
      </div>
      <div class="photo-content-img">
        <img>
      </div>
      <div class="photo-content-img">
        <img>
      </div>
      <div class="photo-content-img">
        <img>
      </div>
      <div class="photo-content-img">
        <img>
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
    width: 70rem;
    background-color: azure;
  }
</style>