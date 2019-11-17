//chat system

(function() {
    "use strict";
    angular.module('chat-app', ['firebase']);
    angular.module('chat-app')
        .factory('Messages', Messages);

    Messages.$inject = ['$firebaseArray'];

    function Messages($firebaseArray) {
        return function() {
            var config = {
            }; //set to your app url on firebase.com
            firebase.initializeApp(config);
            var rootRef = firebase.database().ref();

            return $firebaseArray(rootRef);
            //var ref = new Firebase('https://chatbot-ad582.firebaseio.com');
            //return $firebaseArray(ref);
        }
    }

    angular.module('chat-app')
        .controller('ChatCtrl', ChatCtrl);

    ChatCtrl.$inject = ['Messages'];

    function ChatCtrl(Messages) {
        var self = this;
        self.messages = Messages();

        self.saveMessage = function() {
            if (self.name && self.message) {
                self.messages.$add({ name: self.name, text: self.message });
                //self.name = null;
                self.message = null;

            } else {

                // Get Lost

            }

        };

    }

})();