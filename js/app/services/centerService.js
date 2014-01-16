/**
 * Created by 世宁 on 14-1-13.
 */
define(['modules/App'] , function (app) {
    app.service('centerService' , ['$rootScope' , function ($rootScope) {
        return {
            defaultTemplate: {
                url: "js/app/templates/Desktop.html"
            },
            template: {
                url: "js/app/templates/Desktop.html"
            },
            previousTemplates: [],
            constructor: function(){

            },
            broadcast: function(template,apply){
                $rootScope.$broadcast("center.update",template,apply);
            },
            open: function(item,apply) {
                this.previousTemplates.push(this.template);
                this.template = item.iframe?{
                    name: item.name,
                    url: "js/app/templates/Iframe.html",
                    iframeUrl: item.url
                }:{
                    name: item.name,
                    url: item.url
                };
                this.broadcast(this.template,apply);
            },
            close: function() {
//                this.template = this.previousTemplates.length>0?this.previousTemplates[this.previousTemplates.length-1]:this.defaultTemplate;
//                this.previousTemplates.pop();
                this.broadcast({url: ""},false);
            }
        };
    }]);
});