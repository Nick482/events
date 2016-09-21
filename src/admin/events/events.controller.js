(function(){
	angular
	.module('app.admin')
	.controller('eventsCtrl', eventsCtrl);

	/** @ngInject */
	function eventsCtrl(adminService, dialogService, eventsService){
		var vm = this;
		vm.page = 0;

		vm.addEvent = dialogService.openAddEventForm;
		vm.removeEvent = eventsService.removeEvent;
		vm.editEvent = dialogService.openEditEventForm;
		vm.addSession = dialogService.openAddSessionForm;
		vm.removeSession = eventsService.removeSession;
		vm.editSession = dialogService.openEditSessionForm;
		vm.addUser = dialogService.openAddUserForm;

		vm.selectEvent = function(event){
			eventsService.selectEvent(event).then(function(sessions){
				vm.sessions = sessions;
			})
		}

		vm.search = function(){
			eventsService.findEvents(vm.searchText, vm.page).then(function(events){
				vm.events = events;
			});
		}

		vm.nextPage = function(){
			vm.page +=1;
			search();
		}
		vm.prevPage = function(){
			vm.page -=1;
			search();
		}
	}
})();