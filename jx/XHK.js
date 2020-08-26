function fftq() {
    var res = {};
    var d = [];
    var html = getResCode();
    var tabs = parseDom(html, '.nav-tabs&&Html').match(/<li[\s\S]*?<\/li>/g);
    var conts = parseDom(html, '.tab-content&&Html').match(/<ul[\s\S]*?<\/ul>/g);
    d.push({
        title: '共有' + tabs.length + '条线路',
        desc: parseDomForHtml(html, '.sketch&&Text'),
        pic_url: parseDom(html, '.picture&&img&&data-original'),
        url: getUrl(),
        col_type: 'pic_1'
    });
    for (var i = 0; i < conts.length; i++) {
        var list = conts[i].match(/<a[\s\S]*?<\/a>/g);
        if (list != null) {
            d.push({
                title: tabs[i].split(">")[2].split("<")[0],
                col_type: 'text_1'
            });
            for (var j = 0; j < list.length; j++) {
                d.push({
                    title: parseDomForHtml(list[j], 'a&&Text'),
                    url: parseDom(list[j], 'a&&href') + `@lazyRule=.myui-player__video&&script&&Html.js:eval(input);var url = player_data.url;var fm = player_data.from;var h = 'https://jx.138vcd.com/'+fetch('https://jx.138vcd.com/jx.php?id='+url,{}).match(/var u="(.*?)"/)[1];try{fm.indexOf('niux')>-1?fetch(h,{headers:{'User-Agent':'Mozilla/5.0','Referer':'www.138vcd.com'},method:'GET'}).match(/video src="(.*?)"/)[1]:fm.indexOf('dplayer')>-1?url+';{Referer@www.138vcd.com}':fm.indexOf('ppayun')>-1?getUrl():url}catch(e){getUrl()}`,
                    col_type: list.length > 3 ? 'text_3' : 'text_2'
                });
            }
        }
    }
    res.data = d;
    setHomeResult(res);
}
