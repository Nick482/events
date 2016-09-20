(function(){
	searchCtrl.$inject = ["navigationService"];
	angular
	.module('app')
	.controller('searchCtrl', searchCtrl);

	/** @ngInject */
	function searchCtrl(navigationService){
		var vm = this;

		vm.goToEvent = navigationService.goToEvent;
	}
})();