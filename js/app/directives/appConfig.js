/**
 * Created by 世宁 on 14-3-4.
 */
define(["modules/App","underscore","factories/DropdownMenus","directives/app"],function(app){
    app.directive("appConfig",function(DropdownMenus){
        return {
            restrict: "A",
            templateUrl: "js/app/templates/AppConfig.html",
            link: function(scope,element){
                var data = DropdownMenus.query(function(){
                    var tabnavs = _.filter(data,function(item){
                        return item.pId == 0;
                    });
                    scope.selection = tabnavs[0];
                    scope.tabnavs = tabnavs;
                    scope.tabSelect = function(index){
                        scope.selection = tabnavs[index];
                    }
//                    var tabnavs = [{
//                        id: "personal",
//                        name: "个人事务",
//                        iconClass: "fa fa-desktop"
//                    },{
//                        id: "quality",
//                        name:"全质量开发平台",
//                        iconClass: "fa fa-file-o"
//                    },{
//                        id:"S+",
//                        name:"通达S+服务管理系统sssssssssssssssss",
//                        iconClass: "fa fa-file-o"
//                    },{
//                        id: "workflow",
//                        name:"工作流",
//                        iconClass: "fa fa-file-o"
//                    },{
//                        id: "administrative",
//                        name:"行政办公",
//                        iconClass: "fa fa-file-o"
//                    },{
//                        id: "knowledge",
//                        name:"知识管理",
//                        iconClass: "fa fa-file-o"
//                    },{
//                        id: "humanResources",
//                        name:"人力资源",
//                        iconClass: "fa fa-file-o"
//                    }];

                });
                scope.queryByPid = function(id){
                    var shortcuts = _.filter(data,function(item){
                        return item.pId == id;
                    });
                    return shortcuts;
                }

            },
            controller: function($scope,$element){

            }
        }
    });
});