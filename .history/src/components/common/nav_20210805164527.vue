<template>
  <div class="nav">
    <div class="nav-logo">
      <img src="../../assets/techlogin/images/logo_03.png" />
    </div>
    <div class="nav-list">
      <ul class="nav-list-ul">
        <li>
          <router-link
            to="/home"
            class="nav-link-class"
            active-class="nav-link-active"
            >首页</router-link
          >
        </li>
        <li>简介</li>
        <li>
          <router-link
            to="/technique"
            class="nav-link-class"
            active-class="nav-link-active"
            >技术</router-link
          >
        </li>
        <li>发展</li>
        <li>
          <router-link to="/login" class="nav-link-class nav-link-login"
            >加入我们</router-link>
        </li>
      </ul>
      <div class="nav-list-img">
        <img src="../../assets/techlogin/images/小宇航员_07.png" />
        <img src="../../assets/techlogin/images/二维码.png" class="nav-img-code">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 3.5rem;
}
.nav-logo img {
  width: 2.5rem;
  height: 2.5rem;
  margin-top: 0.25rem;
  margin-left: 1rem;
  object-fit: cover;
}
.nav .nav-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35rem;
}
.nav-list .nav-list-ul {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  font-size: 1.2rem;
  color: #fff;
}
.nav-link-class {
  color: #fff;
  text-decoration: none;
}
.nav-link-active {
  color: #65dff5;
}
  .nav-list-img{
    width: 3rem;
    height: 3rem;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .nav-list-img :hover .nav-img-code{
    top: 3rem;
  }
.nav-list .nav-list-img img {
  width: 3rem;
  height: 3rem;
  object-fit: cover;
}
.nav-list-img .nav-img-code{
  position: absolute;
  top: 0;
}
/* img响应式 */
@media screen and (max-width: 500px) {
  .nav .nav-list {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 35rem;
  }
  .nav-logo img {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
  }
  .nav .nav-list .nav-list-img{
    display: none;
  }
  .nav .nav-list .nav-list-img img {
    display: none;
  }
  .nav .nav-link-login {
    padding: 0 0.5rem;
  }
}
.nav-link-login {
  color: #000;
  padding: 0 1rem;
  background-color: #65dff5;
  border-radius: 1rem;
}
</style>
