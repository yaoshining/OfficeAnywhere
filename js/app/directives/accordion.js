/**
 * Created by 世宁 on 14-1-10.
 */
define(['modules/App','jquery-ui','css!style/css/jquery-ui-1.9.2.custom'],function(app){
    app.directive('accordion',function(){
        return {
            restrict: "A",
            templateUrl: "js/app/templates/DropdownMenus.html",
            link: function(scope,element){
                element.accordion({
                    heightStyle: "content"
                });
            },
            controller: function($scope){
                $scope.name = "123123123";
            }
        };
    });
});