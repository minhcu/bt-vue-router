<template>
  <div class="default">
    <div class="sidebar-container">
      <navbar />
      <hero />
    </div>
    <div class="content-container">
      <slot />
    </div>
  </div>
</template>

<script>
import navbar from "../components/common/navbar.vue";
import hero from "../components/common/hero.vue";

export default {
  components: {
    navbar,
    hero,
  },
};
</script>

<style lang="scss" scoped>
// Large devices (desktops, 992px and up)
.sidebar-container {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.13);
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
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 50%;
  }
  .content-container {
    background-color: #1c1c1c;
  }
}
</style>
