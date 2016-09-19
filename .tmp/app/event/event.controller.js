(function(){
	eventCtrl.$inject = ["eventService"];
	angular
	.module('app')
	.controller('eventCtrl', eventCtrl);

	/** @ngInject */
	function eventCtrl(eventService){
		var vm = this;

		console.log(vm.event);
	}
})();