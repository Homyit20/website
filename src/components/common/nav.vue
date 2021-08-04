<template>
    <div class="nav">
        <div class="nav-logo">
            <img src="../../assets/images/logo_03.png">
        </div>
        <div class="nav-list">
            <ul class="nav-list-ul">
                <li>首页</li>
                <li>简介</li>
                <li><router-link to="/technique" class="nav-link-class" active-class="nav-link-active">技术</router-link></li>
                <li>发展</li>
                <li><router-link to="/login" class="nav-link-class" active-class="nav-link-active" >加入我们</router-link></li>
            </ul>
            <div class="nav-list-img">
                <img src="../../assets/images/小宇航员_07.png">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : 'navbar'
}
</script>

<style>
  .nav{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100vw;
      height: 3.5rem;
  }
   .nav-logo img{
      width: 3rem;
      height: 3rem;
      margin-top: 0.25rem;
      margin-left: 1rem;
      object-fit: cover;
  }
  .nav .nav-list{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 35rem;
  }
  .nav-list .nav-list-ul{
      width: 80%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      list-style: none;
      font-size: 1.2rem;
      color: #fff;
  }
  .nav-link-class{
      color: #fff;
      text-decoration: none;
  }
  .nav-link-active{
      color: #65dff5;
  }
  .nav-list .nav-list-img img{
      width: 3.5rem;
      height: 3.5rem;
      object-fit: cover;
  }
  /* img响应式 */
  @media  screen and (max-width : 500px) {
    .nav .nav-list{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 35rem;
  }
      .nav-logo img{
        width: 2rem;
        height: 2rem;
        object-fit: cover;
      }
      .nav .nav-list .nav-list-img img{
        width: 3rem;
        height: 3rem;
        object-fit: cover;
      }
  }
</style>
