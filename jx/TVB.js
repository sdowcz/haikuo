function fftq() {
    var res = {};
    var d = [];
    var html = getResCode();
    var lazy = `@lazyRule=.myui-player__box&&script&&Html.js:eval(input);var re = 'https://www.hktvyb.com';var fm= player_data.from;var url = player_data.url; try{if(url.indexOf('html')!=-1){JSON.parse(fetch('https://jx.ikancloud.cn/api.php?url='+url,{})).url}else if(fm.indexOf('wylink')!=-1){'https://jxtc.dxsdkw.cn'+fetch(fetch('https://jxn.dxsdkw.cn/jm2/x2.php?id='+url,{headers:{'Referer':re},method:'GET'}).match(/src='(.*?)'/)[1],{headers:{'Referer':re},method:'GET'}).match(/url: '(.*?)'/)[1]}else if(fm.indexOf('hktv')!=-1){fetch('https://jxn.dxsdkw.cn/json/'+fetch(url,{}).match(/var u="(.*?)"/)[1],{}).match(/video src="(.*?)"/)[1]}else if(fm.indexOf('hkm3u8')!=-1){var h =fetch('https://jxn.dxsdkw.cn/jm/x2.php?id='+url,{headers:{'Referer':re},method:'GET'}).match(/src='(.*?)'/)[1];eval(fetch(h,{headers:{'Referer':re},method:'GET'}).split('script">')[1].split('var n')[0]); eval(fetch('hiker://files/rules/js/zbk.js',{})); 'https://pl.tcc-interiors.com/hls/'+src+'%7C'+ti+'%7C'+sk+'%7C'+pt+'%7C'+bkn+'%7C'+gtk+'.m3u8'}else if(fm.indexOf('hkyun')!=-1){getUrl()}else{url}}catch(e){getUrl()}`;
    var tabs = parseDom(html, 'body&&Html').match(/ 排序[\s\S]*?<\/h3/g);
    var conts = parseDom(html, 'body&&Html').match(/class=\"myui-content__list[\s\S]*?<\/ul>/g);
    d.push({
        title: '共有' + conts.length + '条线路',
        desc: parseDomForHtml(html, '.data,-1&&Text'),
        pic_url: parseDom(html, '.myui-content__thumb&&img&&data-original'),
        url: getUrl(),
        col_type: 'pic_1'
    });
    for (var i = 0; i < conts.length; i++) {
        var list = conts[i].match(/<a[\s\S]*?<\/a>/g);
        if (list != null) {
            d.push({
                title: tabs[i].split(">")[2].split("<")[0],
                url: getUrl(),
                col_type: 'text_1'
            });
            for (var j = 0; j < list.length; j++) {
                d.push({
                    title: list[j].split('>')[1].split('<')[0],
                    url: parseDom(list[j], 'a&&href') + lazy,
                    col_type: list.length > 3 ? 'text_3' : 'text_2'
                });
            }
        }
    }
    res.data = d;
    setHomeResult(res);
}
