/**
 * Created by 世宁 on 14-1-8.
 */
define(['modules/App','unslider','factories/Item'],function(app){
    app.directive('myCustomer',function(Item,$timeout){
        return {
            restrict: "A",
            link: function(scope,element){
                element.css("visibility","hidden");
                $timeout(function(){
                    element.find(".desktop").height($("#center").height());
                    element.find(".shortcutPane").css("margin-top",0-element.find(".shortcutPane").height()/2+"px");
                    var slidey = element.unslider({
                        dots: true,
                        autoplay: false,
                        keys: true
                    }).css("visibility","visible");
                    var data = slidey.data('unslider');
                    console.log(data);
                    scope.changePage = function(pageNum){
                        data.to(pageNum);
                    }
                },500);
            },
            controller: function($scope,$element,$rootScope){
                var items = Item.query(function(){
//            console.log($rootElement);
                    $scope.items = items;
                });
                $rootScope.$on("$viewContentLoaded",function(){
//                    alert("success");
                });
                $scope.page = 1;
                $scope.openTab = function(item){
                    $("#north").scope().newTab(item);
                }
                $scope.name= "czxczczxc";
            }
        };
    });
});