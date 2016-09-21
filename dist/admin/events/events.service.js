(function(){
    eventsService.$inject = ["$http", "$q", "$state", "$mdDialog"];
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
            findEvents: findEvents,
            addUser: addUser,
            removeEvent: removeEvent,
            removeSession: removeSession,
            selectEvent: selectEvent
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
                url: '/eventSessions/',
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
                url: '/eventSessions/',
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
                alert('user registered successfully');
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

        function removeEvent(event){
            $http({
                method: 'DELETE',
                url: '/events/' + event._id
            }).then(function(event){
                alert('event deleted');
            }).catch(function(err){
                console.log(err);
            });
        }

        function removeSession(session){
            $http({
                method: 'DELETE',
                url: '/eventSessions/' + session._id
            }).then(function(session){
                alert('session deleted');
            }).catch(function(err){
                console.log(err);
            })
        }

        function findEvents(text, page) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: '/events/search/' + text + '/' + page
            }).then(function(events){
                deferred.resolve(events.data);
            }).catch(function(err){
                console.log(err)
            });

            return deferred.promise;
        }

        function selectEvent(event){
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: '/events/' + event._id
            }).then(function(event){
                deferred.resolve(event.data.eventSessions);
                console.log(event);
            }).catch(function(err){
                console.log(err)
            });

            return deferred.promise;
        }
    }
})();