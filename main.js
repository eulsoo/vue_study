var app = new Vue({
    el: '#app',
    data: {
        message: '안녕하세요!',
        message2: 'no!',
        list: ['사과', '바나나', '딸기'],
        show: true,
    },
    destroyed: function() {
        console.log("초기화 끝")
    },
    methods: {
        handleClick: function(e) {
            alert(e.target)
        }
    }

});

app.list.push('오렌지');
app.show = false;