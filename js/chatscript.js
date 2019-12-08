//chat system

(function() {
    "use strict";
    angular.module('chat-app', ['firebase']);
    angular.module('chat-app')
        .factory('Messages', Messages);

    Messages.$inject = ['$firebaseArray'];

    function Messages($firebaseArray) {
        return function() {

            var rootRef = firebase.database().ref('room');

            return $firebaseArray(rootRef);
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