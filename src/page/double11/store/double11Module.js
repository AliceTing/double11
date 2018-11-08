import {getValue} from 'Public/util';
import Vue from 'vue';
import apis from '../api';
import {
    transactionOrder,
    businessRanking,
    realTimeAmountLine,
    realTimeOrderNumLine,
    mainTitle,
    targetComplete,
    orderMap,
    member
} from '../api/data';

export default {
    state: {
        transactionOrder: [],
        member: {},
        orderMap: [],
        targetComplete: {},
        mainTitle: {},
        realTimeAmountLine:{},
        realTimeOrderNumLine: {},
        businessRanking: {}
    },
    actions: {
        //成交订单滚动屏
        getTransactionOrder({commit}) {
            // apis.getTransactionOrder().then(data => {
            //     if(data.code == 0){
            //         commit('setTransactionOrder', getValue(data, 'result'));
            //     }else {
            //
            //     }
            // }).catch(err => {
            //     Vue.$toast.show({
            //         toastText: '服务异常，请稍后重试'
            //     });
            //     setTimeout(function () {
            //         Vue.$toast.close();
            //     }, 2000)
            // });
            commit('setTransactionOrder', getValue(transactionOrder, 'result'));
        },
        // 调接口数据
        getData({commit}, param) {
            apis[param.action]().then(data => {
                if(data.code == 0){
                    param.fn && param.fn(getValue(data, 'result'));
                }else {

                }
            }).catch(err => {
                Vue.$toast.show({
                    toastText: '服务异常，请稍后重试'
                });
                setTimeout(function () {
                    Vue.$toast.close();
                }, 2000)
            });
        },
        // 热力图
        getOrderMap({commit, state}) {
            // apis.getOrderMap().then(data => {
            //     if(data.code == 0){
            //         commit('setOrderMap', getValue(data, 'result'));
            //     }else {
            //
            //     }
            // }).catch(err => {
            //     Vue.$toast.show({
            //         toastText: '服务异常，请稍后重试'
            //     });
            //     setTimeout(function () {
            //         Vue.$toast.close();
            //     }, 2000)
            // });
            commit('setOrderMap', getValue(orderMap, 'result'));
        },
        // 目标达成
        getTargetComplete({commit}) {
            // apis.getTargetComplete().then(data => {
            //     if(data.code == 0){
            //         console.log('目标达成',getValue(data, 'result'));
            //         commit('setTargetComplete', getValue(data, 'result'));
            //     }else {
            //
            //     }
            // }).catch(err => {
            //     Vue.$toast.show({
            //         toastText: '服务异常，请稍后重试'
            //     });
            //     setTimeout(function () {
            //         Vue.$toast.close();
            //     }, 2000)
            // });
            commit('setTargetComplete', getValue(targetComplete, 'result'));
        },
        // 数据总览主标题
        getMainTitle({commit}) {
            // apis.getMainTitle().then(data => {
            //     if(data.code == 0){
            //         commit('setMainTitle', getValue(data, 'result'));
            //     }else {
            //
            //     }
            // }).catch(err => {
            //     Vue.$toast.show({
            //         toastText: '服务异常，请稍后重试'
            //     });
            //     setTimeout(function () {
            //         Vue.$toast.close();
            //     }, 2000)
            // });
            commit('setMainTitle', getValue(mainTitle, 'result'));
        },
        // 订单数实时统计
        getRealTimeOrderNumLine({commit}) {
            // apis.getRealTimeOrderNumLine().then(data => {
            //     if(data.code == 0){
            //         commit('setRealTimeAmountLine', getValue(data, 'result'));
            //     }else {
            //
            //     }
            // }).catch(err => {
            //     Vue.$toast.show({
            //         toastText: '服务异常，请稍后重试'
            //     });
            //     setTimeout(function () {
            //         Vue.$toast.close();
            //     }, 2000)
            // });
            commit('setRealTimeAmountLine', getValue(realTimeAmountLine, 'result'));
        },
        // 营业额实时统计
        getRealTimeAmountLine({commit}) {
            // apis.getRealTimeAmountLine().then(data => {
            //     if(data.code == 0){
            //         commit('setRealTimeOrderNumLine', getValue(data, 'result'));
            //     }else {
            //
            //     }
            // }).catch(err => {
            //     Vue.$toast.show({
            //         toastText: '服务异常，请稍后重试'
            //     });
            //     setTimeout(function () {
            //         Vue.$toast.close();
            //     }, 2000)
            // });
            commit('setRealTimeOrderNumLine', getValue(realTimeOrderNumLine, 'result'));
        },
        // 营业排行接口
        getBusinessRanking({commit}) {
            // apis.getBusinessRanking().then(data => {
            //     if(data.code == 0){
            //         commit('setBusinessRanking', getValue(data, 'result'));
            //     }else {
            //
            //     }
            // }).catch(err => {
            //     Vue.$toast.show({
            //         toastText: '服务异常，请稍后重试'
            //     });
            //     setTimeout(function () {
            //         Vue.$toast.close();
            //     }, 2000)
            // });
            commit('setBusinessRanking', getValue(businessRanking, 'result'));
        },
    },
    mutations: {
        ['setTransactionOrder'](state, data){
            state.transactionOrder = data;
        },
        ['setOrderMap'](state, data){
            state.orderMap = data;
        },
        ['setTargetComplete'](state, data){
            state.targetComplete = data;
        },
        ['setMainTitle'](state, data){
            state.mainTitle = data.mainTitle || {};
        },
        ['setRealTimeAmountLine'](state, data){
            state.realTimeAmountLine = data;
        },
        ['setRealTimeOrderNumLine'](state, data){
            state.realTimeOrderNumLine = data;
        },
        ['setBusinessRanking'](state, data){
            state.businessRanking = data;

        }
    }
}