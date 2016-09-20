(function(){
    angular
    .module('app.admin')
    .factory('eventsService', eventsService);

    /** @ngInject */
    function eventsService($http, $q, $state){

        return {
            addEvent: addEvent,
            editEvent: editEvent,
            addSession: addSession,
            editSession: editSession,
            addUser: addUser,
            editUser: editUser
        };

        function addEvent(){
            $http({
                method: 'POST',
                url: '/events/'
            }).then(function(){

            }).catch(function(err){
                alert(err);
            });
        }

        function editEvent(){
            $http({
                method: 'PUT',
                url: '/events/'
            }).then(function(){

            }).catch(function(err){
                alert(err);
            });
        }

        function addSession(){
            $http({
                method: 'POST',
                url: '/sessions/'
            }).then(function(){

            }).catch(function(err){
                alert(err);
            });
        }

        function editSession(){
            $http({
                method: 'PUT',
                url: '/sessions/'
            }).then(function(){

            }).catch(function(err){
                alert(err);
            });
        }

        function addUser(){
            $http({
                method: 'POST' ,
                url: '/users/'
            }).then(function(){

            }).catch(function(err){
                alert(err);
            });
        }

        function editUser(){
            $http({
                method: 'PUT',
                url: '/users/'
            }).then(function(){

            }).catch(function(err){
                alert(err);
            });
        }
    }
})();