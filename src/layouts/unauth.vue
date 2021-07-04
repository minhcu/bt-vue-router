<template>
  <div class="login">
    <login />
  </div>
</template>

<script>
import login from "../components/uncommon/login.vue";
export default {
  components: {
    login,
  },
};
</script>

<style lang="scss">
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>