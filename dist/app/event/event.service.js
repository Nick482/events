(function(){
	eventService.$inject = ["$http", "$q", "$state"];
	angular
	.module('app')
	.factory('eventService', eventService);

	/** @ngInject */
	function eventService($http, $q, $state) {

		return {
			getEvent: getEvent
		}

		function getEvent(id) {
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/events/' + id
			}).then(function(event){
				deferred.resolve(event.data);
			}).catch(function(err){
				console.log(err);
			});
			return deferred.promise;
		}
	}
})();