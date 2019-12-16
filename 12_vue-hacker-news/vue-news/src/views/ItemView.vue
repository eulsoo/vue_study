<template>
  <div>
      <user-profile v-bind:userInfo="askItem" class="ask">
          <template slot="askUser">
                <span>by</span>
                <strong>{{askItem.user}}</strong>
                <b>- {{askItem.time_ago}}</b>
          </template>
      </user-profile>
      <h2>{{ askItem.title }}</h2>
      <div v-html="askItem.content"></div>
      <ul class="comments">
            <li 
                v-for="comment in askItem.comments" 
                v-bind:key="comment.id"
                >
                <div v-html="comment.content"></div>
            </li>
      </ul>
      
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
    components: {
        UserProfile
    },
    computed: {
        askItem() {
            return this.$store.state.item;
        }
    },
    created() {
        const askId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', askId);
    }
}

</script>

<style scoped>
.comments {margin-top:30px;font-size:16px;color:rgb(131, 96, 8)}
.comments ul {margin:10px 0}
.comments li {
    position: relative;
    padding-left:40px;
    margin-top:40px; 
    padding-top:40px; 
    border-top:1px solid rgb(100, 65, 25)
    }
.comments li::before {
    content:'';
    background-image:url('../assets/arrow-right-solid.svg');
    background-size: 100% 100%;
    width:24px;
    height:24px;
    position:absolute;
    left:0;
    top:40px;
}
.user_profile {}
.user_profile > span {margin-right:5px}
.user_profile > strong {color:#2455c3; margin-right:10px;}
.user_profile > b {font-size: 14px; color:#999}
.user_profile .created {font-size:18px; color:red; margin-right:20px;}
.user_profile .karma {font-size:18px; color:red; margin-right:20px;}
</style>