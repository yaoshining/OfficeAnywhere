/**
 * Created by 世宁 on 14-3-6.
 */
define(["modules/App","underscore","services/desktopService","jquery.contextMenu"],function(app){
    app.directive("app",function(desktopService){
        return {
            restrict: "A",
            link: function(scope,element){
                element.contextMenu({
                    selector: ".shortcut",
                    build: function($trigger,e){
                        var options = {
                            callback: function(key, options) {
                                var m = "clicked: " + key;
                                window.console && console.log(m) || alert(m);
                            },
                            appendTo: "body",
                            items: {
                                    "edit": {name: "编辑", icon: "edit"},
                                    "addTo": {
                                        name: "添加到桌面",
                                        icon: "edit",
                                        items: {}
                                    },
                                    "cut": {name: "剪切", icon: "cut"},
                                    "copy": {name: "复制", icon: "copy"},
                                    "paste": {name: "粘贴", icon: "paste"},
                                    "delete": {name: "删除", icon: "delete"},
                                    "sep1": "---------",
                                    "quit": {name: "退出", icon: "quit"}
                            }

                        };
                        var desktopKey = [];
                        var desktopValue = [];
                        function addToDesktop(key, opt){
                            var page = opt.commands[key].page;
                            var shortcut = _.pick(scope.shortcut,"id","name","url","iframe","img");
                            scope.$apply(function(){
                                desktopService.addShortcut(page,shortcut);
                            });
                        }
                        _.map(scope.items,function(item){
                            desktopKey.push("desktop"+item.page);
                            desktopValue.push({name: "桌面"+item.page,page: item.page,callback: addToDesktop});
                        });
                        options.items.addTo.items = _.object(desktopKey,desktopValue);
                        return options;
                    }
                });
            }
        }
    });
});