<template>
  <div class="login-contain">
      <img class="login-background" src="../assets/techlogin/images/报名背景.png" alt="背景">
      <router-view/>
  </div>
</template>

<script>
export default {
  name : 'Login',
}
</script>

<style>
    .login-background{
        position: absolute;
        top: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: -100;
    }
</style>