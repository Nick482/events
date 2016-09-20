(function(){
	subcategoryCtrl.$inject = ["navigationService", "$stateParams"];
	angular
	.module('app')
	.controller('subcategoryCtrl', subcategoryCtrl);

	/** @ngInject */
	function subcategoryCtrl(navigationService, $stateParams){
		var vm = this;
		vm.disablePrevButton = !parseInt($stateParams.page);

		vm.goToEvent = navigationService.goToEvent;
		vm.nextPage = navigationService.nextPage;
		vm.prevPage = navigationService.prevPage;
	}
})();