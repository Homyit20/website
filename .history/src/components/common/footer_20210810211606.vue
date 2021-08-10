<template>
  <div class="footer">
    <div class="footer-content-one">
      <p>学院地址：江西省南昌市紫阳大道99号 方荫楼3区</p>
      <p>学校地址： 【瑶湖校区】江西省南昌市紫阳大道99号 邮政编码: 330022</p>
      <p>@Copyright 江西师范大学(jiangxi Normal Unversity)宏奕工作室 ICP备案编号:<a href="https://beian.miit.gov.cn/#/Integrated/index">赣ICP备18002790号</a></p>
    </div>
    <div class="footer-content-two">
      <p>ICP备案编号:<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">赣ICP备18002790号</a></p>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'Footer'
  }
</script>

<style>
  .footer{
    position: absolute;
    top: 100vh;
    display: flex;
    justify-content: center;
    width: 100vw;
    background-color: #fff;
  }
  .footer-content-one{
    color: #000;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer-content-one a{
    color: #000;
    text-decoration: none;
  }

  .footer-content-two{
    color: #000;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer-content-two p{
    display: none;
  }
  .footer-content-two a{
    color: #000;
    text-decoration: none;
  }
  @media screen and (max-width: 500px){
    .footer-content-one p{
      display: none;
    }
    .footer-content-two p{
      display: block;
    }
  }
</style>