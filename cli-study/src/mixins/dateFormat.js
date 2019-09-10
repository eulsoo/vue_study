export const dateFormat = {
    data: function() {
        return {
            mixData: '나는 믹스인에 넣은 데이터'
        }
    },
    methods: {
        easyTime: function (date) {
            if (!date) return;
            let hour = date.getHours();
            let minutes = date.getMinutes();
            let fullDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            return `${fullDate} ${hour}:${minutes}`;
        }
    }
}