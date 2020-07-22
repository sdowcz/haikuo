js: var names = JSON.parse(getRule()),
    name = names.title//获取首页名
//setError()
/*－－－－－－自定义区－－－－－－*/
var wallpaperurl = 'http://api.btstu.cn/sjbz/api.php?lx=dongman&format=images';   /*自定义随机图*/

var suffix = '#' + new Date().getTime();
/*！随机图不刷新或不显示在改这里*/

var userqriginalpictureurl = wallpaperurl;
//自定义跳转链接

/*－－－－开关－－－－*/
/*1开启，0关闭*/
var localPattern = 0;   //本地模式,田园生活
var homepage = 1;   //首页图
var hitokotos = 1;   //一言
var hdetailed = 1;   //一言详细
var shortcut = 1;   //快捷栏
var weather = 1;   //天气
var music = 0;   //随机音乐
var laoSePi = 0;  //懂？
var onlinePage = 0;   //在线二级页面关闭会导致某些功能失效，相应会提速不少
var weathercustomisation = '';
/*自定义天气地区,不填为现在所在地*/
var rank;

var bookmarks = 1;   //书签
var history = 0;   //历史记录
var card1 = 1;   //列表1
var card2 = 1;   //列表2
var card3 = 1;   //列表3
var card4 = 1;   //列表4
rank = '1=>2=>3=>4';   //卡片排序
/*乱填等着报错吧！￣へ￣*/

/*－－－－类型选择－－－－*/
var hitokototype = i;   /*一言类型*/
/*类型详细:https://s1.ax1x.com/2020/05/03/JzYHcd.jpg*/

var bookmarkclass = '工具';   /*书签分类*/


/*－－－－列表.自定义.进阶－－－－*/
/*快捷栏*/
var shortcut_col_type = 'icon_4';
var Klist = 99;
var Kmixlist = 4;
var Kocol_type = 'icon_small_4';
var Ktcol_type = 'icon_2';


/*列表1*/
var title1 = '🔎影视导航🔍';
var url1 = 'hiker://home@' + name;
var list1 = 99;
var col_type1 = 'icon_small_4';
var mixlist1 = -1;
var ocol_type1 = 'text_3';
var tcol_type1 = 'text_3';

/*列表2*/
var title2 = '🎐动漫/番剧🎐';
var url2 = 'hiker://home@' + name;
var list2 = 99;
var col_type2 = 'icon_small_4';
var mixlist2 = -1;
var ocol_type2 = 'text_3';
var tcol_type2 = 'text_3';

/*列表3*/
var title3 = '❇正版影视(插件管理)❇';
var url3 = 'hiker://js';
var list3 = 99;
var col_type3 = 'icon_4';
var mixlist3 = -1;
var ocol_type3 = 'text_3';
var tcol_type3 = 'text_3';

/*列表4*/
var title4 = '⚙️海阔设置⚙️';
var url4 = 'hiker://setting';
var list4 = 99;
var col_type4 = 'text_3';
var mixlist4 = 99;
var ocol_type4 = 'icon_4';
var tcol_type4 = 'icon_2';

/*书签列表*/
var col_type5 = 'text_3';

/*历史记录列表*/
var col_type6 = 'pic_1';

/*注释：①col_type为卡片的默认样式
            ②mixlist~tcol_type为混合样式:
ocol_type为第一个样式
tcol_type为第二个样式
mixlist为第一个样式（omist）应用列表的个数,其余列表应用第二个样式（tcol_type）
mixlist也是混合样式的开关-1关闭，当混合样式打开时默认样式失效
            ③list为列表
            ④title为列表名称
*/
var Time
if (onlinePage == 1 && localPattern != 1) try { eval(fetch('https://gitee.com/LoyDgIk/LoyDgIk_Rule/raw/master/homePage.js', {})); } catch (e) { }
/*－－－－卡片自定义end－－－－*/
var shortcut_list =
    ['收藏@@hiker://collection@@https://gitee.com/LoyDgIk/LoyDgIk_Rule/raw/master/Icon%20/home_collection.png',
        '书签@@hiker://bookmark@@https://gitee.com/LoyDgIk/LoyDgIk_Rule/raw/master/Icon%20/home_bookmark.png',
        '历史@@hiker://history@@https://gitee.com/LoyDgIk/LoyDgIk_Rule/raw/master/Icon%20/home_history.png',
        '插件@@hiker://js@@https://gitee.com/LoyDgIk/LoyDgIk_Rule/raw/master/Icon%20/home_video.png',
        '工具@@hiker://home@工具台🛠️@@https://www.easyicon.net/api/resizeApi.php?id=1244767&size=128',
        '总仓库@@hiker://home@总仓库@@https://www.easyicon.net/api/resizeApi.php?id=1244707&size=128'
    ];

var lists_1 =
    [
        '1080@@https://www.k1080.net/@@https://www.k1080.net/template/mytheme/statics/image/20200324/ce095ca6b.ico',
        '完美看看@@https://www.wanmeikk.me/@@https://img1.to1wap.com/statics/img/favicon.ico',
        '奈菲影视@@https://www.nfmovies.com/@@https://www.nfmovies.com/favicon.ico',
        '骚火电影@@http://saohuotv.com/@@http://saohuotv.com/favicon.ico',
        '哔嘀影视@@https://bde4.com/@@https://cdn.jsdelivr.net/gh/bde4admin/v3/images/favicon.png',
        '真不卡@@https://www.zhenbuka.com/@@http://sc.adminbuy.cn/uploads/allimg/160120/1-160120151I50-L.png',
        '乌龟影院@@https://www.wuguiyy.com/@@https://www.wuguiyy.com/template/shoutu4/statics/img/favicon.ico',
        '思古影院@@http://v.sigu.me@@http://v.sigu.me/favicon.ico'
    ];

var lists_2 =
    [
        'CliCli@@https://www.clicli.me/@@https://www.clicli.me/favicon.ico',
        'Qinmei@@https://m.qinmei.video/@@https://m.qinmei.video/img/config/6455a54d5369cf16e4fe22af82fea3e3.ico',
        '樱花动漫@@https://www.6111.tv/@@https://www.6111.tv/favicon.ico',
        '迅播动漫@@https://www.xbdm.org/@@https://www.xbdm.org/templets/xbdm2020/statics/img/favicon.ico'
    ];

var lists_3 =
    [
        '腾讯@@https://m.v.qq.com@@https://img.rruu.net/image/5eb0bd7617e7d',
        '爱奇艺@@https://m.iqiyi.com/@@https://img.rruu.net/image/5eb11ccd88c21',
        '优酷@@https://m.youku.com@@https://img.rruu.net/image/5eb0b89a3ba9d',
        '芒果@@https://m.mgtv.com@@https://img.rruu.net/image/5eb0ba7eb4c9c',
        '搜狐@@https://m.iqiyi.com@@https://img.rruu.net/image/5eb0c1b2512e2',
        '乐视@@http://m.le.com/@@https://img.rruu.net/image/5eb0c3e7c5140',
        'PPTV@@https://m.pptv.com/@@https://img.rruu.net/image/5eb0bfa6e5618',
        '哔哩哔哩@@https://m.bilibili.com/@@https://img.rruu.net/image/5eb0c7c82c2d3'
    ];

var lists_4 =
    [
        '首页频道@@hiker://home@@https://www.easyicon.net/api/resizeApi.php?id=1271655&size=128',
        '我的下载@@hiker://download@@https://www.easyicon.net/api/resizeApi.php?id=1271631&size=128',
        '搜索引擎@@hiker://searchSetting@@https://www.easyicon.net/api/resizeApi.php?id=1271624&size=128',
        '海阔社区@@http://haikuoshijie.cn/@@https://www.easyicon.net/api/resizeApi.php?id=1271630&size=128',
        '元素拦截@@hiker://adRule@@https://www.easyicon.net/api/resizeApi.php?id=1271639&size=128',
        '网址拦截@@hiker://adUrl@@https://www.easyicon.net/api/resizeApi.php?id=1271613&size=128',
        '历史记录@@hiker://history@@https://www.easyicon.net/api/resizeApi.php?id=1271647&size=128',
        '网页插件@@hiker://js@@https://www.easyicon.net/api/resizeApi.php?id=1271622&size=128',
        '我的书签@@hiker://bookmark@@https://www.easyicon.net/api/resizeApi.php?id=1271621&size=128',
        '我的收藏@@hiker://collection@@https://www.easyicon.net/api/resizeApi.php?id=1271628&size=128',
        '常用设置@@hiker://setting@@https://www.easyicon.net/api/resizeApi.php?id=1271662&size=128',
        '其它设置@@hiker://settingMore@@https://www.easyicon.net/api/resizeApi.php?id=1271634&size=128'
    ];
/*－－－－卡片列表end－－－－*/
/*－－－－－－自定义区end－－－－－－*/
var t1 = lists_1,
    t2 = lists_2,
    t3 = lists_3,
    t4 = lists_4,
    kj = shortcut_list;
var res = {};
var d = [];
/*首页图*/
try {
    if (homepage == 1 && localPattern != 1 || hitokotos == 1 && localPattern != 1) {
        let json = JSON.parse(fetch('https://v1.hitokoto.cn/?c=' + hitokototype, {}));
        if (homepage == 1 && hitokotos == 1 && hdetailed == 1) {
            d.push({
                title: json.hitokoto,
                desc: '出处：\t《' + json.from + '》\n原作者：\t' + json.from_who,
                col_type: 'pic_1',
                url: userqriginalpictureurl,
                pic_url: wallpaperurl + suffix
            });
        } else if (homepage == 1 && hitokotos == 1) {
            d.push({
                title: json.hitokoto,
                col_type: 'pic_1',
                url: userqriginalpictureurl,
                pic_url: wallpaperurl + suffix
            });
        } else if (hitokotos == 1 && hdetailed == 1) {
            d.push({
                title: json.hitokoto,
                desc: '出处：\t《' + json.from + '》\n原作者：\t' + json.from_who,
                col_type: 'pic_1',
                url: userqriginalpictureurl
            });
        } else if (hitokotos == 1) {
            d.push({
                title: json.hitokoto,
                col_type: 'pic_1',
                url: userqriginalpictureurl
            });
        } else if (homepage == 1) {
            d.push({
                col_type: 'pic_1',
                url: userqriginalpictureurl,
                pic_url: wallpaperurl + suffix
            });
        }
    }
    /*随机音乐*/
    if (music == 1 && localPattern != 1) {
        let json = JSON.parse(fetch('https://api.uomg.com/api/rand.music?sort=热歌榜&format=json', {}));
        /*分类[热歌榜|新歌榜|飙升榜|抖音榜|电音榜]，为空是热歌榜*/
        var r = {};
        var j = json.data;
        r.title = '歌名:' + j.name + '\t歌手:' + j.artistsname;
        r.url = j.url + '.mp3';
        r.col_type = 'text_center_1';
        if (j.name !== null && j.name !== undefined && j.name !== '') d.push(r);
    }
    /*天气*/
    if (weather == 1 && localPattern != 1) {
        d.push({
            title: '🔭天气(查看详细)⛅',
            url: 'http://m.hao123.com/a/tianqi?idfrom=pc',
            col_type: 'text_center_1'
        });
        let json = JSON.parse(fetch('https://v1.alapi.cn/api/tianqi/now?city=' + weathercustomisation, {}));
        var r = {};
        var j = json.data;
        r.title = '当前位置:' + j.city + '\t\t时间:' + j.date + '\t' + j.week + '\n天气概况:' + '(' + '实时温度:' + j.tem + '℃' + ')' + '\nPM2.5:' + j.air_pm25 + ' ' + j.air_level + '\t天气' + j.wea + ' \t' + j.win + j.win_speed + j.tem2 + '~' + j.tem1 + '℃';
        r.url = 'hiker://home@' + name;
        r.col_type = 'text_center_1';
        if (r.title !== null && r.title !== undefined && r.title !== '') d.push(r);
    }
} catch (e) { }
eval(base64Decode('aWYobmFtZXMuYXV0aG9yIT0nQExveURnSWsnKXNldEVycm9yKCfmlLnkvZzogIXlkI3nnJ/nmoTlpb3lkJcnKQ=='));
if (localPattern == 1 && t1.length + t2.length + t3.length + t4.length > 15)
{ shortcut_col_type = col_type1 = col_type2 = col_type3 = col_type4 = col_type5 = col_type6 = 'text_3' } else if (localPattern == 1) { shortcut_col_type = col_type1 = col_type2 = col_type3 = col_type4 = col_type5 = col_type6 = 'text_2' }
/*快捷栏*/
if (shortcut == 1) {
    if (Kmixlist == -1 || localPattern == 1) {
        for (var i = 0; i < kj.length && i < Klist; i++) {
            var k = kj[i].split(/\s*@@\s*/);
            if (k.length < 2) continue;
            var r = {};
            r.title = k[0];
            r.url = k[1];
            r.pic_url = k[2];
            r.col_type = shortcut_col_type;
            d.push(r);
        }
    }
    else {
        for (var i = 0; i < kj.length && i < Kmixlist; i++) {
            var k = kj[i].split(/\s*@@\s*/);
            if (k.length < 2) continue;
            var r = {};
            r.title = k[0];
            r.url = k[1];
            r.pic_url = k[2];
            r.col_type = Kocol_type;
            d.push(r);
        }
        for (var i = Kmixlist; i < kj.length && i < Klist; i++) {
            var k = kj[i].split(/\s*@@\s*/);
            if (k.length < 2) continue;
            var r = {};
            r.title = k[0];
            r.url = k[1];
            r.pic_url = k[2];
            r.col_type = Ktcol_type;
            d.push(r);
        }
    }
}
/*卡片*/
var a = [], a1 = [], a2 = [], a3 = [], c = [];
if (card1 == 1) {
    a.push({
        title: title1,
        url: url1,
        col_type: 'text_center_1'
    });
    if (mixlist1 == -1 || localPattern == 1) {
        for (var i = 0; i < t1.length && i < list1; i++) {
            var k = t1[i].split(/\s*@@\s*/);
            if (k.length < 2) continue;
            var r = {};
            r.title = k[0];
            r.url = k[1];
            r.pic_url = k[2];
            r.col_type = col_type1;
            a.push(r);
        }
    }
    else {
        for (var i = 0; i < t1.length && i < mixlist1; i++) {
            var k = t1[i].split(/\s*@@\s*/);
            if (k.length < 2) continue;
            var r = {};
            r.title = k[0];
            r.url = k[1];
            r.pic_url = k[2];
            r.col_type = ocol_type1;
            a.push(r);
        }
        for (var i = mixlist1; i < t1.length && i < list1; i++) {
            var k = t1[i].split(/\s*@@\s*/);
            if (k.length < 2) continue;
            var r = {};
            r.title = k[0];
            r.url = k[1];
            r.pic_url = k[2];
            r.col_type = tcol_type1;
            a.push(r);
        }
    }
}
if (card2 == 1) {
    a1.push({
        title: title2,
        url: url2,
        col_type: 'text_center_1'
    });
    if (mixlist2 == -1 || localPattern == 1) {
        for (var i = 0; i < t2.length && i < list2; i++) {
            var k = t2[i].split(/\s*@@\s*/);
            if (k.length < 2) continue;
            var r = {};
            r.title = k[0];
            r.url = k[1];
            r.pic_url = k[2];
            r.col_type = col_type2;
            a1.push(r);
        }
    }
    else {
        for (var i = 0; i < t2.length && i < mixlist2; i++) {
            var k = t2[i].split(/\s*@@\s*/);
            if (k.length < 2) continue;
            var r = {};
            r.title = k[0];
            r.url = k[1];
            r.pic_url = k[2];
            r.col_type = ocol_type2;
            a1.push(r);
        }
        for (var i = mixlist2; i < t2.length && i < list2; i++) {
            var k = t2[i].split(/\s*@@\s*/);
            if (k.length < 2) continue;
            var r = {};
            r.title = k[0];
            r.url = k[1];
            r.pic_url = k[2];
            r.col_type = tcol_type2;
            a1.push(r);
        }
    }
}
if (card3 == 1) {
    a2.push({
        title: title3,
        url: url3,
        col_type: 'text_center_1'
    });
    if (mixlist3 == -1 || localPattern == 1) {
        for (var i = 0; i < t3.length && i < list3; i++) {
            var k = t3[i].split(/\s*@@\s*/);
            if (k.length < 2) continue;
            var r = {};
            r.title = k[0];
            r.url = k[1];
            r.pic_url = k[2];
            r.col_type = col_type3;
            a2.push(r);
        }
    }
    else {
        for (var i = 0; i < t3.length && i < mixlist3; i++) {
            var k = t3[i].split(/\s*@@\s*/);
            if (k.length < 2) continue;
            var r = {};
            r.title = k[0];
            r.url = k[1];
            r.pic_url = k[2];
            r.col_type = ocol_type3;
            a2.push(r);
        }
        for (var i = mixlist3; i < t3.length && i < list3; i++) {
            var k = t3[i].split(/\s*@@\s*/);
            if (k.length < 2) continue;
            var r = {};
            r.title = k[0];
            r.url = k[1];
            r.pic_url = k[2];
            r.col_type = tcol_type3;
            a2.push(r);
        }
    }
}
if (card4 == 1) {
    a3.push({
        title: title4,
        url: url4,
        col_type: 'text_center_1'
    });
    if (mixlist4 == -1 || localPattern == 1) {
        for (var i = 0; i < t4.length && i < list4; i++) {
            var k = t4[i].split(/\s*@@\s*/);
            if (k.length < 2) continue;
            var r = {};
            r.title = k[0];
            r.url = k[1];
            r.pic_url = k[2];
            r.col_type = col_type4;
            a3.push(r);
        }
    }
    else {
        for (var i = 0; i < t4.length && i < mixlist4; i++) {
            var k = t4[i].split(/\s*@@\s*/);
            if (k.length < 2) continue;
            var r = {};
            r.title = k[0];
            r.url = k[1];
            r.pic_url = k[2];
            r.col_type = ocol_type4;
            a3.push(r);
        }
        for (var i = mixlist4; i < t4.length && i < list4; i++) {
            var k = t4[i].split(/\s*@@\s*/);
            if (k.length < 2) continue;
            var r = {};
            r.title = k[0];
            r.url = k[1];
            r.pic_url = k[2];
            r.col_type = tcol_type4;
            a3.push(r);
        }
    }
}
/*书签*/
if (bookmarks == 1) {
    if (bookmarkclass == '') {
        c.push({
            title: '☃  ☃  ☃🔖我的书签(打开书签)📌☃  ☃  ☃',
            url: "hiker://bookmark",
            col_type: 'text_center_1'
        });
    }
    if (bookmarkclass != '') {
        c.push({
            title: '☃  ☃  ☃🔖' + bookmarkclass + '(打开书签)📌☃  ☃  ☃',
            url: "hiker://bookmark",
            col_type: 'text_center_1'
        });
    }
    var b = JSON.parse(fetch('hiker://bookmark', {}));
    if (b != null && b.length > 0) {
        for (var j = 0; j < b.length; j++) {
            var l = {};
            l.title = b[j].title;
            l.url = b[j].url.replace(/.*rule:\/\//g, 'rule://');
            l.col_type = col_type5;
            if (bookmarkclass == '') {
                if (l.url.indexOf('hiker://home@') != -1) l.url = l.url.replace(/.*hiker:\/\/home@/g, 'hiker://home@');
                c.push(l);
            }
            if (bookmarkclass != '') {
                if (l.url.indexOf('hiker://home@') != -1) l.url = l.url.replace(/.*hiker:\/\/home@/g, 'hiker://home@');
                if (b[j].group == bookmarkclass) c.push(l);
            }
        }
    }
}
/*历史记录*/
if (history == 1) {
    c.push({
        title: '历史记录',
        url: "hiker://history",
        col_type: 'text_center_1'
    });
    let b = JSON.parse(fetch('hiker://history', {}));
    if (b != null && b.length > 0) {
        //setError(b[1])
        for (var j = b.length - 1; j > -1; j--) {
            var l = {};
            l.title = b[j].title;
            l.url = b[j].url;
            l.desc = b[j].url + '\n' + b[j].type;
            l.col_type = col_type6;
            //if (b[j].type == '网页浏览')
            c.push(l);
        }
    }
}
var p = rank.split('=>');
var arr = new Array(4);
arr[p[0]] = a;
arr[p[1]] = a1;
arr[p[2]] = a2;
arr[p[3]] = a3;
for (var i in arr) {
    d.push.apply(d, arr[i])
}
d.push.apply(d, c);
res.data = d;
setHomeResult(res);