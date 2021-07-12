<template>
  <div class="profile">
    <h2>Profile</h2>
    <div class="user-container">
      <div class="avatar">
        <img :src="user.avatar" alt="" />
      </div>
      <h2 class="name">
        {{ user.name }}
      </h2>
      <p class="phone">
        {{ user.phone }}
      </p>
      <p class="address">
        {{ user.address }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async created() {
    const user = await axios.get("http://localhost:3000/users");
    this.user = user.data;
  },
  data() {
    return {
      user: {},
    };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  height: calc(100vh - 66px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .user-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
  .avatar {
    padding: 20px 0;
    margin-bottom: 10px;
    img {
      border-radius: 50%;
    }
  }
}
</style>
