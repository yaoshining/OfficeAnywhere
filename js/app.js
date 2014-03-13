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
        "others": "../app/others",
        "jquery": "jquery-1.11.0.min",
        "jquery-migrate": "jquery-migrate",
        "jquery-ui": "jquery-ui-1.9.2.custom.min",
        "fancybox": "jquery.fancybox",
        "emojiarea": "jquery.emojiarea",
        "layout": "jquery.layout-latest",
        "emojis": "../app/others/emojis",
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
        "emojiarea": {
            deps: ["jquery"],
            exports:"jQuery.fn.emojiarea"
        },
        "emojis": {
            deps: ["jquery","emojiarea"]
        },
        "ztree.core":{
            deps: ["jquery"],
            exports: "jQuery.fn.zTree"
        },
        "ztree.exedit":{
            deps: ["jquery","ztree.core"]
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
        'angular-lazyload': {
            deps: ['angular']
        },
        'modules/sortable': {
            deps: ['angular']
        },
        'jquery-migrate': {
            deps: ['jquery']
        },
        'jquery.dropdown': {
            deps: ['jquery'],
            exports:"jQuery.fn.dropdown"
        },
        'jquery.contextMenu': {
            deps: ['jquery','jquery-ui','css!style/css/jquery.contextMenu'],
            exports:"jQuery.fn.contextMenu"
        },
        'jquery.scrollbar': {
            deps: ['jquery','jquery.mousewheel','css!style/css/jquery.scrollbar'],
            exports: "jQuery.fn.mCustomScrollbar"
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
requirejs(["others/console.ad","es5-shim","less!style/index","less!style/font-awesome/less/font-awesome","css!style/css/bootstrap"],function(){
    loadingPhrase.innerHTML = "正在载入js核心库...";
    setTimeout(function(){
        requirejs(["json2","jquery","jquery-migrate","underscore"],function(){
            loadingPhrase.innerHTML = "正在载入子模块...";
            setTimeout(function(){
                requirejs(["app/main"],function(){
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