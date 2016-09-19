(function(){
	/** @ngInject */
	angular.module('app')
		.controller('homeCtrl', homeCtrl);

	function homeCtrl(homeService){
		var vm = this;

		vm.goToEvent = homeService.goToEvent;
	}
})();