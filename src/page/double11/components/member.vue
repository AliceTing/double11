<style lang="scss" scoped>

</style>
<template>
    <section>
        <div class="data_md" v-for="(chartItem,index) in rightChartArr" :key="index"
             :style="{height: setSingleHeight + 'px'}">
            <h2 class="name">{{chartItem.name}}</h2>
            <div class="con">
                <div class="chart" :style="{height: (setSingleHeight-40) + 'px'}" :id="'main'+(index+4)"></div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapState, mapActions, mapMutations} from 'vuex';
    import apis from '../api';
    import {refreshTime} from 'Public/util';

    import echarts from 'echarts';

    export default {
        components: {},
        props: {
            // setSingleHeight: ''
        },
        data() {
            return {
                rightChartArr: [{
                    'name': '会员等级占比'
                }, {
                    'name': '新老客占比'
                }],
                refreshTime: 10,
            }
        },
        created() {
        },
        mounted() {
            let me = this;
            // 会员
            me.vipDistributionChart();
            me.newOldRatioChart();
            //调接口set数据
            me.intervalData();
        },
        methods: {
            // 初始化图表
            initChart(el, opts, type) {
                let me = this;
                if (el) {
                    let myChart = echarts.init(el);
                    myChart.setOption(opts);
                    return myChart;
                }
            },
            vipDistributionChart() {
                let me = this;
                let opt = {
                    color: ["#009dc2", "#7e5dd7", "#5113b1", "#4702fb", "#0a84a1", "#7b4cf4"],
                    tooltip: {
                        show: true,
                        trigger: "item"
                    },
                    legend: {
                        orient: "horizontal",
                        x: "center",
                        y: "bottom",
                        textStyle: {
                            color: '#69b7ff'
                        }
                    },
                    series: [{
                        type: "pie",
                        selectedMode: "multiple",
                        center: [
                            "50%",
                            "50%"
                        ],
                        radius: [
                            "50%",
                            "75%"
                        ],
                        label: {
                            show: true,
                            position: 'outside',
                            formatter: "{b}:{d}%",
                            fontSize: 16
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
                            color: '#69b7ff'
                        }
                    },
                    grid:{
                        top: 80
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
                                fontSize: 16
                            },
                            data: []
                        }
                    ]
                };

                me.initChart(document.getElementById('main5'), opt);
            },
            //会员刷新
            refreshMember() {
                let me = this;
                let myChart, opts;
                //调用api请求数据，没有则直接返回
                apis.getMember().then(data => {
                    if(data.code == 0){
                        data = data.result;

                        //会员等级main4
                        myChart = echarts.getInstanceByDom(document.getElementById("main4"));
                        opts = myChart.getOption();
                        myChart.clear();
                        opts.series[0].data = data.memberLevel || [];
                        myChart.setOption(opts);

                        //新老会员main5
                        myChart = echarts.getInstanceByDom(document.getElementById("main5"));
                        opts = myChart.getOption();
                        opts.series[0].data = data.memberDistribute || [];
                        myChart.clear();
                        myChart.setOption(opts);
                    }
                });
            },
            //定时刷新
            intervalData() {
                let me = this;
                let refreshData = function () {
                    me.refreshMember();

                    return refreshData;
                };
                setInterval(refreshData(), 1000 * refreshTime);
            }
        },
        computed: {
            setSingleHeight() {
                let innerBoxHeight = window.innerHeight - 60;
                let singleHeight = Math.floor(parseInt((innerBoxHeight) / 3));
                return singleHeight;
            }
        }
    }
</script>
