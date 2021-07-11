<template>
  <div class="hero">
      <img src="https://uppercasetheme.com/uppercase/wp-content/uploads/sites/11/demo-image-00001.jpg" alt="test">
      <h1 class="title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hero {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .title {
        position: absolute;
        z-index: 999;
        color: white;
        bottom: 0;
        left: 0;
        right: 0;
        margin-bottom: 60px;
        padding-left: 20px;
  padding-right: 20px;
    }
}
.hero::before {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.1);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
@media (min-width: 992px) {
.hero {
    .title {
        padding-left: 60px;
        padding-right: 60px;
    }
}
}
</style>