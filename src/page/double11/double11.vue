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
        }
        .middle {
            width: 40%;
            box-sizing: border-box;
        }
        .left .inner,
        .right .inner {
            margin: 20px 40px 0;
            box-sizing: border-box;
            border: solid 1px rgba(60, 46, 213, .54);
            background-color: rgba(60, 46, 213, .14);
            border-radius: 10px;
        }
        .chart {
            width: 100%;
            height: 400px;
            padding: 10px;
            box-sizing: border-box;
        }
        .title,
        .real_time,
        .total_price {
            text-align: center;
        }
        .title {
            margin: 20px auto;
            background: url("../../public/assets/images/title.png") no-repeat center top;
            background-size: 697px 197px;
            .real_time {
                padding-top: 60px;
                color: #fff;
                font-size: 40px;
            }
        }
        .total_price {
            color: #FFFF6B;
            font-size: 80px;
            font-weight: 500;
        }
        .detail_info {
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            .item {
                flex: 1;
                text-align: center;
            }
            .key {
                color: #fff;
                font-size: 22px;
            }
            .value {
                color: #FFFF6B;
                font-size: 40px;
            }
        }
        .data_md {
            box-sizing: border-box;
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
                position: relative;
                height: 185px;
                padding: 20px 40px;
                border: solid 1px rgba(60, 46, 213, .54);
                background-color: rgba(60, 46, 213, .14);
                color: #DCE2E9;
                font-size: 22px;
                .name {
                    margin-bottom: 15px;
                    padding-left: 0;
                }
                .item {
                    display: flex;
                    justify-content: space-between;
                    margin: 12px 0;
                    font-size: 22px;
                    line-height: 30px;
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
                .rate {
                    position: absolute;
                    top: -54px;
                    padding: 5px;
                    border-radius: 5px;
                    border: 2px #413389 solid;
                    background-color: #3E24A7;
                    color: #fff;
                    font-size: 30px;
                    text-align: center;
                }
                .bar {
                    position: relative;
                    width: 90%;
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
                    }
                }
            }
            .data {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 30px;
                color: #61ABFF;
                font-size: 20px;
                line-height: 30px;
                h4 {
                    font-weight: normal;
                }
                .value {
                    font-size: 40px;
                    .unit {
                        font-size: 22px;
                    }
                }
            }
        }
    }
</style>

<style lang="scss">
    html,
    body {
        height: 100%;
        background-color: #16084b;
    }
</style>

<template>
    <div class="container">

        <div class="wrap left">
            <div class="inner">
                <div class="data_md" :style="{height: setSingleHeight + 'px'}">
                    <h2 class="name">目标达成率</h2>
                    <div class="con">
                        <div class="goal_reach">
                            <div class="box">
                                <div class="bar">
                                    <div class="rate" :style="{left: goldReach.occuRate}">{{goldReach.occuRate}}</div>
                                    <div class="linear"></div>
                                    <div class="cover"
                                         :style="{width: (100 - goldReach.occuRate.substr(0,goldReach.occuRate.length-1)) + '%'}"></div>
                                </div>
                            </div>
                            <ul class="data">
                                <li>
                                    <h4>目标</h4>
                                    <div class="value">{{goldReach.target}}<span class="unit">万</span></div>
                                </li>
                                <li>
                                    <h4>当前</h4>
                                    <div class="value">{{goldReach.atPresent}}<span class="unit">万</span></div>
                                </li>
                                <li>
                                    <h4>同比增长</h4>
                                    <div class="value">{{goldReach.increaseRate.substr(0,goldReach.increaseRate.length -
                                        1)}}<span class="unit">%</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="data_md" v-for="(chartItem,index) in leftChartArr" :key="index"
                     :style="{height: setSingleHeight + 'px'}">
                    <h2 class="name">{{chartItem.name}}</h2>
                    <div class="con">
                        <div class="chart" :style="{height: (setSingleHeight - 50) + 'px'}"
                             :id="'main'+(index+1)"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap middle">
            <div class="title">
                <div class="real_time">{{realTime}}</div>
                <div class="total_price">￥{{totalPrice | parseFormatNum}}</div>
            </div>
            <div class="detail_info clearfix">
                <div class="item customers">
                    <div class="key">客户数</div>
                    <div class="value">{{customers}}</div>
                </div>
                <div class="item orders">
                    <div class="key">订单数</div>
                    <div class="value">{{orderNumber}}</div>
                </div>
                <div class="item univalence">
                    <div class="key">客单价</div>
                    <div class="value">￥{{unitPrice}}</div>
                </div>
            </div>
            <div id="main3" :style="{height: setSingleHeight*3/2 + 'px'}"></div>
            <div class="data_md deal_order">
                <h2 class="name">成交订单</h2>
                <div class="con">
                    <div class="item" v-for="(item,index) in heatMapOrderArr" :key="index">
                        <div class="user">{{item.userName}}</div>
                        <div class="store">{{item.store}}</div>
                        <div class="amount">{{item.amount}}</div>
                        <div class="time">{{item.time}}</div>
                    </div>
                </div>
                <div class="bottom_blur"></div>
            </div>
        </div>
        <div class="wrap right">
            <div class="inner">
                <div class="data_md" v-for="(chartItem,index) in rightChartArr" :key="index"
                     :style="{height: setSingleHeight + 'px'}">
                    <h2 class="name">{{chartItem.name}}</h2>
                    <div class="con">
                        <div class="chart" :style="{height: (setSingleHeight - 50) + 'px'}"
                             :id="'main'+(index+4)"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {mapState, mapActions, mapMutations} from 'vuex';

    import echarts from 'echarts';
    import 'echarts/map/js/china.js';

    export default {
        data() {
            return {
                realTime: '00:00:00',
                customers: 11,
                totalPrice: 10223333,
                orderNumber: 34859,
                unitPrice: 80,
                goldReach: {
                    occuRate: '90%',
                    target: '200000',
                    atPresent: '150000',
                    increaseRate: '15%'
                },
                leftChartArr: [{
                    name: '营业排行榜'
                }, {
                    name: '订单实时统计'
                }],
                rightChartArr: [{
                    'name': '会员等级占比'
                }, {
                    'name': '新老客占比'
                }, {
                    'name': '营业额实时统计'
                }]
            }
        },
        created() {
            let me = this;
            // 实时时钟显示
            me.getRealTime();

            me.getHeatMapOrderData();
            me.getVipRatioData();
            me.getNewOldData();
        },
        mounted() {
            let me = this;
            me.businessRankingChart();
            me.vipDistributionChart();
            me.orderStatisticsChart();
            me.newOldRatioChart();
            me.salesStatisticsChart();
            me.orderHeatChart();
        },
        methods: {
            ...mapActions([
                'getHeatMapOrderData',
                'getVipRatioData',
                'getNewOldData'
            ]),
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
            businessRankingChart() {
                let me = this;
                me.initChart(document.getElementById('main1'), {
                    color: ["#009dc2", "#7e5dd7"],
                    tooltip: {
                        show: true,
                        trigger: "axis",
                        axisPointer: {
                            type: "shadow"
                        },
                        backgroundColor: "#f60",
                    },
                    legend: {
                        data:[
                            "actual",
                            "target"
                        ],
                        y: "bottom"
                    },
                    xAxis: [
                        {
                            type: "category"
                        }
                    ],
                    yAxis: [
                        {
                            type: "value"
                        },
                        {
                            type: "value",
                            show: false
                        }
                    ],
                    dataset: {
                        source: me.convertLine()
                    },
                    series: [
                        {
                            name: "达成率",
                            type: "line",
                            seriesLayoutBy: "row",
                            yAxisIndex: 1,
                            encode: {
                                y: 3
                            },
                            smooth: true
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
            // 订单实时统计
            orderStatisticsChart() {
                let me = this;
                me.initChart(document.getElementById('main2'), {
                    color: ["#009dc2", "#7e5dd7"],
                    tooltip: {
                        show: true,
                        trigger: "axis"
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
                                9,
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
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: 'rgba(0,157,194,1)'},
                                            {offset: 1, color: 'rgba(255,255,255,0)'}
                                        ]
                                    )
                                }
                            },
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
                                50,
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
            // vip分布/会员占比
            vipDistributionChart() {
                let me = this;
                let opt = {
                    color: ["#009dc2", "#7e5dd7", "#5113b1", "#4702fb", "#0a84a1", "#7b4cf4"],
                    tooltip: {
                        show: false,
                        trigger: "item"
                    },
                    legend: {
                        orient: "horizontal",
                        x: "center",
                        y: "bottom"
                    },
                    series: [{
                        type: "pie",
                        selectedMode: "multiple",
                        radius: [
                            "50%",
                            "70%"
                        ],
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                formatter: "{b}:{d}%",
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        data: []
                    }
                    ]
                };
                for (var prop in me.vipRatioObj) {
                    opt.series[0].data.push({
                        'value': parseFloat(me.vipRatioObj[prop]) * 100,
                        'name': prop.substr(0, prop.length - 4)
                    })
                }
                let chart = me.initChart(document.getElementById('main4'), opt);
                me.pieIntervalShow(chart);
            },
            // 新老客占比
            newOldRatioChart() {
                let me = this;
                let opt = {
                    color: ["#009dc2", "#7e5dd7", "#5113b1"],
                    tooltip: {
                        trigger: "item",
                        formatter: "{b}:{c}({d}%)",
                        show: false
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
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    formatter: "{b}:{d}%",
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            data: []
                        }
                    ]
                };
                let nameMap = {
                    'notVIPRate': '非会员',
                    'newVIPRate': '新用户',
                    'oldVIPRate': '老用户'
                }
                for (var prop in me.newOldObj) {
                    opt.series[0].data.push({
                        'value': parseFloat(me.newOldObj[prop]) * 100,
                        'name': prop
                    })
                }
                let chart = me.initChart(document.getElementById('main5'), opt);
                me.pieIntervalShow(chart);
            },
            // 营业额实时统计
            salesStatisticsChart() {
                let me = this;
                me.initChart(document.getElementById('main6'), {
                    color: ["#009dc2", "#7e5dd7"],
                    tooltip: {
                        show: true,
                        trigger: "axis",
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
            // 订单热力图
            orderHeatChart() {
                let me = this;
                me.initChart(document.getElementById('main3'), {
                    tooltip: {
                        trigger: "item"
                    },
                    visualMap: {
                        min: 0,
                        max: 2500,
                        x: "left",
                        y: "bottom",
                        text: [
                            "高",
                            "低"
                        ],
                        calculable: true
                    },
                    series: [
                        {
                            name: "订单",
                            type: "map",
                            map: "china",
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true
                                    }
                                },
                                emphasis: {
                                    label: {
                                        show: true
                                    }
                                }
                            },
                            data: [
                                {
                                    name: "北京",
                                    value: 234
                                },
                                {
                                    "name": "天津",
                                    "value": 532
                                },
                                {
                                    "name": "上海",
                                    "value": 134
                                },
                                {
                                    "name": "重庆",
                                    "value": 983
                                },
                                {
                                    "name": "河北",
                                    "value": 783
                                },
                                {
                                    "name": "河南",
                                    "value": 345
                                },
                                {
                                    "name": "云南",
                                    "value": 872
                                },
                                {
                                    "name": "辽宁",
                                    "value": 94
                                },
                                {
                                    "name": "黑龙江",
                                    "value": 342
                                },
                                {
                                    "name": "湖南",
                                    "value": 989
                                },
                                {
                                    "name": "安徽",
                                    "value": 767
                                },
                                {
                                    "name": "山东",
                                    "value": 675
                                },
                                {
                                    "name": "新疆",
                                    "value": 874
                                },
                                {
                                    "name": "江苏",
                                    "value": 874
                                },
                                {
                                    "name": "浙江",
                                    "value": 878
                                },
                                {
                                    "name": "江西",
                                    "value": 928
                                },
                                {
                                    "name": "湖北",
                                    "value": 44
                                },
                                {
                                    "name": "广西",
                                    "value": 448
                                },
                                {
                                    "name": "甘肃",
                                    "value": 887
                                },
                                {
                                    "name": "山西",
                                    "value": 903
                                },
                                {
                                    "name": "内蒙古",
                                    "value": 673
                                },
                                {
                                    "name": "陕西",
                                    "value": 563
                                },
                                {
                                    "name": "吉林",
                                    "value": 747
                                },
                                {
                                    "name": "福建",
                                    "value": 112
                                },
                                {
                                    "name": "贵州",
                                    "value": 473
                                },
                                {
                                    "name": "广东",
                                    "value": 647
                                },
                                {
                                    "name": "青海",
                                    "value": 838
                                },
                                {
                                    "name": "西藏",
                                    "value": 626
                                },
                                {
                                    "name": "四川",
                                    "value": 515
                                },
                                {
                                    "name": "宁夏",
                                    "value": 172
                                },
                                {
                                    "name": "海南",
                                    "value": 77
                                },
                                {
                                    "name": "台湾",
                                    "value": 837
                                },
                                {
                                    "name": "香港",
                                    "value": 677
                                },
                                {
                                    "name": "澳门",
                                    "value": 43
                                }
                            ]
                        }
                    ]
                });
            },
            // 初始化图表
            initChart(el, opts, type) {
                if (el) {
                    let myChart = echarts.init(el);
                    myChart.setOption(opts);
                    return myChart;
                }
            },
            //环形图定时展示
            pieIntervalShow(myChart) {
                let currentIndex = -1;
                setInterval(function () {
                    var dataLen = myChart.getOption().series[0].data.length;
                    // 取消之前高亮的图形
                    myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                    currentIndex = (currentIndex + 1) % dataLen;
                    // 高亮当前图形
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                    // 显示 tooltip
                    myChart.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: currentIndex
                    });
                }, 5000)
            },
            // 解析营业排行数据
            convertLine() {
                let lineData = {
                    "code": 0,
                    "message": "success",
                    "result": {
                        "target": [{
                            "company": "上海子公司",
                            "amount": "10000"
                        }, {
                            "company": "杭州分公司",
                            "amount": "10000"
                        }, {
                            "company": "江苏分公司",
                            "amount": "10000"
                        }],
                        "actual": [{
                            "company": "上海子公司",
                            "amount": "6000"
                        }, {
                            "company": "杭州分公司",
                            "amount": "7000"
                        }, {
                            "company": "江苏分公司",
                            "amount": "8000"
                        }],
                        "reachRate": [{
                            "company": "上海子公司",
                            "reachRate": "20.00%"
                        }, {
                            "company": "杭州分公司",
                            "reachRate": "42.00%"
                        }, {
                            "company": "江苏分公司",
                            "reachRate": "85.00%"
                        }]
                    },
                    "succ": true
                };
                let source = [],
                    company = [""],
                    target = ["target"],
                    actual = ["actual"],
                    reachRate = [""],
                    i = 0,
                    len, data, val;

                data = lineData.result.actual;
                len = data.length;
                for (; i < len; i++) {
                    company.push(data[i]["company"]);
                    actual.push(data[i]["amount"]);
                }

                data = lineData.result.target;
                len = data.length;
                i = 0;
                for (; i < len; i++) {
                    target.push(data[i]["amount"]);
                }

                data = lineData.result.reachRate;
                len = data.length;
                i = 0;
                for (; i < len; i++) {
                    val = data[i]["reachRate"];
                    reachRate.push(val.substr(0, val.length - 1));
                }

                return [company, actual, target, reachRate];
            }
        },
        computed: {
            ...mapState({
                heatMapOrderArr: state => state.double11Module.heatMapOrderArr,
                vipRatioObj: state => state.double11Module.vipRatioObj,
                newOldObj: state => state.double11Module.newOldObj,
            }),
            setSingleHeight() {
                let singleHeight = parseInt((window.innerHeight - 30) / 3);
                return singleHeight;
            }
        }
    }

</script>

