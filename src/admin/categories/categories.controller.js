(function(){
	angular
	.module('app.admin')
	.controller('categoriesCtrl', categoriesCtrl);

	/** @ngInject */
	function categoriesCtrl(adminService, categoriesService, dialogService, eventsService){
		var vm = this;

    vm.selectCategory = function(category){
    	vm.selectedCategory = category;
      categoriesService.getSubcategories(category._id).then(function(subcategories){
        vm.subcategories = subcategories;
      })
    };

    vm.selectSubcategory = function(){

    };

    vm.addCategory = dialogService.openAddCategoryForm;
    vm.editCategory = dialogService.openEditCategoryForm;
    vm.addSubcategory = dialogService.openAddSubcategoryForm;
    vm.removeCategory = categoriesService.removeCategory;
    vm.removeSubcategory = categoriesService.removeSubcategory;
    vm.editSubcategory = dialogService.openEditSubcategoryForm;
    vm.addEvent = dialogService.openAddEventForm;
	}
})();
