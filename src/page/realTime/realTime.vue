<style lang="scss" scoped>
    /*@import '../../public/assets/scss/mix.scss';*/

    html,
    body {
        height: 100%;
    }

    .container {
        height: 100%;
        box-sizing: border-box;
        .wrap {
            float: left;
            height: 100%;
        }
        .left,
        .right{
            width: 30%;
        }
        .middle{
            width: 40%;
            background-color: #fafafa;
        }
        .chart {
            width: 100%;
            height: 400px;
            padding: 10px;
            box-sizing: border-box;
        }
        .title,
        .real_time,
        .total_price{
            text-align: center;
        }
        .title{
            font-size: 40px;
        }
        .real_time{
            font-size: 38px;
        }
        .total_price{
            color: #f00;
            font-size: 46px;
        }
        .detail_info{
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            .item{
                margin: 0 10px;
            }
        }
        .data_md{
            .name{
                font-size: 20px;
            }
        }
        .goal_reach{
            display: flex;
            justify-content: space-around;
            .box{
                flex: 1;
                align-items: center;
                .rate{
                    margin: auto;
                    border-radius: 50%;
                    background-color: #fc0;
                    color: #fff;
                    font-size: 40px;
                    text-align: center;
                }
                .data{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    font-size: 20px;
                    line-height: 30px;
                }
            }
        }
    }
</style>

<template>
    <div class="container">

        <div class="wrap left">
            <div class="chart" v-for="(item,index) in 3" :key="index" :id="'main'+(index+1)" :style="{height: setSingleHeight + 'px'}"></div>
        </div>
        <div class="wrap middle">
            <!--<h1 class="title">来伊份双11大促</h1>-->
            <div class="real_time">{{realTime}}</div>
            <div class="total_price">￥ {{totalPrice | parseFormatNum}}</div>
            <div class="detail_info clearfix">
                <div class="item customers">客户数：{{customers}}</div>
                <div class="item orders">订单数：1034</div>
                <div class="item univalence">客单价：80</div>
            </div>
            <div>地图图</div>
            <div class="data_md deal_order">
                <h2 class="name">成交订单</h2>
                <div class="con">
                </div>
            </div>
        </div>
        <div class="wrap right">
            <div class="data_md deal_order" :style="{height: setSingleHeight + 'px'}">
                <h2 class="name">目标达成</h2>
                <div class="con">
                    <div class="goal_reach">
                        <div class="box">
                            <div class="rate" :style="{width: setSingleHeight*4/5 + 'px',height: setSingleHeight*4/5 + 'px', lineHeight: setSingleHeight*4/5 + 'px'}">{{goldReach.occuRate}}</div>
                        </div>
                        <div class="box">
                            <ul class="data">
                                <li>目标：{{goldReach.target}}</li>
                                <li>当前：{{goldReach.atPresent}}</li>
                                <li>同比增长：{{goldReach.increaseRate}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chart" v-for="(item,index) in 2" :key="index" :id="'main'+ (index + 5)" :style="{height: setSingleHeight + 'px'}"></div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import echarts from 'echarts';

    export default {
        data() {
            return {
                realTime: '00:00:00',
                customers: 11,
                totalPrice: 10223333,
                goldReach:{
                    occuRate: '80%',
                    target: '200000',
                    atPresent: '150000',
                    increaseRate: '15%'
                }
            }
        },
        created() {
            let me = this;
            // 实时时钟显示
            me.getRealTime();
        },
        mounted() {
            let me = this;
            me.businessRankingChart();
            me.vipDistributionChart();
            me.orderStatisticsChart();
            me.newOldRatioChart();
            me.salesStatisticsChart();
        },
        methods: {
            // 实时时钟显示
            getRealTime() {
                let me = this;
                let t = null;
                t = setTimeout(time, 1000);

                function time() {
                    clearTimeout(t);//清除定时器
                    let date = new Date();
                    let year = date.getFullYear();
                    let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
                    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
                    let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
                    let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
                    let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
                    me.realTime = h + ":" + m + ":" + s;
                    t = setTimeout(time, 1000);
                }
            },
            // 营业排行
            businessRankingChart(){
                let me = this;
                me.initChart(document.getElementById('main1'),{
                    title: {
                        text: "营业排行",
                        textStyle: {
                            fontSize: 20
                        }
                    },
                    legend: {
                        data: [
                            "actual",
                            "target"
                        ],
                        y: "bottom"
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: ["上海分公司", "杭州分公司", "江苏分公司", "河南分公司"]
                        }
                    ],
                    yAxis: [
                        {
                            type: "value"
                        }
                    ],
                    series: [
                        {
                            name: "达成率",
                            type: "line",
                            data: [
                                11, 8, 12, 9
                            ],
                            smooth: true
                        },
                        {
                            name: "actual",
                            type: "bar",
                            data: [
                                10, 8, 12, 14
                            ]
                        },
                        {
                            name: "target",
                            type: "bar",
                            data: [
                                12, 8, 10, 18
                            ]
                        }
                    ]
                });
            },
            // vip分布
            vipDistributionChart(){
                let me = this;
                me.initChart(document.getElementById('main2'),{
                    title: {
                        text: "会员等级占比",
                        textStyle: {
                            fontSize: 20
                        }
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}:{c}({d}%)"
                    },
                    legend: {
                        orient: "horizontal",
                        x: "center",
                        y: "bottom"
                    },
                    series: [
                        {
                            type: "pie",
                            selectedMode:"multiple",
                            radius: [
                                "50%",
                                "70%"
                            ],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: "{b}{d}%",
                                        position: "outside"
                                    },
                                    labelLine: {
                                        show: true
                                    }
                                }
                            },
                            data: [
                                {
                                    "value": 335,
                                    "name": "非会员"
                                },
                                {
                                    "value": 310,
                                    "name": "VIP1"
                                },
                                {
                                    "value": 234,
                                    "name": "VIP2"
                                },
                                {
                                    "value": 160,
                                    "name": "VIP3"
                                },
                                {
                                    "value": 138,
                                    "name": "VIP4"
                                },
                                {
                                    "value": 100,
                                    "name": "VIP5"
                                },
                                {
                                    "value": 95,
                                    "name": "VIP6"
                                }
                            ]
                        }
                    ]
                });
            },
            // 订单实时统计
            orderStatisticsChart(){
                let me = this;
                me.initChart(document.getElementById('main3'),{
                    title: {
                        text: "订单实时统计",
                        textStyle: {
                            fontSize: 20
                        }
                    },
                    xAxis: [
                        {
                            type: "category",
                            boundaryGap: true,
                            data: [
                                "0点",
                                "1点",
                                "2点",
                                "3点",
                                "4点",
                                "5点",
                                "6点",
                                "7点",
                                "8点",
                                "9点",
                                "10点"
                            ]
                        }
                    ],
                    yAxis: [
                        {
                            type: "value"
                        }
                    ],
                    series: [
                        {
                            name: "",
                            type: "line",
                            smooth: true,
                            stack: "总量",
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: "default"
                                    }
                                }
                            },
                            data: [
                                8,
                                9,
                                11,
                                14,
                                18,
                                25,
                                27,
                                32,
                                30,
                                28,
                                23
                            ]
                        },
                        {
                            name: "",
                            type: "line",
                            smooth: true,
                            stack: "总量",
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: "default"
                                    }
                                }
                            },
                            data: [
                                2,
                                4,
                                5,
                                6,
                                9,
                                12,
                                15,
                                17,
                                16,
                                13,
                                7,
                            ]
                        }
                    ]
                });
            },
            // 新老客占比
            newOldRatioChart(){
                let me = this;
                me.initChart(document.getElementById('main5'),{
                    title: {
                        text: "新老客占比",
                        textStyle: {
                            fontSize: 20
                        }
                    },
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}:{c}({d}%)",
                        show: true
                    },
                    legend: {
                        orient: "horizontal",
                        x: "center",
                        y: "bottom"
                    },
                    series: [
                        {
                            type: "pie",
                            selectedMode: "multiple",
                            radius: [
                                "50%",
                                "70%"
                            ],
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: "{b}{d}%",
                                        position: "outside"
                                    },
                                    labelLine: {
                                        show: true
                                    }
                                }
                            },
                            data: [
                                {
                                    "value": 335,
                                    "name": "新会员"
                                },
                                {
                                    "value": 310,
                                    "name": "老会员"
                                },
                                {
                                    "value": 364,
                                    "name": "非会员"
                                }
                            ]
                        }
                    ]
                });
            },
            // 营业额实时统计
            salesStatisticsChart(){
                let me = this;
                me.initChart(document.getElementById('main6'),{
                    title: {
                        text: "营业额实时统计",
                        textStyle: {
                            fontSize: 20
                        }
                    },
                    legend: {
                        orient: "horizontal",
                        x: "center",
                        y: "bottom"
                    },
                    xAxis: [
                        {
                            type: "category",
                            boundaryGap: true,
                            data: [
                                "0点",
                                "1点",
                                "2点",
                                "3点",
                                "4点",
                                "5点",
                                "6点",
                                "7点",
                                "8点",
                                "9点",
                                "10点"
                            ]
                        }
                    ],
                    yAxis: [
                        {
                            type: "value"
                        }
                    ],
                    series: [
                        {
                            name: "now",
                            type: "line",
                            data: [
                                5,
                                5,
                                7,
                                12,
                                13,
                                16,
                                18,
                                28,
                                23,
                                18,
                                10
                            ]
                        },
                        {
                            name: "lastyear",
                            type: "line",
                            data: [
                                4,
                                5,
                                7,
                                10,
                                14,
                                17,
                                23,
                                27,
                                22,
                                17,
                                8
                            ]
                        }
                    ]
                });
            },
            // 初始化图表
            initChart(el, opts){
                if(el){
                    let myChart = echarts.init(el);
                    myChart.setOption(opts);
                }
            }
        },
        computed: {
            setSingleHeight() {
                let singleHeight = parseInt(window.innerHeight / 3);
                return singleHeight;
            }
        }
    }

</script>

