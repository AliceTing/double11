<style lang="scss" scoped>

</style>
<template>
    <div class="data_md" :style="{height: setMiddleSingleHeight + 'px'}">
        <div id="main3" :style="{height: setMiddleSingleHeight  + 'px'}"></div>
    </div>
</template>

<script>
    import {mapState, mapActions, mapMutations} from 'vuex';
    import {refreshTime} from 'Public/util';
    import apis from '../api';

    import echarts from 'echarts';
    import 'echarts/map/js/china.js';
    export default {
        components: {},
        props: {
            // setMiddleSingleHeight: ''
        },
        data() {
            return {
                refreshTime: 10
            }
        },
        created() {
        },
        mounted() {
            let me = this;
            me.orderHeatChart();
            // 定时刷新数据
            me.intervalData();
        },
        methods: {
            // 初始化图表
            initChart(el, opts, type) {
                let me = this;
                if (el) {
                    let myChart = echarts.init(el);
                    myChart.setOption(opts);
                    return myChart;
                }
            },
            orderHeatChart() {
                let me = this;
                let opt = {
                    geo: {
                        map: "china",
                        label: {
                            fontSize: 10
                        },
                        itemStyle: {
                            normal: {
                                areaColor: "#1359a8",
                                borderColor: "#5013b1"
                            }
                        },
                        zoom: 1
                    },
                    tooltip: {
                        trigger: "item"
                    },
                    series: [{
                        name: "订单",
                        type: "scatter",
                        coordinateSystem: "geo",
                        itemStyle: {
                            color: "#7151ae"
                        },
                        symbolSize: function (val) {
                            let len = parseInt(val[2]).toString().length;
                            return (val[2] / Math.pow(10, len)) + 8;
                        }
                    }, {
                        name: "最新",
                        type: "effectScatter",
                        coordinateSystem: "geo",
                        symbolSize: function (val) {
                            let len = parseInt(val[2]).toString().length;
                            return (val[2] / Math.pow(10, len)) + 20;
                        },
                        label: {
                            normal: {
                                formatter: "{b}",
                                position: "right",
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "#c3b450",
                                shadowBlur: 10,
                                shadowColor: "#333"
                            }
                        },
                        showEffectOn: "render",
                        rippleEffect: {
                            brushType: "stroke"
                        },
                        zlevel: 1
                    }]
                };
                me.initChart(document.getElementById('main3'), opt);

            },
            refreshHeatMap() {
                let me = this;
                let data, i = 0, len,
                    val, result = [], lnglat = [], allStore,
                    currentStore,
                    myChart, opts;

                if (me.mapInterval) {
                    clearInterval(me.mapInterval)
                }

                myChart = echarts.getInstanceByDom(document.getElementById("main3"));
                opts = myChart.getOption();

                //调用api请求数据，没有则直接返回
                apis.getOrderMap().then(data => {
                    if(data.code == 0){
                        data = data.result;
                        allStore = data.orderMapInfos||[];
                        len = allStore.length;
                        for (; i < len; i++) {
                            val = allStore[i];
                            lnglat = val["position"].split(',');
                            if (lnglat.toString() != "0,0") {
                                result.push({
                                    name: "",
                                    value: lnglat.concat(val["amount"])
                                });
                            }
                        }
                        opts.series[0].data = result;

                        // myChart.clear();
                        myChart.setOption(opts);
                    }
                });

            },
            //定时刷新
            intervalData() {
                let me = this;
                let refreshData = function () {
                    me.refreshHeatMap();

                    return refreshData;
                };
                setInterval(refreshData(), 1000 * refreshTime);
            }
        },
        computed: {
            setMiddleSingleHeight() {
                let innerBoxHeight = window.innerHeight;
                let middleSingleHeight = Math.floor(parseInt((innerBoxHeight) / 2));
                return middleSingleHeight;
            }
        }
    }
</script>
