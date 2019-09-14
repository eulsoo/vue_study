<template>
  <div class="users">
    <h1>Users</h1>
    <p>유저를 검색해 주세요.</p>

    <div class="search">
      <input type="text" v-model="입력된id" placeholder="유저 번호를 검색해주세요." />
      <input type="button" value="검색" v-on:click="$router.push({
        name: 'users-detail',
        params: {
          id: 입력된id // 라우터의 :id 변수에 입력된id를 넣음
        }
      })">
    </div>

    <div class="user_detail">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      입력된id: null
    }
  },
  beforeRouteEnter:function(to, from, next) {
    console.log('before enter');
    next();
  },
  beforeRouteLeave:function(to, from, next) {
    console.log('before leave');
    next();
  },
  destroyed:function() {
    console.log('destroyed');
  },
  created:function() {
    console.log('created');
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.users {padding-top:40px;}
.users h1, .users h2, .users p {text-align: center;}
.search {text-align: center; }
.search input[type="text"] {border:1px solid black; padding:10px 20px;}
input[type="button"] {border:1px solid #999; padding:10px 20px; margin-left:5px;}

.user_detail {margin-top:40px; text-align: center}
</style>
