(function(){
	/** @ngInject */
	homeCtrl.$inject = ["homeService"];
	angular.module('app')
		.controller('homeCtrl', homeCtrl);

	function homeCtrl(homeService){
		var vm = this;

		vm.goToEvent = homeService.goToEvent;
	}
})();