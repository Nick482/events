(function(){
	angular
	.module('app')
	.controller('categoriesController', categoriesController);

	/** @ngInject */
	function categoriesController(){
		var vm = this;
		// vm.categories = categories;

		console.log(vm.categories);
	}
})();