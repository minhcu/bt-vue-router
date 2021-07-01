<template>
    <div class="secretnav">
        <div class="logout" @click="$router.push('/')">
            Log out
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.secretnav {
    display: flex;
    justify-content: flex-end;
    padding: 15px 25px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.247);
    .logout {
    text-decoration: none;
    color: #1c1c1c;
    font-weight: 700;
    text-transform: uppercase;
    padding: 5px 15px;
    border: solid 1px #1c1c1c;
    cursor: pointer;
    }
    .logout:hover {
    background-color: #1c1c1c;
    color: white;
    transition: .3s ease;
    }
}
</style>