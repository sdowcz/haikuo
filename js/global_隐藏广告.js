// ==UserScript==
// @name 江小白网页通用工具箱
// @description 脚本功能目前如下 ：01：全局删除网页 不必要多余的广告源码。(此脚本 电脑设备 也可以用)
// @author 江小白
// @match *://*/*
// @version 20200622
// ==/UserScript==

/* console\.log\("%c\[江小白 .+?\]\); */
(function(){if(!(location.href.match(/^https?:\/\/(?:[^\/]+?\.)?(?:huya|douyu|m1907|mail|zhihu|kafan|uujian|yujianweb|mixiaba|xbext|jd|taobao|youtube|gitee|greasyfork)\./i)||location.href.match(/^https?:\/\/(?:(?:regex\d+?|qqapp)\.|(?:www1?|m)\.baidu|(?:m\.)?tieba)/i)||location.href.match(/^https?:\/\/(?:\d{1,3}\.){3}/i)||location.href.match(/\/(?:master|play_detail)\//i))){
if(self!=top){}else{if(!(/(?:Android|Mobile\s*?Safari|iPhone|iPad|Symbian|Linux x86_64\s*?\))/i.test(navigator.userAgent))){
/* ------------------------------- */
if(!(location.href.match(/^https?:\/\/(?!m\.)(?:[^\/]+?\.)?(?:iqiyi|youku|v\.qq|mgtv|le|sohu|pptv|wasu|fun|tudou|bilibili|acfun)\./i))){if(document.getElementsByTagName.bind(document)("video")[0]||document.getElementsByTagName.bind(document)("object")[0]){Fn1();function Fn1(){shoujiwangyegongjuxiang();}Fn2();function Fn2(){return false;}}else{shoujiwangyegongjuxiang();}}}
else if(!(location.href.match(/^https?:\/\/m\.iqiyi\.com\/v_/i))){shoujiwangyegongjuxiang();}else{}
/* ------------------------------- */
function shoujiwangyegongjuxiang(){(function(){if(!document.querySelector("#stylus-wygjxjxbjc")){function wygjxjxbjc(){document.head.insertAdjacentHTML('beforeend','<style id="stylus-wygjxjxbjc" type="text/css" media="all" class="stylus">')};try{wygjxjxbjc()}catch(err){wygjxjxbjc()};function shoujiwangyegongjuxiangwangyetongyonggongjuxiang(){
/* ------单次点击------ */
const yd1=document.querySelectorAll('label,[class*="label"],[id*="label"]');
for(var yd1i=0;yd1i<yd1.length;yd1i++){
if(yd1[yd1i].innerText.match(/^\s*?(?:使?用)?豌豆荚/g)){yd1[yd1i].click();break;}
/****/
const yd1msa=yd1[yd1i].querySelectorAll('*');
for(let yd1ia=0;yd1ia<yd1msa.length;yd1ia++){
if(yd1msa[yd1ia].innerText.match(/^\s*?(?:使?用)?豌豆荚/g)){yd1[yd1ia].click();break;}
};
/****/
};
/* -------------------- */
const yd2=document.querySelectorAll('span');
for(var yd2i=0;yd2i<yd2.length;yd2i++){
if(yd2[yd2i].innerText.match(/^\s*?需?优先下载/g)){yd2[yd2i].click();break;}
/* */
if(yd2[yd2i].innerText.match(/收藏本网?站\s*?$/g)){yd2[yd2i].remove();break;}
};
/* -------------------- */
const yd3=document.querySelectorAll('div[class*="-"],div[id*="-"]');
for(let yd3i=0;yd3i<yd3.length;yd3i++){
const yd3msa=yd3[yd3i].querySelectorAll('span');
for(let yd3ia=0;yd3ia<yd3msa.length;yd3ia++){const yd3msaa=yd3[yd3i].querySelectorAll('img[onclick]');
if(yd3msaa&&yd3msa[yd3ia].innerText.match(/^\s*?关闭(?:\s*?广告)?(?:\s*?X)?\s*?$/ig)){yd3msa[yd3ia].click();}
/* */
};};
/* -------------------- */
};shoujiwangyegongjuxiangwangyetongyonggongjuxiang();const MO=MutationObserver||WebKitMutationObserver||MozMutationObserver;if(MO){let observer=new MO(function(records){records.map(function(record){if(record.addedNodes.length){[].forEach.call(record.addedNodes,function(addedNode){wangyetongyonggongjuxiang(addedNode);});};});});let option={'childList':true,'subtree':true};observer.observe(document,option);};function wangyetongyonggongjuxiang(ele){
/* -------------------- */
const cs1=document.querySelectorAll('[style]');
for(let cs1i=0;cs1i<cs1.length;cs1i++){let cs1a=cs1[cs1i];let scs1a=cs1a.getAttribute('style');
if(scs1a&&/background: ?#/ig.test(scs1a)){if(scs1a&&cs1[cs1i].innerText.indexOf('请尝试刷新')>-1){cs1[cs1i].remove();}};
/* */
if(scs1a&&/display: ?block/ig.test(scs1a)){let script=cs1a.querySelector("script");if(script&&script.innerText.match(/show_tptj\(/ig)){cs1[cs1i].remove();}};
/* */
if(scs1a&&/margin-top: ?(5|1[05])px[^<>]+?background-color: ?#/ig.test(scs1a)){let scripta=cs1a.querySelector("script");if(scripta){cs1[cs1i].remove();}};
/* */
if(scs1a&&/^\s*?display: ?block[^<>]+?top: ?0[^<>]+?bottom:/ig.test(scs1a)){let scriptb=cs1a.querySelector('[class*="download"],[id*="download"]');if(scriptb){cs1[cs1i].remove();}};
/* */
if(scs1a&&/height: ?(?:9|25|30)0px/ig.test(scs1a)){let scriptc=cs1a.querySelector('script[async]');if(scriptc){cs1[cs1i].remove();}};
/* */
if(scs1a&&/^\s*?padding-top: ?(5|1[05])px(?:;?$|; ?height:)/ig.test(scs1a)){let scriptd=cs1a.querySelector('iframe');if(scriptd){cs1[cs1i].remove();}};
/* */
if(scs1a&&/^\s*?display: ?block[^<>]+?(?:margin|padding): ?0[^<>]+?width: ?100%/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/fixed[^<>]+?(?:left|right): ?\d+?%[^<>]+?margin-(?:left|right):[^<>]+?background-color: ?#([a-z])\1{2,}/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/^\s*?padding-bottom: ?0[^<>]+?display: ?block/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/^\s*?margin-top: ?(5|1[05])px[^<>]+?padding-bottom: ?(5|1[05])px/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/^\s*?margin: ?(5|1[05])px (?:[1-9]|10)px[^<>]+?padding-bottom: ?(?:[1-9]|10)px/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/position:[^<>]+?width: ?100%[^<>]+?clear: ?both[^<>]+?z-index: ?21474836/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/position:[^<>]+?width: ?100%[^<>]+?background: ?#fff[^<>]+?overflow: ?hidden/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/^\s*?top:[^<>]+?(?:left|right): ?0[^<>]+?position: fixed;?\s*?$/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/^\s*?position: ?absolute; ?top: ?0[^<>]+?(?:left|right): ?0[^<>]+?margin: ?1[^<>]+?background: ?#(?:000|fff)/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/^\s*?display: ?block[^<>]+?fixed[^<>]+?opacity:[^<>]+?background[^<>]+?(?:left|right)/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/^\s*?(?:width: ?300px;[^<>]+?height: ?250px|height: ?250px[^<>]+?width: ?300px)[^<>]+?block/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/^\s*?position: ?fixed[^<>]+?(?:width: ?300px;[^<>]+?height: ?250px|height: ?250px[^<>]+?width: ?300px)/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/^\s*?(?:margin|padding): ?0[^<>]+?(?:width: ?300px;[^<>]+?height: ?250px|height: ?250px[^<>]+?width: ?300px)/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/position: ?fixed[^<>]+?(?:(?:top|bottom): ?0[^<>]+?(?:left|right)|(?:left|right): ?0[^<>]+?(?:top|bottom)): ?0/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/(?:margin-(?:left|right): ?0[^<>]+?margin-top|margin-top: ?0[^<>]+?margin-(?:left|right)): ?0/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/visibility:[^<>]+?bottom: ?0[^<>]+?(?:left|right): ?0/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/(?<!padding-)(?:left|right): ?0[^<>]+?(?<!-)(?:width|height): ?[01]px/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/^\s*?position: ?fixed;[^<>]+?z-index: ?21474836[^<>]+?left: ?0px/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/^\s*?visibility: ?hidden;[^<>]+?top: ?-[^<>]+?(?:height: ?[01]px; ?width|width: ?[01]px; ?height): ?[01]px/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/z-index: ?\d;[^<>]+?(?:left|right): ?(5|1[05])px/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/^\s*?display: ?block[^<>]+?margin: ?0[^<>]+?float: ?(?:left|right)/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/display: ?block[^<>]+?margin: ?0 0/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/background-color:\s*?#fff[^<>]+?padding-(?:left|right): ?0[^<>]+?display: ?block/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/^\s*?position: ?\w+?; ?width: ?100%; ?height: ?(?:2\d{2}|9\d{1})(?:\.\d+?)?px;?\s*?$/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/border: ?none[^<>]+?(?:left|right): ?0[^<>]+?(?:left|right): 0[^<>]+?(?:width: ?9[^<>]+?height: ?2|height: ?2[^<>]+?width: ?9)/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/position: ?fixed[^<>]+?(?:left|right): ?0[^<>]+?z-index: ?21474836/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/(?:width: ?300px; ?height: 250|height: 250px; ?width: ?300)px;?\s*?$/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
if(scs1a&&/^\s*?visibility: ?hidden;[^<>]+?(?:(?:height: ?[01]px; ?width|width: ?[01]px; ?height): ?[01]px;[^<>]+?top: ?-|top: ?-[^<>]+?(?:height: ?[01]px; ?width|width: ?[01]px; ?height): ?[01]px)/ig.test(scs1a)){cs1[cs1i].remove();}
/* */
/****/
if(scs1a&&/color: ?red/ig.test(scs1a)&&cs1[cs1i].innerText.match(/补充建议/g)){
cs1[cs1i].remove();break;}
/****/
if(scs1a&&/^\s*?color: ?#[^<>]+?margin-top: ?(5|1[05])px/ig.test(scs1a)&&cs1[cs1i].innerText.match(/牢记[^<>]*?备用地址[:：]/g)){
cs1[cs1i].remove();break;}
/****/
};
/* -------------------- */
const cs2=document.querySelectorAll('img[class*="_"][src*=".gif"],img[id*="_"][src*=".gif"]');
for(let cs2i=0;cs2i<cs2.length;cs2i++){let cs2a=cs2[cs2i];let scs2a=cs2a.getAttribute('style');
if(scs2a&&/display: ?block[^<>]+?width: ?100%/ig.test(scs2a)){cs2[cs2i].remove();}
};
/* -------------------- */
const cs3=document.querySelectorAll('[class*=" bg-"],[id*=" bg-"]');
for(let cs3i=0;cs3i<cs3.length;cs3i++){
const cs3aa=cs3[cs3i].querySelectorAll('[style^="width:"]');
for(let cs3ia=0;cs3ia<cs3aa.length;cs3ia++){let cs3a=cs3aa[cs3ia];
let scs3a=cs3a.getAttribute('class');
if(scs3a&&/\d+?ad[svx]?$/ig.test(scs3a)){cs3[cs3i].remove();}
/****/
let scs3b=cs3a.getAttribute('id');
if(scs3b&&/\d+?ad[svx]?$/ig.test(scs3b)){cs3[cs3i].remove();}
};};
/* -------------------- */
const cs4=document.querySelectorAll('[class*="row"][class*="banner"],[id*="row"][id*="banner"]');
for(let cs4i=0;cs4i<cs4.length;cs4i++){
const cs4aa=cs4[cs4i].querySelectorAll('[class*="flickity"]');
for(let cs4ia=0;cs4ia<cs4aa.length;cs4ia++){let cs4a=cs4aa[cs4ia];let scs4a=cs4a.getAttribute('style');
if(scs4a&&/touch-action: ?pan-y;?\s*?$/ig.test(scs4a)){cs4[cs4i].remove();break;}
};};
/* -------------------- */
const cs5=document.querySelectorAll('[class*="left"],[id*="left"],[class*="right"],[id*="right"]');
for(let cs5i=0;cs5i<cs5.length;cs5i++){let cs5a=cs5[cs5i];let scs5a=cs5a.getAttribute('style');
if(scs5a&&/fixed;[^<>]+?(?:left|right): ?0/ig.test(scs5a)){cs5[cs5i].remove();}
};
/* -------------------- */
const cs6=document.querySelectorAll('iframe[src]');
for(let cs6i=0;cs6i<cs6.length;cs6i++){let cs6a=cs6[cs6i];let scs6a=cs6a.getAttribute('src');
if(scs6a&&/&swt=1\s*?$/ig.test(scs6a)){cs6[cs6i].remove();}
};
/* -------------------- */
const cs7=document.querySelectorAll('script~div[class],script~div[id]');
for(let cs7i=0;cs7i<cs7.length;cs7i++){
const cs7msa=cs7[cs7i].querySelectorAll('img');
for(let cs7ia=0;cs7ia<cs7msa.length;cs7ia++){
let cs7a=cs7[cs7i];
let scs7a=cs7a.getAttribute('class');
if(scs7a&&/^\s*?[a-z]?\d+\s*?$/ig.test(scs7a)){
const cs7msb=cs7[cs7i].querySelectorAll('[onclick],span,em,i,b');
for(let cs7ib=0;cs7ib<cs7msb.length;cs7ib++){
if(cs7msb[cs7ib].innerText.match(/^\s*?(?:推广|关闭|广告|APP|AD|(?:关闭 ?)?X)\s*?$/ig)){cs7[cs7i].remove();break;}
};}
/****/
let scs7b=cs7a.getAttribute('id');
if(scs7b&&/^\s*?[a-z]?\d+\s*?$/ig.test(scs7b)){
const cs7msb=cs7[cs7i].querySelectorAll('[onclick],span,em,i,b');
for(let cs7ib=0;cs7ib<cs7msb.length;cs7ib++){
if(cs7msb[cs7ib].innerText.match(/^\s*?(?:推广|关闭|广告|APP|AD|(?:关闭 ?)?X)\s*?$/ig)){cs7[cs7i].remove();break;}
};}
};};
/* -------------------- */
const cs8=document.querySelectorAll('body>a,div[class*="-"][class*=" "],div[id*="-"][id*=" "]');
for(let cs8i=0;cs8i<cs8.length;cs8i++){
const cs8aa=cs8[cs8i].querySelectorAll('a[href]:not([href^="/"]):not([class^="nav-link"]):not([id^="nav-link"])[target*="_blank"][rel="nofollow"]');
for(let cs8ia=0;cs8ia<cs8aa.length;cs8ia++){let cs8a=cs8aa[cs8ia];let scs8a=cs8a.getAttribute('href');const cs8ab=cs8aa[cs8ia].querySelectorAll('img');
if(scs8a&&cs8ab&&/&uin=\d+?&[^<>]+?=yes$/ig.test(scs8a)){cs8aa[cs8ia].remove();}
/* */
if(scs8a&&cs8ab&&/^\s*?https?:\/\/(?:[^\/]+?\/){1,2}$/ig.test(scs8a)){cs8aa[cs8ia].remove();}
/* */
if(scs8a&&cs8ab&&/^\s*?https?:\/\/[^\/]+?\/(?:\?=(?:\w+?#)?|#)[a-z]+?(?:\d+?)?$/ig.test(scs8a)){cs8aa[cs8ia].remove();}
/* */
};};
/* -------------------- */
const cs9=document.querySelectorAll('[class=""],[id=""]');
for(let cs9i=0;cs9i<cs9.length;cs9i++){let cs9a=cs9[cs9i];let scs9a=cs9a.getAttribute('style');
if(scs9a&&/^\s*?width:\s*?100%/ig.test(scs9a)){
const cs9bb=cs9[cs9i].querySelectorAll('a[target*="_blank"]');
for(let cs9ia=0;cs9ia<cs9bb.length;cs9ia++){let cs9b=cs9bb[cs9ia];let scs9b=cs9b.getAttribute('style');
if(scs9b&&/width:\s*?100%/ig.test(scs9b)){
const cs9cc=cs9[cs9i].querySelectorAll('img');
for(let cs9ib=0;cs9ib<cs9cc.length;cs9ib++){let cs9c=cs9cc[cs9ib];let scs9c=cs9c.getAttribute('style');
if(scs9a&&/width:\s*?100%/ig.test(scs9c)){cs9[cs9i].remove();}
};}};}};
/* -------------------- */
const cs10=document.querySelectorAll('[class*="left"],[id*="left"],[class*="right"],[id*="right"]');
for(let cs10i=0;cs10i<cs10.length;cs10i++){let cs10a=cs10[cs10i];let scs10a=cs10a.getAttribute('style');
if(scs10a&&/margin-top: ?0px;?\s*?$/ig.test(scs10a)){cs10[cs10i].remove();}
};
/* -------------------- */
const cs11=document.querySelectorAll('[data-name*="ad"][data-name*="_"],[data-name*="ad"][data-name*="-"]');
for(let cs11i=0;cs11i<cs11.length;cs11i++){let cs11a=cs11[cs11i];let scs11a=cs11a.getAttribute('data-name');
if(scs11a&&/ad[^<>]*?[_\-]\d+?\s*?$/ig.test(scs11a)){cs11[cs11i].remove();}
};
/* -------------------- */
const cs12=document.querySelectorAll('ul li [class^="_"],ul li [id^="_"]');
for(let cs12i=0;cs12i<cs12.length;cs12i++){let cs12a=cs12[cs12i];let scs12a=cs12a.getAttribute('style');
if(scs12a&&/^width: ?100%;?\s*?$/ig.test(scs12a)){cs12[cs12i].remove();}
};
/* -------------------- */
const cs13=document.querySelectorAll('a[title][rel*="nofollow"][target*="_blank"]:not([href^="/"])');
for(let cs13i=0;cs13i<cs13.length;cs13i++){
const cs13msa=cs13[cs13i].querySelectorAll('img[class*="toppic"],img[id*="toppic"]');
for(let cs13ia=0;cs13ia<cs13msa.length;cs13ia++){let cs13a=cs13[cs13i];let scs13a=cs13a.getAttribute('href');
if(scs13a&&/^\s*?https?:\/\/[^\/]+?\/$/ig.test(scs13a)){cs13[cs13i].remove();}
/* */
if(scs13a&&/^\s*?https?:\/\/[^\/]+?(?!\/)$/ig.test(scs13a)){cs13[cs13i].remove();}
/* */
if(scs13a&&/^\s*?https?:\/\/[^\/]+?\/\?[a-z0-9]+\s*?$/ig.test(scs13a)){cs13[cs13i].remove();}
};};
/* -------------------- */
const cs14=document.querySelectorAll('a[target*="_blank"]:not([href^="/"])');
for(let cs14i=0;cs14i<cs14.length;cs14i++){
const cs14msa=cs14[cs14i].querySelectorAll('img');
for(let cs14ia=0;cs14ia<cs14msa.length;cs14ia++){let cs14a=cs14[cs14i];let scs14a=cs14a.getAttribute('href');
if(scs14a&&/^\s*?https?:\/\/[^\/]+?:\d{2,5}\//ig.test(scs14a)){cs14[cs14i].remove();}
/* */
if(scs14a&&/\/\?=[a-z]{2,5}$/ig.test(scs14a)){cs14[cs14i].remove();}
/* */
if(scs14a&&/\.php\?[a-z]=\w+\s*?$/ig.test(scs14a)){cs14[cs14i].remove();}
/* */
if(scs14a&&/\/[a-z]{1,2}\.php\?id=\d+\s*?$/ig.test(scs14a)){cs14[cs14i].remove();}
/* */
if(scs14a&&/\/\?(?:post=\d+?|[a-z]=[a-z0-9]+?)$/ig.test(scs14a)){cs14[cs14i].remove();}
};
/****/
const cs14msb=cs14[cs14i].querySelectorAll('[onclick],span,em,i,b');
for(let cs14ib=0;cs14ib<cs14msb.length;cs14ib++){
/* */
if(cs14msb[cs14ib].innerText.match(/^\s*?(?:推广|关闭|广告|APP|AD|(?:关闭 ?)?X)\s*?$/ig)){cs14[cs14i].remove();}
/* */
};
/****/
};
/* -------------------- */
const cs15=document.querySelectorAll('script~div[class][id]');
for(let cs15i=0;cs15i<cs15.length;cs15i++){let cs15a=cs15[cs15i];let scs15a=cs15a.getAttribute('class');let scs15b=cs15a.getAttribute('id');
if(scs15a&&/^\s*?[a-z]?\d+\s*?$/ig.test(scs15a)&&scs15b&&/^\s*?[a-z]?\d+\s*?$/ig.test(scs15b)&&cs15[cs15i].innerText.match(/^\s*?(?:推广|广告|关闭?(?:广告)?|AD|X)\s*?$/ig)){
cs15[cs15i].remove();break;}
};
/* -------------------- */
const cs16=document.querySelectorAll('div[class*="_banner"],div[id*="_banner"],div[class^="union-"],div[id^="union-"],div[class^="news-item"],div[id^="news-item"]');
for(let cs16i=0;cs16i<cs16.length;cs16i++){
const cs16aa=cs16[cs16i].querySelectorAll('[class^="_"]');
for(let cs16ia=0;cs16ia<cs16aa.length;cs16ia++){let cs16a=cs16aa[cs16ia];let scs16a=cs16a.getAttribute('class');
if(scs16a&&/^\s*?_[a-z0-9]+\s*?$/ig.test(scs16a)){
const cs16aaa=cs16[cs16i].querySelectorAll('[class^="_"]+script');
for(let cs16iaa=0;cs16ia<cs16aaa.length;cs16iaa++){
cs16[cs16i].remove();break;
};}};
/****/
const cs16bb=cs16[cs16i].querySelectorAll('[id^="_"]');
for(let cs16ia=0;cs16ia<cs16bb.length;cs16ia++){let cs16a=cs16bb[cs16ia];let scs16a=cs16a.getAttribute('id');
if(scs16a&&/^\s*?_[a-z0-9]+\s*?$/ig.test(scs16a)){
const cs16bbb=cs16[cs16i].querySelectorAll('[id^="_"]+script');
for(let cs16ibb=0;cs16ia<cs16bbb.length;cs16ibb++){
cs16[cs16i].remove();break;
};}};
/****/
};
/* -------------------- */
const cs17=document.querySelectorAll('[class^="_"]');
for(let cs17i=0;cs17i<cs17.length;cs17i++){let cs17a=cs17[cs17i];let scs17a=cs17a.getAttribute('class');
if(scs17a&&/^\s*?_[a-z0-9]+\s*?$/ig.test(scs17a)){
const cs17bb=cs17[cs17i].querySelectorAll('[class^="_"]');
for(let cs17ia=0;cs17ia<cs17bb.length;cs17ia++){let cs17b=cs17bb[cs17ia];let scs17b=cs17b.getAttribute('class');
if(scs17b&&/^\s*?_[a-z0-9]+\s*?$/ig.test(scs17b)){
const cs17cc=cs17[cs17i].querySelectorAll('[class^="_"]+script');
for(let cs17ib=0;cs17ib<cs17cc.length;cs17ib++){
cs17[cs17i].remove();
};}};}};
/* -------------------- */
const cs18=document.querySelectorAll('[id^="_"]');
for(let cs18i=0;cs18i<cs18.length;cs18i++){let cs18a=cs18[cs18i];let scs18a=cs18a.getAttribute('id');
if(scs18a&&/^\s*?_[a-z0-9]+\s*?$/ig.test(scs18a)){
const cs18bb=cs18[cs18i].querySelectorAll('[id^="_"]');
for(let cs18ia=0;cs18ia<cs18bb.length;cs18ia++){let cs18b=cs18bb[cs18ia];let scs18b=cs18b.getAttribute('id');
if(scs18b&&/^\s*?_[a-z0-9]+\s*?$/ig.test(scs18b)){
const cs18cc=cs18[cs18i].querySelectorAll('[id^="_"]+script');
for(let cs18ib=0;cs18ib<cs18cc.length;cs18ib++){
cs18[cs18i].remove();
};}};}};
/* -------------------- */
const sc0=document.querySelectorAll('table');
for(let sc0i=0;sc0i<sc0.length;sc0i++){
const sc0msa=sc0[sc0i].querySelectorAll('tr td a');
for(let sc0ia=0;sc0ia<sc0msa.length;sc0ia++){
if(sc0msa[sc0ia].innerText.match(/(?:稳定项目日赚|广告位招租)/g)){sc0[sc0i].remove();break;}
}};
/* -------------------- */
const sc1=document.querySelectorAll('li');
for(let sc1i=0;sc1i<sc1.length;sc1i++){
if(sc1[sc1i].innerText.match(/^\s*?© ?20/ig)){sc1[sc1i].remove();break;}
/* */
if(sc1[sc1i].innerText.match(/^\s*?(?:[^\\u4e00-\\u9fa5]+?)?声明\s*?$/g)){sc1[sc1i].remove();break;}
/****/
const sc1msa=sc1[sc1i].querySelectorAll('a[class*="open"][class*="app"][class*="Btn"],a[id*="open"][id*="app"][id*="Btn"]');
for(let sc1ia=0;sc1ia<sc1msa.length;sc1ia++){
if(sc1msa[sc1ia]){sc1[sc1i].remove();}
};
/****/
const sc1msb=sc1[sc1i].querySelectorAll('mip-ad,mip-ads');
for(let sc1ib=0;sc1ib<sc1msb.length;sc1ib++){
if(sc1msb[sc1ib]){sc1[sc1i].remove();}
};
/****/
const sc1msc=sc1[sc1i].querySelectorAll('span');
for(let sc1ic=0;sc1ic<sc1msc.length;sc1ic++){
if(sc1msc[sc1ic].innerText.match(/^\s*?领/)){sc1[sc1i].remove();break;}
/* */
if(sc1msc[sc1ic].innerText.match(/(?:打开|下载|查看)[^<>]*?APP/ig)){sc1[sc1i].remove();}
/* */
if(sc1msc[sc1ic].innerText.match(/^\s*?(?:推广|关闭|广告|APP|AD|(?:关闭 ?)?X)\s*?$/ig)){sc1[sc1i].remove();}
/* */
};
/****/
const sc1msd=sc1[sc1i].querySelectorAll('a:not([href^="/vod-list-id-"])');
for(let sc1id=0;sc1id<sc1msd.length;sc1id++){
if(sc1msd[sc1id].innerText.match(/App查看/ig)){sc1[sc1i].remove();}
/* */
if(sc1msd[sc1id].innerText.match(/(?:银河赌场|皇冠体育|久久棋牌|菠菜专区|新葡京娱乐|澳门银河|太阳城集团|斗地主|百人牛牛|炸金花|欢乐麻将|游戏中心|捕鱼达人)/g)){sc1[sc1i].remove();}
/* */
if(sc1msd[sc1id].innerText.match(/^\s*?(?:资讯|书签|纪录片|亲子|汽车|旅游|体育|财经|纪实|收藏|分享|直播|娱乐|少儿|新闻|生活|游戏|教育|时尚|公司(?:介绍|动态)|关于我们|招聘信息|法律声明|业务构成|隐私政策)\s*?$/g)){sc1[sc1i].remove();break;}
/* */
if(sc1msd[sc1id].innerText.match(/^\s*?(?:刷新|报错|收藏|桌面|法律|隐私|反馈|京[^<>]+?号|广告|潮音|有料|\W+?(?:(?<!(?:电[影视])|游戏|电竞|乱伦)直播|证照|统计|赌场|发牌)|自媒体|风云榜|原创|公益|知识|片花|军事|健康|母婴|儿童|热点|宠物|风尚|美食|家居|美女)\s*?$/g)){sc1[sc1i].remove();break;}
/* */
if(sc1msd[sc1id].innerText.match(/^\s*?(?:百态|房产|文化|星座|育儿|历史|政务|证券|政法[^\\u4e00-\\u9fa5]{2}|理财|情感|养生|文化|社会|三农|采购)\s*?$/g)){sc1[sc1i].remove();break;}
/* */
if(sc1msd[sc1id].innerText.match(/^\s*?(?:访谈|曲艺|舞蹈|益智|盛会|歌舞)\s*?$/g)){sc1[sc1i].remove();break;}
/* */
if(sc1msd[sc1id].innerText.match(/(?:送[^<>]+?元|\W*?(?:约炮|棋牌|百家乐)|^\s*?1[57]岁少女被.个)/g)){sc1[sc1i].remove();break;}
/* */
};
/****/

/* -------------------- */
const sc1mse=sc1[sc1i].querySelectorAll('script[type*="text/javascript"]+[style=""][class^="_"],script[type*="text/javascript"]+[style=""][id^="_"],script[type][src]:not([src^="/"])');
for(let sc1ie=0;sc1ie<sc1mse.length;sc1ie++){
if(sc1mse[sc1ie]){sc1[sc1i].remove();}
};
/****/
const sc1msf=sc1[sc1i].querySelectorAll('a[href*="&union_"][onclick]');
for(let sc1if=0;sc1if<sc1msf.length;sc1if++){
if(sc1msf[sc1if]){sc1[sc1i].remove();}
};
/****/
const sc1msg=sc1[sc1i].querySelectorAll('em,i');
for(let sc1ig=0;sc1ig<sc1msg.length;sc1ig++){
if(sc1msg[sc1ig].innerText.match(/^\s*?(?:推广|关闭|广告|APP|AD|(?:关闭 ?)?X)\s*?$/ig)){sc1[sc1i].remove();}
};
/****/
const sc1msh=sc1[sc1i].querySelectorAll('script');
for(let sc1ih=0;sc1ih<sc1msh.length;sc1ih++){
if(sc1msh[sc1ih]){
/* */
const sc1mshb=sc1[sc1i].querySelectorAll('div[class^="_"],div[id^="_"]');
for(let sc1ihb=0;sc1ihb<sc1mshb.length;sc1ihb++){
/* */
if(sc1mshb[sc1ihb]){sc1[sc1i].remove();}
/* */
};};
/* */
};
/****/
};
/* -------------------- */
const sc2=document.querySelectorAll('[class*="-btn"],[id*="-btn"],a,div[sid],div[tplid],div[data-id],div[sourceid],div[cmatchid],div[templateid],div[data-pos],div[data-time],[style*="display:"][style*="block"],[style*="visibility:"][style*="visible"]');
for(let sc2i=0;sc2i<sc2.length;sc2i++){
const sc2msa=sc2[sc2i].querySelectorAll('mark');
for(let sc2ia=0;sc2ia<sc2msa.length;sc2ia++){
/* */
if(sc2msa[sc2ia].innerText.match(/(?:打开|下载|查看)[^<>]*?APP/ig)){sc2[sc2i].remove();}
/* */
if(sc2msa[sc2ia].innerText.match(/App[^<>]*?(?:专享|阅读|观看|查看|打开)/ig)){sc2[sc2i].remove();}
/* */
if(sc2msa[sc2ia].innerText.match(/^\s*?(?:推广|关闭|广告|APP|AD|(?:关闭 ?)?X)\s*?$/ig)){sc2[sc2i].remove();}
/* */
};
/****/
const sc2msb=sc2[sc2i].querySelectorAll('span');
for(let sc2ib=0;sc2ib<sc2msb.length;sc2ib++){
/* */
if(sc2msb[sc2ib].innerText.match(/特惠[^<>]*?新用户首月[^<>]*?元/g)){sc2[sc2i].remove();break;}
/* */
};
/****/
};
/* -------------------- */
const sc3=document.querySelectorAll('[class^="area sc-"],[id^="area sc-"]');
for(let sc3i=0;sc3i<sc3.length;sc3i++){
const sc3msa=sc3[sc3i].querySelectorAll('[class*="mark"],[id*="mark"]');
for(let sc3ia=0;sc3ia<sc3msa.length;sc3ia++){
if(sc3msa[sc3ia].innerText.match(/^\s*?(?:推广|关闭|广告|APP|AD|(?:关闭 ?)?X)\s*?$/ig)){sc3[sc3i].remove();}
};};
/* -------------------- */
const sc4=document.querySelectorAll('a[data-ad-stat],[class*="divers"][class*="Banner"],[id*="divers"][id*="Banner"]');
for(let sc4i=0;sc4i<sc4.length;sc4i++){
/* */
if(sc4[sc4i].innerText.match(/(?:打开|下载|查看)[^<>]*?APP/ig)){sc4[sc4i].remove();}
/* */
if(sc4[sc4i].innerText.match(/App[^<>]*?(?:专享|阅读|观看|查看|打开)/ig)){sc4[sc4i].remove();}
/* */
if(sc4[sc4i].innerText.match(/(?:书签|收藏|帮助|广告|优惠券|赞|赏)/g)){sc4[sc4i].remove();}
/* */
if(sc4[sc4i].innerText==='喜欢'||sc4[sc4i].innerText==='分享'){sc4[sc4i].remove();}
/* */
};
/* -------------------- */
const sc5=document.querySelectorAll('span[style*="#"],a');
for(let sc5i=0;sc5i<sc5.length;sc5i++){
const sc5msa=sc5[sc5i].querySelectorAll('font');
/* */
for(let sc5ia=0;sc5ia<sc5msa.length;sc5ia++){
/* */
if(sc5msa[sc5ia].innerText.match(/下载APP[^<>]*?(?:查看|资料|致富)/ig)){sc5[sc5i].remove();}
/* */
if(sc5msa[sc5ia].innerText.match(/特碼\d+?倍/g)){sc5[sc5i].remove();}
/* */
if(sc5msa[sc5ia].innerText.match(/提款[^<>]*?火速到账/g)){sc5[sc5i].remove();}
/* */
if(sc5msa[sc5ia].innerText.match(/(?:同城|小姐|上门)[^<>]*?約炮/g)){sc5[sc5i].remove();}
/* */
if(sc5msa[sc5ia].innerText.match(/(?:时时彩|炸金花|美女发牌|澳门皇冠|美女上门服务)/g)){sc5[sc5i].remove();}
/* */
};};
/* -------------------- */
const sc6=document.querySelectorAll('[class*="new-"]:not([class*="header"]):not([class*="page"]),[id*="new-"]:not([id*="header"]):not([id*="page"]),[class*="news-"]:not([class*="header"]):not([class*="page"]),[id*="news-"]:not([id*="header"]):not([id*="page"]),[class*="-card"],[id*="-card"],[class*="-"][class*="_"]:not([class*="header"]):not([class*="page"]),[id*="-"][id*="_"]:not([id*="header"]):not([id*="page"]),[rl-link-data-xcx],[rl-link-data-ivk],[rl-link-data-light]');
for(let sc6i=0;sc6i<sc6.length;sc6i++){
const sc6msa=sc6[sc6i].querySelectorAll('span:not([c-bind*="text"]):not([class*="text"]):not([id*="text"])');
for(let sc6ia=0;sc6ia<sc6msa.length;sc6ia++){
if(sc6msa[sc6ia].innerText.match(/^\s*?(?:推广|关闭|广告|APP|AD|(?:关闭 ?)?X)\s*?$/ig)){sc6[sc6i].remove();}}
/****/
const sc6msb=sc6[sc6i].querySelectorAll('[class*="app"],[id*="app"]');
for(let sc6ib=0;sc6ib<sc6msb.length;sc6ib++){
/* */
if(sc6msb[sc6ib].innerText.match(/^\s*?(?:打开|下载|查看)[^<>]*?APP/ig)){sc6[sc6i].remove();}
/* */
if(sc6msb[sc6ib].innerText.match(/^\s*?App[^<>]*?(?:专享|阅读|观看|查看|打开)/ig)){sc6[sc6i].remove();}
/* */
};
/****/
const sc6msc=sc6[sc6i].querySelectorAll('[class*="text"],[id*="text"]');
for(let sc6ic=0;sc6ic<sc6msc.length;sc6ic++){
if(sc6msc[sc6ic].innerText.indexOf('打赏')>-1){sc6[sc6i].remove();break;}
}
/****/
};
/* -------------------- */
const sc7=document.querySelectorAll('[class*="-item-"][class$="-box"],[id*="-item-"][id$="-box"]');
for(let sc7i=0;sc7i<sc7.length;sc7i++){
/****/
const sc7msa=sc7[sc7i].querySelectorAll('script');
for(let sc7ia=0;sc7ia<sc7msa.length;sc7ia++){
if(sc7msa[sc7ia]){sc7[sc7i].remove();}
}
/****/
const sc7msb=sc7[sc7i].querySelectorAll('[class^="kp_box_"],[id^="kp_box_"]');
for(let sc7ib=0;sc7ib<sc7msb.length;sc7ib++){
if(sc7msb[sc7ib].innerHTML.match(/<(?:iframe|script)/ig)){sc7[sc7i].remove();}
}
/****/
};
/* -------------------- */
const sc8=document.querySelectorAll('div[class*="txtlink"],div[id*="txtlink"]');
for(let sc8i=0;sc8i<sc8.length;sc8i++){
const sc8msa=sc8[sc8i].querySelectorAll('ul li a[target*="_blank"]');
for(let sc8ia=0;sc8ia<sc8msa.length;sc8ia++){
if(sc8msa[sc8ia].innerText.indexOf('领取')>-1){sc8[sc8i].remove();break;}
}};
/* -------------------- */
const sc9=document.querySelectorAll('iframe[frameborder="0"][scrolling="no"][height="90"]');
for(let sc9i=0;sc9i<sc9.length;sc9i++){
if(sc9[sc9i].innerHTML.match(/width ?= ?["'](?:7|9)\d+?["']/ig)){sc9[sc9i].remove();}
};
/* -------------------- */
const sc10=document.querySelectorAll('button,[class*="openapp"],[id*="openapp"]');
for(let sc10i=0;sc10i<sc10.length;sc10i++){
/* */
if(sc10[sc10i].innerText.match(/(?:打开|下载|查看)[^<>]*?APP/ig)){sc10[sc10i].remove();}
/* */
if(sc10[sc10i].innerText.match(/App[^<>]*?(?:专享|阅读|观看|查看|打开)/ig)){sc10[sc10i].remove();}
/* */
if(sc10[sc10i].innerText.match(/领[^<>]*?红包/g)){sc10[sc10i].remove();break;}
/* */
if(sc10[sc10i].innerText.match(/(?:站长采集|优惠卷|百家乐|购物更便宜)/g)){sc10[sc10i].remove();}
/* */
if(sc10[sc10i].innerText==='喜欢'){sc10[sc10i].remove();}
/* */
};
/* -------------------- */
const sc11=document.querySelectorAll('[ad-dom-img],button[type],[click_area],[class*="_like"],[id*="_like"]');
for(let sc11i=0;sc11i<sc11.length;sc11i++){
const sc11msa=sc11[sc11i].querySelectorAll('span');
for(let sc11ia=0;sc11ia<sc11msa.length;sc11ia++){
if(sc11msa[sc11ia].innerText.match(/(?:赏|赞|广告)/g)){sc11[sc11i].remove();}
}};
/* -------------------- */
const sc12=document.querySelectorAll('[class*="button"]');
for(let sc12i=0;sc12i<sc12.length;sc12i++){
const sc12msa=sc12[sc12i].querySelectorAll('[class*="like"]');
for(let sc12ia=0;sc12ia<sc12msa.length;sc12ia++){
if(sc12msa[sc12ia]){sc12[sc12i].remove();}
}};
/* -------------------- */
const sc13=document.querySelectorAll('[class="recommend-wrap"]');
for(let sc13i=0;sc13i<sc13.length;sc13i++){
const sc13msa=sc13[sc13i].querySelectorAll('[class="meta"]');
for(let sc13ia=0;sc13ia<sc13msa.length;sc13ia++){
/* */
if(sc13msa[sc13ia].innerText.match(/(?:打开|下载|查看)[^<>]*?APP/ig)){sc13[sc13i].remove();}
/* */
if(sc13msa[sc13ia].innerText.match(/App[^<>]*?(?:专享|阅读|观看|查看|打开)/ig)){sc13[sc13i].remove();}
/* */
};};
/* -------------------- */
const sc14=document.querySelectorAll('[class^="sc-"],[id^="sc-"]');
for(let sc14i=0;sc14i<sc14.length;sc14i++){
const sc14msa=sc14[sc14i].querySelectorAll('[class*="invok"],[id*="invok"]');
for(let sc14ia=0;sc14ia<sc14msa.length;sc14ia++){
/* */
if(sc14msa[sc14ia].innerText.match(/(?:打开|下载|查看)[^<>]*?APP/ig)){sc14[sc14i].remove();}
/* */
if(sc14msa[sc14ia].innerText.match(/App[^<>]*?(?:专享|阅读|观看|查看|打开)/ig)){sc14[sc14i].remove();}
/* */
};};
/* -------------------- */
const sc15=document.querySelectorAll('section');
for(let sc15i=0;sc15i<sc15.length;sc15i++){
const sc15msa=sc15[sc15i].querySelectorAll('span');
for(let sc15ia=0;sc15ia<sc15msa.length;sc15ia++){
if(sc15msa[sc15ia].innerText.match(/支付宝[^<>]*?搜[^<>]+?领取[^<>]*?红包/g)){sc15[sc15i].remove();break;}
}};
/* -------------------- */
const sc16=document.querySelectorAll('div[data-list-id],a[data-click-stat],[class*="-item"],[id*="-item"]');
for(let sc16i=0;sc16i<sc16.length;sc16i++){
const sc16msa=sc16[sc16i].querySelectorAll('span');
for(let sc16ia=0;sc16ia<sc16msa.length;sc16ia++){
/* */
if(sc16msa[sc16ia].innerText.match(/(?:打开|下载|查看)[^<>]*?APP/ig)){sc16[sc16i].remove();}
/* */
if(sc16msa[sc16ia].innerText.match(/App[^<>]*?(?:专享|阅读|观看|查看|打开)/ig)){sc16[sc16i].remove();}
/* */
};};
/* -------------------- */
const sc17=document.querySelectorAll('p');
for(let sc17i=0;sc17i<sc17.length;sc17i++){
/* */
if(sc17[sc17i].innerHTML.match(/_blank[^<>]+?>[^<>]*?领取[^<>]*?<\//ig)){sc17[sc17i].remove();break;}
/* */
if(sc17[sc17i].innerText.match(/^\s*?广告\s*?[:：]/g)){sc17[sc17i].remove();break;}
/* */
if(sc17[sc17i].innerText.match(/^\s*?[^\\u4e00-\\u9fa5]*?声明\s*?[:：]/g)){sc17[sc17i].remove();break;}
/* */
/****/
const sc17msa=sc17[sc17i].querySelectorAll('a');
for(let sc17ia=0;sc17ia<sc17msa.length;sc17ia++){
if(sc17msa[sc17ia].innerHTML.match(/\>\s*?本?网?站(?:为非赢利|所有(?:内容|视频))/g)){sc17msa[sc17ia].remove();break;}
};
/****/
const sc17msb=sc17[sc17i].querySelectorAll('span');
for(let sc17ib=0;sc17ib<sc17msb.length;sc17ib++){
if(sc17msb[sc17ib].innerText.match(/^\s*?(?:小|本?网?站)?(?:(?:贴示|提示)|公告)\s*?[:：]/g)){sc17[sc17i].remove();break;}
};
/****/
};
/* -------------------- */
const sc18=document.querySelectorAll('[class*="Button"],[id*="Button"],[class*="App"],[id*="App"]');
for(let sc18i=0;sc18i<sc18.length;sc18i++){
const sc18msa=sc18[sc18i].querySelectorAll('em,span');
for(let sc18ia=0;sc18ia<sc18msa.length;sc18ia++){
/* */
if(sc18msa[sc18ia].innerText.match(/(?:打开|下载|查看)[^<>]*?APP/ig)){sc18[sc18i].remove();}
/* */
if(sc18msa[sc18ia].innerText.match(/App[^<>]*?(?:专享|阅读|观看|查看|打开)/ig)){sc18[sc18i].remove();}
/* */
if(sc18msa[sc18ia].innerText.indexOf('广告')>-1){sc18[sc18i].remove();}
/* */
};};
/* -------------------- */
const sc19=document.querySelectorAll('[class*="box-row"],[id*="box-row"]');
for(let sc19i=0;sc19i<sc19.length;sc19i++){
const sc19msa=sc19[sc19i].querySelectorAll('p');
for(let sc19ia=0;sc19ia<sc19msa.length;sc19ia++){
if(sc19msa[sc19ia].innerText.match(/(?:先行赔付|世界杯直播|免费领现金|担保[^<>]*?黑庄)/g)){sc19[sc19i].remove();}
};};
/* -------------------- */
const sc20=document.querySelectorAll('[class^="_"],[id^="_"]');
for(let sc20i=0;sc20i<sc20.length;sc20i++){
const sc20msa=sc20[sc20i].querySelectorAll('[style*="background:#fff"][style*="color:#000"],[style*="background: #fff"][style*="color: #000"]');
for(let sc20ia=0;sc20ia<sc20msa.length;sc20ia++){
if(sc20msa[sc20ia].innerHTML.match(/onclick[^<>]+?Click/ig)){sc20[sc20i].remove();}
};};
/* -------------------- */
const sc21=document.querySelectorAll('[class*="-guide"]:not(html):not(body),[id*="-guide"]:not(html):not(body),[class*="-btn"],[id*="-btn"],[class*="down"][class*="btn"],[id*="down"][id*="btn"]');
for(let sc21i=0;sc21i<sc21.length;sc21i++){
const sc21msa=sc21[sc21i].querySelectorAll('a');
for(let sc21ia=0;sc21ia<sc21msa.length;sc21ia++){
/* */
if(sc21msa[sc21ia].innerText.match(/(?:打开|下载|查看)[^<>]*?APP/ig)){sc21[sc21i].remove();}
/* */
if(sc21msa[sc21ia].innerText.match(/App[^<>]*?(?:专享|阅读|观看|查看|打开)/ig)){sc21[sc21i].remove();}
/* */
if(sc21msa[sc21ia].innerText.match(/立即开通[^<>]*?特权/g)){sc21[sc21i].remove();break;}
/* */
if(sc21msa[sc21ia].innerText.match(/^\s*?(?:推广|关闭|广告|APP|AD|(?:关闭 ?)?X)\s*?$/ig)){sc21[sc21i].remove();}
/* */
};};
/* -------------------- */
const sc22=document.querySelectorAll('[ga_category*="|"],[ga_event*="click"]');
for(let sc22i=0;sc22i<sc22.length;sc22i++){
if(sc22[sc22i].innerText.match(/^\s*?(?:打开|用)App/ig)){sc22[sc22i].remove();}
};
/* -------------------- */
const sc23=document.querySelectorAll('a:not([data-tid]):not([tid]):not([tasktype]):not([data-thread-type])');
for(let sc23i=0;sc23i<sc23.length;sc23i++){
/* */
if(sc23[sc23i].innerText.match(/^\s*?(?:客户端|关于本站|(?:免责)?声明|(?:意见)?反馈|联系我们|充值|推广(?:内容)?|饭团|指南|点赞|建议[^<>]+?若无法|投[^<>]*?票|开通[^<>]*?会员|[^\\u4e00-\\u9fa5]*?声明)\s*?$/g)){sc23[sc23i].remove();break;}
/* */
if(sc23[sc23i].innerText.match(/^\s*?(?:手机(?:App|看)|打开App|用App看)/ig)){sc23[sc23i].remove();}
/* */
if(sc23[sc23i].innerText.match(/点这里(?:提交|收录)/g)){sc23[sc23i].remove();break;}
/* */
if(sc23[sc23i].innerText.match(/秒加载[^<>]*?免费/g)){sc23[sc23i].remove();break;}
/* */
if(sc23[sc23i].innerText.match(/(?:收藏|优惠券|收录提交|(?<!站点)帮助|报错|商城|无法播放\??)\s*?$/g)){sc23[sc23i].remove();break;}
/* */
if(sc23[sc23i].innerText.match(/^\s*?(?:广告合作|用户|合伙[^\\u4e00-\\u9fa5]*?)\s*?$/g)){sc23[sc23i].remove();break;}
/* */
if(sc23[sc23i].innerHTML.match(/(?<!网盘)(?:高速下载器?(?:\d+?)?\s*?$|>\s*?高速下载\s*?<\/|>\s*?需?下载高速下载器)/g)){sc23[sc23i].remove();}
/* */
/****/
const sc23msa=sc23[sc23i].querySelectorAll('em[class*="btn"],em[id*="btn"],div[class^="_"],div[id^="_"]');
for(let sc23ia=0;sc23ia<sc23msa.length;sc23ia++){
/* */
if(sc23msa[sc23ia].innerText.match(/(?:打开|下载|查看)[^<>]*?APP/ig)){sc23[sc23i].remove();}
/* */
if(sc23msa[sc23ia].innerText.match(/App[^<>]*?(?:专享|阅读|观看|查看|打开)/ig)){sc23[sc23i].remove();}
/* */
if(sc23msa[sc23ia].innerText==='立即下载'){sc23[sc23i].remove();}
/* */
};
/****/
const sc23msb=sc23[sc23i].querySelectorAll('div,p');
for(let sc23ib=0;sc23ib<sc23msb.length;sc23ib++){
if(sc23msb[sc23ib].innerText.match(/^\s*?(?:使?用|打开|下载|查看)[^<>]*?APP/ig)){sc23[sc23i].remove();}
};
/****/
const sc23msc=sc23[sc23i].querySelectorAll('img[src*=".gif"][style^="width:9"],img[src*=".gif"][style^="width: 9"]');
for(let sc23ic=0;sc23ic<sc23msc.length;sc23ic++){
if(sc23msc[sc23ic]){sc23[sc23i].remove();}
};
/****/
const sc23msd=sc23[sc23i].querySelectorAll('span');
for(let sc23id=0;sc23id<sc23msd.length;sc23id++){
/* */
if(sc23msd[sc23id].innerText.match(/^\s*?(?:Bug[^<>]*?)?(?:提交|反馈)(?:[^<>]*?Bug)?\s*?$/ig)){sc23[sc23i].remove();}
/* */
if(sc23msd[sc23id].innerText.match(/^\s*?(?:捐|投|游戏|书架|手机)\s*?$/g)){sc23[sc23i].remove();}
/* */
if(sc23msd[sc23id].innerText.match(/^\s*?(?:\W+?(?<!(?:电[影视]|游戏|电竞))直播\s*?$|直播(?!(?:电[影视]|游戏|电竞)))\s*?$/g)){sc23[sc23i].remove();}
/* */
if(sc23msd[sc23id].innerText.match(/^\s*?(?:资讯|[^\\u4e00-\\u9fa5]+?出品|儿童|母婴|知识|健康|生活|体育|汽车|财经|旅游|时尚|演出|公益|纪录片|片花)\s*?$/g)){sc23[sc23i].remove();}
/* */
/////
const sc23msda=sc23msd[sc23id].querySelectorAll('em');
for(let sc23ie=0;sc23ie<sc23msda.length;sc23ie++){
if(sc23msda[sc23ie].innerText.match(/^\s*?推广\s*?$/g)){sc23[sc23i].remove();}
}
/////
};
/****/
};
/* -------------------- */
const sc24=document.querySelectorAll('[data-news-id],[data-pos="t"][data-show],[class*="image"][class*="bottom"],[id*="image"][id*="bottom"],[class*="appBottom"],[id*="appBottom"],[class*="appPromote"],[id*="appPromote"]');
for(let sc24i=0;sc24i<sc24.length;sc24i++){
const sc24msa=sc24[sc24i].querySelectorAll('span');
for(let sc24ia=0;sc24ia<sc24msa.length;sc24ia++){
/* */
if(sc24msa[sc24ia].innerText.match(/(?:打开|下载|查看)[^<>]*?APP/ig)){sc24[sc24i].remove();}
/* */
if(sc24msa[sc24ia].innerText.match(/App[^<>]*?(?:专享|阅读|观看|查看|打开)/ig)){sc24[sc24i].remove();}
/* */
if(sc24msa[sc24ia].innerText.match(/^\s*?(?:推广|关闭|广告|APP|AD|(?:关闭 ?)?X)\s*?$/ig)){sc24[sc24i].remove();}
/* */
};};
/* -------------------- */
const sc25=document.querySelectorAll('[class^="download-wrapper"],[id^="download-wrapper"]');
for(let sc25i=0;sc25i<sc25.length;sc25i++){
const sc25b=sc25[sc25i].querySelectorAll('div[class*="download"][style^="background-image:"],div[id*="download"][style^="background-image:"]');
for(let sc25ia=0;sc25ia<sc25b.length;sc25ia++){
const sc25msa=sc25b[sc25ia].querySelectorAll('[data-log*="_id:"][class*="download-"][class*="btn"],[data-log*="_id:"][id*="download-"][id*="btn"]');
for(let sc25ib=0;sc25ib<sc25msa.length;sc25ib++){
if(sc25msa[sc25ib].innerText==='下载'){sc25[sc25i].remove();}
}}};
/* -------------------- */
const sc26=document.querySelectorAll('a[href^="javascript:"]');
for(let sc26i=0;sc26i<sc26.length;sc26i++){
if(sc26[sc26i].innerText.match(/^\s*?收起公告\s*?$/g)){sc26[sc26i].click();sc26[sc26i].remove();break;}
/* */
/****/
const sc26msa=sc26[sc26i].querySelectorAll('[class*="openapp"],[id*="openapp"][class*="open-app"],[id*="open-app"]');
for(let sc26ia=0;sc26ia<sc26msa.length;sc26ia++){
/* */
if(sc26msa[sc26ia].innerText.match(/(?:打开|下载|查看)[^<>]*?APP/ig)){sc26[sc26i].remove();}
/* */
if(sc26msa[sc26ia].innerText.match(/App[^<>]*?(?:专享|阅读|观看|查看|打开)/ig)){sc26[sc26i].remove();}
/* */
if(sc26msa[sc26ia].innerText.match(/^\s*?(?:推广|关闭|广告|APP|AD|(?:关闭 ?)?X)\s*?$/ig)){sc26[sc26i].remove();}
/* */
};};
/* -------------------- */
const sc27=document.querySelectorAll('[class*="list_item_"][class*="_click_"],[id*="list_item_"][id*="_click_"]');
for(let sc27i=0;sc27i<sc27.length;sc27i++){
const sc27msa=sc27[sc27i].querySelectorAll('[class*="btn"][class*="download"],[id*="btn"][id*="download"]');
for(let sc27ia=0;sc27ia<sc27msa.length;sc27ia++){
if(sc27msa[sc27ia].innerText==='查看详情'){sc27[sc27i].remove();break;}
};};
/* -------------------- */
const sc28=document.querySelectorAll('section[class$="-list"],section[id$="-list"]');
for(let sc28i=0;sc28i<sc28.length;sc28i++){
const sc28b=sc28[sc28i].querySelectorAll('[class*="-title-"],[class*="-title-"]');
for(let sc28ia=0;sc28ia<sc28b.length;sc28ia++){
const sc28msa=sc28b[sc28ia].querySelectorAll('span');
for(let sc28ib=0;sc28ib<sc28msa.length;sc28ib++){
if(sc28msa[sc28ib].innerText.match(/APP[^<>]*?推荐/ig)){sc28[sc28i].remove();}
}}};
/* -------------------- */
const sc29=document.querySelectorAll('[class*="-list"]:not([class*="page"]):not([class*="thread"]),[id*="-list"]:not([id*="page"]):not([id*="thread"]),[class*="btn"][class*="jump"],[class^="ui"][class*="main"][class*="line"],[class*="list"] [class*="list"][class*="news"]');
for(let sc29i=0;sc29i<sc29.length;sc29i++){
const sc29msa=sc29[sc29i].querySelectorAll('em,span');
/* */
for(let sc29ia=0;sc29ia<sc29msa.length;sc29ia++){
/* */
if(sc29msa[sc29ia].innerText.match(/(?:打开|下载|查看)[^<>]*?APP/ig)){sc29[sc29i].remove();}
/* */
if(sc29msa[sc29ia].innerText.match(/App[^<>]*?(?:专享|阅读|观看|查看|打开)/ig)){sc29[sc29i].remove();}
/* */
if(sc29msa[sc29ia].innerText.match(/^\s*?(?:推广|关闭|广告|APP|AD|(?:关闭 ?)?X)\s*?$/ig)){sc29[sc29i].remove();}
/* */
};};
/* -------------------- */
const sc30=document.querySelectorAll('[class*="-detail-"][class$="-feed"],[id*="-detail-"][id$="-feed"],[class*="-detail-"][class$="-recommend"],[id*="-detail-"][id$="-recommend"]');
for(let sc30i=0;sc30i<sc30.length;sc30i++){
const sc30msa=sc30[sc30i].querySelectorAll('[class*="-title"],[id*="-title"]');
for(let sc30ia=0;sc30ia<sc30msa.length;sc30ia++){
if(sc30msa[sc30ia].innerText==='为你推荐'){sc30[sc30i].remove();break;}
};};
/* -------------------- */
const sc31=document.querySelectorAll('div>table[width][border="0"]');
for(let sc31i=0;sc31i<sc31.length;sc31i++){
const sc31msa=sc31[sc31i].querySelectorAll('tbody>tr>td');
for(let sc31ia=0;sc31ia<sc31msa.length;sc31ia++){
if(sc31msa[sc31ia].innerHTML.match(/\<a [^<>]*?低价[^<>]*?限时/ig)){sc31[sc31i].remove();break;}
};};
/* -------------------- */
const sc32=document.querySelectorAll('[class*="focus"][class*="ad"],[id*="focus"][id*="ad"],[class*="-header"][class*="-panel"][id*="-header"][id*="-down"],[class*="gg"][class*="-"][class*="top"],[id*="gg"][id*="-"][id*="top"],[class*="headgg"][data-ad],[id*="headgg"][data-ad]');
for(let sc32i=0;sc32i<sc32.length;sc32i++){
const sc32msa=sc32[sc32i].querySelectorAll('anuncio,span[class*="down"][class*="arr"],a[href*="?"][href*="="][class*="alink"],a[href*="?"][href*="="][id*="alink"],[class*="gg-bg"][style*="background:"],[id*="gg-bg"][style*="background:"]');
for(let sc32ia=0;sc32ia<sc32msa.length;sc32ia++){
if(sc32msa[sc32ia].innerText===''||sc32msa[sc32ia].innerText.indexOf('广告')>-1){sc32[sc32i].remove();}
}};
/* -------------------- */
const sc33=document.querySelectorAll('div[class*="text"],div[class*="text"]');
for(let sc33i=0;sc33i<sc33.length;sc33i++){
if(sc33[sc33i].innerText.match(/添加[^<>]*?(?:桌面|收藏)/g)){sc33[sc33i].remove();break;}
};
/* -------------------- */
const sc34=document.querySelectorAll('[class="ad"],[id="ad"],td[align="center"],section [class^="widget"][class*="_"],section [id^="widget"][id*="_"],tr[align="center"]>td[colspan="5"],tr[align="center"]>td[colspan="10"],tr[align="center"]>td[colspan="15"]');
for(let sc34i=0;sc34i<sc34.length;sc34i++){
const sc34msa=sc34[sc34i].querySelectorAll('script');
for(let sc34ia=0;sc34ia<sc34msa.length;sc34ia++){
if(sc34msa[sc34ia]){sc34[sc34i].remove();}
}};
/* -------------------- */
const sc35=document.querySelectorAll('p[style*="center;"][class*="_"],p[style*="center;"][id*="_"],[class*="left"][class*="title"],[id*="left"][class*="title"],[class*="right"][class*="title"],[class*="left"][class*="title"]');
for(let sc35i=0;sc35i<sc35.length;sc35i++){
const sc35b=sc35[sc35i].querySelectorAll('a[target*="_blank"]');
for(let sc35ia=0;sc35ia<sc35b.length;sc35ia++){
const sc35msa=sc35b[sc35ia].querySelectorAll('p[style*="background:"]');
for(let sc35ib=0;sc35ib<sc35msa.length;sc35ib++){let cssc35a=sc35msa[sc35ib];let scssc35a=cssc35a.getAttribute('style');
if(scssc35a&&/(?:left|right): ?0px/ig.test(scssc35a)){
if(sc35msa[sc35ib].innerText.match(/^\s*?关闭(?:[^<>]*?X)?\s*?$/ig)){sc35[sc35i].remove();}
}}}};
/* -------------------- */
const sc36=document.querySelectorAll('div[class*="notice"],div[id*="notice"]');
for(let sc36i=0;sc36i<sc36.length;sc36i++){
const sc36msa=sc36[sc36i].querySelectorAll('div[class*="notice"],div[id*="notice"] a[href^="javascript:"]');
for(let sc36ia=0;sc36ia<sc36msa.length;sc36ia++){
if(sc36msa[sc36ia].innerText.match(/^\s*?收起/g)){sc36[sc36i].remove();}
}};
/* -------------------- */
const sc37=document.querySelectorAll('div[tpl*="com_default"][data-click],div[cmatchid][data-click],div[data-general-xst][data-click]');
for(let sc37i=0;sc37i<sc37.length;sc37i++){
const sc37b=sc37[sc37i].querySelectorAll('div[class^="f"],div[id^="f"],font');
for(let sc37ia=0;sc37ia<sc37b.length;sc37ia++){
const sc37msa=sc37b[sc37ia].querySelectorAll('[onclick],span,em,i,b');
for(let sc37ib=0;sc37ib<sc37msa.length;sc37ib++){
if(sc37msa[sc37ib].innerText.match(/^\s*?(?:推广|关闭|广告|APP|AD|(?:关闭 ?)?X)\s*?$/ig)){sc37[sc37i].remove();}
}}};
/* -------------------- */
const sc38=document.querySelectorAll('style+div[id]');
for(let sc38i=0;sc38i<sc38.length;sc38i++){
const sc38msa=sc38[sc38i].querySelectorAll('div[class*="ad"],div[id*="ad"] a[href^="javascript:"]');
for(let sc38ia=0;sc38ia<sc38msa.length;sc38ia++){
if(sc38msa[sc38ia].innerText.match(/^\s*?\W*?广告\s*?$/g)){sc38[sc38i].remove();}
}};
/* -------------------- */
const sc39=document.querySelectorAll('div[class*="_"] [class*="layout"],div[id*="_"] [class*="layout"],div[class*="_"] [id*="layout"],div[id*="_"] [id*="layout"]');
for(let sc39i=0;sc39i<sc39.length;sc39i++){
const sc39msa=sc39[sc39i].querySelectorAll('div[class*="ad"],div[id*="ad"] a[target*="_blank"]');
for(let sc39ia=0;sc39ia<sc39msa.length;sc39ia++){
if(sc39msa[sc39ia].innerText.indexOf('推广')>-1){sc39[sc39i].remove();}
}};
/* -------------------- */
const sc40=document.querySelectorAll('div[class$="-text"],div[id="$-text"]');
for(let sc40i=0;sc40i<sc40.length;sc40i++){
if(sc40[sc40i].innerText.match(/APP\s*?$/ig)){sc40[sc40i].remove();}
};
/* -------------------- */
const sc41=document.querySelectorAll('[class*="down"],[id*="down"],[class*="Down"],[id*="Down"]');
for(let sc41i=0;sc41i<sc41.length;sc41i++){
const sc41msa=sc41[sc41i].querySelectorAll('ul h1,ul h2,ul h3,ul h4,ul h5,ul h6,ul h7,ul h8,ul h8');
for(let sc41ia=0;sc41ia<sc41msa.length;sc41ia++){
if(sc41msa[sc41ia].innerText.indexOf('高速下载器')>-1){sc41msa[sc41ia].remove();break;}
};};
/* -------------------- */
const sc42=document.querySelectorAll('div[class*="video"][class$="-list-container"]');
for(let sc42i=0;sc42i<sc42.length;sc42i++){
const sc42msa=sc42[sc42i].querySelectorAll('div[class$="-title"]');
for(let sc42ia=0;sc42ia<sc42msa.length;sc42ia++){
/* */
if(sc42msa[sc42ia].innerText.match(/^\s*?(?:猜你喜欢|相关推荐)\s*?$/ig)){
const sc42b=sc42[sc42i].querySelectorAll('[class*="video"][class*="-card"]');
for(let sc42ia=0;sc42ia<sc42b.length;sc42ia++){
const sc42msa=sc42b[sc42ia].querySelectorAll('[onclick],span,em,i,b');
for(let sc42ib=0;sc42ib<sc42msa.length;sc42ib++){
/* */
if(sc42msa[sc42ib].innerText.match(/^\s*?app\s*?$/ig)){sc42b[sc42ia].remove();}
/* */
if(sc42msa[sc42ib].innerText.match(/^\s*?(?:使?用|打开|下载|查看)[^<>]*?APP/ig)){sc42b[sc42ia].remove();}
/* */
}}}
/* */
};};
/* -------------------- */
const sc43=document.querySelectorAll('[onclick][class*="show"][class*="app"],[onclick][id*="show"][id*="app"]');
for(let sc43i=0;sc43i<sc43.length;sc43i++){
if(sc43[sc43i].innerText.match(/^\s*?(?:使?用|打开|下载|查看)[^<>]*?APP/ig)){sc43[sc43i].remove();}
};
/* -------------------- */
const sc44=document.querySelectorAll('div[style^="margin:"]');
for(let sc44i=0;sc44i<sc44.length;sc44i++){
if(sc44[sc44i].innerText.match(/\s*?(?:Copyright|Powered\s+?by|版权所有 ?©|©\s*?20)/ig)){sc44[sc44i].remove();break;}
};
/* -------------------- */
const sc45=document.querySelectorAll('footer,[class^="ft"],[id^="ft"],[class*="fotter"],[id*="fotter"],[class*="foot"],[id*="foot"],[class*="Foot"],[id*="Foot"],[class^="copy cl"],[id^="copy cl"]');
for(let sc45i=0;sc45i<sc45.length;sc45i++){
if(sc45[sc45i].innerText.match(/\s*?(?:Copyright|Powered\s+?by|版权所有 ?©|©\s*?20)/ig)){sc45[sc45i].remove();break;}
/* */
if(sc45[sc45i].innerHTML.match(/\>\s*?(?:Copyright|Powered\s+?by|版权所有 ?©|©\s*?20)/ig)){sc45[sc45i].remove();break;}
/* */
if(sc45[sc45i].innerHTML.match(/\>\s*?本?网?站(?:资源均?(?:网络)?(?:采|收|搜)集[^<>]+?权[利益]|为非赢利|所有(?:内容|视频))/g)){sc45[sc45i].remove();break;}
/* */
if(sc45[sc45i].innerHTML.match(/\>[^<>]+?(?:均来源于互联网采集搬运|如有问题处理请联系站长|如侵犯到您的权益,\s*?请及时通知我们,)/g)){sc45[sc45i].remove();break;}
/* */
if(sc45[sc45i].innerHTML.match(/\>\s*?以上内容由/g)){sc45[sc45i].remove();break;}
/****/
const sc45msa=sc45[sc45i].querySelectorAll('div,span,em,a,i,p,b');
for(let sc45ia=0;sc45ia<sc45msa.length;sc45ia++){
if(sc45msa[sc45ia].innerText.match(/^\s*?APP ?下载/ig)){sc45[sc45i].remove();break;}
/* */
if(sc45msa[sc45ia].innerText.match(/(?:^\s*?本?网?站(?:提供的资源|是非经营性网站)|(?:^\s*?|©[^<>]+?)版权所有\s*?$)/g)){sc45[sc45i].remove();break;}
/* */
if(sc45msa[sc45ia].innerText.match(/(?:[^\\u4e00-\\u9fa5]\s*?ICP\s*?备|(?:公(?:安网|网安)备|[^\\u4e00-\\u9fa5]\s*?ICP)\s*?\d+?\d*?号)/ig)){sc45[sc45i].remove();break;}
/* */
if(sc45msa[sc45ia].innerText.match(/^\s*?(?:公司(?:简介|历程)|隐私声明|招聘信息|站点地图|营销推广)\s*?$/g)){sc45[sc45i].remove();break;}
/* */
/****/
};};
/* -------------------- */
const sc46=document.querySelectorAll('aside,div[class="tips"],div[id="tips"],div[class^="channel"][class*="_list"],div[id^="channel"][id*="_list"],div[class^="article"][class$="_row"],div[id^="article"][id$="_row"],div[class^="detail-guess-wrap"],div[id^="detail-guess-wrap"]');
for(let sc46i=0;sc46i<sc46.length;sc46i++){
const sc46msa=sc46[sc46i].querySelectorAll('[onclick],span,em,i,b');
for(let sc46ia=0;sc46ia<sc46msa.length;sc46ia++){
if(sc46msa[sc46ia].innerText.match(/^\s*?(?:推广|关闭|广告|APP|AD|(?:关闭 ?)?X)\s*?$/ig)){sc46[sc46i].remove();break;}
/* */
};};
/* -------------------- */
const sc47=document.querySelectorAll('div[class^="nav"],div[id^="nav"]');
for(let sc47i=0;sc47i<sc47.length;sc47i++){
const sc47b=sc47[sc47i].querySelectorAll('div[class^="top"],div[id^="top"]');
for(let sc47ia=0;sc47ia<sc47b.length;sc47ia++){
const sc47msa=sc47b[sc47ia].querySelectorAll('div[class*="bar"],div[id*="bar"]');
for(let sc47ib=0;sc47ib<sc47msa.length;sc47ib++){
if(sc47msa[sc47ib].innerText.indexOf('收藏')>-1){sc47msa[sc47ib].remove();break;}
}}};
/* -------------------- */
const sc48=document.querySelectorAll('[class*="-box"] style+script+div,[id*="-box"] style+script+div');
for(let sc48i=0;sc48i<sc48.length;sc48i++){
const sc48msa=sc48[sc48i].querySelectorAll('a button');
for(let sc48ia=0;sc48ia<sc48msa.length;sc48ia++){
if(sc48msa[sc48ia].innerText.match(/^\s*?\W*?广告\s*?$/g)){sc48[sc48i].remove();}
}};
/* -------------------- */
const sc49=document.querySelectorAll('div[class*="thread"] div[class*="grey"],div[class*="thread"] div[id*="grey"],div[id*="thread"] div[class*="grey"],div[id*="thread"] div[id*="grey"]');
for(let sc49i=0;sc49i<sc49.length;sc49i++){
if(sc49[sc49i].innerText.match(/^\s*?签名 ?[:：]/g)){sc49[sc49i].remove();}
};
/* -------------------- */
const sc50=document.querySelectorAll('div[class*="_show "],div[id*="_show "],div[style^="position:"],script~style+div[class*="_"][id*="_"]>div[class*="_"],script~style+div[class*="_"][id*="_"]>div[id*="_"]');
for(let sc50i=0;sc50i<sc50.length;sc50i++){
const sc50msa=sc50[sc50i].querySelectorAll('[onclick],span,em,i,b');
for(let sc50ia=0;sc50ia<sc50msa.length;sc50ia++){
if(sc50msa[sc50ia].innerText.match(/^\s*?(?:推广|关闭|广告|APP|AD|(?:关闭 ?)?X)\s*?$/ig)){
const sc50msaa=sc50[sc50i].querySelectorAll('a[target*="_blank"]');
for(let sc50iaa=0;sc50iaa<sc50msaa.length;sc50iaa++){
if(sc50msaa[sc50iaa]){sc50[sc50i].remove();}
/* */
};}};};
/* -------------------- */
const sc51=document.querySelectorAll('div[class^="show-"][class$="-tips"],div[id^="show-"][id$="-tips"]');
for(let sc51i=0;sc51i<sc51.length;sc51i++){
const sc51msa=sc51[sc51i].querySelectorAll('p');
for(let sc51ia=0;sc51ia<sc51msa.length;sc51ia++){
if(sc51msa[sc51ia].innerText.match(/使用了\s*?AdBlock[^<>]*?关闭/ig)){sc51[sc51i].remove();break;}
/* */
};};
/* -------------------- */
const sc52=document.querySelectorAll('tr[align="center"]');
for(let sc52i=0;sc52i<sc52.length;sc52i++){
const sc52msa=sc52[sc52i].querySelectorAll('td[colspan]');
for(let sc52ia=0;sc52ia<sc52msa.length;sc52ia++){
if(sc52msa[sc52ia].innerHTML.match(/<script [^<>]*?src=/ig)){sc52[sc52i].remove();break;}
/* */
};};
/* -------------------- */
const sc53=document.querySelectorAll('div[class="share"],div[id="share"]');
for(let sc53i=0;sc53i<sc53.length;sc53i++){
const sc53msa=sc53[sc53i].querySelectorAll('b');
for(let sc53ia=0;sc53ia<sc53msa.length;sc53ia++){
if(sc53msa[sc53ia].innerText.match(/^\s*?(?:我要)?分享到\s*?[:：]/g)){sc53[sc53i].remove();break;}
/* */
};};
/* -------------------- */
const sc54=document.querySelectorAll('div[class$="-share"],div[class$="-share"]');
for(let sc54i=0;sc54i<sc54.length;sc54i++){
if(sc54[sc54i].innerText.match(/^\s*?(?:我要)?分享到\s*?[:：]/g)){sc54[sc54i].remove();break;}
};
/* -------------------- */
const sc55=document.querySelectorAll('[class*="fix_bottom"],[id*="fix_bottom"]');
for(let sc55i=0;sc55i<sc55.length;sc55i++){
const sc55b=sc55[sc55i].querySelectorAll('[class*="app_box"],[id*="app_box"]');
for(let sc55ia=0;sc55ia<sc55b.length;sc55ia++){
const sc55msa=sc55b[sc55ia].querySelectorAll('[onclick],span,em,i,b');
for(let sc55ib=0;sc55ib<sc55msa.length;sc55ib++){
if(sc55msa[sc55ib].innerText.indexOf('看')>-1){sc55[sc55i].remove();}
}}};
/* -------------------- */
const sc56=document.querySelectorAll('center');
for(let sc56i=0;sc56i<sc56.length;sc56i++){
if(sc56[sc56i].innerText.match(/(?:爬虫(?:自动)?抓取|侵犯(?:您|你)的隐私权)/g)){sc56[sc56i].remove();break;}
};
/* -------------------- */
const sc57=document.querySelectorAll('li[class^="recommend-item"],li[id^="recommend-item"],li[data-vid][data-href][data-index]');
for(let sc57i=0;sc57i<sc57.length;sc57i++){
const sc57b=sc57[sc57i].querySelectorAll('[data-jumpurl]');
for(let sc57ia=0;sc57ia<sc57b.length;sc57ia++){
const sc57msa=sc57b[sc57ia].querySelectorAll('[onclick],span,em,i,b');
for(let sc57ib=0;sc57ib<sc57msa.length;sc57ib++){
if(sc57msa[sc57ib].innerText.match(/^\s*?(?:使?用|打开|下载|查看)[^<>]*?APP/ig)){sc57[sc57i].remove();}
}}
/****/
const sc57msb=sc57[sc57i].querySelectorAll('div');
for(let sc57msbia=0;sc57msbia<sc57msb.length;sc57msbia++){
if(sc57msb[sc57msbia].innerText.match(/^\s*?(?:使?用|打开|下载|查看)[^<>]*?APP/ig)){sc57[sc57i].remove();break;}
};
/****/
};
/* -------------------- */
const sc58=document.querySelectorAll('[style="width:100%"],[style="width: 100%"],[style="width:100%;"],[style="width: 100%;"]');
for(let sc58i=0;sc58i<sc58.length;sc58i++){
const sc58msa=sc58[sc58i].querySelectorAll('a[href]:not([href^="/"])[style*="block"] [style^="background"]');
for(let sc58ia=0;sc58ia<sc58msa.length;sc58ia++){
if(sc58msa[sc58ia]){sc58[sc58i].remove();}
}};
/* -------------------- */
const sc59=document.querySelectorAll('a[style*="color:red"],a[style*="color: red"],a[style*="color:red;"],a[style*="color: red;"]');
for(let sc59i=0;sc59i<sc59.length;sc59i++){
if(sc59[sc59i].innerText.match(/(?:章节错误|点此举报|加入书签)/g)){sc59[sc59i].remove();}
};
/* -------------------- */
const sc60=document.querySelectorAll('script[src]:not([src^="/"])+div[class][id],[style*="display:none"]+div[class][id],[style*="display: none"]+div[class][id]');
for(let sc60i=0;sc60i<sc60.length;sc60i++){
const sc60a=sc60[sc60i].querySelectorAll('a[target*="_self"][onclick]');
for(let sc60ia=0;sc60ia<sc60a.length;sc60ia++){
const sc60msa=sc60a[sc60ia].querySelectorAll('img');
for(let sc60ia=0;sc60ia<sc60msa.length;sc60ia++){
if(sc60msa[sc60ia]){sc60[sc60i].remove();}
}}
/****/
const sc60b=sc60[sc60i].querySelectorAll('[style*="background"][style*="fixed"][style*="21474836"][style*="block"]');
for(let sc60ia=0;sc60ia<sc60b.length;sc60ia++){
const sc60msa=sc60b[sc60ia].querySelectorAll('[onclick]');
for(let sc60ib=0;sc60ib<sc60msa.length;sc60ib++){
if(sc60msa[sc60ib].innerText.match(/^\s*?(?:推广|关闭|广告|APP|AD|(?:关闭 ?)?X)\s*?$/ig)){sc60[sc60i].remove();}
}}
/****/
};
/* -------------------- */
const sc61=document.querySelectorAll('script[src]:not([src^="/"])+div>ul,[style*="fixed"][style*="21474836"][style*="block"]+div>ul,[style*="display:none"]+div>ul,[style*="display: none"]+div>ul,onclick+div>ul');
for(let sc61i=0;sc61i<sc61.length;sc61i++){
const sc61msa=sc61[sc61i].querySelectorAll('li[class][id] a[href]:not([href^="/"]) img');
for(let sc61ia=0;sc61ia<sc61msa.length;sc61ia++){
if(sc61msa[sc61ia]){sc61[sc61i].remove();}
}};
/* -------------------- */
const sc62=document.querySelectorAll('[style="text-align:center"],[style="text-align: center"],[style="text-align:center;"],[style="text-align: center;"]');
for(let sc62i=0;sc62i<sc62.length;sc62i++){
const sc62msa=sc62[sc62i].querySelectorAll('script [style^="width:9"] [style*="background"],script [style^="width: 9"] [style*="background"]');
for(let sc62ia=0;sc62ia<sc62msa.length;sc62ia++){
if(sc62msa[sc62ia]){sc62[sc62i].remove();}
}};
/* -------------------- */
const sc63=document.querySelectorAll('div[class="mb15 p5 shadow"],div[id="mb15 p5 shadow"]');
for(let sc63i=0;sc63i<sc63.length;sc63i++){
const sc63msa=sc63[sc63i].querySelectorAll('div[class="sidebanner"],div[id="sidebanner"]');
for(let sc63ia=0;sc63ia<sc63msa.length;sc63ia++){
if(sc63msa[sc63ia]){sc63[sc63i].remove();}
}};
/* -------------------- */
const sc64=document.querySelectorAll('div[class*="banner"][class$="shadow"],div[id*="banner"][id$="shadow"]');
for(let sc64i=0;sc64i<sc64.length;sc64i++){
const sc64msa=sc64[sc64i].querySelectorAll('a[target="_blank"][href]:not([href^="/"])');
for(let sc64ia=0;sc64ia<sc64msa.length;sc64ia++){
if(sc64msa[sc64ia]){sc64[sc64i].remove();break;}
}};
/* -------------------- */
const sc65=document.querySelectorAll('script~ins,td[onclick^="clurl"],[class^="google-"],[id^="google-"]');
for(let sc65i=0;sc65i<sc65.length;sc65i++){
if(sc65[sc65i]){sc65[sc65i].remove();}
};
/* -------------------- */
const sc66=document.querySelectorAll('div[class^="videoCard-"],div[id^="videoCard-"]');
for(let sc66i=0;sc66i<sc66.length;sc66i++){
const sc66msa=sc66[sc66i].querySelectorAll('div');
for(let sc66ia=0;sc66ia<sc66msa.length;sc66ia++){
if(sc66msa[sc66ia].innerText.match(/^\s*?(?:使?用|打开|下载|查看)[^<>]*?APP/ig)){sc66[sc66i].remove();}
};};
/* -------------------- */
const sc67=document.querySelectorAll('div[class^="titleImg-"],div[id^="titleImg-"]');
for(let sc67i=0;sc67i<sc67.length;sc67i++){
const sc67b=sc67[sc67i].querySelectorAll('div[class^="link-"],div[id^="link-"]');
for(let sc67ia=0;sc67ia<sc67b.length;sc67ia++){
const sc67msa=sc67b[sc67ia].querySelectorAll('[onclick],span,em,i,b');
for(let sc67ib=0;sc67ib<sc67msa.length;sc67ib++){
if(sc67msa[sc67ib].innerText.match(/^\s*?(?:使?用|打开|下载|查看)[^<>]*?APP/ig)){sc67[sc67i].remove();}
}}};
/* -------------------- */
const sc68=document.querySelectorAll('div[class^="slideImg-"],div[id^="slideImg-"],div[class^="bigImg-"],div[id^="bigImg-"]');
for(let sc68i=0;sc68i<sc68.length;sc68i++){
const sc68b=sc68[sc68i].querySelectorAll('div[class^="info-"],div[id^="info-"]');
for(let sc68ia=0;sc68ia<sc68b.length;sc68ia++){
const sc68msa=sc68b[sc68ia].querySelectorAll('[onclick],span,em,i,b');
for(let sc68ib=0;sc68ib<sc68msa.length;sc68ib++){
if(sc68msa[sc68ib].innerText.match(/^\s*?(?:使?用|打开|下载|查看)[^<>]*?APP/ig)){sc68[sc68i].remove();}
}}};
/* -------------------- */
const sc69=document.querySelectorAll('div[class$="-box clearfix"][style*="block"],div[id$="-box clearfix"][style*="block"]');
for(let sc69i=0;sc69i<sc69.length;sc69i++){
const sc69msa=sc69[sc69i].querySelectorAll('a[target*="_blank"]');
for(let sc69ia=0;sc69ia<sc69msa.length;sc69ia++){
if(sc69msa[sc69ia].innerText.match(/^\s*?去?领取/g)){sc69[sc69i].remove();}
};};
/* -------------------- */
const sc70=document.querySelectorAll('div[class^="relatedNews-container"],div[id^="relatedNews-container"]');
for(let sc70i=0;sc70i<sc70.length;sc70i++){
const sc70msa=sc70[sc70i].querySelectorAll('h1,h2,h3,h4,h5,h6,h7,h8,h9');
for(let sc70ia=0;sc70ia<sc70msa.length;sc70ia++){
if(sc70msa[sc70ia].innerText.match(/^\s*?猜你喜欢\s*?$/g)){sc70[sc70i].remove();}
};};
/* -------------------- */
const sc71=document.querySelectorAll('mip-ad,mip-iframe[class*="fixed"],mip-iframe[id*="fixed"]');
for(let sc71i=0;sc71i<sc71.length;sc71i++){
const sc71msa=sc71[sc71i].querySelectorAll('iframe');
for(let sc71ia=0;sc71ia<sc71msa.length;sc71ia++){
if(sc71msa[sc71ia]){sc71[sc71i].remove();}
};};
/* -------------------- */
return false;}}else{}
/* -------------------- */
function wygjxjxbjcdsq(){if(!document.querySelector("#stylus-wygjxjxbjc")){shoujiwangyegongjuxiangwangyetongyonggongjuxiang();wangyetongyonggongjuxiang()}else{}};setTimeout(wygjxjxbjcdsq,999);
/* -------------------- */
})();
/* ------------------------------- */
};};}})();

