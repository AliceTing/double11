<style lang="scss" scoped>
</style>
<template>
    <div class="data_md" :style="{height: setSingleHeight + 'px'}">
        <h2 class="name">营业排行榜</h2>
        <div class="con">
            <div class="chart" :style="{height: (setSingleHeight - 50) + 'px'}"
                 id="main1"></div>
        </div>
    </div>
</template>

<script>
    import apis from '../api';
    import {mapState, mapActions, mapMutations} from 'vuex';
    import echarts from 'echarts';
    export default {
        components: {},
        props: {},
        data() {
            return {
                refreshTime: 10
            }
        },
        created() {
        },
        mounted() {
            let me = this;
            me.businessRankingChart();
            //调接口set数据
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
            businessRankingChart() {
                let me = this;
                me.initChart(document.getElementById('main1'), {
                    color: ["#009dc2", "#7e5dd7"],
                    tooltip: {
                        show: false,
                        trigger: "axis",
                        axisPointer: {
                            type: "shadow"
                        },
                        backgroundColor: "#f60",
                    },
                    legend: {
                        data: [
                            "actual",
                            "target"
                        ],
                        y: "bottom",
                        textStyle: {
                            color: '#69b7ff'
                        }
                    },
                    xAxis: [
                        {
                            type: "category",
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#69b7ff',
                                    fontSize: '14'
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: "value",
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#69b7ff',
                                    fontSize: '14'
                                },
                                formatter: function (val, index) {
                                    return (parseFloat(val) / 10000) + "W";
                                }
                            },
                            splitLine: {
                                lineStyle: {
                                    type: 'dashed',
                                    color: ['#fff'],
                                    opacity: 0.3
                                }
                            }
                        },
                        {
                            type: "value",
                            show: false
                        }
                    ],
                    series: [
                        {
                            name: "达成率",
                            type: "line",
                            seriesLayoutBy: "row",
                            yAxisIndex: 1,
                            encode: {
                                y: 3
                            },
                            smooth: true,
                            lineStyle: {
                                width: 3
                            }
                        },
                        {
                            name: "actual",
                            type: "bar",
                            seriesLayoutBy: "row",
                            encode: {
                                x: 0,
                                y: "actual"
                            }
                        },
                        {
                            name: "target",
                            type: "bar",
                            seriesLayoutBy: "row",
                            encode: {
                                x: 0,
                                y: "target"
                            }
                        }
                    ]
                });
            },
            refreshBusinessRanking() {
                let me = this;
                let province = [""],
                    target = ["target"],
                    actual = ["actual"],
                    rate = [""],
                    i = 0,
                    len, data, val, myChart, opts;

                myChart = echarts.getInstanceByDom(document.getElementById("main1"));
                opts = myChart.getOption();

                //调用api请求数据，没有则直接返回
                apis.getBusinessRanking().then(data => {
                    if(data.code == 0){
                        data = data.result;

                        data = data.businessRanking;
                        len = data.length;
                        for (; i < len; i++) {
                            if (data[i]["province"]) {
                                province.push(data[i]["province"]);
                                actual.push(data[i]["saleAmount"]);
                                target.push(data[i]["targetAmount"]);
                                val = data[i]["targetRate"];
                                rate.push(val.substr(0, val.length - 1));
                            }
                        }
                        opts.dataset = {
                            source: [province, actual, target, rate]
                        };
                        // myChart.clear();
                        myChart.setOption(opts);
                    }
                });
            },
            //定时刷新
            intervalData() {
                let me = this;
                let refreshData = function () {
                    me.refreshBusinessRanking();

                    return refreshData;
                };
                setInterval(refreshData(), 1000 * me.refreshTime);
            }
        },
        computed: {
            setSingleHeight() {
                let innerBoxHeight = window.innerHeight - 90;
                let singleHeight = Math.floor(parseInt((innerBoxHeight) / 3));
                return singleHeight;
            }
        }
    }
</script>
