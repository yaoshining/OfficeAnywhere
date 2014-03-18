/**
 * Created by 世宁 on 14-3-17.
 */
define(['modules/App',"underscore"] , function (app) {
    app.service('messengerService' , ['$http',function ($http) {
        return {
            reminder: {
                latest: undefined,
                remindQueue: [],
                getRemindMessages: function(id,change){
                    var self = this;
                    $http.get("data/messages/remind/"+id).success(function(data){
                        for(var i=0;i<data.length;i++){
                            var v = data[i];
                            var remindItem = _.findWhere(self.remindQueue,{id: v.senderId});
                            if(_.findWhere(self.remindQueue,{"id": v.senderId})){
                                remindItem.messages.unshift(v.message);
                            }else{
                                remindItem = {
                                    id: v.senderId,
                                    sender: {
                                        id: v.senderId,
                                        name: v.senderName
                                    },
                                    messages: [v.message]
                                }
                                self.remindQueue.unshift(remindItem);
                            }
                            if(change && typeof change=="function"){
                                change(self.remindQueue);
                            }
                        }
                        self.latest = self.remindQueue[0];
                    }).error(function(a,b){

                    });
                }
            }
        };
    }]);
});