<template>
    <div class="secret">
        <sidebar/>
        <div class="content">
            <navbarsecret/>
        </div>
    </div>
</template>

<script>
import sidebar from "../components/uncommon/sidebar.vue";
import navbarsecret from "../components/uncommon/navbarsecret.vue";
export default {
   components: {
    sidebar,
    navbarsecret,
  }
}
</script>

<style lang="scss">
.secret {
    height: 100vh;
    display: flex;
    .sidebar {
        height: 100%;
        width: 30%;
    }
    .content {
        width: 70%;
    }
}
</style>