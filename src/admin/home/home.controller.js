(function(){
	angular
	.module('app.admin')
	.controller('homeCtrl', homeCtrl);

	/** @ngInject */
	function homeCtrl(adminService){
		var vm = this;
	}
})();