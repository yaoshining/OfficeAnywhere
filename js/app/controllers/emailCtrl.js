/**
 * Created by 世宁 on 14-3-7.
 */
define(['modules/App',"less!style/email"] , function (app) {
    app.controller('emailCtrl' , function ($scope,$document) {
        $scope.active = 'inbox';
        $scope.navbar = '';
        $scope.scrollBarOptions = {
            theme:"dark",
            mouseWheel:true,
            mouseWheelPixels: 300,
            autoHideScrollbar: true,
            scrollButtons:{
                enable:true
            },
            advanced:{
                updateOnContentResize: true,
                updateOnBrowserResize: true,
                autoScrollOnFocus: false
            }
        };
        $scope.filterDropdown = false;
        $scope.tagsDropdown = false;
        $scope.sorter = {
            order: 'date',
            dropdown: false
        }
        $scope.navSearch = {
            minimize: true
        }
        $document.on("click.hidedropdown",function(event){
            var sorterState = $scope.sorter.dropdown;
            var filterState = $scope.filterDropdown;
            var tagState = $scope.tagsDropdown;
            $scope.sorter.dropdown = $scope.filterDropdown = $scope.tagsDropdown = false;
            var targetGroup = event ? $(event.target).parents().addBack() : null;
            if(targetGroup && targetGroup.is(".dropdown-toggle,.dropdown-menu")){
                if(targetGroup.is(".filter-dropdown")){
                    $scope.filterDropdown = filterState;
                }
                if(targetGroup.is(".sorter-dropdown")) {
                    $scope.sorter.dropdown = sorterState;
                }
                if(targetGroup.is(".tags-dropdown")) {
                    $scope.tagsDropdown = tagState;
                }
            }
            $scope.$apply();
        });
    })
});