<template>
  <div class="home container">
    <div class="row">
      <div class="post col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" v-for="post in postList" :key="post.id">
          <div class="banner" @click="$router.push('/blogs/' + post.id)">
            <img :src="post.banner" alt="" />
          </div>
          <div class="content">
            <div class="category">
              {{ post.category }}
            </div>
            <h2 class="title" @click="$router.push('/blogs/' + post.id)">
              {{ post.title }}
            </h2>
            <p class="description">
              {{ post.description }}
            </p>
          </div>
        </div>
    </div>
    <div class="row">
      <pagination :records="records" v-model="page" :per-page="recordPerPage">
      </pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import pagination from "vue-pagination-2";
export default {
  data() {
    return {
      posts: [],
      page: 1,
      records: 0,
      recordPerPage: 10
    };
  },
  async created() {
    try {
      const posts = await axios.get("http://localhost:3000/posts");
      this.posts = posts.data;
      this.records = this.posts.length;
    } catch (e) {
      console.log(e);
    }
  },
  components: {
    pagination,
  },
  computed: {
    postList() {
      const start = (this.page-1) * this.recordPerPage;
      const end = this.page * this.recordPerPage;
      return this.posts.slice(start,end)
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 20px;
  color: white;
  .post {
    padding: 20px;
  }
  .banner {
    cursor: pointer;
    position: relative;
    img {
      width: 100%;
    }
  }
  .banner::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 0;
  }
  .banner:hover::before {
    opacity: 1;
  }
  .content {
    margin-top: 20px;
  }
  .category {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
  }
  .category:hover {
    color: #a4a4a5;
    transition: 0.2s ease;
  }
  .title {
    font-size: 24px;
    margin: 10px 0;
    cursor: pointer;
  }
  .title:hover {
    color: #a4a4a5;
    transition: 0.2s ease;
  }
  .description {
    color: #a4a4a5;
  }
}
@media (min-width: 992px) {
  .home {
    padding: 60px;
    padding-right: 120px;
  }
}
</style>
