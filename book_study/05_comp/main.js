

var bus = new Vue({
    data: {
        count:0
    }
});

// 컴포넌트를 먼저 등록해야 합니다.
Vue.component('comp-child', {
    data: function () {
        return {score:200}
    },
    template: '<button v-on:click="handleClick">이벤트 실행</button>',
    methods: {
        // 버튼 클릭 이벤트 핸들러로 childs-event 실행하기
        handleClick: function () {
            this.$emit('childs-event', this.score);
            bus.$emit('bus-event', this.score);
        }
    },
    created: function() {
        this.$on('open', function () {
            this.score += 2000;
            console.log(this.score)
        });
    }
});

Vue.component('comp-child2', {
    template: '<li>{{ name }} HP.{{ hp }} \ <button v-on:click="doAttack">{{ aa.count }} 공격</button></li>',
    props:{ id:Number, name:String, hp:Number},
    methods: {
        // 버튼 클릭 이벤트 핸들러로 childs-event 실행하기
        doAttack: function () {
            this.$emit('attack', this.id);
        }
    },
    created: function() {
        bus.$on('bus-event', function(score){
            console.log('B가 ' + this.count++ + '받았다');
        });
        
    },
    computed:{
        aa: function() {
            return bus.$data;
        },
    }
});

Vue.component('comp-child3', {
    template: '<ul><slot v-for="item in list" v-bind:item="item"></slot></ul> ',
    data: function() {
        return {
            list: [
                { id: 1, name: '슬라임', hp: 100 },
                { id: 2, name: '고블린', hp: 200 },
                { id: 3, name: '드래곤', hp: 300 }
            ]
        }
    }
});

Vue.component('my-icon', {
    template: '<a href="#">push</a>',
    methods: {
        // 버튼 클릭 이벤트 핸들러로 childs-event 실행하기
        hclick: function () {
            console.log('눌렸다');
        }
    }
});

Vue.component('my-label',{
    template: '<div>{{ count }}</div>',
    props: ['count']
});

Vue.component('comp-board', {
    template: '<div>message board</div>'
});
Vue.component('comp-form', {
    template: '<div>Form<textarea v-model="message"></textarea></div>',
    data:function() {
        return {message:''}
    }
});

var app = new Vue({
    el: '#app',
    data: {
        order: true,
        list: [
            { id: 1, name: '사과', price: 100 },
            { id: 2, name: '바나나', price: 200 },
            { id: 3, name: '딸기', price: 300 },
            { id: 4, name: '오렌지', price: 400 },
            { id: 5, name: '메론', price: 500 }
        ],
        pData: 100,
        current: 'comp-board',
        show: true,
        count: 0
    },
    computed: {
        sortedList: function() {
            return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc')
        }
    },
    methods: {
        parentsMethod: function (c, p) {
            console.log('자식과 부모를 더한 값은 ' + (c + p) );
        },
        handleAttack: function (id) {
            var item = this.list.find(function(target){
                return target.id === id
            });

            if (item !== undefined && item.hp > 0) {
                item.hp -= 10;
            }

            this.hclick();
        },
        hclick: function () {
            console.log('실행된다.');
            this.$refs.doit.$emit('open')
        }
    }
});
