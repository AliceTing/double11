import {getValue} from 'Public/util';
import Vue from 'vue';
import apis from '../api';

export default {
    state: {
        // 热力图和订单列表
        heatMapOrderArr: [],
        // 会员等级占比
        vipRatioObj: {},
        // 新老客户占比
        newOldObj:{}
    },
    actions: {
        getHeatMapOrderData({commit, state}, data) {
            // Vue.$loading.show();
            // Vue.$loading.close();
            let res = {
                "code": 0,
                "message": "success",
                "result": {
                    "detail": [{
                        "userName": "aaaaaa",
                        "time": "18:20",
                        "store": "xxx路xx店",
                        "amount": "1150.00",
                        "city": "天津"
                    }, {
                        "userName": "bbb",
                        "time": "18:29",
                        "store": "xx路xx店",
                        "amount": "45.00",
                        "city": "上海"
                    }, {
                        "userName": "ccc",
                        "time": "18.01",
                        "store": "xx路xx店",
                        "amount": "36.88",
                        "city": "广州"
                    }]
                },
                "succ": true
            };

            if (res.code == 0) {
                commit('setHeatMapOrderData', getValue(res, 'result'));
            }
            // apis[data.time](data.param).then(data => {
            // }).catch(err => {
            //     Vue.$toast.show({
            //         toastText: '服务异常，请稍后重试'
            //     });
            //     setTimeout(function () {
            //         Vue.$toast.close();
            //     }, 2000)
            // });
        },
        // 会员占比
        getVipRatioData({commit}, data) {
            let res = {
                "code": 0,
                "message": "success",
                "result": {
                    "VIP1Rate": "15.59%",
                    "VIP2Rate": "15.37%",
                    "VIP3Rate": "17.82%",
                    "VIP4Rate": "11.14%",
                    "VIP5Rate": "13.36%",
                    "notVIPRate": "26.73%"
                },
                "succ": true
            };

            if (res.code == 0) {
                console.log(123, getValue(res, 'detail'))
                commit('setVipRatioData', getValue(res, 'result'));
            }
        },
        // 新老客户占比
        getNewOldData({commit}, data) {
            let res = {
                "code": 0,
                "message": "success",
                "result": {
                    "notVIPRate": "36.53%",
                    "newVIPRate": "31.96%",
                    "oldVIPRate": "31.51%"
                },
                "succ": true
            };

            if (res.code == 0) {
                console.log(123, getValue(res, 'detail'))
                commit('setNewOldData', getValue(res, 'result'));
            }
        }
    },
    mutations: {
        ['setHeatMapOrderData'](state, data) {
            state.heatMapOrderArr = data.detail || [];
        },
        ['setVipRatioData'](state, data) {
            state.vipRatioObj = data || {};
        },
        ['setNewOldData'](state, data){
            state.newOldObj = data || {};
        }
    }
}