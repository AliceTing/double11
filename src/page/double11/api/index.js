import axios from 'axios';

const apiHost = '//10.18.13.200:8080/realtime-service/';

const apiUrl = {
    // 订单滚动屏
    getTransactionOrder: {
        type: 'get',
        url: apiHost + 'screen/transactionOrder'
    },
    //会员
    getMember: {
        type: 'get',
        url: apiHost + 'member/memberDistribute'
    },
    // 热力图
    getOrderMap: {
        type: 'get',
        url: apiHost + 'screen/orderMap'
    },
    // 目标达成
    getTargetComplete: {
        type: 'get',
        url: apiHost + 'screen/targetComplete'
    },
    // 数据总览主标题
    getMainTitle: {
        type: 'get',
        url: apiHost + 'screen/mainTitle'
    },
    // 订单数实时统计
    getRealTimeOrderNumLine: {
        type: 'get',
        url: apiHost + 'screen/realTimeOrderNumLine'
    },
    // 营业额实时统计
    getRealTimeAmountLine: {
        type: 'get',
        url: apiHost + 'screen/realTimeAmountLine'
    },
    // 营业排行接口
    getBusinessRanking: {
        type: 'get',
        url: apiHost + 'screen/businessRanking'
    }
};

let apis = {};
let CancelToken = axios.CancelToken;
apis.isCancel = axios.isCancel; // 判断是否是取消
Object.keys(apiUrl).forEach((item) => {
    /**
     * 创建api请求function，返回promise对象
     */
    apis[item] = function apiFunc(data) {
        let obj = apiUrl[item];
        let promise;
        let dataTmp = data;
        promise = axios({
            method: obj.type,
            url: obj.url,
            timeout: 20000,
            params: dataTmp,
            cancelToken: new CancelToken(function executor(c) {
                apis[item + 'Cancel'] = c;
            })
        }).then(response => {
            let data = response.data;
            return data;
        });
        return promise;
    }
});

export default apis;
