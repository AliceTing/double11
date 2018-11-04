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

            // me.getHeatMapOrderData();
            // me.getVipRatioData();
            // me.getNewOldData();

            me.getMember();

            // me.getClubCardInfo();

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
                'getNewOldData',
                'getMember',
                'getClubCardInfo'
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
                        source: []
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
                        source: []
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
                        source:[]
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
                me.initChart(document.getElementById('main3'), opt);
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
            // 营业排行数据刷新
            refreshBusinessRanking() {
                let province = [""],
                    target = ["target"],
                    actual = ["actual"],
                    rate = [""],
                    i = 0,
                    len, data, val, myChart, opts;

                //调用api请求数据，没有则直接返回
                let lineData = getBusinessRanking();
                if (!lineData) return;

                myChart = echarts.getInstanceByDom(document.getElementById("main1"));
                opts = myChart.getOption();

                data = lineData.result.businessRanking;;
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
                opts.dataset.source = [province, actual, target, rate];
                myChart.setOption(opts);
            },
            //订单实时统计数据刷新
            refreshRealTimeOrderNumLine() {

            },
            //营业额实时统计数据刷新
            refreshRealTimeAmountLine() {
                let source = [],
                    i = 0,
                    len, data, val, myChart, opts;

                //调用api请求数据，没有则直接返回
                var lineData = getBusinessRanking();
                if (!lineData) return;

                var myChart = echarts.getInstanceByDom(document.getElementById("main1"));
                opts = myChart.getOption();

            },
            // 地图刷新
            refreshHeatMap() {
              let data, i = 0, len,
                  val, result = [], lnglat = [], allStore,
                  currentStore,
                  myChart, opts;

              var myChart = echarts.getInstanceByDom(document.getElementById("main"));
              opts = myChart.getOption();

              allStore = getOrderMap();
              data = allStore.result.orderMapInfos;
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

              currentStore = getTransactionOrder();
              data = currentStore.result.transOrderInfo;
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
              myChart.setOption(opts);
            },
            //会员刷新
             refreshMember() {
                let myChart, opts;

                //调用api请求数据，没有则直接返回
                let lineData = getMember();
                if (!lineData) return;

                //会员等级main4
                myChart = echarts.getInstanceByDom(document.getElementById("main4"));
                opts = myChart.getOption();
                opts.series[0].data = lineData.memberLevel;
                myChart.setOption(opts);

                //新老会员main5
                myChart = echarts.getInstanceByDom(document.getElementById("main5"));
                opts = myChart.getOption();
                opts.series[0].data = lineData.memberDistribute;
                myChart.setOption(opts);
            },
            //定时刷新
            intervalData(){
                let refreshData = function () {
                  refreshBusinessRanking();
                  refreshRealTimeAmountLine();
                  refreshRealTimeOrderNumLine();
                  refreshMember();
                  refreshHeatMap();

                  return refreshData;
              }
              setInterval(refreshData(), 1000 * 60 * 5);
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
                let singleHeight = parseInt((window.innerHeight - 30) / 3);
                return singleHeight;
            }
        }
    }

</script>

