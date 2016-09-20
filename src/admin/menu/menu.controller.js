(function(){
	angular
	.module('app.admin')
	.controller('menuCtrl', menuCtrl);

	/** @ngInject */
	function menuCtrl(){
		var vm = this;

		vm.goTo = adminService.goTo;
	}
})();