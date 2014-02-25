/**
 * Created by 世宁 on 14-2-21.
 */
define(["modules/App"],function(app){
    app.directive("slogan",function($interval){
        return {
            restrict: "A",
            template: '<span ng-repeat="text in slogans" class="animate-show" ng-show="currentIndex==$index">{{text}}</span>',
            link: function(scope,elements){
                scope.currentIndex = 0;
                scope.slogans = ["规范化的管理运营，专业化的营销推广","通达T9Pro正式版发布，是一个新的起点","asdasdasdasd","jkhjkhjkhjkhjk"];
                $interval(function(){
                    scope.currentIndex = (scope.currentIndex+1)%scope.slogans.length;
                },3000);
            }
        }
    });
});