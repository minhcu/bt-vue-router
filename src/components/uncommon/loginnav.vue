<template>
  <div class="navbar">
    <div class="logo">
      <img src="../../assets/logo.png" @click="$router.push('/')" alt="logo" />
    </div>
    <div class="nav">
      <div class="btn" @click="$router.push('/')">Go Back</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  padding: 20px;
  .logo {
      cursor: pointer;
  }
  .nav {
    display: flex;
    align-items: center;
    font-weight: 700;
  }
  .btn {
    border: 2px solid white;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 0px;
    color: white;
    font-size: 12px;
    padding: 12px 20px;
    margin-left: 15px;
  }
  .btn:hover {
    color: black;
    background-color: white;
    border-color: white;
    transition: 0.2s ease;
  }
}
@media (min-width: 992px) {
  .navbar {
    display: none;
    padding-left: 60px;
    padding-right: 60px;
    .social {
    display: block;
    }
  }
}
</style>
