<style lang="scss" scoped>

</style>
<template>
    <div class="data_md" :style="{height: setSingleHeight + 'px'}">
        <h2 class="name">订单实时统计</h2>
        <div class="con">
            <div class="chart" :style="{height: (setSingleHeight - 40) + 'px'}"
                 id="main2"></div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions, mapMutations} from 'vuex';
    import apis from '../api';
    import {refreshTime} from 'Public/util';

    import echarts from 'echarts';
    export default {
        components: {},
        props: {
            // setSingleHeight: ''
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
            me.orderStatisticsChart();
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
            orderStatisticsChart() {
                let me = this;
                let opt = {
                    color: ["#009dc2", "#7e5dd7"],
                    tooltip: {
                        show: true,
                        trigger: "axis"
                    },
                    grid: {
                        top: 10
                    },
                    xAxis: [{
                        type: "category",
                        boundaryGap: true,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#69b7ff',
                                fontSize: '12'
                            }
                        }
                    }],
                    yAxis: [{
                        type: "value",
                        splitLine: {
                            lineStyle: {
                                type: 'dashed',
                                color: ['#fff'],
                                opacity: 0.3
                            }
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#69b7ff',
                                fontSize: '12'
                            },
                            rotate: 30,
                            formatter: function (val, index) {
                                return (parseFloat(val) / 10000) + "W";
                            }
                        }
                    }],
                    legend: {
                        data: [
                            "今日订单"
                        ],
                        y: "bottom",
                        textStyle: {
                            color: '#69b7ff'
                        }
                    },
                    series: [
                        {
                            name: "今日订单",
                            type: "line",
                            smooth: true,
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: "default"
                                    }
                                }
                            },
                            lineStyle: {
                                width: 3
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: 'rgba(127,93,215,1)'},
                                            {offset: 1, color: 'rgba(255,255,255,0)'}
                                        ]
                                    )
                                }
                            },
                        }
                    ]
                };

                me.initChart(document.getElementById('main2'), opt);

            },
            refreshRealTimeOrderNumLine() {
                let me = this, data, time = [], val = [], myChart, opts;

                myChart = echarts.getInstanceByDom(document.getElementById("main2"));
                opts = myChart.getOption();

                //调用api请求数据，没有则直接返回
                apis.getRealTimeOrderNumLine().then(data => {
                    if(data.code == 0){
                        data = data.result||{};

                        Object.keys(data).forEach(key => {
                            time.push(key);
                            val.push(data[key]);
                        });

                        opts.series[0].data=val;
                        opts.xAxis[0].data=time;
                        // myChart.clear();
                        myChart.setOption(opts);
                    }
                });
            },
            //定时刷新
            intervalData() {
                let me = this;
                let refreshData = function () {
                    me.refreshRealTimeOrderNumLine();

                    return refreshData;
                };
                setInterval(refreshData(), 1000 * refreshTime);
            }
        },
        computed: {
            setSingleHeight() {
                let innerBoxHeight = window.innerHeight - 60;
                let singleHeight = Math.floor(parseInt((innerBoxHeight) / 3));
                return singleHeight;
            }
        }
    }
</script>
