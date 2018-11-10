<style lang="scss" scoped>
    .deal_order {
        box-sizing: border-box;
        padding: 0 20px;
        border: solid 1px rgba(60, 46, 213, .54);
        background-color: rgba(60, 46, 213, .14);
        border-radius: 10px;
        color: #DCE2E9;
        font-size: 22px;
        .con {
            position: relative;
        }
        .main {
            flex: 1;
            overflow: hidden;
        }
        .swiper_container {
            height: 60px;
            margin-top: 5px;
        }
        .item {
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            height: 30px;
            line-height: 30px;
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
            left: 0;
            right: 0;
            z-index: 5;
            height: 60px;
            background: linear-gradient(transparent, #18115b);
        }
    }
</style>
<template>
    <div class="data_md deal_order" :style="{height: setMiddleSingleHeight*1/3 - 30 + 'px'}">
        <h2 class="name">订单实时统计</h2>
        <div class="con">
            <div class="main">
                <div class="swiper_container">
                    <swiper :options="swiperOption" ref="mySwiper">
                        <swiper-slide v-for="(item,index) in transactionOrder.transOrderInfo" :key="index">
                            <div class="item">
                                <div class="user">{{item.customer_id}}</div>
                                <div class="store">{{item.storename}}</div>
                                <div class="amount">{{item.orderamount}}</div>
                                <div class="time">{{item.dt}}</div>
                            </div>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </div>
            <div class="bottom_blur"></div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions, mapMutations} from 'vuex';

    import Event from 'Public/util/event';
    import {refreshTime} from 'Public/util';

    import echarts from 'echarts';

    import {swiper, swiperSlide} from "vue-awesome-swiper";

    import Swiper from "vue-awesome-swiper";

    require("swiper/dist/css/swiper.css");

    export default {
        components: {
            swiper,
            swiperSlide
        },
        props: {
            // setMiddleSingleHeight: ''
        },
        data() {
            return {
                refreshTime: 10,
                swiperOption: {
                    direction: 'vertical',
                    height: 60,
                    autoplay: true,
                    loop: true,
                    slidesPerGroup: 1,
                    slidesPerView: 2,
                    on: {
                        slideChange() {
                            Event.$emit('highLight');
                        }
                    }
                },
                curIndex: 0
            }
        },
        created() {
            let me = this;
            me.getTransactionOrder();
            // 定时刷新数据
            me.intervalData();

            // 标记闪亮的点
            Event.$on('highLight', function (index) {
                me.curIndex = me.curSwiper.activeIndex;

                let result = [], data = [],
                    val, lnglat;

                let myChart = echarts.getInstanceByDom(document.getElementById("main3"));
                let opts = myChart.getOption();

                result = [];
                data = me.transactionOrder.transOrderInfo || [];
                if (data.length > 0) {
                    val = data[me.curIndex];
                    lnglat = val["position"].split(',');
                    if (lnglat.toString() != "0,0") {
                        result.push({
                            name: val["storename"],
                            value: lnglat.concat(val["orderamount"])
                        });
                    }
                }
                myChart.clear();
                opts.series[1].data = result;
                myChart.setOption(opts);

            });
        },
        mounted() {
        },
        methods: {
            ...mapActions([
                'getTransactionOrder',
            ]),
            refreshOrderList() {
                let me = this;
                //调用api请求数据，没有则直接返回
                me.getTransactionOrder();
            },
            //定时刷新
            intervalData() {
                let me = this;
                let refreshData = function () {
                    me.refreshOrderList();
                    //轮播还原位置
                    setTimeout(function () {
                        if (me.curSwiper) {
                            me.curIndex = 0;
                            me.curSwiper.slideToLoop(0);
                            me.curSwiper.autoplay.start();
                        }
                    }, 20);

                    return refreshData;
                };
                setInterval(refreshData(), 1000 * refreshTime);
            }
        },
        computed: {
            ...mapState({
                transactionOrder: state => state.double11Module.transactionOrder,
            }),
            setMiddleSingleHeight() {
                let innerBoxHeight = window.innerHeight;
                let middleSingleHeight = Math.floor(parseInt((innerBoxHeight) / 2));
                return middleSingleHeight;
            },
            curSwiper() {
                return this.$refs.mySwiper.swiper;
            }
        }
    }
</script>
