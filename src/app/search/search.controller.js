(function(){
	angular
	.module('app')
	.controller('searchCtrl', searchCtrl);

	/** @ngInject */
	function searchCtrl(navigationService, $stateParams){
		var vm = this;
		vm.disablePrevButton = !parseInt($stateParams.page);

		vm.goToEvent = navigationService.goToEvent;
		vm.nextPage = navigationService.nextPage;
		vm.prevPage = navigationService.prevPage;
	}
})();