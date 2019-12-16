<template>
    <ol class="list">
        <li v-for="item in listItems" v-bind:key="item.id">
            <b>{{ item.time_ago }}</b>
            <template v-if="$route.name === 'news'">
                <span> by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link></span><br/>
                <a v-bind:href="item.url">{{ item.title }}</a>
                <router-link v-bind:to="`/item/${item.id}`"><i>({{item.comments_count}})</i></router-link>
            </template>
            <template v-else-if="$route.name === 'ask'">
                <span> by <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link></span><br/>
                <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}<i>({{item.comments_count}})</i></router-link>
            </template>
            <template v-else>
                <span> by {{ item.domain }}</span><br/>
                <a v-bind:href="item.url">{{ item.title }}</a>
            </template>
        </li>    
    </ol>
</template>

<script>

export default {
    computed: {
        listItems() {
            return this.$store.state.list;
        },
    }
}
</script>

<style>
.list li {padding-left:10px; list-style-type: none}
.list li + li {margin-top:20px}
.list li > a {text-decoration: none; font-size:22px}
.list li > b {font-style: normal; font-size:12px; color:#999}
.list li span {font-style: normal; font-weight:700; font-size:12px; color:#999;}
.list li i {font-style: normal; font-size:12px; color:cornflowerblue}
</style>