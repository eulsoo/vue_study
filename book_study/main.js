var state = {count:1}
var childComponent = {
    // 클래스이름을 전달받아 사용할 경우에는 객체를 사용해야한다.
    // 객체의 항목이름이 원하는 클래스 이름이 되고, 오른쪽은 불린형식으로
    // 확인을 받게 되어 있다. true이면 써도된다는 것이고, false는 안된다는
    // 의미이다. 이렇게 한것은 클래스이름이라는 것의 사용되는 상황자체가, 
    // 데이터가 어떨때 이름을 주고, 아닐때 빼야 하기 때문에 이렇게
    // {이름:불린} 식으로 사용법을 정한것 같다
    template:'<li>{{ name }} {{ hp }} \ <button v-on:click="doAttack">공격하기</button></li>',
    data: function () {
        return {
            message4: '안녕'
        }
    },
    props:['name', 'hp'],
    methods: {
        doAttack: function(){
            // this.hp -= 10;
            this.$emit('childs-event');
        }
    }
}
var myComponent = {
    //부모쪽에서는 속성을 통해서 자식컴포넌트로 정보를 전달한다. 
    //그러면 자식쪽에서는 props(배열)의 이름을 통해서 사용할 수 있게된다. 
    template: '<ul><comp-child v-for="item in persona" v-bind:key="item.id" v-bind:name="item.name" v-bind:hp="item.hp" v-on:childs-event="say" ></comp-child></ul>',
    components: {
        'comp-child': childComponent
    },
    data: function () {
        return {
            message3: 'hello vue.js',
            eulsoo:true
        }
    },
    methods: {
        say: function () {
            console.log(this.message3);
            this.$emit('c-event');
        }
    },
    computed: {
        yo: function () {
            return this.message3;
        }
    },
    props: ['persona']
}
var app = new Vue({
    el: '#app',
    components: {
        'my-component': myComponent
    },
    data: {
        message: 'asdfa',
        message2: 'no-js',
        num:20,
        show: true,
        state: state,
        scroll: 0,
        isChild: true,
        isActive: false,
        textColor: 'red',
        bgColor: 'lightgray',
        val: 50,
        list:[],
        sum:0,
        preview:'',
        price:'100',
        classObject: {
            clild: true,
            'is-active': false
        },
        styleObject: {
            color: 'red',
            backgroundColor: 'lightgray'
        },
        item: {
            id: 1,
            src: 'item1.jpg',
            alt: '상품',
            width: 200,
            height: 200,
            style: 'border:2px solid red; padding:10px'
        },
        radius: 50,
        ok: true,
        name: '카메라',
        persona: [
            {id:1, name:'adsf', hp:100},
            {id:2, name:'고블린', hp:200},
            {id:3, name:'드래곤', hp:300}
        ],
        scrollY:0,
        timer:null,
        width: 9900,
        height: 6500,
        budget: 300,
        limit: 2,
        plist: [
            {id: 1, name: '사과', price:100},
            {id: 2, name: '바나나', price:200},
            {id: 3, name: '딸기', price:300},
            {id: 4, name: '오렌지', price:400},
            {id: 5, name: '메론', price:500}
        ],
        kwidth:'',
        kheight:'',
        glist:[],
        current:'',
        color:'red',
        topics: [
            {value:'vue', name:'Vue.js'},
            {value: 'jQuery', name:'jQuery'}
        ],
        video1: 'false',
        video2: 'false',
        price:19800,
        rlist:[]
    },
    directives: {
        border: {
            inserted: function(el) {
                el.style.border = '2px solid " + this.color';
            }
        },
        video(el, binding) {
            if (binding.value !== binding.oldValue) {
                // binding.value ? el.play() : el.pause();
            }
        }
    },
    filters: {
        localeNum: function(val) {
            return val.toLocaleString();
        },
        filter: function (message, foo, num) {
            console.log(message, foo, num)
        },
        round: function (val) {
            return Math.round(val * 100) / 100;
        },
        radian: function (val) {
            return val * Math.PI / 180;
        }
    },
    destroyed: function() {
        console.log("초기화 끝")
    },
    watch: {
        plist: function(newVal, oldVal) {
            console.log(newVal.length, oldVal.length)
        },
        current: function (val) {
            axios.get('https://api.github.com/search/repositories', {
                params: {q: 'topic: ' + val}
            }).then(function (response){
                this.glist = response.data.items
            }.bind(this));
        },
        rlist: function() {
            console.log('기본출력:', this.$refs.list.offsetHeight);
            this.$nextTick( function(){
                console.log('nextTick:', this.$refs.list.offsetHeight);
            } )
        }
    },
    computed: {
        matched: function() {
            this.plist[0].name = 'eulsoo';
            return this.plist.filter(function(el){
                return el.price <= this.budget;
            }, this);
        },
        limited: function() {
            return this.matched.slice(0, this.limit);
        },
        textLimit: function () {
            if (this.message.length >= 10) {
                return "10글자이상";
            } else {
                return "10글자미만";
            }
        },
        halfWidth: {
            get: function () {
                return this.width / 2;
            },
            set: function (val) {
                this.width = val * 2;
            }
        },
        halfHeight: {
            get: function () {
                return this.height / 2;
            },
            set: function (val) {
                this.height = val * 2;
            }
        },
        halfPoint: function () {
            return {
                x: this.halfWidth,
                y: this.halfHeight
            }
        },
        computedData: function() {
            return Math.random();
        }
    },
    methods: {
        say: function() {
            this.persona[0].hp -= 10;
            console.log("할머니");
        },
        methodsData: function () {
            return Math.random();
        },
        update(e) {
            this.message = e.target.value;
        },
        eulsoo:function() {
            this.plist.pop(); // this가 없으면 안됨
        },
        doAdd: function() {
            var max = this.list.reduce(function(a, b){
                return a > b.id ? a : b.id;
            }, 0);
            addEventListener

            this.list.push({
                id: max + 1,
                name: this.name,
                hp:500
            });
        },
        doRemove: function (index){
            this.list.splice(index, 1);
        },
        doAttack: function (index){
            this.list[index].hp -= 10;
        },
        handleClick : function () {
            var count = this.$refs.count;
            if (count) {
                count.innerText = parseInt(count.innerText, 10) + 1;
            }
        },
        handler:function(a) {
            console.log(a)
        },
        handleInput(e){
            this.message = e.target.value;
        },
        handleChange: function (event) {
            console.log("asd")
            var file = event.target.files[0];
            
            if (file && file.type.match(/^image\/(png|jpeg)$/)) {
                this.preview = file.name;
                // window.URL.createObjectURL(file);
                console.log(this.preview);
            }
        },
        handleScroll: function () {
            if (this.timer === null) {
                this.timer = setTimeout( function(){
                    this.scrollY = window.scrollY;
                    clearTimeout(this.timer);
                    this.timer = null;
                }.bind(this), 200);
            }
        },
        handleResize(e) {
            kwidth = window.innerWidth; // this가 없어도 됨
            kheight = window.innerHeight;
        }
    },
    
    mounted: function() {
        console.log(this.$refs.hello);
    },
    created: function() {
        axios.get('http://www.json-generator.com/api/json/get/ckgfkTaOwi?indent=2').then(function(response){
            this.list = response.data;
        }.bind(this)).catch(function(e) {
            console.error(e);
        });

        window.addEventListener('scroll', this.handleScroll);

        // this.list.forEach(function(item, index, arr){
        //     this.$set(item, 'active', false);
        // }, this);
        

        window.addEventListener('resize', this.handleResize);

        var unwatch = this.$watch( function() {
            return [this.kwidth, this.kheight]
        }, function (newVal, oldVal) {
                console.log(newVal);
        }, {
            deep: true,
            immediate: true,
        });

        this.$watch(function(){
            return Object.assign([], this.plist);
        }, function (newVal, oldVal){
            console.log(newVal.length, oldVal.length);
        });

    },
    beforeDestroy: function () {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }
});

// app.$set(app.persona, 0, { id: 10, name: 'asdf', hp: 300 });
app.list = app.list.filter(function(el){
    return el.hp > 200;
});
