(function(){
	angular
	.module('app.admin')
	.factory('adminService', adminService);

	/** @ngInject */
	function adminService($http, $q, $state, $stateParams){
		return {
			getCategories: getCategories,
			getEvents: getEvents,
			goTo: goTo,
			goToEvents: goToEvents,
			prevPage: prevPage,
			nextPage: nextPage
		};

		function getCategories() {
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/categories/'
			}).then(function(categories){
				deferred.resolve(categories.data);
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
			}).then(function(events){
				deferred.resolve(events.data);
			}).catch(function(err){
				console.log(err);
			});

			return deferred.promise;
		}

		function goTo(dest){
			$state.go(dest);
		}

		function goToEvents(dest, page){
			$state.go(dest, {page: page});
		}

		function nextPage() {
			var page = parseInt($stateParams.page);
			page += 1;
			$stateParams.page = page;
			$state.transitionTo($state.current, $stateParams, { 
  				reload: true, inherit: false, notify: true
			});
		}

		function prevPage() {
			var page = parseInt($stateParams.page);
			page -= 1;
			$stateParams.page = page;
			$state.transitionTo($state.current, $stateParams, { 
  				reload: true, inherit: false, notify: true
			});
		}
	}
})();