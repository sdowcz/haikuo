/**
 * 如何使用？
 * 在规则中粘贴一下代码即可
   var res = {};
   var result = [];
   // 添加插件内容
   var fileUrl = "hiker://files/rules/js/剧汇TV_Re_二级规则.js";
   eval(fetch(fileUrl,{}));
   res.data=result;
   setHomeResult(res);
 * 
 * 规则命名建议采用：规则名+规则类型
 * 如这个规则是"剧汇TV•Re"的二级规则，插件名就叫"剧汇TV_Re_二级规则"
 * 
 * ！！！注意！！！
 * 此用法仅适用于JS解析的规则，
 * 目测 @lazyRule=.js: 里面也可以用，
 * 而且不需要替换 & 和 ; 符号
 */
var json = {};
eval('json=' + getResCode());
result.push({
    title: json.data.programme.title,
    url: json.data.programme.verticalCover,
    pic_url: json.data.programme.horizontalCover,
    desc: json.data.programme.summary,
    col_type: "pic_1"
});

var resources = json.data.programme.resources;
var vDLArray= new Array(3);
var gateway = "https://ipfs31.365kqzs.cn:9081/ipfs/";
for(var i = 0; i < vDLArray.length; i++) {
    vDLArray[i] = new Array(resources.length);
}
for (var i = 0; i < resources.length; i++) {
    for(var j = 0; j < resources[i].data.length; j++) {
        switch (resources[i].data[j].display) {
            case 1080:
                vDLArray[0][i] = gateway+resources[i].data[j].hash;
                break;
            case 720:
                vDLArray[1][i] = gateway+resources[i].data[j].hash;
                break;
            case 360:
                vDLArray[2][i] = gateway+resources[i].data[j].hash;
                break;
        }
    	}
}

var sourceArray = ['1080P','720P','360P'];
for(var i = 0;i<sourceArray.length;i++){
    result.push({
	       	title:sourceArray[i],
	       	col_type: 'text_1'
    });
    for(var j = 0; j<vDLArray[i].length; j++){
        if(vDLArray[i][j] != undefined){
            result.push({
                title: '第'+(j+1)+'集',
                url: vDLArray[i][j]+'#.mp4',
                col_type: 'text_3'
            });
        }
    }
}