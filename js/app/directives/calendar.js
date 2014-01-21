/**
 * Created by 世宁 on 14-1-13.
 */
define(['modules/App'],function(app){
    app.directive('calendar',function($http,$rootScope,$interval,dateFilter){
        return {
            restrict: "A",
            templateUrl: "js/app/templates/Calendar.html",
            link: function(scope,element){
                $rootScope.loadingPhase = "正在初始化日历模块...";
                var format = "yyyy-MM-dd",stopTime;
                function updateTime() {
                    element.find(".solar-date").text(dateFilter(new Date(),format));
                }
//                stopTime = $interval(updateTime,1000);
                console.log(scope);
            },
            controller: function($scope){
                $scope.date = new Date();
                setInterval(function(){
                    $scope.date = new Date();
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
//                    $http({
//                        url: "http://pv.sohu.com/cityjson",
//                        method: "get"
//                    }).success(function(data){
//                        var dataStr = data.substr(data.indexOf("{"),data.length-data.indexOf("{")-1);
//                        var returnCitySN = $.parseJSON(dataStr);
//                        console.log(returnCitySN.cname);
//                        console.log(eval(dataStr));
//                    });
//                    $scope.$apply();
                },1000);
            }
        };
    });
});