js:
var titles =
    [

        //首页规则添加处从0开始算
        '机器猫@@hiker://home@机器猫',
        '小嘀咕@@hiker://home@小嘀咕',
        '卧龙影视@@hiker://home@新卧龙影视',
        '小小影视@@hiker://home@新小小影视',
        '剧汇TV@@hiker://home@剧汇TV',
        '春秋影视@@hiker://home@春秋影视',
        '90后影视@@hiker://home@90后影视',
        '夏沫影院@@hiker://home@夏沫影院',
        '咪咕咕™@@hiker://home@咪咕咕™',

        //第三方网站添加处从9开始算
        '六度TV@@http://6d.2hatv.com/',
        'TVB云播@@https://www.hktvyb.com/',
        'TNT影视@@http://www.tntdy3.vip/',
        '谍影世界@@https://dvdhd.me/',
        '云播TV@@https://m.yunbtv.com',
        '小虫追剧@@ http://www.ixiazai.vip',
        '麻花影视 @@ https://www.mahua110.com',
        '老豆瓣@@https://www.laodouban.com',
        '飞极速™@@http://m.feijisu5.com',


    ];

var t = titles;
var res = {};
var d = [];
var hitokoto = {};
eval("hitokoto=" + getResCode());

d.push({
    title: hitokoto.content, url: " https://movie.douban.com/tag/#/", desc: '类别：' + hitokoto.category + ' 作者：' + hitokoto.author + '《' + hitokoto.origin + '》',
    col_type: 'pic_1',
    pic_url: 'https://acg.xydwz.cn/gqapi/gqapi.php'
});

d.push({

    title: ' 🔰无需翻墙(点此进入One主页)🔰',

    url: "http://myindex.top/",

    col_type: 'text_center_1'

});


d.push({

    title: 'AV11',

    url: 'https://av11.org/index.php/vod/type/id/8.html',

    col_type: 'icon_4',

    pic_url: 'https://av11.org/static/assets/icon/av11.ico'

});

d.push({

    title: '夜郎影视',

    url: 'http://www.yldh.org/',

    col_type: 'icon_4',

    pic_url: 'https://static.baidu-mp4.com/idy6.cc/asset/img/favicon.ico'

});

d.push({

    title: '蝌蚪窝',

    url: 'http://www.xiaobi023.com/',

    col_type: 'icon_4',

    pic_url: 'http://www.easyicon.net/api/resizeApi.php?id=1220653&size=48'

});
d.push({

    title: '成人在线',

    url: 'https://www.1345yo.com/',

    col_type: 'icon_4',

    pic_url: 'https://www.1345yo.com/theme/images/logo_min.png'

});
d.push({

    title: '猫咪',

    url: 'http://www.v7b2.com/',

    col_type: 'icon_4',

    pic_url: 'https://jsjs.qcyn72.com/10/assets/images/theme/default/maomi_32x32.png'

});

d.push({

    title: '飞机馆',

    url: 'https://fj666.me/',

    col_type: 'icon_4',

    pic_url: 'http://www.easyicon.net/api/resizeApi.php?id=1270241&size=64'

});


d.push({

    title: '字幕网',

    url: 'https://www.zmxx55.com/',

    col_type: 'icon_4',

    pic_url: 'https://www.zmxx55.com/templates/frontend/frontend-jiucao/m/img/logo-mobile-head.png'

});

d.push({

    title: '啪里',

    url: 'http://web.ssxx123.com',

    col_type: 'icon_4',

    pic_url: 'http://web.ssxx123.com/static/img/load-logo.png'

});

d.push({

    title: '裙底捞',

    url: 'http://pwa.dazhaisheji.cn',

    col_type: 'icon_4',

    pic_url: 'http://pwa.dazhaisheji.cn/static/img/icons/qundilao.ico'

});

d.push({

    title: '午夜',

    url: 'http://jzd2.com/',

    col_type: 'icon_4',

    pic_url: 'http://jzd2.com/template/xigua/images/logo.png'

});

d.push({

    title: '小蝌蚪',

    url: 'https://go.kedou771.com/',

    col_type: 'icon_4',

    pic_url: 'https://go.kedou771.com/template/stui_tpl_A004/statics/img/load.gif'

});

d.push({

    title: '姨妈',

    url: 'https://m.yimaba6.com/',

    col_type: 'icon_4',

    pic_url: 'https://m.yimaba6.com/favicon.ico'

});

d.push({

    title: '麻花',

    url: 'https://viagraiusd.com/imahua/28.html',

    col_type: 'icon_4',

    pic_url: 'https://viagraiusd.com/zuoz/img/logo.png'

});

d.push({

    title: '033影视',

    url: 'http://www.033ys.com/',

    col_type: 'icon_4',

    pic_url: 'http://www.easyicon.net/api/resizeApi.php?id=1252389&size=64'

});


d.push({

    title: '芙蓉花',

    url: 'https://www.frh.buzz/',

    col_type: 'icon_4',

    pic_url: 'http://www.easyicon.net/api/resizeApi.php?id=1271924&size=64'

});

d.push({

    title: '芙蓉AV',

    url: 'https://r9494.com/live/live-girl.html',

    col_type: 'icon_4',

    pic_url: 'https://r9494.com/favicon.ico'

});


d.push({

    title: '小蝌蚪',

    url: 'https://go.kedou771.com/',

    col_type: 'icon_4',

    pic_url: 'https://go.kedou771.com/template/stui_tpl_A004/statics/img/load.gif'

});

d.push({

    title: '韩国BJ',

    url: 'https://www.thumbzilla.com/tags/korean-bj',

    col_type: 'icon_4',

    pic_url: 'https://ci.phncdn.com/www-static/thumbzilla/images/favicon.ico?cache=2020052801'

});


d.push({

    title: '天堂伦理',

    url: 'https://bttzyw.net/',

    col_type: 'icon_4',

    pic_url: 'https://bttzyw.net/Tpl/custom//images/logo.png'

});

d.push({

    title: '姨妈',

    url: 'https://m.yimaba6.com/',

    col_type: 'icon_4',

    pic_url: 'https://m.yimaba6.com/favicon.ico'

});

d.push({

    title: '⚙视界设置(点此打开书签)⚙',

    url: "hiker://bookmark",

    col_type: 'text_center_1'

});

d.push({

    title: '更多设置',

    url: 'hiker://settingMore',

    col_type: 'icon_4',

    pic_url: 'https://img.rruu.net/image/5eb0dbea724b0'

});

d.push({

    title: '搜索引擎',

    url: 'hiker://searchSetting',

    col_type: 'icon_4',

    pic_url: 'https://img.rruu.net/image/5eb0dd08a899f'

});

d.push({

    title: '我的下载',

    url: 'hiker://download',

    col_type: 'icon_4',

    pic_url: 'https://img.rruu.net/image/5eb0dceb9477b'

});

d.push({

    title: '我的收藏',

    url: 'hiker://collection',

    col_type: 'icon_4',

    pic_url: 'https://img.rruu.net/image/5eb0db67a2b65'

});

d.push({

    title: '域名拦截',

    url: 'hiker://adUrl',

    col_type: 'icon_4',

    pic_url: 'https://img.rruu.net/image/5eb0de67a1ba4'

});

d.push({

    title: '插件管理',

    url: 'hiker://js',

    col_type: 'icon_4',

    pic_url: 'https://img.rruu.net/image/5eb0de5cbee16'

});

d.push({

    title: '历史记录',

    url: 'hiker://history',

    col_type: 'icon_4',

    pic_url: 'https://img.rruu.net/image/5eb0dd1de267f'

});

d.push({

    title: '元素拦截',

    url: 'hiker://adRule',

    col_type: 'icon_4',

    pic_url: 'https://img.rruu.net/image/5eb0e188a1ebf'

});
d.push({

    title: ' 🔰需要翻墙(点此进入One主页)🔰',

    url: "http://mate3.fun/",

    col_type: 'text_center_1'

});


d.push({

    title: 'Pronhub',

    url: 'https://pornhub.com',

    col_type: 'icon_4',

    pic_url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3096814621,3092201358&fm=26&gp=0.jpg'

});

d.push({

    title: 'Xvideos',

    url: 'https://xvideos.com',

    col_type: 'icon_4',

    pic_url: 'http://www.easyicon.net/api/resizeApi.php?id=1187252&size=64'

});

d.push({

    title: 'Avgle',

    url: 'https://avgle.com/',

    col_type: 'icon_4',

    pic_url: 'http://www.easyicon.net/api/resizeApi.php?id=1256249&size=64'

});
d.push({

    title: 'AV01',

    url: 'https://www.av01.tv/',

    col_type: 'icon_4',

    pic_url: 'http://www.easyicon.net/api/resizeApi.php?id=1192276&size=64'

});
d.push({

    title: 'EYNY',

    url: 'http://video.eyny.com/tag/%E9%BA%BB%E8%B1%86',

    col_type: 'icon_4',

    pic_url: 'http://www.easyicon.net/api/resizeApi.php?id=1180005&size=64'

});

d.push({

    title: '环亚无码',

    url: 'https://agzy1.com/#/index',

    col_type: 'icon_4',

    pic_url: 'http://www.easyicon.net/api/resizeApi.php?id=1251491&size=64'

});


d.push({

    title: '猎奇狼',

    url: 'https://snbfpb.com/lsnzy/',

    col_type: 'icon_4',

    pic_url: 'http://www.easyicon.net/api/resizeApi.php?id=570031&size=64'

});

d.push({

    title: 'Chaturbate',

    url: 'https://m.chaturbate.com/tag/asian/female/',

    col_type: 'icon_4',

    pic_url: 'http://www.easyicon.net/api/resizeApi.php?id=1267553&size=64'

});


res.data = d;

setHomeResult(res);