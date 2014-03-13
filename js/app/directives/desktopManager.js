/**
 * Created by 世宁 on 14-2-25.
 */
define(["modules/App","directives/tabs","directives/appConfig","less!style/desktopManager","jquery-ui","factories/Item"],function(app){
    app.directive("desktopManager",function($log,Item){
        return {
            restrict: "A",
            templateUrl: "js/app/templates/DesktopManager.html",
            link: function(scope,element){
                scope.removeBtnShowIndex = -1;
                scope.showRemoveBtn = function($index){
                    scope.removeBtnShowIndex = $index;
                }
                scope.hideRemoveBtn = function(){
                    scope.removeBtnShowIndex = -1;
                }
            },
            controller: function($scope,$element){
                $scope.addDesktop = function(){
                    $scope.$emit("desktop.add");
                }
                $scope.removeDesktop = function(pageNum){
                    if(confirm("删除桌面，将删除桌面全部模块，确定要删除吗？")){
                        $scope.$emit("desktop.remove",pageNum);
                    }
                }
                $scope.closeManager = function(){
                    $.fancybox.close();
                }
                var itemArray = $scope.items;
                $scope.desktopSortableOptions = {
                    items: "> li",
                    stop: function(e, ui) {
                        var logEntry = itemArray.map(function(i,k){
                            i.page = k+1;
                            return JSON.stringify(i);
                        }).join(', ');
                        $log.debug(logEntry);
                        Item.update(itemArray);
                    }
                };
            }
        }
    });
});