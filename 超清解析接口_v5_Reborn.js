// 超清解析接口收藏
/*
 * 使用说明：
 * var fileUrl = "hiker://files/rules/js/超清解析接口_v5_Reborn.js";
 * eval(fetch(fileUrl,{}));
 * setError(m_parsing_list[0]);
 *
 * 若是要合并到原来就有的一个数组arr，则：
 * Array.prototype.push.apply(arr, m_pars_list);
 * Array.prototype.push.apply(arr, m_parsing_list);
 * setError(arr);
 */
/*
   结合123大佬的规则就是在parsing_list后面加这三句：
   var fileUrl = "hiker://files/rules/js/超清解析接口_v5_Reborn.js";
   eval(fetch(fileUrl,{}));
   Array.prototype.push.apply(pars_list, m_pars_list);
   Array.prototype.push.apply(parsing_list, m_parsing_list);

   同时还需要在toUrl()函数的switch语句里面添加：
   case '380k':
        return pars_list[3].split('&')[1] + url + pars_list[3].split('&')[2];
*/
// 0: 解析集合页 1-4: 自定义解析表
// '①' : 直链解析①  '②' : 直链解析②  '③' ：直链解析③
mode = '380k';

var m_pars_list = [
    // 直链解析集合
    //'xhl97直链（已经不公开）&https://video.xhl97.cn/Videoapi/?url=',
    "黑云直链&https://jiexi.380k.com/?url=&@lazyRule=.js:eval(getCryptoJS())；；var fileUrl='hiker://files/rules/js/超清解析接口_v5_Reborn.js'；；var js=fetch(fileUrl,{})；；eval(js)；；parse380k.getRealUrl(input)",
    //`黑云&https://jiexi.380k.com/?url=&@lazyRule=.js:eval(getCryptoJS())；；function MD5(data) {return CryptoJS.MD5(data).toString(CryptoJS.enc.Hex)；；}function get_key(key) {key = MD5(key + 'daheiyun1888')；；key = MD5(key + 'daheiyun1888')；；return key；；}function token_encryption(key) {return MD5(key + 'daheiyuntoken')；；}var time = parseInt(new Date().getTime() / 1000)；；var url = input.split('=')[1]；；var key = get_key(url + time + 'daheiyunjiexi0614')；；var token = token_encryption(key)；；JSON.parse(fetch('https://jiexi.shunyiwenxiu.com/dhyjx_ver_9.1.php',{body:'url='+url+'＆＆tm='+time+'＆＆key='+key+'＆＆token='+token,method:'POST'})).url+'#.mp4';`
    //`北极直链&http://beijixs.cn?url=&@lazyRule=.js:var html = fetch('http://beijixs.cn', {body:'Button1=解析＆＆TextBox4=`+iqiyi_Resolution+`＆＆DropDownList2=`+iqiyi_coding+`＆＆DropDownList1=`+qq_sharpness+`＆＆TextBox1='+input.split('=')[1]+'＆＆__VIEWSTATE=` + getVar('VIEWSTATE') + `＆＆__EVENTVALIDATION=` + getVar('EVENTVALIDATION') + `',method:'POST'})；；parseDom(html, 'body＆＆＆＆video＆＆＆＆source＆＆＆＆src')+'#.mp4'`,
];
var m_parsing_list = [
    // 网页解析集合
    // 超清
    "我爱解析&https://vip.52jiexi.top/?url=",
    //"黑云解析&https://jiexi.380k.com/?url=",
    //"北极&http://beijixs.cn/?url=",
    //"VIP影视解析（已经不公开）&https://video.xhl97.cn/Videoapi/?url=",

    // 高清
    //'七彩&https://v.7cyd.com/vip/?url=',

    // 流畅
    //'云解析&https://jx.mw0.cc/?url=',
    //'菜鸟&https://jiexi.bm6ig.cn/?url=',
    //"零露&https://jx.jiasheshangmao.com/?url="
];

// 二级显示视频介绍
/*if(getUrl().indexOf("qq.com") != -1) {
    items.unshift({
        title: "共" + video_lists.length + "集",
        url: json.c.pic + "#.jpg",
        pic_url: json.c.pic,
        desc: json.c.description,
        col_type: "pic_1"
    });
}*/

var tools = {
    // MD5 散列
    /**
     * @return {string}
     */
    MD5: function (data) {
        // 以md5的格式创建一个哈希值
        return CryptoJS.MD5(data).toString(CryptoJS.enc.Hex);
    }
};
var parse380k = {
    getMapInfo: function () {
        var url = "https://jiexi.shunyiwenxiu.com/js/ACCot.js";
        var srcHtml = fetch(url, {});
        // console.log(srcHtml);
        /var .*?=(\[.*?\]);/.test(srcHtml)
        this.map_info = eval(RegExp.$1)
    },
    getBasekey: function(mSrcUrl, mode){
        if (mode === 'local') {
            return "daheiyunjiexi0614"
        }
        var srcHtml = fetch(mSrcUrl, {});
        // console.log(srcHtml);
        /var .*?=(\[.*?\]);/.test(srcHtml);
        var map_info = eval(RegExp.$1);
        return base64Decode(map_info[102])
    },
    getRealUrl: function (mSrcUrl) {
        this.getMapInfo();
        var url = mSrcUrl.split('=')[1]
        //获取当前时间戳 time = 1592384360
        var time = parseInt(new Date().getTime() / 1000);
        // 获取MD5的Hex串
        var key = this.get_key(url + time + this.getBasekey(mSrcUrl, 'local'));
        //获取请求参数
        var data = 'url=' + url + '&' + 'tm=' + time + '&' + 'key=' + key + '&' + 'token=' + this.token_encryption(key) + '&' + 'sdky=' + this.token_encryption(time);
        var mApiUrl = "https://jiexi.shunyiwenxiu.com/dhyjx_ver_9.1.php";
        var options = {
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
            body: data,
            method: "POST"
        };
        var result = fetch(mApiUrl, options);
        return JSON.parse(result).url;
        //return url;
    },
    // 获取 key, 里面有一些参数写死了, 不过估计是不会变的!! 如果改变了需要获取可以请求接口: https://jiexi.shunyiwenxiu.com/js/ACCot.js?ver=20200411
    get_key: function (key) {
        key = tools.MD5(key + base64Decode(this.map_info[8]));
        key = tools.MD5(key + base64Decode(this.map_info[8]));
        return key
    },
    //token加密, 里面有一些参数写死了, 不过估计是不会变的!! 如果改变了需要获取可以请求接口: https://jiexi.shunyiwenxiu.com/js/ACCot.js?ver=20200411
    token_encryption: function (key) {
        return tools.MD5(key + base64Decode(this.map_info[13])); // 20200624前是daheiyuntoken
    }
};

var parseBeijiXS = {
    parseBefore: function () {
        if (getVar('VIEWSTATE').length == 0) {
            var beiji_html = fetch('http://beijixs.cn', {});
            putVar({
                key: 'VIEWSTATE',
                value: parseDom(beiji_html, 'body&&form&&input&&value').replace(getUrl() + '\/', '')
            });
            putVar({
                key: 'EVENTVALIDATION',
                value: parseDom(beiji_html, 'body&&form&&input,2&&value').replace(getUrl() + '\/', '')
            });
        }
    }
}