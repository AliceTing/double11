<style lang="scss" scoped>

</style>
<template>
    <div class="data_md" :style="{height: setSingleHeight + 'px'}">
        <h2 class="name">营业额实时统计</h2>
        <div class="con">
            <div class="chart" :style="{height: (setSingleHeight - 40) + 'px'}"
                 id="main6"></div>
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
            me.salesStatisticsChart();
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
            salesStatisticsChart() {
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
                            "今年",
                            //"lastyear"
                        ],
                        y: "bottom",
                        textStyle: {
                            color: '#69b7ff'
                        }
                    },
                    series: [
                        {
                            name: "今年",
                            type: "line",
                            smooth: true,
                            lineStyle: {
                                width: 3
                            }
                        }
                    ]
                };
                me.initChart(document.getElementById('main6'), opt);

            },
            refreshRealTimeAmountLine() {
                let me = this, time = [], val = [], data, myChart, opts;

                myChart = echarts.getInstanceByDom(document.getElementById("main6"));
                opts = myChart.getOption();

                //调用api请求数据，没有则直接返回
                apis.getRealTimeAmountLine().then(data => {
                    if(data.code == 0){
                        data = data.result||{};

                        Object.keys(data).forEach(key => {
                            time.push(key);
                            val.push(data[key]);
                        });

                        opts.series[0].data=val;
                        opts.xAxis[0].data=time;
                        myChart.clear();
                        myChart.setOption(opts);
                    }
                });
            },
            //定时刷新
            intervalData() {
                let me = this;
                let refreshData = function () {
                    me.refreshRealTimeAmountLine();

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
