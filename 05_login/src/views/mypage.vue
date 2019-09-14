<template>
    <div>
        <h1>{{ isLoginInfo.name }}님 환영합니다.</h1>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['isLoginInfo'])
    }
}
</script>