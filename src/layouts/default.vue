<template>
  <div>
    <navbar/>
    <slot/>
    <footera/>
  </div>
</template>

<script>
import navbar from "../components/common/navbar.vue";
import footera from "../components/common/footer.vue";
export default {
  components: {
      navbar,
      footera
  }
}
</script>

<style>

</style>