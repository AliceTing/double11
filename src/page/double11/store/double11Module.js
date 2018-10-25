import {getValue} from 'Public/util';
import Vue from 'vue';
import apis from '../api';

export default {
    state: {
        //热力图和订单列表
        heatMapOrderArr: []
    },
    actions: {
        getData({commit, state}, data){
            Vue.$loading.show();
            apis[data.time](data.param).then(data => {
                Vue.$loading.close();
                data = {
                    "code": 0,
                    "message": "success",
                    "result": {
                        "detail": [{
                            "userName": "aaa",
                            "time": "18:20",
                            "store": "xx路xx店",
                            "amount": "50.00",
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
                    "succ":true
                }

                if (data.code == 0) {
                    commit('setHeatMapOrderData', getValue(data, 'detail'));
                }
            }).catch(err => {
                Vue.$toast.show({
                    toastText: '服务异常，请稍后重试'
                });
                setTimeout(function () {
                    Vue.$toast.close();
                }, 2000)
            });
        }
    },
    mutations: {
        ['setHeatMapOrderData'](state, data) {
            state.heatMapOrderArr = data || [];
        }
    }
}