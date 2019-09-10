<template>
    <div class="detail">
        <h2>자세한 회원정보를 확인합니다.</h2>
        <ul>
            <li>이름 : {{ name }}</li>
            <li>주소 : {{ address }}</li>
            <li>전화 : {{ phone }}</li>
            <li>동물 : {{ hasDog }}</li>
        </ul>
        <button v-on:click="switchName()">이름변경</button>
        <p>{{ easyTime(editedDate) }}</p>
    </div>
</template>

<script>
import { eventBus } from '../main.js';
import { dateFormat } from '../mixins/dateFormat.js';

export default {
    data: function() {
        return {
            editedDate : null,
        }
    },
    props: ['name', 'address', 'phone', 'hasDog'],
    computed: {
        hasDogKr: function() {
            return this.hasDog === true ? '있음' : '없음';
        }
    },
    created: function() {
        eventBus.$on('userWasEdited', (date)=> {
            this.editedDate = date;
        })
    },
    mixins: [dateFormat]
}
</script>

<style>

</style>