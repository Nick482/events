(function(){
	angular
		.module('app')
		.factory('homeService', homeService);
	/** @ngInject */
	function homeService($http, $q) {
		return {
			getCategories: getCategories,
			getCategory: getCategory,
			getEvent: getEvent,
			getTopEvents: getTopEvents
		}

		function getEvent(id){
			var deferred = $q.defer();
			$http({
				method: "GET",
				url: '/events/' + id
			}).then(function(event){
				deferred.resolve(event);
			}).catch(function(err){
				console.log(err);
			})
		}

		function getCategories(){
			var deferred = $q.defer();
			$http({
				method: "GET",
				url: '/categories/'
			}).then(function(categories){
				deferred.resolve(categories);
			}).catch(function(err){
				console.log(err);
			})
		}
	}
})();