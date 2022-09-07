<template>
  <div>
    <p>{{this.userInfo.id}}</p>
    <p>{{this.userInfo.karma}}</p>
    <p>{{this.userInfo.created}}</p>
  </div>
</template>

<script>


export default {
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
    created() { 
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER',{userName});
    }
}
</script>

<style>

</style>