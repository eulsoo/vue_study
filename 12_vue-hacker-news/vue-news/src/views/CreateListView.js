// mixins와 다르게 데이터를 요청하면서 뿌리는데 필요한 
// 컴포넌트를 render()로 처리한다.

import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function createListView(name) {
    return {
        // 재사용 컴포 옵션들
        name,
        created() {
            // 데이터를 페이지에 맞게 셋팅한다.
            bus.$emit('start:spinner');

            // setTimeout(() => {
                // 로딩바를 테스트 하기 위해 일부러 시간 지연.
                this.$store.dispatch(`FETCH_LIST`, this.$route.name)
                    .then(() => {
                        bus.$emit('end:spinner');
                    })
                    .catch(() => {
                        console.log('error');
                    });
            // });
            localStorage.setItem('nav', this.$route.name);
        },
        // 필요한 돔을 생성하기 위한 동적 렌더링
        render(createElement) {
            return createElement(ListView);
        }
    }
}