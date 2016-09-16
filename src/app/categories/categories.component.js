(function(){
	angular
	.module('app')
	.component('categories', {
		templateUrl: 'app/categories/categories.html',
		bindings: { categories: '<' },
		controller: 'categoriesCtrl',
		controllerAs: 'vm'
	})
})();