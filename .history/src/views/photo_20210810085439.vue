<template>
  <div class="photo-back">
    <img src="../assets/techlogin/images/照片墙背景.jpg" class="photo-back-img">
  </div>
</template>

<script>
  export default {
    name : 'photo'
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .photo-back{
    display: flex;
    justify-content: center;
    position: relative;
  }
  .photo-back .photo-back-img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 200vh;
    object-fit: cover;
  }
</style>