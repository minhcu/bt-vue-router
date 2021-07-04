<template>
  <div class="home">
    <div
      class="head"
      v-for="post in blog.slice(0, 1)"
      :key="post.id"
      @click="$router.push('/blogs/' + post.id)"
      :style="{ backgroundImage: 'url(' + post.image + ')' }"
    >
      <div class="featured-text">
        <p class="featured">featured article</p>
        <h2>
          {{ post.title }}
        </h2>
        <div class="info">
          <span>
            {{ post.author }}
          </span>
          <span>
            {{ post.date }}
          </span>
        </div>
        <p>
          {{ post.descript }}
        </p>
      </div>
    </div>
    <div class="blog container">
      <div class="row">
        <div
        class="post col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
        :id="post.id"
        :key="post.id"
        v-for="post in blog.slice(1, 4)"
        @click="$router.push('/blog/' + post.id)"
      >
        <div class="preview-image">
          <img :src="post.image" />
        </div>
        <div class="text">
          <h2>{{ post.title }}</h2>
          <p class="info">
            <span>
              {{ post.author }}
            </span>
            <span>
              {{ post.date }}
            </span>
          </p>
          <p class="descript">
            {{ post.descript }}
          </p>
        </div>
      </div>
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
          descript:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021",
        },
        {
          id: 1,
          title: "What is Lorem Ipsum?",
          descript:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021",
        },
        {
          id: 2,
          title: "What is Lorem Ipsum?",
          descript:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021",
        },
        {
          id: 3,
          title: "What is Lorem Ipsum?",
          descript:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021",
        },
        {
          id: 4,
          title: "What is Lorem Ipsum?",
          descript:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021",
        },
        {
          id: 5,
          title: "What is Lorem Ipsum?",
          descript:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021",
        },
        {
          id: 6,
          title: "What is Lorem Ipsum?",
          descript:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021",
        },
        {
          id: 7,
          title: "What is Lorem Ipsum?",
          descript:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021",
        },
        {
          id: 8,
          title: "What is Lorem Ipsum?",
          descript:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021",
        },
        {
          id: 9,
          title: "What is Lorem Ipsum?",
          descript:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          image: "https://i.ytimg.com/vi/Xz89Y-tNkRQ/maxresdefault.jpg",
          author: "Minh Dong",
          date: "26/06/2021",
        },
      ],
    };
  },
  computed: {
    background: function () {
      return this.post.image;
    },
  },
};
</script>

<style lang="scss">
.home {
  padding: 15px 25px;
  .head {
    height: 700px;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    position: relative;
    .featured-text {
      position: relative;
      background-color: white;
      width: 500px;
      margin-left: 100px;
      padding: 50px 20px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.205);
      .featured {
        color: grey;
        text-transform: uppercase;
        margin: 5px 0;
      }
      h2 {
        margin: 0;
        font-size: 40px;
      }
      .info {
        color: grey;
        span {
          margin-right: 10px;
        }
        margin: 10px 0;
      }
    }
  }
  .head:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.308);
  }
  .head::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .head:hover::before {
    background-color: rgba(0, 0, 0, 0.5);
  }
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {

 }

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { }
</style>