;(function(){
    if(!console || !console.log){
        return;
    }

    var toFixedVersion = function(ver, floatLength){
        ver= (""+ver).replace(/_/g,".");
        floatLength = floatLength || 1;
        ver = String(ver).split(".");
        ver = ver[0] + "." + (ver[1] || "0");
        ver = Number(ver).toFixed(floatLength);
        return ver;
    };

    var ua = navigator.userAgent.toLowerCase(),
        browserName,
        browserVer,
        s;

    var setVer = function(name, ver){
        browserName = name;
        browserVer = ver;
    };

    (s = ua.match(/chrome\/([\d]+)/)) ? setVer("chrome",toFixedVersion(s[1])) : 0;

    var isSupport = (browserName === 'chrome' && browserVer >= 25);

    if(isSupport){
        var imgList = [];
        for(var i = 0; i < 9; i++){
            imgList.push('padding:49px 55.5px;line-height:111px;background:url(http://codestar.alloyteam.com/1/style/image/beauty' + (i+1) + '.jpg) no-repeat;');
        }
        console.log('%c感谢您选择通达OA！', 'font-size:18px;text-shadow: rgb(153, 153, 153) 2px 2px 2px;font-weight:bold;line-height:1.8;font-family:"微软雅黑"');
        console.log('%c', imgList[Math.round(Math.random()*(imgList.length-1))]);
        console.log('%cT9精彩，T9Pro更精彩！', 'color:#08c;');
        console.log('http://www.tongda2000.com/');
        console.log('\n-------------华丽的分割线-------------\n');
        console.log('%c【作者】:姚世宁\nhttp://www.yaoshining.com/', 'line-height:1.8;');
    } else {
        console.log('感谢您选择通达OA！\nT9精彩，T9Pro更精彩！\nhttp://www.tongda2000.com/');
        console.log('\n-------------华丽的分割线-------------\n');
        console.log('【作者】:姚世宁\nhttp://www.tongda2000.com/\n\n');
    }
})();