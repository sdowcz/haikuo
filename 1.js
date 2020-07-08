js:
var res = {};
var d = [];

// 发
var des_desc = parseDom(getResCode(), 'body&&.detail-sketch&&Text').replace(getUrl() + "/", "");
// 粪
var des_pic = parseDom(getResCode(), 'body&&.stui-content__thumb&&img&&data-original');
// 涂
var tabs = parseDom(getResCode(), 'body&&Html').match(/快速播放[\s\S]*?<\/h3/g);
// 墙
var conts = parseDom(getResCode(), 'body&&Html').match(/stui-content__playlist[\s\S]*?<\/ul>/g);

d.push({
    title: '共有' + conts.length + '条线路',
    desc: des_desc,
    pic_url: des_pic,
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
                title: list[j].split('>')[1].split('<')[0],
                url: 'https://www.mmys.net' + list[j].split('href="')[1].split('"')[0] + '@lazyRule=html&&.embed-responsive&&script&&Html.js:eval(input)；；now',
            });
        }
    }
}
res.data = d;
setHomeResult(res);