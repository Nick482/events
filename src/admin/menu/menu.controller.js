(function(){
	angular
	.module('app.admin')
	.controller('menuCtrl', menuCtrl);

	/** @ngInject */
	function menuCtrl(adminService){
		var vm = this;

		vm.goTo = adminService.goTo;
		vm.goToEvents = adminService.goToEvents;
	}
})();