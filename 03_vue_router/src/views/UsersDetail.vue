<template>
  <div>
    <h2>Users Detail</h2>
    <p>유저번호 : {{ 입력된id }}</p>
    <input type="button" value="수정하기" v-on:click="edit"/>
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
      this.$router.push({ name: 'users-edit' })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
