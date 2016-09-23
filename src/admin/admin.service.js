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
			nextPage: nextPage,
			verify: verify,
			logout: logout
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

		function verify(){
			var deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/admin/verify'
			}).then(function(msg){
				deferred.resolve(msg);
			}).catch(function(err){
				deferred.reject(err);
				$state.go('login');
			});

			return deferred.promise;
		}

		function logout(){
			$http({
				method: 'GET',
				url: '/admin/logout'
			}).then(function(msg){
				$state.go('login');
			})
		}
	}
})();