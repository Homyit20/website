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
              <button @click="logincommit()">立即报名</button>
            </div>
          </form>
      </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
export default ({
    name : 'Loginform',
    data(){
    return {
      stuName : '',
      stuNum : '',
      stuClass : '',
      email : ''
    }
  },
  methods :{
    logincommit(){
      this.$cookies.set('name', 'this.stuName');
      let formdata = qs.stringify({
        stuName : this.stuName,
        stuNum : this.stuNum,
        stuClass : this.stuClass,
        email : this.email
      })
      if(this.stuName != '' && this.stuNum != '' && this.stuClass != '' &&this.email != ''){
        axios.post('http://localhost:8080/api/apply/save',{
            data : formdata
          }).then((res) => {
            if(res.msg == '报名成功' || res.msg == '你已经报名'){
              alert(res.msg);
              this.$router.push({
                path : '/login/contact'
              })
            }else{
              alert(res.msg);
            }
          }).catch((err) => {
            console.log(err);
          })
      }else{
        alert('请将信息填写完整')
      }
    },
    inputjudge(value, id){
      let logininput = document.getElementsByClassName('login-input')[id];
      if(value != ''){
        logininput.classList.remove('login-vaild');
        logininput.classList.add('login-finish');
      }else{
        logininput.classList.remove('login-vaild');
        logininput.classList.add('login-error');
      }
    }
  },
  watch : {
    stuName : function(){
      let logininput = document.getElementsByClassName('login-input')[0];
      logininput.classList.remove('login-error');
      logininput.classList.remove('login-finish');
      logininput.classList.add('login-vaild');
    },
    stuNum : function(){
      let logininput = document.getElementsByClassName('login-input')[1];
      logininput.classList.remove('login-error');
      logininput.classList.remove('login-finish');
      logininput.classList.add('login-vaild');
    },
    stuClass : function(){
      let logininput = document.getElementsByClassName('login-input')[2];
      logininput.classList.remove('login-error');
      logininput.classList.remove('login-finish');
      logininput.classList.add('login-vaild');
      logininput.classList.add('login-vaild');
    },
    email : function(){
      let logininput = document.getElementsByClassName('login-input')[3];
      logininput.classList.remove('login-error');
      logininput.classList.remove('login-finish');
      logininput.classList.add('login-vaild');
      logininput.classList.add('login-vaild');
    }
  }
})
</script>

<style>
   .login-content{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      margin-top: 8rem;
      max-width: 45rem;
      height: 65vh;
    }

    /* 文字*/
    .login-content .login-join{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .login-content .login-join h1{
      color: #65dff5;
    }
    .login-content .login-join h2{
      color: #fff;
    }


    /* 表单内 */
    .login-content .login-form{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .login-form .login-main-form{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 45rem;
      height: 10rem;
      margin-top: 3rem;
    }

    /* 响应式 */
    @media screen and (max-width : 500px){
       .login-content .login-join{
         margin-top: 3.5rem;
       }
      .login-content{
        margin-top : 1rem;
      }
      .login-form .login-main-form{
        display: flex;
        flex-direction: column;
        flex-wrap: unwrap;
        align-items: center;
        width: 16rem;
        height: 15rem;
        margin-top: 3rem;
      }
      .login-form .login-main-form input[type = "text"]{
        width: 15rem;
        margin-bottom: 0;
      }
      .login-form .login-main-form textarea{
        display: none;
      }
      .login-form .login-button button{
        margin-top: 4rem;
      }
    }


    .login-input{
      position: relative;
      width: 15rem;
      height: 3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 0.2rem;
    }

    .login-main-form input[type = "text"]{
      border: 0;
      background: none;
      outline: none;
      background-color: #4d4d4d;
      border-radius: 2px;
      color: white;
      padding-left: 1rem;
      width: 15rem;
      height: 2.3rem;
    }

    /* 表单验证样式 */
    .login-vaild::after{
      content: '';
      position: absolute;
      right: 0;
      width: 2rem;
      height: 2rem;
      background: url('../../assets/techlogin/images/沙漏.png') center;
    }
    .login-finish::after{
      content: '';
      position: absolute;
      right: 0;
      width: 2rem;
      height: 2rem;
      background: url('../../assets/techlogin/images/成功.png') center;
    }
    .login-error::after{
      content: '';
      position: absolute;
      right: 0;
      width: 2rem;
      height: 2rem;
      background: url('../../assets/techlogin/images/错误.png') center;
    }
    .login-input p{
      font-size: 1px;
      color: white;
    }


    .login-main-form textarea{
      border: 0;
      background: none;
      outline: none;
      background-color: #4d4d4d;
      border-radius: 2px;
      width: 15rem;
      height: 6rem;
      color: #fff;
      padding-left: 1rem;
    }
    .login-button button{
      border: 0;
      padding: 0;
      outline: none;
      background: none;
      border: 1px solid #fff;
      border-radius: 2px;
      width: 8rem;
      height: 1.8rem;
      margin-top: 7rem;
      color: #fff;
    }
    /* 当屏幕大于1500px时 */
    @media screen and (min-width: 1500px){
      .login-form .login-main-form{
        width: 48rem;
        height: 12rem;
        margin-top: 6rem;
      }
      .login-form .login-input{
        width: 20rem;
        height: 3.2rem;
      }
      .login-form .login-main-form input[type = "text"]{
        width: 20rem;
        height: 3.2rem;
      }
      .login-main-form textarea{
        width: 20rem;
        height: 7.5rem;
        border-radius: 5px;
      }
      .login-button button{
        margin-top: 8rem;
        width: 10rem;
        height: 2.5rem;
        border-radius: 4px;
      }
    }
</style>
