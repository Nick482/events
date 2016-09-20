(function(){
	navigationService.$inject = ["$state", "$http", "$q"];
	angular
	.module('app')
	.factory('navigationService', navigationService);

	/** @ngInject */
	function navigationService($state, $http, $q){

		return {
			goToSubcategory: goToSubcategory,
			goToEvent: goToEvent,
			goToSearch: goToSearch,
			goTo: goTo
		}

		function goToSubcategory(id){
			$state.go('subcategory', {subcategoryID: id});
		}

		function goToEvent(id) {
			$state.go('event', {eventID: id});
		}

		function goTo(dest) {
			$state.go(dest);
		}

		function goToSearch(text){
			$state.go('search', {searchText: text})
		}
	}
})();