<template>
  <header>
      <router-link 
        to="/news" 
        v-bind:class="{active:isNav.isNews}" 
        v-on:click.native="setNav()"
      >News</router-link>
      <router-link 
        to="/ask" 
        v-bind:class="{active:isNav.isAsk}" 
        v-on:click.native="setNav()"
      >Ask</router-link>
      <router-link 
        to="/jobs" 
        v-bind:class="{active:isNav.isJobs}"
        v-on:click.native="setNav()"
      >Jobs</router-link>
      <h1>Hacker News</h1>
  </header>
</template>

<script>
export default {
    data() {
        return {
            isNav : {
                isNews:true,
                isAsk:false,
                isJobs:false
            }
        }
    },
    methods : {
        setNav() {
            let currentName = localStorage.getItem('nav');
            let uppCrrName = currentName.charAt(0).toUpperCase() + currentName.slice(1);

            for ( let item in this.isNav ) {
                if (item === `is${uppCrrName}`) {
                    this.isNav[item] = true;
                } else {
                    this.isNav[item] = false;
                }
            }

        }
    }
}
</script>

<style scoped>
header {
    position: relative;
    padding:20px 30px;
    background:black;
    font-size:24px;
    border-bottom:8px solid lime;
}
header h1 {position: absolute; color:white; top:21px; right:30px; font-size:18px;}
header a {color:white; text-decoration: none; padding-bottom:3px; }
header a + a {margin-left:20px}
header .active {
    color:coral;
    border-bottom:3px solid coral
}
</style>
