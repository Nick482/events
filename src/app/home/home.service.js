(function(){
	angular
		.module('app')
		.factory('homeService', homeService);
	/** @ngInject */
	function homeService($http, $q, $state) {
		return {
			getTopEvents: getTopEvents,
			getLatestEvents: getLatestEvents,
			getClosestEvents: getClosestEvents,
			goToEvent: goToEvent
		}

		function getLatestEvents(){
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: '/events/latest'
			}).then(function(events){
				deferred.resolve(events.data);
			}).catch(function(err){
				console.log('err');
			});
			return deferred.promise;
		}

		function getTopEvents(){
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: '/events/top'
			}).then(function(events){
				deferred.resolve(events.data);
			}).catch(function(err){
				console.log('err');
			});
			return deferred.promise;
		}

		function getClosestEvents() {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: '/events/closest'
			}).then(function(events){
				deferred.resolve(events.data);
			}).catch(function(err){
				console.log('err');
			});
			return deferred.promise;
		}

		function goToEvent(id) {
			$state.go('event', {eventID: id});
		}
	}
})();