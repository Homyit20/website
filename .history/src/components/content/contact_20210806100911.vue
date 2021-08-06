<template>
  <div class="login-contact">
      <img src="../../assets/techlogin/images/报名背景.png">
      <h1>CONTACT US</h1>
      <p>宏奕迎新群</p>
  </div>
</template>

<script>
export default {
  name : 'Contact'
}
</script>

<style>
  .login-contact{
    display: flex;
    justify-content: center;
    z-index: 3;
  }
  .login-contact img{
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .login-contact h1{
    color: #65dff5;
  }
  .login-contact p {
    color: #fff;
  }
</style>