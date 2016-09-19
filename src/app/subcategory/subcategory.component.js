(function(){
	angular
	.module('app')
	.component('subcategory', {
		templateUrl: 'app/subcategory/subcategory.html',
		bindings: {subcategory: '<'},
		controller: 'subcategoryCtrl',
		controllerAs: 'vm'
	})

})();