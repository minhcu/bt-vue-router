<template>
  <div class="navbar">
    <div class="logo">
      <img src="../../assets/logo.png" alt="logo" />
    </div>
    <div class="nav">
      <div class="social">
        <a href="#">
          <i class="fab fa-facebook"></i>
          <span>69</span>
        </a>
      </div>
      <div class="social">
        <a href="#">
          <i class="fab fa-twitter"></i>
          <span>69</span>
        </a>
      </div>
      <div class="social">
        <a href="#">
          <i class="fab fa-instagram"></i>
          <span>69</span>
        </a>
      </div>
      <div class="btn">Login</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 999;
  .logo {
      cursor: pointer;
  }
  .nav {
    display: flex;
    align-items: center;
    font-weight: 700;
  }
  .social {
    margin: 0 5px;
    font-size: 12px;
    display: none;
    a {
      color: white;
      text-decoration: none;
      span {
          margin: 3px;
      }
    }
    a:hover {
      opacity: 0.5;
      transition: 0.2s ease;
    }
  }
  .btn {
    border: 2px solid rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 0px;
    color: white;
    font-size: 12px;
    padding: 12px 20px;
    margin-left: 15px;
  }
  .btn:hover {
    color: black;
    background-color: white;
    border-color: white;
    transition: 0.2s ease;
  }
}
@media (min-width: 992px) {
  .navbar {
    padding-left: 60px;
    padding-right: 60px;
    .social {
    display: block;
    }
  }
}
</style>
