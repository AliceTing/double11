import Vue from 'vue';
import JSONP from './jsonp';


// 我的优惠券
// 领取门店优惠券
export const myCustomerShopCoupon = (params = {}, successCb, errorCb) => {
  Vue.$loading.show();

  let paramsStr = formatParams(params);

  JSONP.getJSON(`https://mwpgwb.m.jd.com/mwp/mobileDispatch?api=wjcoupon.couponShop.myCustomerShopCoupon&${paramsStr}`, {
      output: 'jsonp',
      callback: '?'
  }, function(data) {
      Vue.$loading.close();
      if (data.code == 0) {
          successCb && successCb(data);
      } else {
          errorCb && errorCb();
      }
  });
};

export const queryClubCardInfo = (params = {}, successCb, errorCb) => {

    let paramsStr = formatParams(params);

    JSONP.getJSON(`http://10.18.13.200:8080/realtime-service/screen/memberDistribute?${paramsStr}`, {
        output: 'jsonp',
        callback: '?'
    }, function(data) {
        Vue.$loading.close();
        if (data.code == 0) {
            successCb && successCb(data);
        } else {
            errorCb && errorCb();
        }
    });
};

/**
 * 参数对象变字符串
 * @param {*} params
 */
function formatParams(params) {
  let paramsStr = '';

  Object.keys(params).forEach((item, index) => {
      paramsStr += (item + '=' + params[item]);
      if (index < Object.keys(params).length - 1) {
          paramsStr += '&';
      }
  });

  return paramsStr;
}

