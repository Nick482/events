(function(){
	subcategoryCtrl.$inject = ["categoryService"];
	angular
	.module('app')
	.controller('subcategoryCtrl', subcategoryCtrl);

	/** @ngInject */
	function subcategoryCtrl(categoryService){
		var vm = this;

		console.log(vm.subcategory);
	}
})();