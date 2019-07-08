var state = {count:1}
var app = new Vue({
    el: '#app',
    data: {
        message: '안녕하세요!',
        message2: 'no-js',
        list: ['사과', '바나나', '딸기'],
        show: true,
        state: state,
        scroll: 0,
        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',
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
        persona: [
            {id:1, name:'슬라임', hp:100},
            {id:2, name:'고블린', hp:200},
            {id:3, name:'드래곤', hp:300}
        ]
    },
    destroyed: function() {
        console.log("초기화 끝")
    },
    methods: {
        handleClick: function(e) {
            alert(e.target)
        },
        increment: () => {
            console.log(this);
        }
    },
    computed: {
        textLimit: function () {
            if ( this.message.length >= 10) {
                return "10글자이상";
            } else {
                return "10글자미만";
            }
        }
    },
    mounted: function() {
        
    }
});

app.list.push('오렌지');
app.show = false;