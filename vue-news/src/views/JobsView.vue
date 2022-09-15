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
    .news-list {
        margin: 0;
        padding: 0;
    }
    
    .post {
        list-style: none;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
    }
    
    .points {
        width: 80px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#42b883;
    }
    .news-title {
        margin: 0;
    }
    .link-text {
        color: #828282;
    }
    </style>