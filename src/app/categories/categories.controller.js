(function(){
	angular
	.module('app')
	.controller('categoriesCtrl', categoriesCtrl);

	/** @ngInject */
	function categoriesCtrl(navigationService){
		var vm = this;
		vm.showSubcategories = function(id){
			vm[id] = !vm[id];
		};
		vm.viewEvents = navigationService.goToSubcategory;
	}
})();