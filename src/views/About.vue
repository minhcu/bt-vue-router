<template>
  <div class="about">
      <div class="head">
          <img src="../assets/logo.png" >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, natus cum! Labore tenetur ad repellendus amet quidem eaque officiis nemo sed, natus, culpa deserunt reiciendis consectetur. Adipisci facilis sed impedit!</p>
      </div>
      <div class="body">
          <div class="section1">
              <div class="right">
                <h2>We tell stories that drives the heart.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere exercitationem repudiandae eaque nostrum? Quaerat sapiente ipsum reprehenderit perspiciatis ex vero, odio enim. Ab quos voluptatum delectus vero beatae magnam!</p>
              </div>
              <div class="left">
                <img src="../assets/Picture.png" >
              </div>
          </div>
          <div class="section2">
                <img src="../assets/Picture.png" >
                <h2>We tell stories that drives the heart.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere exercitationem repudiandae eaque nostrum? Quaerat sapiente ipsum reprehenderit perspiciatis ex vero, odio enim. Ab quos voluptatum delectus vero beatae magnam!</p>
          </div>
          <div class="section3">
                <h2>We tell stories that drives the heart.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facere exercitationem repudiandae eaque nostrum? Quaerat sapiente ipsum reprehenderit perspiciatis ex vero, odio enim. Ab quos voluptatum delectus vero beatae magnam!</p>
                <div class="imagelist">
                    <img src="../assets/Picture.png" />
                    <img src="../assets/Picture.png" />
                    <img src="../assets/Picture.png" />
                </div>
          </div>
      </div>
      <div class="head">
          <img src="../assets/logo.png" >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, natus cum! Labore tenetur ad repellendus amet quidem eaque officiis nemo sed, natus, culpa deserunt reiciendis consectetur. Adipisci facilis sed impedit!</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.about {
    .head {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 700px;
        p {
            width: 500px;
        }
    }
    .body {
        margin: 0 50px;
        padding-bottom: 100px;
        background-color: #1c1c1c;
        color: white;
        overflow: hidden;
        position: relative;
        .section1 {
            display: flex;
            padding: 100px 100px;
            position: relative;
            .right {
                width: 45%;
                padding-right: 100px;
                h2 {
                    font-size: 40px;
                }
                p {
                    font-size: 20px;
                }
            }
            .left {
                display: flex;
                justify-content: center;
                width: 55%;
            }
        }
        .section2 {
            width: 570px;
            margin: auto;
            margin-top: -200px;
            height: 1000px;
            position: relative;
            h2 {
                font-size: 40px;
            }
            p {
                font-size: 20px;
            }
        }
        .section3 {
            width: 1200px;
            margin: auto;
            margin-top: -200px;
            h2 {
                font-size: 40px;
            }
            p {
                font-size: 20px;
            }
            .imagelist {
                display: flex;
                img {
                    margin-right: 20px;
                }
            }
        }
    }
    .body::before {
        content: '';
        position: absolute;
        background-color: white;
        top: 0;
        bottom: 40%;
        right: 300px;
        width: 10px;
    }
    .body::after {
        content: '';
        position: absolute;
        background-color: white;
        bottom: 0;
        top: 30%;
        left: 200px;
        width: 10px;
    }
}
</style>