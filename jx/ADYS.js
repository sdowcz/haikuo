function fftq() {
    var res = {};
    var d = [];
    var html = getResCode();
    var tabs = parseDom(html, '#NumTab&&Html').match(/<a[\s\S]*?<\/a>/g);
    var conts = parseDom(html, '#playlistbox&&Html').match(/<ul[\s\S]*?<\/ul>/g);
    d.push({
        title: '共有' + tabs.length + '条线路',
        desc: parseDomForHtml(html, '.full_text&&Text'),
        pic_url: parseDom(html, '.lazyload&&data-original'),
        url: getUrl(),
        col_type: 'pic_1'
    });
    for (var i = 0; i < conts.length; i++) {
        var list = conts[i].match(/<a[\s\S]*?<\/a>/g);
        if (list != null) {
            d.push({
                title: parseDomForHtml(tabs[i], 'a&&alt'),
                col_type: 'text_1'
            });
            for (var j = 0; j < list.length; j++) {
                d.push({
                    title: parseDomForHtml(list[j], 'a&&Text'),
                    url: parseDom(list[j], 'a&&href') + "@lazyRule=.embed-responsive&&script&&Html.js:eval(input);var url = player_data.url;url.indexOf('=')>-1?'http:'+base64Decode('Ly93eS'+url.split('93eS')[1])+';{Referer@https://www.edu-hb.com}':url.indexOf('Wl0')>-1?base64Decode('aHR0cHM6Ly9oY' + url.slice(26)).split('m3u8')[0] + 'm3u8':url.indexOf('Wcu')>-1?base64Decode('aHR0cHM6Ly9pb' + url.slice(26)).split('m3u8')[0] + 'm3u8':eval(fetch('https://gitee.com/KemPetrichor/hiker.resolver/raw/master/kem.js',{}));epang.getUrl(url)",
                    col_type: list.length > 3 ? 'text_3' : 'text_2'
                });
            }
        }
    }
    res.data = d;
    setHomeResult(res);
}
