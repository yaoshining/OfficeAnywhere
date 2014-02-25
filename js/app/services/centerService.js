/**
 * Created by 世宁 on 14-1-13.
 */
define(['modules/App','underscore'] , function (app) {
    app.service('centerService' , ['$rootScope' , function ($rootScope) {
        return {
            defaultTemplate: {
                id: "我的桌面",
                name:"我的桌面",
                url: "js/app/templates/Desktop.html"
            },
            template: {
                id: "我的桌面",
                name:"我的桌面",
                url: "js/app/templates/Desktop.html"
            },
            templates: [{
                id: "我的桌面",
                name:"我的桌面",
                url: "js/app/templates/Desktop.html",
                show: true
            }],
            previousTemplates: [],
            constructor: function(){

            },
            broadcast: function(template,apply){
                $rootScope.$broadcast("center.update",template,apply);
            },
            open: function(item,apply) {
                this.previousTemplates.push(this.template);
                var template = item.iframe?{
                    id: item.id,
                    name: item.name,
                    url: "js/app/templates/Iframe.html",
                    iframeUrl: item.url,
                    show: true
                }:{
                    id: item.id,
                    name: item.name,
                    url: item.url,
                    show: true
                };
                var current = _.findWhere(this.templates,{show:true});
                if(current){
                    current.show = false;
                }
                var existObj = _.findWhere(this.templates,{id: template.id});
                if(existObj){
                    existObj.show = true;
                }else{
                    this.templates.push(template);
                };
                this.broadcast(this.template,apply);
            },
            close: function(template) {
//                this.template = this.previousTemplates.length>0?this.previousTemplates[this.previousTemplates.length-1]:this.defaultTemplate;
//                this.previousTemplates.pop();
                this.templates.splice(_.indexOf(_.findWhere(this.templates,{id: template.id})),1);
                this.broadcast({url: ""},false);
            }
        };
    }]);
});