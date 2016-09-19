(function(){
	angular
	.module('app')
	.component('event', {
		templateUrl: 'app/event/event.html',
		bindings: {event: '<'},
		controller: 'eventCtrl',
		controllerAs: 'vm'
	})
}());