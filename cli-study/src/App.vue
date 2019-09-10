<template>
    <User></User>
</template>

<script>
import User from './components/User.vue';

export default {
  components: {
    User
  },
  data: () => ({
    title:'안녕하세요.',
    count:1
  }),
};
</script>

<style scoped>

</style>