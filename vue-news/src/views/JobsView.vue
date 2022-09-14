<template>
    <div>
        <list-item></list-item>
        <!-- <ul class="news-list">
        <li v-for="item in this.$store.state.jobs" v-bind:key="item.id" class="post">
            <div class="points">
                {{ item.points || 0 }}
            </div>
            <div>
                <p class="news-title">
                    <a :href="item.url">
                        {{ item.title }}
                    </a>
                </p>
                <small class="link-text">
                    {{ item.time_ago }} by 
                <a :href="item.url">{{ item.domain}}</a>
            </small>
            </div>
        </li>
    </ul> -->

    </div>
  </template>
  
  <script>
import ListItem from "../components/ListItem.vue"
  export default {
    components: {
        ListItem,
    }
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