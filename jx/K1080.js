function fftq() {
    var res = {};
    var d = [];
    var html = getResCode();
    var tabs = parseDom(html, '.nav-tabs&&Html').match(/#playlist[\s\S]*?<\/a>/g);
    var conts = parseDom(html, 'body&&Html').match(/<ul class=\"myui-content__list[\s\S]*?<\/ul>/g);
    d.push({
        title: '共有' + tabs.length + '条线路',
        desc: parseDomForHtml(html, '.sketch&&Text'),
        pic_url: parseDom(html, '.myui-vodlist__thumb&&img&&data-original'),
        url: getUrl(),
        col_type: 'pic_1'
    });
    for (var i = 0; i < conts.length; i++) {
        var list = conts[i].match(/<a[\s\S]*?<\/a>/g);
        if (list != null) {
            d.push({
                title: '播放列表' + (i + 1) + ' ==> ' + tabs[i].split(">")[1].split("<")[0],
                col_type: 'text_1'
            });
            for (var j = 0; j < list.length; j++) {
                d.push({
                    title: parseDomForHtml(list[j], 'a&&Text'),
                    url: parseDom(list[j], 'a&&href') + `@lazyRule=.embed-responsive&&script&&Html.js:eval(input);eval(fetch('https://gitee.com/KemPetrichor/hiker.resolver/raw/master/kem.js',{}));var url = unescape(base64Decode(player_data.url));url.indexOf('m3u8')>-1?url:url.indexOf('huayue')>-1?fetch(url,{headers:{'Referer':'https://k1080.net/'},method:'GET'}).match(/playlink = "(.*?)"/)[1]:url.indexOf('html')>-1?fetch('https://vip.parwix.com:4433/player/analysis.php?url='+url,{}).match(/"url": "(.*?)"/)[1]:epang.getUrl(url)`,
                    col_type: list.length > 3 ? 'text_3' : 'text_2'
                });
            }
        }
    }
    res.data = d;
    setHomeResult(res);
}
