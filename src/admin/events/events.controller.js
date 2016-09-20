(function(){
	angular
	.module('app.admin')
	.controller('eventsCtrl', eventsCtrl);

	/** @ngInject */
	function eventsCtrl(adminService){
		var vm = this;
	}
})();