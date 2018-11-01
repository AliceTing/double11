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
                padding: 0 20px;
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
                padding: 0 20px;
                color: #61ABFF;
                font-size: 20px;
                line-height: 30px;
                h4 {
                    font-weight: normal;
                }
                .value {
                    margin-top: 10px;
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
                            color: '#3D3E86'
                        }
                    },
                    xAxis: [
                        {
                            type: "category",
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#3D3E86',
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
                                    color: '#3D3E86',
                                    fontSize: '14'
                                }
                            }
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
                let opt = {
                    color: ["#009dc2", "#7e5dd7"],
                    tooltip: {
                        show: true,
                        trigger: "axis"
                    },
                    xAxis: [{
                        type: "category",
                        boundaryGap: true
                    }],
                    yAxis: [{
                        type: "value"
                    }],
                    legend: {
                        data: [
                            "今日订单",
                            "昨日订单"
                        ],
                        y: "bottom",
                        textStyle: {
                            color: '#3D3E86'
                        }
                    },
                    dataset: {
                        source: me.convertOrderData()
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
                            seriesLayoutBy: "row"
                        },
                        {
                            name: "昨日订单",
                            type: "line",
                            smooth: true,
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        type: "default"
                                    }
                                }
                            },
                            seriesLayoutBy: "row"
                        }
                    ]
                };
                let chart = me.initChart(document.getElementById('main2'), opt);
                chart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: chart.getOption().dataset[0].source[0].length - 2
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
                        y: "bottom",
                        textStyle: {
                            color: '#3D3E86'
                        }
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
                        y: "bottom",
                        textStyle: {
                            color: '#3D3E86'
                        }
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
                };

                // Object
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
                let opt = {
                    color: ["#009dc2", "#7e5dd7"],
                    tooltip: {
                        show: true,
                        trigger: "axis"
                    },
                    xAxis: [{
                        type: "category",
                        boundaryGap: true
                    }],
                    yAxis: [{
                        type: "value"
                    }],
                    legend: {
                        data: [
                            "now",
                            "lastyear"
                        ],
                        y: "bottom",
                        textStyle: {
                            color: '#3D3E86'
                        }
                    },
                    dataset: {
                        source: me.convertTotalData()
                    },
                    series: [
                        {
                            name: "now",
                            type: "line",
                            smooth: true,
                            seriesLayoutBy: "row"
                        },
                        {
                            name: "lastyear",
                            type: "line",
                            smooth: true,
                            seriesLayoutBy: "row"
                        }
                    ]
                };
                let chart = me.initChart(document.getElementById('main6'), opt);
                chart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: chart.getOption().dataset[0].source[0].length - 2
                });
            },
            // 订单热力图
            orderHeatChart() {
                let me = this;
                let opt = {
                    geo: {
                        map: "china",
                        label: {
                            show: true,
                            fontSize:10
                        },
                        roam: true
                    },
                    tooltip: {
                        trigger: "item"
                    },
                    series: [{
                        name: "订单",
                        type: "scatter",
                        coordinateSystem: "geo",
                        itemStyle:{
                            color:"red"
                        },
                        symbolSize: function(val) {
                            return (val[2] / 10) + 8;
                        }
                    }, {
                        name: "最新",
                        type: "effectScatter",
                        coordinateSystem: "geo",
                        symbolSize: function(val) {
                            return (val[2] / 10) + 8;
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
                                color: "#f4e925",
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
                let chart = me.initChart(document.getElementById('main3'), opt);
                me.refresh(chart);

                // setInterval(me.refresh(chart), 3000);
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
            },
            // 解析订单实时统计数据
            convertOrderData() {
                let orderData = {
                    "code": 0,
                    "message": "success",
                    "result": {
                        "todayInfo": {
                            "0": "100",
                            "1": "210",
                            "2": "330",
                            "3": "100",
                            "4": "210",
                            "5": "330",
                            "6": "100",
                            "7": "210",
                            "8": "330",
                            "9": "100",
                            "10": "210",
                            "11": "330",
                            "12": "1200"
                        },
                        "yesterdayInfo": {
                            "0": "90",
                            "1": "88",
                            "2": "100",
                            "3": "100",
                            "4": "210",
                            "5": "330",
                            "6": "1001",
                            "7": "90",
                            "8": "88",
                            "9": "100",
                            "10": "100",
                            "11": "210",
                            "12": "330"
                        }
                    },
                    "succ": true
                };
                let source = [],
                    todayInfo = [],
                    yesterdayInfo = [],
                    hours = [],
                    data;

                data = orderData.result.todayInfo;
                for (let key in data) {
                    hours.push(key);
                    todayInfo.push(data[key]);
                }

                data = orderData.result.yesterdayInfo;
                for (let key in data) {
                    yesterdayInfo.push(data[key]);
                }

                return [hours, todayInfo, yesterdayInfo];
            },
            // 解析营业额实时统计数据
            convertTotalData() {
                let totalData = {
                    "code": 0,
                    "message": "success",
                    "result": {
                        "todayInfo": {
                            "0": "100",
                            "1": "210",
                            "2": "330",
                            "3": "400",
                            "4": "510",
                            "5": "630",
                            "6": "700",
                            "7": "810",
                            "8": "930",
                            "9": "1000",
                            "10": "1210",
                            "11": "1330",
                            "12": "2200"
                        },
                        "lastYearInfo": {
                            "0": "90",
                            "1": "98",
                            "2": "100",
                            "3": "110",
                            "4": "120",
                            "5": "130",
                            "6": "141",
                            "7": "180",
                            "8": "288",
                            "9": "400",
                            "10": "500",
                            "11": "710",
                            "12": "930"
                        }
                    },
                    "succ": true
                };

                let source = [],
                    todayInfo = [],
                    lastYearInfo = [],
                    hours = [],
                    data;

                data = totalData.result.todayInfo;
                for (let key in data) {
                    hours.push(key);
                    todayInfo.push(data[key]);
                }

                data = totalData.result.lastYearInfo;
                for (let key in data) {
                    lastYearInfo.push(data[key]);
                }

                return [hours, todayInfo, lastYearInfo];
            },
            // 地图闪亮
            refresh(myChart){
                console.log('myChart',myChart);
                var mapData = [
                    {
                        name: "海门",
                        value: 59
                    },
                    {
                        name: "鄂尔多斯",
                        value: 120
                    },
                    {
                        name: "招远",
                        value: 124
                    },
                    {
                        name: "舟山",
                        value: 121
                    },
                    {
                        name: "齐齐哈尔",
                        value: 114
                    },
                    {
                        name: "盐城",
                        value: 75
                    },
                    {
                        name: "赤峰",
                        value: 86
                    },
                    {
                        name: "青岛",
                        value: 148
                    },
                    {
                        name: "乳山",
                        value: 198
                    },
                    {
                        name: "金昌",
                        value: 219
                    },
                    {
                        name: "泉州",
                        value: 210
                    },
                    {
                        name: "莱西",
                        value: 121
                    },
                    {
                        name: "日照",
                        value: 321
                    },
                    {
                        name: "胶南",
                        value: 22
                    },
                    {
                        name: "南通",
                        value: 93
                    },
                    {
                        name: "拉萨",
                        value: 24
                    },
                    {
                        name: "云浮",
                        value: 24
                    },
                    {
                        name: "梅州",
                        value: 25
                    },
                    {
                        name: "文登",
                        value: 25
                    },
                    {
                        name: "上海",
                        value: 25
                    },
                    {
                        name: "攀枝花",
                        value: 25
                    },
                    {
                        name: "威海",
                        value: 25
                    },
                    {
                        name: "承德",
                        value: 25
                    },
                    {
                        name: "厦门",
                        value: 26
                    },
                    {
                        name: "汕尾",
                        value: 26
                    },
                    {
                        name: "潮州",
                        value: 26
                    },
                    {
                        name: "丹东",
                        value: 27
                    },
                    {
                        name: "太仓",
                        value: 27
                    },
                    {
                        name: "曲靖",
                        value: 27
                    },
                    {
                        name: "烟台",
                        value: 28
                    },
                    {
                        name: "福州",
                        value: 29
                    },
                    {
                        name: "瓦房店",
                        value: 30
                    },
                    {
                        name: "即墨",
                        value: 30
                    },
                    {
                        name: "抚顺",
                        value: 31
                    },
                    {
                        name: "玉溪",
                        value: 31
                    },
                    {
                        name: "张家口",
                        value: 31
                    },
                    {
                        name: "阳泉",
                        value: 31
                    },
                    {
                        name: "莱州",
                        value: 32
                    },
                    {
                        name: "湖州",
                        value: 32
                    },
                    {
                        name: "汕头",
                        value: 32
                    },
                    {
                        name: "昆山",
                        value: 33
                    },
                    {
                        name: "宁波",
                        value: 33
                    },
                    {
                        name: "湛江",
                        value: 33
                    }
                ];

                var geoCoordMap = {
                    "海门": [121.15, 31.89, 100],
                    "鄂尔多斯": [109.781327, 39.608266],
                    "招远": [120.38, 37.35],
                    "舟山": [122.207216, 29.985295],
                    "齐齐哈尔": [123.97, 47.33],
                    "盐城": [120.13, 33.38],
                    "赤峰": [118.87, 42.28],
                    "青岛": [120.33, 36.07],
                    "乳山": [121.52, 36.89],
                    "金昌": [102.188043, 38.520089],
                    "泉州": [118.58, 24.93],
                    "莱西": [120.53, 36.86],
                    "日照": [119.46, 35.42],
                    "胶南": [119.97, 35.88],
                    "南通": [121.05, 32.08],
                    "拉萨": [91.11, 29.97],
                    "云浮": [112.02, 22.93],
                    "梅州": [116.1, 24.55],
                    "文登": [122.05, 37.2],
                    "上海": [121.48, 31.22],
                    "攀枝花": [101.718637, 26.582347],
                    "威海": [122.1, 37.5],
                    "承德": [117.93, 40.97],
                    "厦门": [118.1, 24.46],
                    "汕尾": [115.375279, 22.786211],
                    "潮州": [116.63, 23.68],
                    "丹东": [124.37, 40.13],
                    "太仓": [121.1, 31.45],
                    "曲靖": [103.79, 25.51],
                    "烟台": [121.39, 37.52],
                    "福州": [119.3, 26.08],
                    "瓦房店": [121.979603, 39.627114],
                    "即墨": [120.45, 36.38],
                    "抚顺": [123.97, 41.97],
                    "玉溪": [102.52, 24.35],
                    "张家口": [114.87, 40.82],
                    "阳泉": [113.57, 37.85],
                    "莱州": [119.942327, 37.177017],
                    "湖州": [120.1, 30.86],
                    "汕头": [116.69, 23.39],
                    "昆山": [120.95, 31.39],
                    "宁波": [121.56, 29.86],
                    "湛江": [110.359377, 21.270708],
                    "揭阳": [116.35, 23.55],
                    "荣成": [122.41, 37.16],
                    "连云港": [119.16, 34.59],
                    "葫芦岛": [120.836932, 40.711052],
                    "常熟": [120.74, 31.64],
                    "东莞": [113.75, 23.04],
                    "河源": [114.68, 23.73],
                    "淮安": [119.15, 33.5],
                    "泰州": [119.9, 32.49],
                    "南宁": [108.33, 22.84],
                    "营口": [122.18, 40.65],
                    "惠州": [114.4, 23.09],
                    "江阴": [120.26, 31.91],
                    "蓬莱": [120.75, 37.8],
                    "韶关": [113.62, 24.84],
                    "嘉峪关": [98.289152, 39.77313],
                    "广州": [113.23, 23.16],
                    "延安": [109.47, 36.6],
                    "太原": [112.53, 37.87],
                    "清远": [113.01, 23.7],
                    "中山": [113.38, 22.52],
                    "昆明": [102.73, 25.04],
                    "寿光": [118.73, 36.86],
                    "盘锦": [122.070714, 41.119997],
                    "长治": [113.08, 36.18],
                    "深圳": [114.07, 22.62],
                    "珠海": [113.52, 22.3],
                    "宿迁": [118.3, 33.96],
                    "咸阳": [108.72, 34.36],
                    "铜川": [109.11, 35.09],
                    "平度": [119.97, 36.77],
                    "佛山": [113.11, 23.05],
                    "海口": [110.35, 20.02],
                    "江门": [113.06, 22.61],
                    "章丘": [117.53, 36.72],
                    "肇庆": [112.44, 23.05],
                    "大连": [121.62, 38.92],
                    "临汾": [111.5, 36.08],
                    "吴江": [120.63, 31.16],
                    "石嘴山": [106.39, 39.04],
                    "沈阳": [123.38, 41.8],
                    "苏州": [120.62, 31.32],
                    "茂名": [110.88, 21.68],
                    "嘉兴": [120.76, 30.77],
                    "长春": [125.35, 43.88],
                    "胶州": [120.03336, 36.264622],
                    "银川": [106.27, 38.47],
                    "张家港": [120.555821, 31.875428],
                    "三门峡": [111.19, 34.76],
                    "锦州": [121.15, 41.13],
                    "南昌": [115.89, 28.68],
                    "柳州": [109.4, 24.33],
                    "三亚": [109.511909, 18.252847],
                    "自贡": [104.778442, 29.33903],
                    "吉林": [126.57, 43.87],
                    "阳江": [111.95, 21.85],
                    "泸州": [105.39, 28.91],
                    "西宁": [101.74, 36.56],
                    "宜宾": [104.56, 29.77],
                    "呼和浩特": [111.65, 40.82],
                    "成都": [104.06, 30.67],
                    "大同": [113.3, 40.12],
                    "镇江": [119.44, 32.2],
                    "桂林": [110.28, 25.29],
                    "张家界": [110.479191, 29.117096],
                    "宜兴": [119.82, 31.36],
                    "北海": [109.12, 21.49],
                    "西安": [108.95, 34.27],
                    "金坛": [119.56, 31.74],
                    "东营": [118.49, 37.46],
                    "牡丹江": [129.58, 44.6],
                    "遵义": [106.9, 27.7],
                    "绍兴": [120.58, 30.01],
                    "扬州": [119.42, 32.39],
                    "常州": [119.95, 31.79],
                    "潍坊": [119.1, 36.62],
                    "重庆": [106.54, 29.59],
                    "台州": [121.420757, 28.656386],
                    "南京": [118.78, 32.04],
                    "滨州": [118.03, 37.36],
                    "贵阳": [106.71, 26.57],
                    "无锡": [120.29, 31.59],
                    "本溪": [123.73, 41.3],
                    "克拉玛依": [84.77, 45.59],
                    "渭南": [109.5, 34.52],
                    "马鞍山": [118.48, 31.56],
                    "宝鸡": [107.15, 34.38],
                    "焦作": [113.21, 35.24],
                    "句容": [119.16, 31.95],
                    "北京": [116.46, 39.92],
                    "徐州": [117.2, 34.26],
                    "衡水": [115.72, 37.72],
                    "包头": [110, 40.58],
                    "绵阳": [104.73, 31.48],
                    "乌鲁木齐": [87.68, 43.77],
                    "枣庄": [117.57, 34.86],
                    "杭州": [120.19, 30.26],
                    "淄博": [118.05, 36.78],
                    "鞍山": [122.85, 41.12],
                    "溧阳": [119.48, 31.43],
                    "库尔勒": [86.06, 41.68],
                    "安阳": [114.35, 36.1],
                    "开封": [114.35, 34.79],
                    "济南": [117, 36.65],
                    "德阳": [104.37, 31.13],
                    "温州": [120.65, 28.01],
                    "九江": [115.97, 29.71],
                    "邯郸": [114.47, 36.6],
                    "临安": [119.72, 30.23],
                    "兰州": [103.73, 36.03],
                    "沧州": [116.83, 38.33],
                    "临沂": [118.35, 35.05],
                    "南充": [106.110698, 30.837793],
                    "天津": [117.2, 39.13],
                    "富阳": [119.95, 30.07],
                    "泰安": [117.13, 36.18],
                    "诸暨": [120.23, 29.71],
                    "郑州": [113.65, 34.76],
                    "哈尔滨": [126.63, 45.75],
                    "聊城": [115.97, 36.45],
                    "芜湖": [118.38, 31.33],
                    "唐山": [118.02, 39.63],
                    "平顶山": [113.29, 33.75],
                    "邢台": [114.48, 37.05],
                    "德州": [116.29, 37.45],
                    "济宁": [116.59, 35.38],
                    "荆州": [112.239741, 30.335165],
                    "宜昌": [111.3, 30.7],
                    "义乌": [120.06, 29.32],
                    "丽水": [119.92, 28.45],
                    "洛阳": [112.44, 34.7],
                    "秦皇岛": [119.57, 39.95],
                    "株洲": [113.16, 27.83],
                    "石家庄": [114.48, 38.03],
                    "莱芜": [117.67, 36.19],
                    "常德": [111.69, 29.05],
                    "保定": [115.48, 38.85],
                    "湘潭": [112.91, 27.87],
                    "金华": [119.64, 29.12],
                    "岳阳": [113.09, 29.37],
                    "长沙": [113, 28.21],
                    "衢州": [118.88, 28.97],
                    "廊坊": [116.7, 39.53],
                    "菏泽": [115.480656, 35.23375],
                    "合肥": [117.27, 31.86],
                    "武汉": [114.31, 30.52],
                    "大庆": [125.03, 46.58]
                };
                var series = [],
                    lng, data, scatterData = [],
                    effectScatterData = [],
                    scatterSerie, effectScatter,
                    i = 0,
                    rendom, num;

                data = mapData;
                for (i = 0; i < data.length; i++) {
                    let geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        scatterData.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }

                for (i = 0; i < 10; i++) {
                    rendom = Math.floor(Math.random() * 10);
                    let geoCoord = geoCoordMap[data[rendom].name];
                    if (geoCoord) {
                        effectScatterData.push({
                            name: data[rendom].name,
                            value: geoCoord.concat(data[rendom].value)
                        });
                    }
                }

                scatterSerie = myChart.getOption().series[0];
                scatterSerie.data = scatterData;
                series.push(scatterSerie);

                effectScatter = myChart.getOption().series[1];
                effectScatter.data = effectScatterData;
                series.push(effectScatter);

                myChart.getOption().series = series;
                myChart.setOption(myChart.getOption(), {
                    notmerge: true
                });
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

