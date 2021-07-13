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
  top: -100%;
  height: 100%;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: flex;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;
  transition: .3s ease;
  .nav-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  }
  .nav-item {
  padding: 10px 0;
  font-size: 40px;
  text-align: center;
  color: white;
  cursor: pointer;
  .nav-item:hover {
    text-decoration: underline;
  }
}
}
.active {
  top: 0;
  transition: .3s ease;
}
@media (min-width: 992px) {
  .navsidebar {
    top: 0;
    width: 100%;
    bottom: 0;
    left: -100%;
    .nav-item {
      text-align: left;
    }
  }
  .active {
  left: 0;
  transition: .3s ease;
}
}
</style>