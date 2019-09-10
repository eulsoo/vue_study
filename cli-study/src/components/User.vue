<template>
    <div class="user">
        <h1>User 컴포넌트</h1>
        <p>이름 : {{ name }}</p>
        <p>{{ easyTime(createdAt)}}</p>
        <p>{{ helloMix }}</p>
        <div class="act"><button v-on:click="changeName">변경</button></div>

        <UserDetail 
            v-bind:name="name"
            v-bind:address="address"
            v-bind:phone="phone"
            v-bind:hasDog="hasDog"
        ></UserDetail>
        <UserEdit
            v-bind:name="name"
            v-bind:address="address"
            v-bind:phone="phone"
            v-bind:hasDog="hasDog"
            v-on:child="parents"
        ></UserEdit>
        </div>
    </div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';
import { dateFormat } from '../mixins/dateFormat.js';

export default {
    components: {
        UserDetail,
        UserEdit
    },
    data: function(){
        return {
            name: 'Hoza',
            address: 'Seoul',
            phone: '1234-5678',
            hasDog: 'Yes',
            createdAt: null
        }
    },
    methods: {
        changeName : function() {
            this.name = 'hoza';
        },
        parents: function(user) {
            this.name = user.name;
            this.address = user.address;
            this.phone = user.phone;
            this.hasDog = user.hasDog;
            console.log('부모가 받았어!');
        }
    },
    created: function() {
        this.createdAt = new Date();
    },
    computed: {
        helloMix: function() {
            return this.mixData + '안녕하세요.'
        }
    },
    mixins: [dateFormat]
}
</script>

<style>
.user {overflow: hidden; width: 800px; margin:0 auto; padding:20px; background-color: deepskyblue}
.user button { border:1px solid black; padding:10px 20px; background-color: lime}
.act {margin:20px 0}
.detail {background-color: gold; padding:20px; width:50%; box-sizing: border-box; float:left}
.edit {background-color: lemonchiffon; padding:20px; width:50%; box-sizing: border-box;float:left}
</style>