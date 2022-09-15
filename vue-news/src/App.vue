<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page"> 
      <router-view></router-view>
    </transition>
    <any-spinner :loading="SpinnerLoadingStatus" ></any-spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import AnySpinner from "./components/AnySpinner.vue"
import bus from "./utils/bus.js"
export default {
  components: {
    ToolBar,
    AnySpinner,
  },
  data() {
    return {
      SpinnerLoadingStatus : false,
    }
  },
  methods: {
    startSpinner() {
      this.SpinnerLoadingStatus = true;
      console.log(this.SpinnerLoadingStatus);
    },
    endSpinner() {
      this.SpinnerLoadingStatus = false;
      console.log(this.SpinnerLoadingStatus);
    }
  },
  created() {
    bus.$on('start:spinner',this.startSpinner);
    bus.$on('end:spinner',this.endSpinner);
  },
  befrorDestory() {
    bus.$off('start:spinner',this.startSpinner);
    bus.$off('end:spinner',this.endSpinner);
  }
}
</script>

<style>
body {
  padding: 0;
  margin:0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

</style>
