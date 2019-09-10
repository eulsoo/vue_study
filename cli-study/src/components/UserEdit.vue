<template>
    <div class="edit">
        <h2>회원정보 수정</h2>
        <p>수정사항</p>
        <label>이름</label><input v-model="user.name"/><br/>
        <label>주소</label><input v-model="user.address"/><br/>
        <label>전화</label><input v-model="user.phone"/><br/>
        <input type="radio" v-model="user.hasDog" value="Yes" name="hasDog" /><label>Yes</label>
        <input type="radio" v-model="user.hasDog" value="No" name="hasDog"/><label>No</label>
        <button v-on:click="changeUser">수정완료</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    props: ['name', 'address', 'phone', 'hasDog'],
    data: function() {
        return {
            user: {}
        }
    },
    created: function () {
        this.user.name = this.name;
        this.user.address = this.address;
        this.user.phone = this.phone;
        this.user.hasDog = this.hasDog;
    },
    methods: {
        changeUser: function(){
            this.$emit('child', this.user);
            // eventBus.$emit('userWasEdited', new Date()); 
            // eventBus에 에밋으로 신호를 보냄. 이때 eventBus는 형제를 이어주는 뷰인스턴스 임.
            eventBus.userWasEdited(new Date());
        }
    }
}
</script>

<style>
.edit input {background-color:white; border:1px solid #999; padding:0 10px}
</style>