(function(){
	/** @ngInject */
	footerCtrl.$inject = ["navigationService"];
	angular
		.module('app')
		.controller('footerCtrl', footerCtrl);

	function footerCtrl(navigationService) {
		var vm = this;

		vm.goTo = navigationService.goTo;
	}
})();