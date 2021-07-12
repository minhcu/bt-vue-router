<template>
  <div class="toggle">
     <div class="btn" @click="$router.push('/login')">Login</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.toggle {
    position: fixed;
    top: 0;
    right: 20px;
    padding-top: 40px;
    .btn {
    color: white;
    font-weight: 700;
    cursor: pointer;
    border: solid 2px white;
    border-radius: 0px;
  }
  .btn:hover {
      background-color: white;
      color: black;
  }
}
</style>