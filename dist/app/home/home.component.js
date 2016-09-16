(function(){
	angular
	.module('app')
	.component('home', {
		templateUrl: 'app/home/home.html',
		bindings: { latest: '<', top: '<', closest: '<' },
		controller: 'homeCtrl',
		controllerAs: 'vm'
	})
})();