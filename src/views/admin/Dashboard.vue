<template>
  <div class="dashboard">
      <h2>Dashboard</h2>
      <img src="https://i.kym-cdn.com/entries/icons/facebook/000/029/959/Screen_Shot_2019-06-05_at_1.26.32_PM.jpg" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.dashboard {
    height: calc(100vh - 66px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        max-width: 792px;
        max-height: 446px;
    }
}
</style>