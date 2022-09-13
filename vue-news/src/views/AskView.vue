<template>
    <div>
    <ul class="news-list">
        <li v-for="item in fetchedAsk" v-bind:key="item.id" class="post">
            <div class="points">
                {{ item.points }}
            </div>
            <div>
                <p class="news-title">
                    <router-link :to="`item/${item.id}`">
                        {{ item.title }}
                    </router-link>
                </p>
                <small class="link-text">
                    {{ item.time_ago }} by 
                <router-link class="link-text" :to="`/user/${item.user}`">{{item.user}}</router-link>
            </small>
            </div>
        </li>
    </ul>
  </div>
  </template>
  
  <script>
import { mapGetters } from 'vuex';

  export default {
      computed: {
        ...mapGetters({
            fetchedAsk:"fetchedAsk",
        })
      },
      created() {
        this.$store.dispatch("FETCH_ASKS")
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