(function(){
	angular
	.module('app.admin')
	.component('events', {
		templateUrl: 'admin/events/events.html',
		bindings: {events: '<'},
		controller: 'eventsCtrl',
		controllerAs: 'vm'
	});
})();