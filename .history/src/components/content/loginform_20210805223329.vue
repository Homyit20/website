<template>
    <div class="login-content">
          <div class="login-join">
            <h1>JOIN HOMYIT</h1>
            <h2>加入宏奕</h2>
          </div>
          <form class="login-form" method="">
            <div class="login-main-form">
              <div class="login-input">
                <input type="text" class="login-form-name" placeholder="姓名" v-model="stuName" @blur="inputjudge(stuName,0)">
              </div>
              <div class="login-input">
                <input type="text" class="login-form-number" placeholder="学号" v-model="stuNum" @blur="inputjudge(stuNum,1)">
              </div>
              <div class="login-input">
                <input type="text" class="login-form-class" placeholder="班级" v-model="stuClass" @blur="inputjudge(stuClass,2)" >
              </div>
              <div class="login-input">
                <input type="text" class="login-form-address" placeholder="邮箱" v-model="email" @blur="inputjudge(email,3)">
              </div>
              <textarea placeholder="你的自我介绍/意向" class="login-form-idea"></textarea>
            </div>
            <div class="login-button">
              <button @click="logincommit">立即报名</button>
            </div>
          </form>
      </div>
</template>

<script>

export default defineComponent({
    name : 'Loginform'
})
</script>

<style>

</style>
