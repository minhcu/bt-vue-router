<template>
  <div class="default">
    <go-back/>
    <div class="sidebar-container">
      <navsidebar v-bind:class="{active: showSideBar}"/>
      <navbar @toggleMenu="toggleMenu"/>
      <hero />
    </div>
    <div class="content-container">
      <slot />
    </div>
  </div>
</template>

<script>
import navbar from "../components/common/navbar.vue";
import navsidebar from "../components/common/navsidebar.vue";
import hero from "../components/common/hero.vue";
import goBack from "../components/common/goBack.vue";

export default {
  components: {
    navbar,
    hero,
    goBack,
    navsidebar
  },
  data() {
    return {
      showSideBar: false,
    }
  },
  methods: {
    toggleMenu() {
      this.showSideBar = !this.showSideBar
    }
  }
};
</script>

<style lang="scss" scoped>
// Large devices (desktops, 992px and up)
.sidebar-container {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.13);
    position: relative;
}
.content-container {
    background-color: #1c1c1c;
    min-height: 100vh;
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
}
</style>
