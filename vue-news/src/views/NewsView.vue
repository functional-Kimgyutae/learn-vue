<template>
  <div>
    <ul class="news-list">
        <li v-for="item in this.$store.state.news" v-bind:key="item.id" class="post">
            <div class="points">
                {{ item.points }}
            </div>
            <div>
                <p class="news-title">
                    <a v-bind:href="item.url">
                        {{ item.title }}
                    </a>
                </p>
                <small class="link-text">
                by 
                <router-link class="link-text" :to="`/user/${item.user}`">{{item.user}}</router-link>
            </small>
            </div>
            <!-- 
            <a v-bind:href="item.url">
            {{ item.title }}
            </a>
            <small>
                {{ item.time_ago }} | by 
                <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
            </small> -->
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            users : []
        }
    },
    created() {
        this.$store.dispatch('FETCH_NEWS');
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