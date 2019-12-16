// HOC와는 다르게 각각의 컴포넌트에서 공통으로 사용할 데이터 요청 부분을
// mixins항목에 장착해서 사용함.
// mixins는 각 컴포넌트마다 필요한 장치를 붙여서 사용할 수 있는 솔루션인 셈.

import bus from '../utils/bus.js';

export default {
    created() {
        bus.$emit('start:spinner');
        this.$store.dispatch(`FETCH_LIST`, this.$route.name)
            .then(() => {
                bus.$emit('end:spinner');
                console.log(5);
            })
            .catch(() => {
                console.log('error');
            });
        localStorage.setItem('nav', this.$route.name);
    }
    
}