<template>
  <div class="secret">
    <sidebar @changeTab="currentComponent"/>
    <div class="content">
      <navbarsecret />
      <component :is="currentTab"></component>
    </div>
  </div>
</template>

<script>
import sidebar from "../components/uncommon/sidebar.vue";
import navbarsecret from "../components/uncommon/navbarsecret.vue";
import dashboard from "../components/common/admin/dashboard.vue";
import profile from "../components/common/admin/profile.vue";
import writepost from "../components/common/admin/writepost.vue";
import allpost from "../components/common/admin/allpost.vue";
import settings from "../components/common/admin/settings.vue";
import help from "../components/common/admin/help.vue";

export default {
  data() {
    return {
      currentTab: "dashboard"
    }
  },
  components: {
    sidebar,
    navbarsecret,
    dashboard,
    profile,
    writepost,
    allpost,
    settings,
    help
  },
  methods: {
    currentComponent(data) {
      this.currentTab = data  
    }
  }
};
</script>

<style lang="scss">
.secret {
  height: 100vh;
  display: flex;
  .sidebar {
    height: 100%;
    width: 30%;
  }
  .content {
    width: 70%;
  }
}
</style>