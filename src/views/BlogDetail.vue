<template>
  <div class="blogdetail">
      <div class="header">
          <p>
              {{post.author}}
          </p>
      </div>
      <div class="content">
          <p>
              {{post.description}}
          </p>
          <h2>
              {{post.title}}
          </h2>
          <p>
              {{post.content}}
          </p>
          <p>
              {{post.content}}
          </p>
          <h2>
              {{post.title}}
          </h2>
          <p>
              {{post.content}}
          </p>
          <p>
              {{post.content}}
          </p>
          <h2>
              {{post.title}}
          </h2>
          <p>
              {{post.content}}
          </p>
          <p>
              {{post.content}}
          </p>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
    return {
      posts: [],
    };
  },
  async created() {
    try {
      const posts = await axios.get("http://localhost:3000/posts");
      this.posts = posts.data;
    } catch (e) {
      console.log(e);
    }
  },
  computed: {
      post() {
        const id = this.$route.params.id;
        return this.posts.find(element => element.id == id);
      }
  }
}
</script>

<style lang="scss" scoped>
.blogdetail {
    padding: 30px;
  color: white;
  .header {
      text-align: left;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
  }
  .header:hover {
      color: #a4a4a5;
  }
  .content {
      margin-top: 60px;
  }
}
@media (min-width: 992px) {
  .blogdetail {
    padding: 60px;
    padding-right: 120px;
    .header {
        text-align: right;
    }
  }
}
</style>