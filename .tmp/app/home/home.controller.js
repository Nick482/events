(function(){
	/** @ngInject */
	homeCtrl.$inject = ["homeService", "navigationService"];
	angular.module('app')
		.controller('homeCtrl', homeCtrl);

	function homeCtrl(homeService, navigationService){
		var vm = this;

		vm.goToEvent = navigationService.goToEvent;
	}
})();