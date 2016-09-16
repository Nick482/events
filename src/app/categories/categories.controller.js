(function(){
	angular
	.module('app')
	.controller('categoriesCtrl', categoriesCtrl);

	/** @ngInject */
	function categoriesCtrl(){
		var vm = this;
		// vm.categories = categories;

		console.log(vm.categories);
	}
})();