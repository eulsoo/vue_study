<template>
    <div class="todo">
        <h1>TO DO LIST</h1>
        <p>전체: {{ todoList.length }} / 완료된 일: {{ countDone }}/ 남은 일: {{
            todoList.length - countDone }}</p>
        <list 
            v-bind:todoList="todoList" 
            v-on:statusControl="statusControl"
        ></list>
        <add 
            v-on:listAdd="listAdd"
            v-on:listEdit="listEdit"
        ></add>
    </div>
</template>
<script>
import list from './list.vue';
import add from './add.vue';

export default {
    components : {
        list, add
    },
    data:function() {
        return {
            todoList: []
        }
    },
    methods: {
        listAdd: function(memo) {
            this.todoList.push({memo: memo, status: 'created'});
        },
        listEdit: function(memo, index) {
            this.todoList[index].memo = memo;
        },
        statusControl: function(index, status) {
            if (status === 'deleted') {
                this.todoList.splice(index, 1);
            } else {
                this.todoList[index].status = status;
            }
        }
    },
    computed: {
        countDone: function() {
            let count = 0;
            this.todoList.forEach(function(item){
                if (item.status === 'done') {
                    count++
                }
            });
            return count;
        }

    }
}
</script>
<style>
.todo {overflow:hidden; margin:0 auto; width:80%; padding:20px; background-color: oldlace}
.list {float:left; width:48%;}
.add {float:right; width:48%; background-color:mediumspringgreen}
</style>