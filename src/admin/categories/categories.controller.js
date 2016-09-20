(function(){
	angular
	.module('app.admin')
	.controller('categoriesCtrl', categoriesCtrl);

	/** @ngInject */
	function categoriesCtrl(adminService, categoriesService, dialogService){
		var vm = this;

    vm.selectCategory = function(category){
      categoriesService.getSubcategories(category._id).then(function(subcategories){
        vm.subcategories = subcategories;
      })
    }
	}
})();
