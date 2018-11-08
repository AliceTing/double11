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
        .right .inner .data_md:first-child{
            padding-top: 20px;
        }
        .left .inner .data_md:first-child{
            .con{
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
                .main{
                    flex: 1;
                    overflow: hidden;
                    scroll-y:auto;
                }
                .list{
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
                    &:before,
                    &:after{
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
                    &:before{
                        bottom: -30px;
                        border-color: #593AFF transparent transparent transparent;
                    }
                    &:after{
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
                    .up{
                        position: relative;
                        display: inline-block;
                        width: 8px;
                        height: 15px;
                        margin-left: 10px;
                        background-color: #CB2106;
                        &:before{
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

<style lang="scss">
    html,
    body {
        height: 100%;
        background: linear-gradient(0deg, #16084a, #16084b);
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
                                        1)}}<span class="unit">%</span><span class="up" v-if="parseFloat(goldReach.increaseRate) > 0"></span>
                                    </div>
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
            <div class="data_md" :style="{height: setMiddleSingleHeight*2/3 + 'px'}">
                <div class="title">
                    <div class="real_time">{{realTime}}</div>
                    <div class="total_price">￥{{mainInfo.amount | parseFormatNum}}</div>
                </div>
                <div class="detail_info clearfix">
                    <div class="item customers">
                        <div class="key">客户数</div>
                        <div class="value">{{mainInfo.userNum}}</div>
                    </div>
                    <div class="item orders">
                        <div class="key">订单数</div>
                        <div class="value">{{mainInfo.orderNum}}</div>
                    </div>
                    <div class="item univalence">
                        <div class="key">客单价</div>
                        <div class="value">￥{{mainInfo.avgPrice}}</div>
                    </div>
                </div>
            </div>
            <div class="data_md" :style="{height: setMiddleSingleHeight + 'px'}">
                <div id="main3" :style="{height: setMiddleSingleHeight - 50 + 'px'}"></div>
            </div>
            <div class="data_md deal_order" :style="{height: setMiddleSingleHeight*1/3 + 'px'}">
                <div class="con">
                    <h2 class="name">成交订单</h2>
                    <div class="main" id="scrollBox">
                        <div class="list">
                            <div class="item" v-for="(item,index) in transactionOrder.transOrderInfo" :key="index">
                                <div class="user">{{item.customer_id}}</div>
                                <div class="store">{{item.storename}}</div>
                                <div class="amount">{{item.orderamount}}</div>
                                <div class="time">{{item.dt}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom_blur"></div>
                </div>
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
                }],
                refreshTime:5 * 60,
                singleBoxHeight: '',
                mainInfo:{}

            }
        },
        created() {
            let me = this;
            // 实时时钟显示
            me.getRealTime();

            // 调接口取数据
            me.getTargetComplete();
            me.getBusinessRanking();
            me.getOrderMap();
            me.getTransactionOrder();
            me.getRealTimeOrderNumLine();
            me.getRealTimeAmountLine();

        },
        mounted() {
            let me = this;

            // 初始化图表

            // 营业排行
            me.businessRankingChart();

            // 会员
            me.vipDistributionChart();
            me.newOldRatioChart();

            // 订单实时统计
            me.orderStatisticsChart();

            // 营业额实时统计
            me.salesStatisticsChart();

            // 热力图
            me.orderHeatChart();

            // 数据总览
            me.getMainTitle();

            // 定时刷新数据
            me.intervalData();
        },
        methods: {
            ...mapActions([
                'getData',
                'getTransactionOrder',
                'getMember',
                'getOrderMap',
                'getTargetComplete',
                'getMainTitle',
                'getRealTimeOrderNumLine',
                'getRealTimeAmountLine',
                'getBusinessRanking'
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
                                formatter:function (val,index) {
                                    return (parseFloat(val)/10000)+"W";
                                }
                            },
                            splitLine:{
                                lineStyle: {
                                    type: 'dashed',
                                    color: ['#fff'],
                                    opacity:0.3
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
                            lineStyle:{
                                width:3
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
                        splitLine:{
                            lineStyle: {
                                type: 'dashed',
                                color: ['#fff'],
                                opacity:0.3
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
                            lineStyle:{
                                width:3
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
                        center:[
                            "50%",
                            "40%"
                        ],
                        radius: [
                            "50%",
                            "75%"
                        ],
                        label: {
                            show: true,
                            position: 'outside',
                            formatter: "{b}:{d}%",
                            fontSize:24
                        },
                        data: []
                    }
                    ]
                };
                me.initChart(document.getElementById('main4'), opt);

            },
            // 新老客占比
            newOldRatioChart() {
                let me = this;
                let opt = {
                    color: ["#009dc2", "#7e5dd7", "#5113b1"],
                    tooltip: {
                        formatter: "{b}:{c}({d}%)",
                        show: true
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
                                "75%"
                            ],
                            label: {
                                show: true,
                                position: 'outside',
                                formatter: "{b}:{d}%",
                                fontSize:24
                            },
                            data: []
                        }
                    ]
                };

                me.initChart(document.getElementById('main5'), opt);
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
                        splitLine:{
                            lineStyle: {
                                type: 'dashed',
                                color: ['#fff'],
                                opacity:0.3
                            }
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#69b7ff',
                                fontSize: '14'
                            },
                            formatter:function (val,index) {
                                return (parseFloat(val)/10000)+"W";
                            }
                        }
                    }],
                    legend: {
                        data: [
                            "now",
                            //"lastyear"
                        ],
                        y: "bottom",
                        textStyle: {
                            color: '#69b7ff'
                        }
                    },
                    series: [
                        {
                            name: "now",
                            type: "line",
                            smooth: true,
                            seriesLayoutBy: "row",
                            encode:{
                                x:0,
                                y:1
                            },
                            lineStyle:{
                                width:3
                            }
                        },
                        // {
                        //     name: "lastyear",
                        //     type: "line",
                        //     smooth: true,
                        //     seriesLayoutBy: "row"
                        // }
                    ]
                };
                me.initChart(document.getElementById('main6'), opt);

            },
            // 订单热力图
            orderHeatChart() {
                let me = this;
                let opt = {
                    geo: {
                        map: "china",
                        label: {
                            //show: true,
                            fontSize: 10
                        },
                        itemStyle:{
                            normal:{
                                areaColor:"#1359a8",
                                borderColor:"#5013b1"
                            }
                        },
                        zoom:1.5
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
                            let len=parseInt(val[2]).toString().length;
                            return (val[2] / Math.pow(10,len)) + 8;
                        }
                    }, {
                        name: "最新",
                        type: "effectScatter",
                        coordinateSystem: "geo",
                        symbolSize: function (val) {
                            let len=parseInt(val[2]).toString().length;
                            return (val[2] / Math.pow(10,len)) + 8;
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
                me.transactionOrderMove();
            },
            // 初始化图表
            initChart(el, opts, type) {
                let me = this;
                if (el) {
                    let myChart = echarts.init(el);
                    myChart.setOption(opts);
                    return myChart;
                }
            },
            //订单列表循环滚动
            transactionOrderMove(){
                let area =document.getElementById('scrollBox');
                let lHeight = 40;
                let time = 50;
                area.innerHTML+=area.innerHTML;
                area.scrollTop = 0;
                let timer;
                let sh=0;

                let fn = {

                    scrollMove: function () {
                        sh++;
                        area.scrollTop = sh;
                        timer = setInterval(fn.scrollUp, time);
                    },
                    scrollUp: function () {
                        if (Math.ceil(area.scrollTop) % lHeight == 0) {//滚动一行后，延时2秒
                            clearInterval(timer);
                            setTimeout(fn.scrollMove, 2000);
                        } else {
                            sh++;
                            area.scrollTop = sh;
                            if (area.scrollTop >= area.scrollHeight / 2) {    //判断滚动高度,当滚动高度大于area本身的高度时，使其回到原点重新滚动
                                area.scrollTop = 0;
                                sh = 0;
                            }
                        }
                    }
                };

                setTimeout(fn.scrollMove,2000);//延迟2秒后执行scrollMove
            },
            //环形图定时展示
            pieIntervalShow(myChart) {
                let currentIndex = -1;
                let showTip=function(){
                    let dataLen = myChart.getOption().series[0].data.length;
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

                    return showTip;
                }
                setInterval(showTip(), 5000);
            },
            // 营业排行数据刷新
            refreshBusinessRanking() {
                let me = this;
                let province = [""],
                    target = ["target"],
                    actual = ["actual"],
                    rate = [""],
                    i = 0,
                    len, data, val, myChart, opts;

                //调用api请求数据，没有则直接返回
                let lineData = me.businessRanking;
                if (!lineData) return;

                myChart = echarts.getInstanceByDom(document.getElementById("main1"));
                opts = myChart.getOption();

                data = lineData.businessRanking;
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
                opts.dataset={
                    source:[province, actual, target, rate]
                };
                myChart.setOption(opts);
            },
            //订单实时统计数据刷新
            refreshRealTimeOrderNumLine() {
                let me = this, data, time=[],val=[], myChart, opts;

                //调用api请求数据，没有则直接返回
                data = me.realTimeOrderNumLine;
                if (!data) return;

                myChart = echarts.getInstanceByDom(document.getElementById("main2"));
                opts = myChart.getOption();

                Object.keys(data).forEach(key=>{
                    time.push(key);
                    val.push(data[key]);
                });
                opts.dataset={
                    source:[time,val]
                };
                myChart.setOption(opts);
                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: time.length - 2
                });
            },
            //营业额实时统计数据刷新
            refreshRealTimeAmountLine() {
                let me = this,time=[],val=[], data, myChart, opts;

                //调用api请求数据，没有则直接返回
                //me.getRealTimeAmountLine();
                data = me.realTimeAmountLine;
                if (!data) return;

                myChart = echarts.getInstanceByDom(document.getElementById("main6"));
                opts = myChart.getOption();

                Object.keys(data).forEach(key=>{
                    time.push(key);
                    val.push(data[key]);
                });

                opts.dataset={
                    source:[time,val]
                };
                myChart.setOption(opts);
                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: time.length - 2
                });
            },
            // 地图刷新
            refreshHeatMap() {
                let me = this;
                let data, i = 0, len,
                    val, result = [], lnglat = [], allStore,
                    currentStore,
                    myChart, opts;

                myChart = echarts.getInstanceByDom(document.getElementById("main3"));
                opts = myChart.getOption();

                allStore = me.orderMap;
                if(allStore){
                    data = allStore.orderMapInfos;
                    len = data.length;
                    for (; i < len; i++) {
                        val = data[i];
                        lnglat = val["position"].split(',');
                        if (lnglat.toString() != "0,0") {
                            result.push({
                                name: "",
                                value: lnglat.concat(val["amount"])
                            });
                        }
                    }
                    opts.series[0].data = result;
                }

                currentStore = me.transactionOrder;
                if(currentStore){
                    data = currentStore.transOrderInfo;
                    i = 0;
                    len = data.length;
                    result = [];
                    for (; i < len; i++) {
                        val = data[i];
                        lnglat = val["position"].split(',');
                        if (lnglat.toString() != "0,0") {
                            result.push({
                                name: val["storename"],
                                value: lnglat.concat(val["orderamount"])
                            });
                        }
                    }
                    opts.series[1].data = result;
                }

                myChart.setOption(opts);
            },
            //会员刷新
            refreshMember() {
                let me = this;
                let myChart, opts;
                //调用api请求数据，没有则直接返回
                me.getData({
                    action: 'getMember',
                    fn(data){
                        //会员等级main4
                        myChart = echarts.getInstanceByDom(document.getElementById("main4"));
                        opts = myChart.getOption();
                        opts.series[0].data = data.memberLevel||[];
                        myChart.setOption(opts);
                        // me.pieIntervalShow(myChart);

                        //新老会员main5
                        myChart = echarts.getInstanceByDom(document.getElementById("main5"));
                        opts = myChart.getOption();
                        opts.series[0].data = data.memberDistribute||[];
                        myChart.setOption(opts);
                    }
                });
            },
            //中央数据
            refreshMainTitle(){
                let me = this, count = 4,
                    numA, numO, numU, numP,
                    amount, orderNum, userNum, avgPrice,
                    time = 1000 * 30;

                var getNum = function (tar, des) {
                    return Math.ceil(((parseInt(tar) - parseInt(des)) / (time / 100)));
                }
                //调用api请求数据，没有则直接返回
                me.getData({
                    action: 'getMainTitle',
                    fn(data) {

                        amount = 15000;//parseInt(me.mainInfo.amount);
                        orderNum = 200;
                        userNum = 0;
                        avgPrice = 16000;

                        numA = getNum(me.mainTitle.amount, amount);
                        numO = getNum(me.mainTitle.orderNum, orderNum);
                        numU = getNum(me.mainTitle.userNum, userNum);
                        numP = getNum(me.mainTitle.avgPrice, avgPrice);


                        var t = setInterval(function () {
                            count = 4;

                            amount += numA;
                            if (amount >= me.mainTitle.amount) {
                                amount = me.mainTitle.amount;
                                count--;
                            }

                            orderNum += numO;
                            if (orderNum >= me.mainTitle.orderNum) {
                                orderNum = me.mainTitle.orderNum;
                                count--;
                            }

                            userNum+=numU;
                            if (userNum >= me.mainTitle.userNum) {
                                userNum = me.mainTitle.userNum;
                                count--;
                            }

                            avgPrice+=numP;
                            if (avgPrice >= me.mainTitle.avgPrice) {
                                avgPrice = me.mainTitle.avgPrice;
                                count--;
                            }


                            if( count==0){
                                clearInterval(t);
                            }

                            me.mainInfo = {
                                amount: amount,
                                orderNum: orderNum,
                                userNum: userNum,
                                avgPrice: avgPrice
                            };
                        }, 100);



                    }
                });
            },
            //定时刷新
            intervalData() {
                let me = this;
                let refreshData = function () {

                    me.refreshBusinessRanking();
                    me.refreshRealTimeAmountLine();
                    me.refreshRealTimeOrderNumLine();
                    me.refreshMember();
                    me.refreshHeatMap();
                    me.refreshMainTitle();

                    return refreshData;
                };
                setInterval(refreshData(), 1000 * me.refreshTime);
            }
        },
        computed: {
            ...mapState({
                transactionOrder: state => state.double11Module.transactionOrder,
                member: state => state.double11Module.member,
                orderMap: state => state.double11Module.orderMap,
                targetComplete: state => state.double11Module.targetComplete,
                mainTitle: state => state.double11Module.mainTitle,
                realTimeAmountLine: state => state.double11Module.realTimeAmountLine,
                realTimeOrderNumLine: state => state.double11Module.realTimeOrderNumLine,
                businessRanking: state => state.double11Module.businessRanking
            }),
            setSingleHeight() {
                let innerBoxHeight = window.innerHeight - 90;
                let singleHeight = Math.floor(parseInt((innerBoxHeight) / 3));
                return singleHeight;
            },
            setMiddleSingleHeight(){
                let innerBoxHeight = window.innerHeight;
                let middleSingleHeight = Math.floor(parseInt((innerBoxHeight) / 2));
                return middleSingleHeight;
            }
        }
    }

</script>

