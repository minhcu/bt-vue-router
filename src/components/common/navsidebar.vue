<template>
  <div class="navsidebar">
      <div class="nav-box">
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" to="/about">About</router-link>
        <router-link class="nav-item" to="/contact">Contact Us</router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navsidebar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    z-index: 999;
    display: flex;
    align-items: center;
    padding-left: 60px;
    padding-right: 60px;
    .nav-box {
    display: flex;
    flex-direction: column;
    }
    .nav-item {
    padding: 10px 0;
    font-size: 30px;
    text-align: center;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }
}
@media (min-width: 992px) {
  .navsidebar {
      .nav-item {
        text-align: left;
      }
  }
}
</style>