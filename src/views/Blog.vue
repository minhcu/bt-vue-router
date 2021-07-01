<template>
  <div class="blog">
    <div class="post" :id="post.id" :key="post" v-for="post in blog" @click="$router.push('/blog/' + post.id)">
      <div class="preview-image">
        <img :src="post.image">
      </div>
      <div class="text">
        <h2> {{post.title}} </h2>
        <p class="info">
          <span>
            {{post.author}}
          </span>
          <span>
            {{post.date}}
          </span>
        </p>
        <p class="descript">
          {{post.descript}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      blog: [
        {
          id: 0,
          title: "What is Lorem Ipsum?",
          descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021"
        },
        {
          id: 1,
          title: "What is Lorem Ipsum?",
          descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021"
        },
        {
          id: 2,
          title: "What is Lorem Ipsum?",
          descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021"
        },
        {
          id: 3,
          title: "What is Lorem Ipsum?",
          descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021"
        },
        {
          id: 4,
          title: "What is Lorem Ipsum?",
          descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021"
        },
        {
          id: 5,
          title: "What is Lorem Ipsum?",
          descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021"
        },
        {
          id: 6,
          title: "What is Lorem Ipsum?",
          descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021"
        },
        {
          id: 7,
          title: "What is Lorem Ipsum?",
          descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021"
        },
        {
          id: 8,
          title: "What is Lorem Ipsum?",
          descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021"
        },
        {
          id: 9,
          title: "What is Lorem Ipsum?",
          descript: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.blog {
  width: 1200px;
  margin: 100px auto;
  .post {
    display: flex;
    cursor: pointer;
    margin: 30px 0;
    .preview-image {
      width: 30%;
      img {
        width: 100%; 
        height: 100%;
        object-fit: cover;
      }
    }
    .text {
      width: 70%;
      padding: 25px 25px;
      h2 {
        margin: 0;
        font-size: 30px;
      }
      .info {
        color: grey;
        span {
          margin-right: 10px;
        }
      }
    }
  }
  .post:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.205);
  }
}
</style>