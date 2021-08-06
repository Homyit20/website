<template>
  <div class="login-contact">
      <img src="../../assets/techlogin/images/报名背景.png" class="login-contact-background">
      <div class="login-contact-detail">
        <h1>CONTACT US</h1>
        <p>宏奕迎新群</p>
        <img src="../../assets/techlogin/images/二维码.png">
      </div>
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .login-contact .login-contact-background{
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
  .login-contact h1{
    color: #65dff5;
    z-index: 3;
  }
  .login-contact p {
    color: #fff;
    z-index: 3;
  }
  .login-contact .login-contact-detail img{
    width: 30rem;
    z-index: 3;
  }
</style>