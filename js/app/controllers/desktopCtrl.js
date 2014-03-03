/**
 * Created by 世宁 on 14-1-3.
 */
define(['angular','modules/App','factories/Item','services/centerService','fancybox','css!style/css/jquery.fancybox','underscore'] , function (angular,app) {
    app.controller('desktopCtrl' , function ($scope,Item,$log,$rootScope) {
        var items = Item.query(function(){
            $log.debug("Loaded "+items.length+" desktops from server:\n"+JSON.stringify(items));
        });
        $scope.page = 1;
        $scope.items = items;
        $scope.openTab = function(item,apply){
            $rootScope.$broadcast("tab.open",item,apply);
        };
        $scope.paginate = function(page){
          $log.debug("Change page to "+page);
          $scope.page = page;
        };
        $scope.openManage = function(){
            $.fancybox.open({
                href: "#desktopManager",
//                type: "ajax",
                padding: 0,
                closeBtn: false
            });
        };
        $scope.$on("desktop.add",function(){
            var newPage = new Item({
                page: $scope.items.length+1,
                shortcuts: []
            });
            $scope.items.push(newPage);
            newPage.$save(function(u, putResponseHeaders) {
            });
            $scope.paginate(newPage.page);
        });
        $scope.$on("desktop.remove",function(event,pageNum){
            $scope.items.splice(_.indexOf($scope.items,_.findWhere($scope.items,{page: pageNum})),1);
            _.map($scope.items,function(item){
                if(item.page>pageNum){
                    item.page--;
                }
                return item;
            })
        });
    })
});