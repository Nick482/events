(function(){
	subcategoryCtrl.$inject = ["navigationService"];
	angular
	.module('app')
	.controller('subcategoryCtrl', subcategoryCtrl);

	/** @ngInject */
	function subcategoryCtrl(navigationService){
		var vm = this;

		vm.goToEvent = navigationService.goToEvent;
	}
})();