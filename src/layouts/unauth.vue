<template>
  <div class="default">
    <div class="sidebar-container">
      <navbar />
      <hero />
    </div>
    <div class="content-container">
      <loginnav />
      <login />
    </div>
  </div>
</template>

<script>
import navbar from "../components/common/navbar.vue";
import hero from "../components/common/hero.vue";
import login from "../components/uncommon/login.vue";
import loginnav from "../components/uncommon/loginnav.vue";

export default {
  components: {
    navbar,
    hero,
    login,
    loginnav,
  },
};
</script>

<style lang="scss" scoped>
// Large devices (desktops, 992px and up)
.sidebar-container {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.13);
    display: none;
}
.content-container {
    position: relative;
    background-color: #1c1c1c;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media (min-width: 992px) {
  .default {
    position: relative;
    width: 100%;
  }
  .content-container {
    width: 50%;
    margin-left: 50%;
  }
  .sidebar-container {
      display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 50%;
  }
}
</style>
