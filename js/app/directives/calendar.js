/**
 * Created by 世宁 on 14-1-13.
 */
define(['modules/App'],function(app){
    app.directive('calendar',function($http,$rootScope,$interval,dateFilter){
        return {
            restrict: "A",
            templateUrl: "js/app/templates/Calendar.html",
            link: function(scope,element){
                var ak = "559a493498c8f694c269c41358003fe5";
                $.ajax({
                    type: "post",
                    crossDomain: true,
                    url: "http://api.map.baidu.com/location/ip?ak="+ak+"&coor=bd09ll",
                    dataType: "jsonp",
                    jsonpCallback: "callback",
                    xhrFields: {
                        withCredentials: false
                    },
                    success: function(data){
                        element.find(".location > span").text(data.content.address);
//                        $.ajax({
//                            type: "post",
//                            crossDomain: true,
//                            url: "http://api.map.baidu.com/telematics/v2/weather?location="+encodeURI(data.content.address)+"&ak="+ak+"&output=json",
//                            dataType: "jsonp",
//                            xhrFields: {
//                                withCredentials: false
//                            },
//                            success: function(data){
//                                console.log(data);
//                                var results = data.results;
//                                var weather = results[0].weather;
//                                var temperature = results[0].temperature;
//                                element.find(".weather > div:first").text(weather);
//                                element.find(".weather > div:last").text(temperature);
//                            }
//                        });
                        var url = "http://api.map.baidu.com/telematics/v2/weather?location="+encodeURI(data.content.address_detail.city)+"&ak="+ak+"&output=json";
                        var queryWeather = function(){
                            $.getJSON("http://query.yahooapis.com/v1/public/yql", {
                                q: "select * from json where url=\""+url+"\"",
                                format: "json"
                            }, function(data) {
                                if (data.query.results) {
                                    var results = data.query.results.json.results;
                                    var weather = results[0].weather;
                                    var temperature = results[0].temperature;
                                    element.find(".weather > div:first").text(weather);
                                    element.find(".weather > div:last").text(temperature);
                                } else {
                                    queryWeather();
                                }
                            });
                        };
                        queryWeather();
                    }
                });

//                if(navigator.geolocation){
//                    navigator.geolocation.getCurrentPosition(function(position){
//                        var lat = position.coords.latitude;
//                        var lon = position.coords.longitude;
//                        $.post("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&lang=zh_cn",function(data){
////                            alert(data.name);
//                            var weather = data.weather;
//                            element.find(".weather > div:first").text(weather[0].description);
//                        },"json");
//                    });
//                }else{
//                    $.getScript("http://www.geoplugin.net/javascript.gp",function(){
////                        element.find(".location > span").text(geoplugin_city());
//                        $.post("http://api.openweathermap.org/data/2.5/weather?q="+geoplugin_city()+","+geoplugin_countryCode()+"&lang=zh_cn",function(data){
////                            alert(data);
//                            var weather = data.weather;
//                            element.find(".weather > div:first").text(weather[0].description);
//                        },"json");
//                    });
//                }
                $rootScope.loadingPhrase = "正在初始化日历模块...";
                requirejs(["calendar-converter"],function(){
                    var dateFormat = "yyyy年MM月dd日",
                        timeFormat = "HH:mm:ss",stopTime;
                    var weekday = ["日","一","二","三","四","五","六"];
                    function updateTime() {
                        var date = new Date();
                        var cc = new CalendarConverter();
                        var lunarObj = cc.solar2lunar(date);
                        element.find(".lunar-date").text("农历"+lunarObj.lunarYear+"年"+lunarObj.lunarMonth+"月"+lunarObj.lunarDay);
                        element.find(".solar-date").text(dateFilter(date,dateFormat));
                        element.find(".solar-weekday").text("星期"+weekday[date.getDay()]);
                        element.find(".time").text(dateFilter(date,timeFormat));
                    }
                    updateTime();
                    stopTime = setInterval(updateTime,1000);
                });
            },
            controller: function($scope){

            }
        };
    });
});