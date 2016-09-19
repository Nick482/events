(function(){
	categoriesCtrl.$inject = ["categoryService"];
	angular
	.module('app')
	.controller('categoriesCtrl', categoriesCtrl);

	/** @ngInject */
	function categoriesCtrl(categoryService){
		var vm = this;
		// vm.categories = categories;
		vm.showSubcategories = function(subcategories){
			vm.subcategories = subcategories;
		};
		vm.viewEvents = categoryService.viewEvents;
	}
})();