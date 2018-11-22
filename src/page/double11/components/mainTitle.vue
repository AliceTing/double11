<style lang="scss" scoped>

    .title_box,
    .real_time,
    .total_price {
        text-align: center;
    }

    .title_box {
        margin: 10px auto 0;
        background: url("../../../public/assets/images/group.png") no-repeat center top;
        background-size: 100% 100%;
        .real_time {
            color: #fff;
            font-size: 30px;
        }
    }

    .title{
        color: #7AC4FF;
        font-size: 28px;
        strong{
            font-size: 36px;
        }
    }

    .total_price {
        color: #FFFF6B;
        font-size: 80px;
        font-weight: 500;
        line-height: 90px;
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
            font-size: 20px;
        }
        .value {
            color: #FFFF6B;
            font-size: 38px;
        }
    }

    .data_md {
        box-sizing: border-box;
        /*overflow: hidden;*/
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


</style>
<template>
    <div class="data_md" :style="{height: setMiddleSingleHeight*2/3 + 'px'}">
        <div class="title_box">
            <div class="title">来伊份门店<br><strong>实时交易战报</strong></div>
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
</template>

<script>
    import apis from '../api';
    import {refreshTime} from 'Public/util';

    export default {
        components: {},
        props: {},
        data() {
            return {
                realTime: '00:00:00',
                mainTitleInterval: null,
                mainInfo: {},
            }
        },
        created() {
            let me = this;
            // 实时时钟显示
            me.getRealTime();
            // 定时刷新数据
            me.intervalData();
        },
        mounted() {
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
            //中央数据
            refreshMainTitle() {
                let me = this, count = 4,
                    numA, numO, numU, numP,
                    amount, orderNum, userNum, avgPrice,
                    time = 1000 * 5;

                let getNum = function (tar, des) {
                    let diff = parseInt(tar) - parseInt(des);
                    if (diff > 0) {
                        return Math.ceil(diff / (time / 300));
                    } else {
                        return Math.floor(diff / (time / 300));
                    }
                };
                //调用api请求数据，没有则直接返回
                apis.getMainTitle().then(data => {
                    if (data.code == 0) {
                        data = data.result || {};
                        if (me.mainTitleInterval) {
                            clearInterval(me.mainTitleInterval);
                            me.mainTitleInterval = null;
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
            //定时刷新
            intervalData() {
                let me = this;
                let refreshData = function () {

                    me.refreshMainTitle();

                    return refreshData;
                };
                setInterval(refreshData(), 1000 * refreshTime);
            }
        },
        computed: {
            setMiddleSingleHeight() {
                let innerBoxHeight = window.innerHeight;
                let middleSingleHeight = Math.floor(parseInt((innerBoxHeight) / 2));
                return middleSingleHeight;
            }
        }
    }
</script>
