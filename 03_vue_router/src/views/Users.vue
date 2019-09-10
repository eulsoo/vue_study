<template>
  <div>
    <h1>users</h1>
    이 유저의 번호는 {{ userId }} 
    {{ $route.params.name }}
  </div>
</template>
<script>
export default {
  computed: {
    userId: function() {
      return this.$route.params.userId; // 우리가 입력한 주소 뒤의 값을 가져옴
    }
  },
  created: function() {
    console.log('router', this.$router)
    console.log('router', this.$route)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
