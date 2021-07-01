<template>
  <div id="app">
  <transition name="fade"  mode="out-in">
      <component :is="layout">
        <transition name="slide-fade" mode="out-in">
          <router-view />
        </transition>
      </component>
    </transition>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
.slide-fade-enter-active {
  transition: all .3s ;
}
.slide-fade-leave-active {
  transition: all .3s ;
}
.slide-fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
.slide-fade-enter  {
  transform: translateX(30px);
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<script>
import defaultLayout from "./layouts/default.vue";
import unauthLayout from "./layouts/unauth.vue";
import secretLayout from "./layouts/secret.vue";
export default {
  components: {
    defaultLayout,
    unauthLayout,
    secretLayout,
  },
  computed: {
    layout() {
      if (this.$route.meta.layout === 'unauth') {
        return 'unauthLayout'
      } else if (this.$route.meta.layout === 'secret') {
        return 'secretLayout'
      }
      else {
        return 'defaultLayout'
      }
    }
  }
}
</script>
