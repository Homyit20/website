<template>
  <div class="home">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no" />
    <img
      id="home-img"
      src="../assets/home/home-bg.jpg"
      alt=""
      width="100%"
      height="100%"
    />
    <home-welcome></home-welcome>
  </div>
</template>

<script>
import HomeWelcome from "../components/home/home-welcome.vue";

export default {
  name: "Home",
  components: {
    HomeWelcome,
  },
};
</script>
<style>
@font-face {
  font-family: Sansita-Black;
  src: url("../assets/home/font/Sansita-Black.otf");
}
.home {
  height: 100%;
  width: 100%;
  color: #ffff;
}
#home-img {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -100;
}
</style>
