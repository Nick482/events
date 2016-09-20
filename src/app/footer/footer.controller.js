(function(){
	/** @ngInject */
	angular
		.module('app')
		.controller('footerCtrl', footerCtrl);

	function footerCtrl(navigationService) {
		var vm = this;

		vm.goTo = navigationService.goTo;
	}
})();