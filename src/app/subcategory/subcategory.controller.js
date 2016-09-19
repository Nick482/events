(function(){
	angular
	.module('app')
	.controller('subcategoryCtrl', subcategoryCtrl);

	/** @ngInject */
	function subcategoryCtrl(categoryService){
		var vm = this;

		vm.goToEvent = categoryService.goToEvent;
	}
})();