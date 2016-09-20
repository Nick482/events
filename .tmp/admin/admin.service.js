(function(){
	adminService.$inject = ["$http", "$q", "$state", "$stateParams"];
	angular
	.module('app.admin')
	.factory('adminService', adminService);

	/** @ngInject */
	function adminService($http, $q, $state, $stateParams){
		return {
			getCategories: getCategories,
			getEvents: getEvents
		}

		function getCategories() {
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/categories/'
			}).then(function(categories){
				deferred.resolve(categories);
			}).catch(function(err){
				console.log(err);
			});

			return deferred.promise;
		}

		function getEvents(page){
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/events/page/' + page
			}).then(function(categories){
				deferred.resolve(categories);
			}).catch(function(err){
				console.log(err);
			});

			return deferred.promise;
		}
	}
})();