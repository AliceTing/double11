<style lang="scss" scoped>
    .container {
        height: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        .wrap {
            float: left;
            height: 100%;
        }
        .left,
        .right {
            width: 30%;
            padding: 60px 40px 30px;
            box-sizing: border-box;
        }
        .middle {
            width: 40%;

        }
        .left .inner,
        .right .inner {
            box-sizing: border-box;
            border: solid 1px rgba(60, 46, 213, .54);
            background-color: rgba(60, 46, 213, .14);
            border-radius: 10px;
        }
        .left .inner .data_md:first-child,
        .right .inner .data_md:first-child {
            padding-top: 20px;
        }
        .left .inner .data_md:first-child {
            .con {
                height: 100%;
                margin-top: 50%;
                transform: translateY(-50%);
            }
        }
        .chart {
            width: 100%;
            height: 400px;
            padding: 10px;
            box-sizing: border-box;
        }
        .data_md {
            box-sizing: border-box;
            overflow: hidden;
            .name {
                height: 30px;
                padding-left: 20px;
                color: #78B7FF;
                font-size: 22px;
                line-height: 30px;
                &:before {
                    content: '';
                    display: inline-block;
                    width: 10px;
                    height: 16px;
                    margin-right: 18px;
                    border-radius: 8px;
                    background-color: #78B7FF;
                }
            }
            &.deal_order {
                padding-bottom: 30px;
                color: #DCE2E9;
                font-size: 22px;
                .con {
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    height: 100%;
                    padding: 20px 40px;
                    box-sizing: border-box;
                    background-color: rgba(60, 46, 213, .14);
                }
                .main {
                    flex: 1;
                    overflow: hidden;
                    scroll-y: auto;
                }
                .list {
                }
                .name {
                    margin-bottom: 15px;
                    padding-left: 0;
                }
                .item {
                    display: flex;
                    justify-content: space-between;
                    font-size: 22px;
                    height: 40px;
                    line-height: 40px;
                    overflow: hidden;
                    box-sizing: border-box;
                    .user {
                        flex: 1;
                    }
                    .store {
                        flex: 2;
                    }
                    .amount {
                        flex: 1;
                    }
                }
                .bottom_blur {
                    position: absolute;
                    bottom: 0;
                    left: 20px;
                    right: 20px;
                    z-index: 5;
                    height: 60px;
                    background: linear-gradient(transparent, #18115b);
                }
            }
        }
        .goal_reach {
            margin-top: 30px;
            .box {
                position: relative;
                padding: 0 40px;
                .rate {
                    position: absolute;
                    top: -54px;
                    z-index: 4;
                    margin-left: -48px;
                    padding: 5px 8px;
                    border-radius: 5px;
                    border: 2px #593AFF solid;
                    background-color: #3E24A7;
                    color: #fff;
                    font-size: 30px;
                    text-align: center;
                    transition: all 0.2s;
                    &:before,
                    &:after {
                        content: '';
                        position: absolute;
                        left: 0;
                        right: 0;
                        width: 0;
                        height: 0;
                        margin: auto;
                        border-style: solid dashed dashed dashed;
                        border-width: 14px 10px;
                    }
                    &:before {
                        bottom: -30px;
                        border-color: #593AFF transparent transparent transparent;
                    }
                    &:after {
                        bottom: -27px;
                        border-color: #3E24A7 transparent transparent transparent;
                    }
                }
                .bar {
                    position: relative;
                    margin: 0 auto;
                    height: 40px;
                    border: solid 2px #413389;
                    background: linear-gradient(90deg, #009dc2, #7e5dd7);
                    .linear {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        background: repeating-linear-gradient(90deg, transparent, transparent 5px, #180a56 5px, #180a56 10px);
                    }
                    .cover {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        background-color: #180a56;
                        transition: all 0.2s;
                    }
                }
            }
            .data {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 50px;
                padding: 0 40px;
                color: #61ABFF;
                font-size: 20px;
                line-height: 30px;
                h4 {
                    font-weight: normal;
                }
                .value {
                    margin-top: 30px;
                    font-size: 40px;
                    .unit {
                        font-size: 22px;
                    }
                    .up {
                        position: relative;
                        display: inline-block;
                        width: 8px;
                        height: 15px;
                        margin-left: 10px;
                        background-color: #CB2106;
                        &:before {
                            content: '';
                            position: absolute;
                            top: -18px;
                            left: 50%;
                            width: 0;
                            height: 0;
                            border-color: transparent transparent #CB2106 transparent;
                            border-width: 10px;
                            border-style: dashed dashed solid dashed;
                            transform: translateX(-50%);
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="data_md" :style="{height: setSingleHeight + 'px'}">
        <h2 class="name">订单实时统计</h2>
        <div class="con">
            <div class="chart" :style="{height: (setSingleHeight - 50) + 'px'}"
                 id="main2"></div>
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
                    xAxis: [{
                        type: "category",
                        boundaryGap: true,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#69b7ff',
                                fontSize: '14'
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
                                fontSize: '14'
                            }
                        }
                    }],
                    legend: {
                        data: [
                            "今日订单",
                            //"昨日订单"
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
                            seriesLayoutBy: "row",
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
                        },
                        // {
                        //     name: "昨日订单",
                        //     type: "line",
                        //     smooth: true,
                        //     itemStyle: {
                        //         normal: {
                        //             areaStyle: {
                        //                 type: "default"
                        //             }
                        //         }
                        //     },
                        //     seriesLayoutBy: "row"
                        // }
                    ]
                };
                me.initChart(document.getElementById('main2'), opt);

            },
            refreshRealTimeOrderNumLine() {
                let me = this, data, time = [], val = [], myChart, opts;

                //调用api请求数据，没有则直接返回
                apis.getRealTimeOrderNumLine().then(data => {
                    if(data.code == 0){
                        data = data.result;
                        myChart = echarts.getInstanceByDom(document.getElementById("main2"));
                        opts = myChart.getOption();

                        Object.keys(data).forEach(key => {
                            time.push(key);
                            val.push(data[key]);
                        });
                        opts.dataset = {
                            source: [time, val]
                        };
                        myChart.setOption(opts);
                        myChart.dispatchAction({
                            type: 'showTip',
                            seriesIndex: 0,
                            dataIndex: time.length - 2
                        });
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
