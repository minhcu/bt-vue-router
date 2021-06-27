<template>
  <div class="blogview">
      <div class="post">
        <div class="banner">
            <img :src="blog[postview].image" alt="">
        </div>
        <div class="text">
            <h2>
                {{blog[postview].title}}
            </h2>
            <div class="info">
                <span>
                    {{blog[postview].author}}
                </span>
                <span>
                    {{blog[postview].date}}
                </span>
            </div>
            <p>
                {{blog[postview].descript}}
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
  },
  computed: {
    postview: function () {
        return this.$route.params.id
    }
  }
}
</script>

<style lang="scss">
.blogview {
    padding: 15px 25px;
    .post {
        .banner {
            width: 100%;
            img {
                width: 100%;
            }
        }
        .text {
            width: 1200px;
            margin: auto;
            h2 {
            font-size: 40px;
            text-align: center;
            }
            .info {
                text-align: center;
                color: grey;
                span {
                    margin: 0 10px;
                }
            }
        }
    }
}
</style>