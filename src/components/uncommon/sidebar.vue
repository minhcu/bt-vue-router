<template>
  <div class="sidebar">
    <div class="logo">
      <img
        src="../../assets/logo.png"
        v-on:click="$router.push('/')"
        alt="logo"
      />
    </div>
    <div class="secret-nav">
      <div class="nav-item" @click="$emit('changeTab','dashboard')">Dashboard</div>
      <div class="nav-item" @click="$emit('changeTab','profile')">Profile</div>
      <div class="nav-item" @click="$emit('changeTab','writepost')">Write a Post</div>
      <div class="nav-item" @click="$emit('changeTab','allpost')">All Post</div>
      <div class="nav-item" @click="$emit('changeTab','settings')">Settings</div>
      <div class="nav-item" @click="$emit('changeTab','help')">Help</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sidebar {
  background-color: #3b3f44;
  padding: 50px 50px;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    background-color: white;
    margin-bottom: 50px;
  }
  .secret-nav {
    display: flex;
    flex-direction: column;
    .nav-item {
      padding: 10px 20px;
      font-size: 30px;
      color: white;
      cursor: pointer;
    }
    .nav-item:hover {
      background-color: #545a61;
    }
  }
}
</style>