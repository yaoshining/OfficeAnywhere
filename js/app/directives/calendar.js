/**
 * Created by 世宁 on 14-1-13.
 */
define(['modules/App'],function(app){
    app.directive('calendar',function($http){
        return {
            restrict: "A",
            templateUrl: "js/app/templates/Calendar.html",
            link: function(scope,element){

            },
            controller: function($scope){
                setInterval(function(){
                    var date = new Date();
                    var weekday = ["日","一","二","三","四","五","六"];
                    $scope.solarDate = {
                        year: date.getFullYear(),
                        month: date.getMonth()+1,
                        day: date.getDate(),
                        weekday: weekday[date.getDay()]
                    };
                    $scope.time = {
                        hours: date.getHours(),
                        minutes: date.getMinutes(),
                        seconds: date.getSeconds()
                    }
                    $http({
                        url: "http://pv.sohu.com/cityjson?ie=utf-8",
                        method: "get"
                    }).success(function(data){
                        console.log(eval('('+data+')'));
                    });
                    $scope.$apply();
                },1000);
            }
        };
    });
});