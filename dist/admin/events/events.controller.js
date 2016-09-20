(function(){
	eventsCtrl.$inject = ["adminService"];
	angular
	.module('app.admin')
	.controller('eventsCtrl', eventsCtrl);

	/** @ngInject */
	function eventsCtrl(adminService){
		var vm = this;

		console.log(vm.events);
	}
})();