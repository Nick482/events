(function(){
	eventCtrl.$inject = ["eventService"];
	angular
	.module('app')
	.controller('eventCtrl', eventCtrl);

	/** @ngInject */
	function eventCtrl(eventService){
		var vm = this;
		vm.showForm = false;
		vm.user = {};
		vm.event.status < 2 ? vm.inactiveEvent = true: vm.inactiveEvent = false;
		vm.openForm = function(){
			console.log('here')
			vm.showForm = !vm.showForm;
		}
		vm.signUp = function(){
			vm.user.event = vm.event._id;
			eventService.signUp(vm.user);
		}
	}
})();