<template>
  <div>
    <h2>Users Edit</h2>
    <p>{{ 입력된id }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    입력된id: function() {
      return this.$route.params.id
    }
  },
  methods: {
    edit: function() {
      this.$router.push({ name: 'users-edit' }) // 라우터객체에 객체형태로 어떤 컴포넌트를 호출할지 알려준다.
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
