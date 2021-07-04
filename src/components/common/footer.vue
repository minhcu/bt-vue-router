<template>
  <div class="footer col-12">
      <h2>Follow Me</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam natus quaerat quidem. Optio possimus eum tempora culpa reiciendis voluptates nulla sequi expedita blanditiis, modi quam ratione incidunt laudantium voluptate eos.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: #1c1c1c;
  text-align: center;
  color: white;
  h2 {
    font-size: 40px;
  }
  p {
    width: 500px;
    margin: auto;
  }
}

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
  .footer {
    p {
    width: 100%;
    margin: auto;
  }
  }
 }

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {

 }

</style>