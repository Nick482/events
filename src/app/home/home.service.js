(function(){
	angular
		.module('app')
		.factory('homeService', homeService);
	/** @ngInject */
	function homeService($http, $q) {
		return {
			getTopEvents: getTopEvents,
			getLatestEvents: getLatestEvents,
			getClosestEvents: getClosestEvents
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
		// function getEvent(id){
		// 	var deferred = $q.defer();
		// 	$http({
		// 		method: "GET",
		// 		url: '/events/' + id
		// 	}).then(function(event){
		// 		deferred.resolve(event);
		// 	}).catch(function(err){
		// 		console.log(err);
		// 	})
		// } // TODO move both to... someplace else

		// function getCategories(){
		// 	var deferred = $q.defer();
		// 	$http({
		// 		method: "GET",
		// 		url: '/categories/'
		// 	}).then(function(categories){
		// 		deferred.resolve(categories);
		// 	}).catch(function(err){
		// 		console.log(err);
		// 	})
		// }
	}
})();