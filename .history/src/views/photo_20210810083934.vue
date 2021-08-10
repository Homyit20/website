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
  .photo-back{
    display: flex;
    justify-content: center;
  }
  .photo-back .photo-back-img{
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
  }
</style>