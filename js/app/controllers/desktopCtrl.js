/**
 * Created by 世宁 on 14-1-3.
 */
define(['angular','modules/App','services/centerService','fancybox','css!style/css/jquery.fancybox',"services/desktopService"] , function (angular,app) {
    app.controller('desktopCtrl' , function ($scope,$log,$rootScope,desktopService,$document) {
        var items = desktopService.items;
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
            $("a.indicator_manager").fancybox({
                href: "#desktopManager",
//                type: "ajax",
                opacity: false,
                openEffect : 'elastic',
                openSpeed  : 500,
                closeEffect : 'elastic',
                wrapCSS: "pop-box",
                padding: 0,
                closeBtn: false
            });
        };
        $scope.$watch(function(){
            return $document.find("#indicator .indicator_wrapper").width();
        },function(){
            var marginLeft = (0-$document.find("#indicator .indicator_wrapper").width()/2)+"px";
            $document.find("#indicator .indicator_wrapper").css({
                "margin-left": marginLeft
            });
        })
        $scope.$on("desktop.add",function(){
            var newPage = desktopService.addDesktop();
            $scope.paginate(newPage.page);
        });
        $scope.$on("desktop.remove",function(event,pageNum){
            desktopService.removeDesktop(pageNum);
            $scope.paginate(pageNum<=$scope.items.length?pageNum:pageNum-1);
        });
    })
});