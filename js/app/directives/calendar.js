/**
 * Created by 世宁 on 14-1-13.
 */
define(['modules/App'],function(app){
    app.directive('calendar',function($http,$rootScope,$interval,dateFilter){
        return {
            restrict: "A",
            templateUrl: "js/app/templates/Calendar.html",
            link: function(scope,element){
                $rootScope.loadingPhrase = "正在初始化日历模块...";
                var dateFormat = "yyyy年MM月dd日",
                    timeFormat = "HH:mm:ss",stopTime;
                var weekday = ["日","一","二","三","四","五","六"];
                function updateTime() {
                    var date = new Date();
                    element.find(".solar-date").text(dateFilter(date,dateFormat));
                    element.find(".solar-weekday").text("星期"+weekday[date.getDay()]);
                    element.find(".time").text(dateFilter(date,timeFormat));
                }
                updateTime();
                stopTime = setInterval(updateTime,1000);
            },
            controller: function($scope){

            }
        };
    });
});