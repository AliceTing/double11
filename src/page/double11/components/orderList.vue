<style lang="scss" scoped>
    .deal_order {
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
        }
        .swiper_container{
            height: 80px;
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
</style>
<template>
    <div class="data_md deal_order" :style="{height: setMiddleSingleHeight*1/3 + 'px'}">
        <div class="con">
            <h2 class="name">成交订单</h2>
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
    import Event from 'Public/util/event';
    import {mapState, mapActions, mapMutations} from 'vuex';
    import echarts from 'echarts';

    import {swiper, swiperSlide} from "vue-awesome-swiper";

    require("swiper/dist/css/swiper.css");

    export default {
        components: {
            swiper,
            swiperSlide
        },
        props: {},
        data() {
            return {
                refreshTime: 10,
                swiperOption: {
                    direction: 'vertical',
                    height: 80,
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
                console.log('index', index);
                if (index == 0) {
                    me.curIndex = index;
                } else {
                    me.curIndex = me.curSwiper.activeIndex;
                }

                let result = [],
                    val, lnglat;

                let myChart = echarts.getInstanceByDom(document.getElementById("main3"));
                let opts = myChart.getOption();

                result = [];
                val = me.transactionOrder.transOrderInfo[me.curIndex];
                lnglat = val["position"].split(',');
                if (lnglat.toString() != "0,0") {
                    result.push({
                        name: val["storename"],
                        value: lnglat.concat(val["orderamount"])
                    });
                }
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
                            me.curSwiper.slideTo(me.curIndex);
                        }
                    }, 20);

                    return refreshData;
                };
                setInterval(refreshData(), 1000 * me.refreshTime);
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
