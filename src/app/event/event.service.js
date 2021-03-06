(function(){
	angular
	.module('app')
	.factory('eventService', eventService);

	/** @ngInject */
	function eventService($http, $q, dialogService, $state) {

		return {
			getEvent: getEvent,
			signUp: signUp,
			findEvents: findEvents
		}

		function getEvent(id) {
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/events/' + id
			}).then(function(event){
				deferred.resolve(event.data);
			}).catch(function(err){
				dialogService.showDialog({title: 'Error', text: 'An error occured when loading data'})
			});
			return deferred.promise;
		}

		function findEvents(text, page){
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/events/search/' + text + '/' + page
			}).then(function(events){
				deferred.resolve(events.data);
			}).catch(function(err){
				dialogService.showDialog({title: 'Error', text: 'An error occured when loading data'})
			});
			return deferred.promise;
		}

		function signUp(user) {
			$http({
				method: 'POST',
				url: '/users/',
				data: user
			}).then(function(user){
				dialogService.showDialog({title: 'Success', text: 'Successfully signed up!'});
				$state.reload();
			}).catch(function(err){
				dialogService.showDialog({title: 'Error', text: 'An error occured'});
			});
		}
	}
})();