(function(){
	angular
	.module('app')
	.component('subcategory', {
		templateUrl: 'app/subcategory/subcategory.html',
		bindings: {events: '<'},
		controller: 'subcategoryCtrl',
		controllerAs: 'vm'
	})
})();