(function(){
	angular
	.module('app.admin')
	.component('menu', {
		templateUrl: 'admin/menu/menu.html',
		controller: 'menuCtrl',
		controllerAs: 'vm'
	})
})();