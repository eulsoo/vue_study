<template>
    <list-item></list-item>
</template>

<script>

import ListItem from '../components/ListItem.vue';
import listMixin from '../mixins/listMixin.js';
export default {
    components: {
        ListItem
    },
    mixins: [listMixin],
    created() {
        console.log('start')
    },
    destoryed() {
        console.log('end')
    }
}
</script>

<style>

</style>