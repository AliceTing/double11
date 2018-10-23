import Vue from 'vue';
import Helper from 'Public/util/helper';

/**
 *将jfs路径转化为完整的图片路径
 *调用方式： imgPath | getImgFullUrl(图片的域名为空则用默认,图片宽度，图片高度)
 */
Vue.filter('getImgFullUrl', function (imgUrl,domain, width, height) {
    if(imgUrl){
        return Helper.getImgFullUrl(domain, width, height, imgUrl);
    }else{
        return '';
    }
});

/**
 *将完整的图片路径随机打散到域名服务器
 *调用方式： imgPath | getImgUrl(图片宽度，图片高度)
 */
Vue.filter('getImgUrl', function (imgUrl, width, height) {
    if(imgUrl){
        return Helper.getImgUrl(imgUrl, {
            w:width,
            h:height
        });
    }else{
        return '';
    }
});

Vue.filter('parseFormatNum', function (number, format, n) {
    if (number || number === 0) {
        if (n !== 0) {
            n = (n > 0 && n <= 20) ? n : 0;
        }
        number = parseFloat((number + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var sub_val = number.split(".")[0].split("").reverse();
        var sub_xs = number.split(".")[1];

        var show_html = "";
        for (let i = 0; i < sub_val.length; i++) {
            show_html += sub_val[i] + ((i + 1) % 3 === 0 && (i + 1) !== sub_val.length ? "," : "");
        }

        if (n === 0) {
            format = show_html.split("").reverse().join("");
        } else {
            format = show_html.split("").reverse().join("") + "." + sub_xs;
        }

        return format;
    }
});
