<template>
    <div>
        <list-item></list-item>
    </div>
  </template>
  
  <script>
import ListItem from "../components/ListItem.vue"
import ListMixin from "../mixins/ListMixin.js"
export default {
  components: {
    ListItem,
  },
  mixins: [ListMixin],
    // created() {
    //     bus.$emit("start:spinner")
    //     setTimeout(() => {
    //       this.$store.dispatch("FETCH_JOBS")
    //       .then(()=> {
    //         bus.$emit('end:spinner');
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //     }, 3000);
    // }
    
  }
  </script>
  
  <style scoped>

    </style>