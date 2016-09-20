(function(){
	/** @ngInject */
	headerCtrl.$inject = ["navigationService"];
	angular
		.module('app')
		.controller('menuCtrl', headerCtrl);

	function headerCtrl(navigationService) {
		var vm = this;
	    var originatorEv;

	    vm.openMenu = function($mdOpenMenu, ev) {
	      $mdOpenMenu(ev);
	    };

	    vm.goTo = navigationService.goTo;

		vm.search = function(){
			navigationService.goToSearch(vm.searchText);
		}
	}
})();