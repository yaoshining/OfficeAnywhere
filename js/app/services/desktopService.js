/**
 * Created by 世宁 on 14-3-6.
 */
define(['modules/App',"factories/Item","underscore"] , function (app) {
    app.service('desktopService', function (Item,$log) {
        var items = Item.query(function(){
            $log.debug("Loaded "+items.length+" desktops from server:\n"+JSON.stringify(items));
        });
        return {
            items: items,
            addDesktop: function(){
                var newPage = new Item({
                    page: this.items.length+1,
                    shortcuts: []
                });
                this.items.push(newPage);
                Item.update(this.items);
                return newPage;
            },
            addShortcut: function(page,shortcut){
                this.items[page-1].shortcuts.push(shortcut);
            },
            removeDesktop: function(pageNum){
                this.items.splice(_.indexOf(this.items,_.findWhere(this.items,{page: pageNum})),1);
                _.map(this.items,function(item){
                    if(item.page>pageNum){
                        item.page--;
                    }
                    return item;
                })
                Item.update(this.items);
            },
            removeShortcut: function(index,page){
                var pageData = _.findWhere(this.items,{page: page});
                pageData.shortcuts.splice(index,1);
                Item.update(this.items);
            }
        }
    });
});