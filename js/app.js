/**
 * Created by 世宁 on 14-1-3.
 */
var loadingMask = document.getElementById("loading-mask");
var loadingPhrase = document.getElementById("loadingPhrase");
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
        "app": "../app",
        "views": "../app/views",
        "models": "../app/models",
        "modules": "../app/modules",
        "directives": "../app/directives",
        "routes": "../app/routes",
        "controllers": "../app/controllers",
        "services": "../app/services",
        "factories": "../app/factories",
        "templates": "../app/templates",
        "jquery": "jquery-1.8.3.min",
        "jquery-ui": "jquery-ui-1.9.2.custom.min",
        "fancybox": "jquery.fancybox",
        "layout": "jquery.layout-latest",
        "style": "../../style"
    },
    shim: {
        'layout': {
            deps: ['jquery'],
            exports: "jQuery.fn.layout"
        },
        "jquery-ui": {
            deps: ['jquery']
        },
        "fancybox": {
            deps: ["jquery"],
            exports:"jQuery.fn.layout"
        },
        "ztree.core":{
            deps: ["jquery"],
            exports: "jQuery.fn.zTree"
        },
        'angular': {
            exports: "angular"
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        },
        'jquery.dropdown': {
            deps: ['jquery'],
            exports:"jQuery.fn.dropdown"
        },
        'underscore': {
            exports:"_"
        },
        'unslider': {
            deps: ['jquery'],
            exports: "jQuery.fn.unslider"
        }
    },
    map: {
        '*': {
            "css": "css",
            "less": "less"
        }
    }
});
requirejs(["less!style/index.less","less!style/font-awesome/less/font-awesome","css!style/css/bootstrap"],function(){
    loadingPhrase.innerHTML = "正在载入js核心库...";
    setTimeout(function(){
        require(["jquery-ui","json2","es5-shim","underscore"],function(){
            loadingPhrase.innerHTML = "正在载入子模块...";
            setTimeout(function(){
                require(["app/main"],function(){
                    loadingPhrase.innerHTML = "正在初始化...";
                });
            },0);
        });
    },0);
});
//requirejs(["less!style/font-awesome/less/font-awesome",
//           "json2",
//           "jquery-ui",
//           "es5-shim",
//           "underscore",
//           "fancybox",
//           "css!style/css/jquery.fancybox",
//           "css!style/css/bootstrap"
//]);
////if(!document.querySelectorAll){
//////    require(["ie-shim"]);
////}
//requirejs(["app/main"]);