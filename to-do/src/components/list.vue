<template>
    <div class="list">
        <div 
            v-bind:class="{'done' : list.status === 'done'}"
            class="item" 
            v-for="(list, index) in todoList"
            v-bind:key="index"
        >
            <p>{{list.memo}}</p>
            <button 
                v-if="list.status === 'created'"
                v-on:click="$emit('statusControl', index, 'done')"
            ><i class="fas fa-check"></i>
            </button>
            <button
                v-else
                v-on:click="$emit('statusControl', index, 'created')"
            ><i class="fas fa-redo-alt"></i>
            </button>
            <button
                v-on:click="$emit('statusControl', index, 'deleted')"
            ><i class="far fa-trash-alt"></i>
            </button>
            <button
                v-if="list.status === 'created'"
                v-on:click="listEdit(list.memo, index)"
            ><i class="far fa-edit"></i>
            </button>
        </div>

    </div>
</template>
<script>
import { eventBus } from '../main.js';
export default {
    props: ['todoList'],
    methods: {
        listEdit: function(memo, index) { // list.vue에서 사용하는 listEdit
            eventBus.listEdit(memo, index); // 버스에 등록해둔 listEdit
        }
    }
}
</script>
<style scoped>
.list > .item {padding: 15px; background-color:white;} 
.list > .item.done {background-color: #e4e4e4}
.list > .item.done > p {text-decoration-line: line-through; color:#999}
.list > .item + .item {margin-top:10px;}
.list > .item > p {margin:0}
</style>