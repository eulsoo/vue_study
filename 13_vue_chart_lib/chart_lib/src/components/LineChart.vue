<template>
  <div>
    <canvas ref="lineChart" width="400" height="400"></canvas>
  </div>
</template>

<script>

export default {
    props:['propsData'],
    mounted() {
        // $refs로 접근하면 이름이 같다해도 컴포넌트안에서만 접근한다.
        var ctx = this.$refs.lineChart;
        new this.$_Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: this.propsData
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}
</script>

<style>

</style>