/**
 * Created by 世宁 on 14-1-3.
 */
define(['angular' , 'angular-resource','angular-route','angular-animate','angular-lazyload','modules/TextEditor','modules/sortable','modules/scrollbar'] , function (angular) {
    return angular.module('app',['ng','ngRoute','ngResource','ngAnimate','angular-lazyload','ui.sortable','textEditor','ui.scrollbar']);
});