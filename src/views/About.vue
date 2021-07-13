<template>
  <div class="about">
    <div class="author">
      <div class="avatar">
        <img :src="author.avatar" alt="avatar">
      </div>
      <h2 class="name">
        {{author.name}}
      </h2>
      <div class="icon">
        <i class="fas fa-globe"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
      </div>
    </div>
    <div class="word">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt omnis molestiae enim consectetur ipsa fugiat, pariatur, cumque possimus quos sunt eum consequuntur ab alias necessitatibus est dolor. Id, quia? Molestiae!</p>
    </div>
    <hr class="line">
    <div class="posts">
      <p class="head">
        Latest from {{author.name}}
      </p>
      <div class="post-container">
        <p class="post" v-for="post in posts" :key="post.id" @click="$router.push('/blogs/' + post.id)">
        <i class="fas fa-angle-right"></i>
          {{post.title}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      posts: [],
      author: {}
    }
  },
  async created() {
    const authorData = await axios.get("http://localhost:3000/users");
    const posts = await axios.get("http://localhost:3000/posts");
    this.posts = posts.data.slice(1,5);
    this.author = authorData.data;
    return
  }
}
</script>

<style lang="scss" scoped>
.about {
  height: 100vh;
  display: flex;
  justify-content: center;
  color: white;
  flex-direction: column;
  
  .author {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .avatar {
    width: 40px;
    margin-right: 15px;
    img {
      width: inherit;
      border-radius: 50%;
    }
  }
  .name {
    margin-right: 10px;
  }
  .name:hover {
    color: #a4a4a5;
    cursor: pointer;
  }
  .icon {
    font-size: 16px;
    i {
      cursor: pointer;
      padding: 0 5px;
    }
    i:hover {
      color: #a4a4a5;
    }
  }
  .post {
    i {
      margin-right: 10px;
    }
  }
  .post:hover {
    color: #a4a4a5;
    cursor: pointer;
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: #49494b;
  }
}
@media (min-width: 992px) {
  .about {
    padding: 60px;
  }
}
</style>