(function(){
	categoriesCtrl.$inject = ["navigationService"];
	angular
	.module('app')
	.controller('categoriesCtrl', categoriesCtrl);

	/** @ngInject */
	function categoriesCtrl(navigationService){
		var vm = this;
		// vm.categories = categories;
		vm.showSubcategories = function(subcategories){
			vm.subcategories = subcategories;
		};
		vm.viewEvents = navigationService.goToSubcategory;
	}
})();