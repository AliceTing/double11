var JSONP = {
    // 获取当前时间戳
    now: function() {
        return (new Date()).getTime();
    },
    
    // 获取16位随机数
    rand: function() {
        return Math.random().toString().substr(2);
    },
    
    // 删除节点元素
    removeElem: function(elem) {
        var parent = elem.parentNode;
        if(parent && parent.nodeType !== 11) {
            parent.removeChild(elem);
        }
    },
    
    // url组装
    parseData: function(data) {
        var ret = "";
        if(typeof data === "string") {
            ret = data;
        }
        else if(typeof data === "object") {
            for(var key in data) {
                ret += "&" + key + "=" + encodeURIComponent(data[key]);
            }
        }
        // 加个时间戳，防止缓存
        ret += "&_time=" + this.now();
        ret = ret.substr(1);
        return ret;
    },
    
    getJSON: function(url, data, func) {
        // 函数名称
        var name;
        
        // 拼装url
        url = url + (url.indexOf("?") === -1 ? "?" : "&") + this.parseData(data);
        
        // 检测callback的函数名是否已经定义
        var match = /callback=(\w+)/.exec(url);
        if(match && match[1]) {
            name = match[1];
        } else {
            // 如果未定义函数名的话随机成一个函数名
            // 随机生成的函数名通过时间戳拼16位随机数的方式，重名的概率基本为0
            // 如:jsonp_1355750852040_8260732076596469
            name = "jsonp_" + this.now() + '_' + this.rand();
            // 把callback中的?替换成函数名
            url = url.replace("callback=?", "callback="+name);
            // 处理?被encode的情况
            url = url.replace("callback=%3F", "callback="+name);
        }
        
        // 创建一个script元素
        var script = document.createElement("script");
        script.type = "text/javascript";
        // 设置要远程的url
        script.src = url;
        // 设置id，为了后面可以删除这个元素
        script.id = "id_" + name;
        
        // 把传进来的函数重新组装，并把它设置为全局函数，远程就是调用这个函数
        window[name] = function(json) {
            // 执行这个函数后，要销毁这个函数
            window[name] = undefined;
            // 获取这个script的元素
            var elem = document.getElementById("id_" + name);
            // 删除head里面插入的script，这三步都是为了不影响污染整个DOM啊
            JSONP.removeElem(elem);
            // 执行传入的的函数
            func(json);
        };
        
        // 在head里面插入script元素
        var head = document.getElementsByTagName("head");
        if(head && head[0]) {
            head[0].appendChild(script);
        }
    }
};

export default JSONP;