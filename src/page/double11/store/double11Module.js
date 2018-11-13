import {getValue} from 'Public/util';
import apis from '../api';

export default {
    state: {
    },
    actions: {
        // 调接口数据，公用方法，url通过参数传递
        getData({commit}, param) {
            apis[param.action]().then(data => {
                if(data.code == 0){
                    param.fn && param.fn(getValue(data, 'result'));
                }
            });
        }
    },
    mutations: {}
}