<template>
  <div class="navbar">
    <div class="toggle" @click="$emit('toggleMenu')">
      <i class="fas fa-angle-left"></i>
    </div>
    <div class="logo">
      <img src="../../assets/logo.png" @click="$router.push('/')" alt="logo" />
    </div>
    <div class="secret-nav">
      <router-link
        v-for="link in routerLink"
        :key="link.id"
        class="nav-item"
        :class="[router == link.name ? 'active' : '']"
        :to="`${link.goTo}`"
        @click.native="$emit('toggleMenu')"
      >
        {{ link.name }}
      </router-link>

      <!-- <router-link class="nav-item" to="/admin/dashboard" @click.native="$emit('toggleMenu')">
        Dashboard why
      </router-link>
      <router-link class="nav-item" to="/admin/profile" @click.native="$emit('toggleMenu')">
      Profile
      </router-link>
      <router-link class="nav-item" to="/admin/posting" @click.native="$emit('toggleMenu')">
        Write a Post
      </router-link>
      <router-link class="nav-item" to="/admin/archives" @click.native="$emit('toggleMenu')">
        All Post
      </router-link>
      <router-link class="nav-item" to="/admin/settings" @click.native="$emit('toggleMenu')">
        Settings
      </router-link>
      <router-link class="nav-item" to="/admin/help" @click.native="$emit('toggleMenu')">
      Help
      </router-link> -->
    </div>
    <div class="copyright">
      <p>This is copy right®</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerLink: [
        {
          id: 1,
          name: "Dashboard",
          goTo: "dashboard",
        },
        {
          id: 2,
          name: "Profile",
          goTo: "profile",
        },
        {
          id: 3,
          name: "Write a Post",
          goTo: "posting",
        },
        {
          id: 4,
          name: "All Posts",
          goTo: "archives",
        },
        {
          id: 5,
          name: "Settings",
          goTo: "settings",
        },
        {
          id: 6,
          name: "Help",
          goTo: "help",
        },
      ],
    };
  },
  computed: {
    router() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
  .toggle {
    position: absolute;
    color: white;
    font-weight: 700;
    font-size: 50px;
    top: 20px;
    right: 50px;
  }
  .logo {
    cursor: pointer;
    margin-top: 30px;
    img {
      width: 100%;
    }
  }
  .secret-nav {
    display: flex;
    flex-direction: column;
  }
  .nav-item {
    padding: 10px 20px;
    font-size: 30px;
    text-align: center;
    color: white;
    cursor: pointer;
    text-decoration: none;
    border: 2px solid #1c1c1c;
  }
  .nav-item:hover {
    background-color: #545a61;
  }
  .active {
    border: 2px solid white;
    text-decoration: underline;
  }
  .copyright {
    color: white;
  }
}
@media (min-width: 992px) {
  .navbar {
    padding: 0;
    .toggle {
      display: none;
    }
    .nav-item {
      text-align: left;
    }
  }
}
</style>
