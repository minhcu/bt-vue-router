<template>
  <div class="home">
    <div class="post">
      <div class="banner">
        <img src="" alt="">
      </div>
      <div class="category"></div>
      <h2 class="title"></h2>
      <p class="description"></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
    }
  },
  async created() {
    try {
      const posts = await axios.get("http://localhost:3000/posts")
      this.posts = posts.data;
    } catch (e) {
      console.log(e)
    }
  }
};
</script>

<style lang="scss" scoped>
.home {}
</style>
