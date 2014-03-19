/**
 * Created by 世宁 on 14-3-17.
 */
define(['modules/App',"underscore"] , function (app) {
    app.service('messengerService' , ['$http','$rootScope',function ($http,$rootScope) {
        var chatBox = {
            chatBoxes: [],
            open: function(chatBox){
                var newBox = {
                    id: chatBox.sender.id,
                    to: chatBox.sender,
                    messages: chatBox.messages?_.clone(chatBox.messages):[],
                    show: true
                };
                this.chatBoxes.push(newBox);
                reminder.remove(chatBox.sender.id);
            },
            contains: function(id){
                return _.findWhere(this.chatBoxes,{id: id});
            },
            send: function(box,message){
                var senderId = $rootScope.userInfo[0].guid;
                var receiver = box.sender;
                box.messages.push({
                    type: "send",
                    sendTime: new Date(),
                    body: message
                });
                $http.post("data/messages/send",{senderId: senderId, receiverId: receiver.id,message: message}).success(function(){

                }).error(function(){

                });
            }
        };
        var reminder = {
            latest: undefined,
            remindQueue: [],
            getRemindMessages: function(id,change){
                var self = this;
                $http.get("data/messages/remind/"+id).success(function(data){
                    for(var i=0;i<data.length;i++){
                        var v = data[i];
                        var remindItem = _.findWhere(self.remindQueue,{id: v.senderId});
                        var box = chatBox.contains(v.senderId);
                        var message = {
                            type: "receive",
                            sendTime: v.sendTime,
                            body: v.message
                        };
                        if(box) {
                            box.messages.push(message);
                        }else{
                            if(_.findWhere(self.remindQueue,{"id": v.senderId})){
                                remindItem.messages.unshift(message);
                            }else{
                                remindItem = {
                                    id: v.senderId,
                                    sender: {
                                        id: v.senderId,
                                        name: v.senderName
                                    },
                                    messages: [message]
                                }
                                self.remindQueue.unshift(remindItem);
                            }
                        }
                        if(change && typeof change=="function"){
                            change(self.remindQueue);
                        }
                    }
                    self.latest = self.remindQueue[0];
                }).error(function(a,b){

                    });
            },
            remove: function(id) {
                var item = _.findWhere(this.remindQueue,{id: id});
                this.remindQueue.splice(_.indexOf(this.remindQueue,item),1);
            }
        };
        return {
            chatBox: chatBox,
            reminder: reminder
        };
    }]);
});