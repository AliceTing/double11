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
                                    <div class="rate" :style="{left: targetComplete.occuRate}">
                                        {{targetComplete.occuRate}}
                                    </div>
                                    <div class="linear"></div>
                                    <div class="cover"
                                         :style="{width: (100 - targetComplete.occuRate.substr(0,targetComplete.occuRate.length-1)) + '%'}"></div>
                                </div>
                            </div>
                            <ul class="data">
                                <li>
                                    <h4>目标</h4>
                                    <div class="value">{{targetComplete.target}}<span class="unit">万</span></div>
                                </li>
                                <li>
                                    <h4>当前</h4>
                                    <div class="value">{{targetComplete.atPresent}}<span class="unit">万</span></div>
                                </li>
                                <li>
                                    <h4>同比增长</h4>
                                    <div class="value">
                                        {{targetComplete.increaseRate.substr(0,targetComplete.increaseRate.length -
                                        1)}}<span class="unit">%</span><span class="up"
                                                                             v-if="parseFloat(targetComplete.increaseRate) > 0"></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <businessRanking></businessRanking>
                <orderNumber></orderNumber>
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
            <orderMap></orderMap>
            <orderList></orderList>
        </div>
        <div class="wrap right">
            <div class="inner">
                <member></member>
                <salesAmount></salesAmount>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions, mapMutations} from 'vuex';

    import echarts from 'echarts';
    import 'echarts/map/js/china.js';

    import businessRanking from './components/businessRanking';
    import orderNumber from './components/orderNumber';
    import orderMap from './components/orderMap';
    import orderList from './components/orderList';
    import member from './components/member';
    import salesAmount from './components/salesAmount';

    export default {
        components: {
            businessRanking,
            orderNumber,
            orderMap,
            orderList,
            member,
            salesAmount
        },
        data() {
            return {
                realTime: '00:00:00',
                refreshTime: 10,
                mainInfo: {},
                targetComplete: {
                    occuRate: '',
                    target: '',
                    atPresent: '',
                    increaseRate: ''
                },
                mainTitleInterval: null,
            }
        },
        created() {
            let me = this;
            // 实时时钟显示
            me.getRealTime();
        },
        mounted() {
            let me = this;

            // 初始化图表

            // 数据总览
            me.getMainTitle();

            // 定时刷新数据
            me.intervalData();
        },
        methods: {
            ...mapActions([
                'getData',
                'getTargetComplete',
                'getMainTitle',
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
            // 初始化图表
            initChart(el, opts, type) {
                let me = this;
                if (el) {
                    let myChart = echarts.init(el);
                    myChart.setOption(opts);
                    return myChart;
                }
            },
            //中央数据
            refreshMainTitle() {
                let me = this, count = 4,
                    numA, numO, numU, numP,
                    amount, orderNum, userNum, avgPrice,
                    time = 1000 * 5;

                var getNum = function (tar, des) {
                    let diff = parseInt(tar) - parseInt(des);
                    if (diff > 0) {
                        return Math.ceil(diff / (time / 300));
                    } else {
                        return Math.floor(diff / (time / 300));
                    }
                }
                //调用api请求数据，没有则直接返回
                me.getData({
                    action: 'getMainTitle',
                    fn(data) {
                        if (me.mainTitleInterval) {
                            clearInterval(me.mainTitleInterval);
                            me.mainTitleInterval=null;
                        }

                        amount = parseInt(me.mainInfo.amount || 0);
                        orderNum = parseInt(me.mainInfo.orderNum || 0);
                        userNum = parseInt(me.mainInfo.userNum || 0);
                        avgPrice = parseInt(me.mainInfo.avgPrice || 0);

                        numA = getNum(data.mainTitle.amount, amount);
                        numO = getNum(data.mainTitle.orderNum, orderNum);
                        numU = getNum(data.mainTitle.userNum, userNum);
                        numP = getNum(data.mainTitle.avgPrice, avgPrice);


                        me.mainTitleInterval = setInterval(function () {
                            count = 4;

                            amount += numA;
                            if (amount >= (+data.mainTitle.amount)) {
                                amount = (+data.mainTitle.amount);
                                count--;
                            }

                            orderNum += numO;
                            if (orderNum >= (+data.mainTitle.orderNum)) {
                                orderNum = (+data.mainTitle.orderNum);
                                count--;
                            }

                            userNum += numU;
                            if (userNum >= (+data.mainTitle.userNum)) {
                                userNum = (+data.mainTitle.userNum);
                                count--;
                            }

                            avgPrice += numP;
                            if (numP > 0) {
                                if (avgPrice >= (+data.mainTitle.avgPrice)) {
                                    avgPrice = (+data.mainTitle.avgPrice);
                                    count--;
                                }
                            } else {
                                if (avgPrice <= (+data.mainTitle.avgPrice)) {
                                    avgPrice = (+data.mainTitle.avgPrice);
                                    count--;
                                }
                            }


                            if (count == 0) {
                                clearInterval(me.mainTitleInterval);
                            }

                            me.mainInfo = {
                                amount: amount,
                                orderNum: orderNum,
                                userNum: userNum,
                                avgPrice: avgPrice
                            };
                        }, 300);


                    }
                });
            },
            refreshTargetComplete() {
                let me = this;
                me.getData({
                    action: 'getTargetComplete',
                    fn(data) {
                        data = data.targetComplete;
                        me.targetComplete = {
                            target: (+data.targetAmount / 10000).toFixed(2),
                            atPresent: (+data.amount / 10000).toFixed(2),
                            increaseRate: data.targetRate,
                            occuRate: parseFloat(+data.amount * 100 / +data.targetAmount).toFixed(2) + "%"
                        };
                    }
                });
            },
            //定时刷新
            intervalData() {
                let me = this;
                let refreshData = function () {

                    me.refreshMainTitle();
                    me.refreshTargetComplete();

                    return refreshData;
                };
                setInterval(refreshData(), 1000 * me.refreshTime);
            }
        },
        computed: {
            ...mapState({
                // transactionOrder: state => state.double11Module.transactionOrder,
                //member: state => state.double11Module.member,
                //orderMap: state => state.double11Module.orderMap,
                //targetComplete: state => state.double11Module.targetComplete,
                //mainTitle: state => state.double11Module.mainTitle,
                // realTimeAmountLine: state => state.double11Module.realTimeAmountLine,
                // realTimeOrderNumLine: state => state.double11Module.realTimeOrderNumLine,
                // businessRanking: state => state.double11Module.businessRanking
            }),
            setSingleHeight() {
                let innerBoxHeight = window.innerHeight - 90;
                let singleHeight = Math.floor(parseInt((innerBoxHeight) / 3));
                return singleHeight;
            },
            setMiddleSingleHeight() {
                let innerBoxHeight = window.innerHeight;
                let middleSingleHeight = Math.floor(parseInt((innerBoxHeight) / 2));
                return middleSingleHeight;
            }
        }
    }

</script>

