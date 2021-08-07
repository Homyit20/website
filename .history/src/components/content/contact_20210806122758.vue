<template>
  <div class="login-contact">
      <img src="../../assets/techlogin/images/报名背景.png" class="login-contact-background">
      <div class="login-contact-details">
        <h1>CONTACT US</h1>
        <p>宏奕迎新群</p>
        <img src="../../assets/techlogin/images/二维码.png">
      </div>
  </div>
</template>

<script>
export default {
  name : 'Contact',
  data(){
    return {
      name : 1
    }
  }
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
  .login-contact .login-contact-details{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6%;
    z-index: 3;
  }
  .login-contact .login-contact-details h1{
    color: #65dff5;
  }
  .login-contact-details p {
    color: #fff;
  }
  .login-contact .login-contact-details img{
    width: 15rem;
    margin-top: 11%;
  }
  /* 层级要看权重？？？ */
  @media screen and (min-width : 1500px){
    html{
      font-size: 18px;
    }
  }
</style>