/**
 * Created by 世宁 on 14-1-3.
 */
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
        "factories": "../app/factories",
        "templates": "../app/templates",
        "jquery": "jquery-1.8.3.min",
        "jquery-ui": "jquery-ui-1.9.2.custom.min",
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
requirejs(["less!style/font-awesome/less/font-awesome",
           "json2",
           "jquery-ui",
           "es5-shim",
           "underscore",
           "css!style/css/bootstrap"]);
requirejs(["app/main"]);