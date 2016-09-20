(function(){
	angular
	.module('app.admin')
	.controller('categoriesCtrl', categoriesCtrl);

	/** @ngInject */
	function categoriesCtrl(adminService){
		var vm = this;
	}
})();