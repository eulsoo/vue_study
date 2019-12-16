<template >
      <div class="user_profile" slot="listTop">
            <strong>User name : {{userInfo.id}}</strong>
            <b class="created" v-if="isNav === 'news'">Write : {{userInfo.created}}</b>
            <b class="created" v-else>Created : {{userInfo.created}}</b>
            <b class="karma">Karma : {{userInfo.karma}}</b>
      </div>
</template>

<script>

export default {
    computed: {
        userInfo () {
            return this.$store.state.user;
        },
        isNav () {
           return localStorage.getItem('nav');
        }
    },
    created() {
        const userName = this.$route.params.id;        
        this.$store.dispatch('FETCH_USER', userName);
    }
}
</script>

<style scoped>
.user_profile {font-size: 24px}
.user_profile > * {display: block;}
.user_profile > span {margin-right:5px}
.user_profile > strong {color:#2455c3; }
.user_profile .created {}
.user_profile .karma {}
</style>