<template>
  <div class="nav">
    <div class="logo">
      <img src="../../assets/logo.png" v-on:click="$router.push('/')" alt="logo">
    </div>
    <div class="navbar">
      <div class="nav1">
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" to="/about">About</router-link>
        <router-link class="nav-item" to="/blog">Blog</router-link>
      </div>
      <div class="nav2">
        <router-link class="btn" v-if="!login" to="/auth/login">Login</router-link>
        <router-link v-else to="/dashboard">Dashboard</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['login']
}
</script>

<style lang="scss">
.nav {
  display: flex;
  padding: 15px 25px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.247);
  .logo {
    display: flex;
    align-items: center;
    width: 30%;
    img {
      cursor: pointer;
    }
  }
  .navbar {
    width: 70%;
    display: flex;
    justify-content: space-between;
    .nav1 {
      display: flex;
      align-items: center;
      .nav-item {
      text-decoration: none;
      color: #1c1c1c;
      font-weight: 700;
      text-transform: uppercase;
      margin-right: 20px;
      padding: 5px 10px;
      }
      .nav-item:hover {
        text-decoration: underline;
        transition: .3s ease;
      }
    }
    .nav2 {
      display: flex;
      align-items: center;
      .btn {
        text-decoration: none;
        color: #1c1c1c;
        font-weight: 700;
        text-transform: uppercase;
        padding: 5px 15px;
        border: solid 1px #1c1c1c;
      }
      .btn:hover {
        background-color: #1c1c1c;
        color: white;
        transition: .3s ease;
      }
    }
  }
}
</style>