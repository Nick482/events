(function(){
	angular
	.module('app.admin')
	.component('categories', {
		templateUrl: 'admin/categories/categories.html',
		bindings: {categories: '<'},
		controller: 'categoriesCtrl',
		controllerAs: 'vm'
	});
})();