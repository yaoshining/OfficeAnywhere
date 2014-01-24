/**
 * Created by 世宁 on 14-1-8.
 */
define(['modules/App','underscore','services/centerService'] , function (app) {
    app.factory('Menus' , ['$resource' ,'centerService','$log', function ($resource,centerService,$log) {
        var menuResource = $resource('menus/:page' , {page: '@page'});
        var menus = menuResource.query(function(){
            service.history = _.where(menus,{active:true});
            $log.debug("Loaded "+menus.length+" menus from server:\n"+JSON.stringify(menus));
        });
        var service = {
            history: [],
            menus: menus,
            active: function(menu,$scope){
                if(!menu.active){
                    var activedMenu = _.where(this.menus,{active: true})[0];
                    if(activedMenu&&activedMenu.id!=menu.id){
                        activedMenu.active = false;
                        menu.active = true;
                        this.history.push(menu);
                    }
                    if(!activedMenu){
                        menu.active = true;
                        this.history.push(menu);
                    }
                }
            },
            close: function(menu){
                this.menus.splice(_.indexOf(this.menus,menu),1);
                this.history = _.filter(this.history,function(item){
                    return item.id!=menu.id;
                });
                if(this.history.length>0){
                    var previous = this.history.pop();
                    centerService.open(previous,false);
                    this.active(previous);
                }else if(this.menus.length>0){
                    var previous = this.menus[0];
                    centerService.open(previous,false);
                    this.active(previous);
                }else{
                    centerService.close();
                }
            }
        };
        return service;
    }]);
});