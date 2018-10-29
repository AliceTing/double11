import {getValue} from 'Public/util';
import Vue from 'vue';
import apis from '../api';

export default {
    state: {
        //热力图和订单列表
        heatMapOrderArr: []
    },
    actions: {
        getHeatMapOrderData({commit, state}, data){
            // Vue.$loading.show();
            // Vue.$loading.close();
            console.log(111)
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
                "succ":true
            }

            if (res.code == 0) {
                console.log( 123,getValue(res, 'detail'))
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
        }
    },
    mutations: {
        ['setHeatMapOrderData'](state, data) {
            state.heatMapOrderArr = data.detail || [];
        }
    }
}