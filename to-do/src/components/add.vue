<template>
    <div class="add">
        <textarea 
            v-model="memo" 
            label="투두리스트를 입력해 주세요" 
            value=""
        ></textarea>
        <button v-if="mode === 'add'" v-on:click="listAdd">리스트 추가</button>
        <button v-else v-on:click="listEdit">리스트 수정</button>
    </div>
</template>
<script>
import { eventBus } from '../main.js';

export default {
    data: function() {
        return {
            memo: null,
            index: null,
            mode: 'add'
        }
    },
    created: function() {
        eventBus.$on('edited', (memo, index) => {
            this.memo = memo;
            this.index = index;
            this.mode = 'edit';
        });
    },
    methods: { 
        listAdd: function() {
            if (!this.memo) { 
                alert ("아무것도 입력하지 않았음");
            }
            this.$emit("listAdd", this.memo);
            this.memo = null;
        },
        listEdit: function() {
            if (!this.memo) { 
                alert ("아무것도 입력하지 않았음");
            }
            this.$emit("listEdit", this.memo, this.index);
            this.mode = 'add';
            this.memo = null;
        }
    }
}
</script>
<style scoped>
.add {padding:20px; box-sizing: border-box}
.add > textarea {width:100%; margin:0 auto; display:block; box-sizing:border-box; border:none; margin-bottom:20px}
.add > button {width:80%; margin:0 auto; display:block; border:1px solid #999; padding:10px 20px}
</style>>

</style>