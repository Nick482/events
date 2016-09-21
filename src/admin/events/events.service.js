(function(){
    angular
    .module('app.admin')
    .factory('eventsService', eventsService);

    /** @ngInject */
    function eventsService($http, $q, $state, $mdDialog){

        return {
            addEvent: addEvent,
            editEvent: editEvent,
            addSession: addSession,
            editSession: editSession,
            addUser: addUser,
            editUser: editUser
        };

        function addEvent(event){
            console.log(event);
            $mdDialog.hide();
            $http({
                method: 'POST',
                url: '/events/',
                data: event
            }).then(function(){
                alert('event added');
            }).catch(function(err){
                alert(err);
            });
        }

        function editEvent(event){
            $mdDialog.hide();
            $http({
                method: 'PUT',
                url: '/events/',
                data: event
            }).then(function(){
                alert('event edited');
            }).catch(function(err){
                alert(err);
            });
        }

        function addSession(session){
            $mdDialog.hide();
            $http({
                method: 'POST',
                url: '/sessions/',
                data: session
            }).then(function(){
                alert('session added');
            }).catch(function(err){
                alert(err);
            });
        }

        function editSession(session){
            $mdDialog.hide();
            $http({
                method: 'PUT',
                url: '/sessions/',
                data: session
            }).then(function(){
                alert('session edited');
            }).catch(function(err){
                alert(err);
            });
        }

        function addUser(user){
            $mdDialog.hide();
            $http({
                method: 'POST' ,
                url: '/users/',
                data: user
            }).then(function(){
                alert('users registered successfully');
            }).catch(function(err){
                alert(err);
            });
        }

        function editUser(user){
            $mdDialog.hide();
            $http({
                method: 'PUT',
                url: '/users/',
                data: user
            }).then(function(){
                alert('user edited');
            }).catch(function(err){
                alert(err);
            });
        }
    }
})();