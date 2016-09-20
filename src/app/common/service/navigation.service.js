(function(){
	angular
	.module('app')
	.factory('navigationService', navigationService);

	/** @ngInject */
	function navigationService($state, $stateParams, $http, $q){

		return {
			goToSubcategory: goToSubcategory,
			goToEvent: goToEvent,
			goToSearch: goToSearch,
			goTo: goTo,
			nextPage: nextPage,
			prevPage: prevPage
		}

		function goToSubcategory(id){
			$state.go('subcategory', {subcategoryID: id, page: 0});
		}

		function goToEvent(id) {
			$state.go('event', {eventID: id});
		}

		function goTo(dest) {
			$state.go(dest);
		}

		function goToSearch(text, page){
			$state.go('search', {searchText: text, searchPage: page})
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