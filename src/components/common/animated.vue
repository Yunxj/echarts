<template>
    <div class="animated-integer">
        <span>{{totalValue}}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            totalValue: 0
        }
    },
    props: {
        valueChange: {
            type: Number,
            required: true
        }
    },
    methods: {
        tween: function (startValue, endValue) {
            var vm = this
            function animate () {
                if (TWEEN.update()) {
                requestAnimationFrame(animate)
                }
            }
            new TWEEN.Tween({ totalValue: startValue })
                .to({ totalValue: endValue }, 500)
                .onUpdate(function () {
                vm.totalValue = vm.numFormat(this.totalValue.toFixed(0))
                })
                .start()
            animate()
        },
        numFormat(num) { //千位符
            var reg = /\d{1,3}(?=(\d{3})+$)/g;
            return (num + '').replace(reg, '$&,');
        },
    },
    watch: {
        valueChange: function (newValue, oldValue) {
            this.tween(oldValue, newValue)
        }
    },
    mounted() {
        this.tween(0, this.valueChange)
    }
}
</script>
