<template>
  <div id="app">
      <tool-bar></tool-bar>
      <main class="content">
        <transition name="fade">
          <router-view></router-view> 
        </transition>
        <spinner v-bind:loading="loadStatus"></spinner>
      </main>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus.js";

export default {
  data() {
    return {
      loadStatus:false,
    }
  },
  components: {
    ToolBar,
    Spinner
  },
  methods: {
    startSpinner() {
      this.loadStatus = true;
    },
    endSpinner() {
      this.loadStatus = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() { 
    // 에밋 이벤트 객체가 쌓이기 때문에 반드시 지워줌
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body {font-family: 'Playfair Display', serif; font-size:18px; padding:0; margin:0;}
a {color: black;}
* {margin:0; padding:0}
li {list-style-type: none;}
p + p {margin-top:20px}
#app {padding:0 20px}
.content {padding:30px 20px}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
