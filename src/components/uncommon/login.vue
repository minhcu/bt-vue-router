<template>
  <div class="loginbox">
    <h2>Welcome!</h2>
    <p>Login now</p>
    <div class="input-box">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
    </div>
    <div class="check">
      <div class="accCheck">
        <input type="checkbox" name="" id="" />
        <span>Remember me?</span>
      </div>
      <div class="passwordCheck">Forgot Password?</div>
    </div>
    <div class="btn" @click="$router.push('/admin/dashboard')">Login</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loginbox {
    color: white;
    text-align: center;
    .input-box {
        display: flex;
        flex-direction: column;
        input {
      line-height: 30px;
      font-size: 20px;
      padding: 10px 15px;
      outline: none;
      border: none;
      border-radius: 5px;
      margin: 5px 0;
    }
    }
    .check {
        display: flex;
        margin: 10px 0;
        flex-direction: column;
    }
    .accCheck,
    .passwordCheck {
        cursor: pointer;
        padding: 5px 0;
    }
    .passwordCheck:hover,
    .accCheck:hover {
        color: #a4a4a5;
    }
    .btn {
        border: 1px solid white;
        color: white;
        width: 100%;
        text-transform: uppercase;
        font-weight: 700;
    }
    .btn:hover {
        background-color: white;
        color: black;
    }
}
@media (min-width: 992px) {
  .loginbox {
      .check {
        flex-direction: row;
        gap: 50px;
      }
  }
}
</style>
