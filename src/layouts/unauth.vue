<template>
  <div class="login">
    <div class="login-box">
      <h2>Welcome!</h2>
      <p>Login now</p>
      <div class="input-box">
        <input type="text" placeholder="Username">
        <input type="password" placeholder="Password">
      </div>
      <div class="check">
        <div class="accCheck">
          <input type="checkbox" name="" id="">
          <span>Remember me?</span>
        </div>
        <div class="passwordCheck">Forgot Password?</div>
      </div>
      <div class="login" @click="$router.push('/dashboard')">
        Login
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.login {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-box {
    width: 500px;
    margin: auto;
    text-align: center;
    padding: 10px 50px;
    h2 {
      margin-top: 0;
      margin-bottom: 5px;
      font-size: 30px;
    }
    p {
      margin: 5px 0;
      color: grey;
    }
    .input-box {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      input {
        line-height: 30px;
        font-size: 20px;
        padding: 10px 15px;
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: lightgrey;
        margin: 5px 0;
      }
    }
    .check {
      display: flex;
      justify-content: space-between;
      input {
        cursor: pointer;
      }
      .passwordCheck:hover, .accCheck:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .login {
      border: 1px solid #1c1c1c;
      padding: 10px 0;
      border-radius: 10px;
      margin: 10px 0;
      cursor: pointer;
      font-size: 20px;
      height: 100%;
      justify-content: center;
    }
    .login:hover {
      background-color: #1c1c1c;
      color: white;
      transition: .3s ease;
    }
  }
}
</style>