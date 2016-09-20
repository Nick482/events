(function(){
	angular
	.module('app.admin')
	.component('home', {
		templateUrl: 'admin/home/home.html',
		controller: 'homeCtrl',
		controllerAs: 'vm'
	})
})();