<style lang="scss" scoped>

    .goal_reach {
        margin-top: 10px;
        .box {
            position: relative;
            padding: 0 20px;
            .rate {
                position: absolute;
                top: -44px;
                z-index: 4;
                margin-left: -60px;
                padding: 3px 5px;
                border-radius: 5px;
                border: 2px #593AFF solid;
                background-color: #3E24A7;
                color: #fff;
                font-size: 24px;
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
                margin: 60px auto 0;
                height: 28px;
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
            justify-content: space-around;
            align-items: center;
            margin-top: 20px;
            padding: 0 20px;
            color: #61ABFF;
            font-size: 20px;
            line-height: 30px;
            h4 {
                font-weight: normal;
                font-size: 16px;
            }
            .value {
                margin-top: 10px;
                font-size: 30px;
                .unit {
                    font-size: 14px;
                }
                .up {
                    position: relative;
                    display: inline-block;
                    width: 6px;
                    height: 12px;
                    margin-left: 10px;
                    background-color: #CB2106;
                    &:before {
                        content: '';
                        position: absolute;
                        top: -15px;
                        left: 50%;
                        width: 0;
                        height: 0;
                        border-color: transparent transparent #CB2106 transparent;
                        border-width: 8px;
                        border-style: dashed dashed solid dashed;
                        transform: translateX(-50%);
                    }
                }
            }
        }
    }
</style>
<template>
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
                    <!--<li>-->
                        <!--<h4>同比增长</h4>-->
                        <!--<div class="value">-->
                            <!--{{targetComplete.increaseRate.substr(0,targetComplete.increaseRate.length - -->
                            <!--1)}}<span class="unit">%</span><span class="up"-->
                                                                 <!--v-if="parseFloat(targetComplete.increaseRate) > 0"></span>-->
                        <!--</div>-->
                    <!--</li>-->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import apis from '../api';
    import {refreshTime} from 'Public/util';
    export default {
        components: {},
        props: {
            setSingleHeight: ''
        },
        data() {
            return {
                targetComplete: {
                    occuRate: '',
                    target: '',
                    atPresent: '',
                    increaseRate: ''
                },
            }
        },
        created() {
            let me = this;
            // 定时刷新数据
            me.intervalData();
        },
        mounted() {
        },
        methods: {
            refreshTargetComplete() {
                let me = this;
                //调用api请求数据，没有则直接返回
                apis.getTargetComplete().then(data => {
                    if(data.code == 0){
                        data = data.result||{};
                        data = data.targetComplete || {};
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

                    me.refreshTargetComplete();

                    return refreshData;
                };
                setInterval(refreshData(), 1000 * refreshTime);
            }
        },
        computed: {
            // setSingleHeight() {
            //     let innerBoxHeight = window.innerHeight - 60;
            //     let singleHeight = Math.floor(parseInt((innerBoxHeight) / 3));
            //     return singleHeight;
            // },
        }
    }
</script>
