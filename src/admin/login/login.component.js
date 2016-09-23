(function(){
	angular
	.module('app.admin')
	.component('login', {
		templateUrl: 'admin/login/login.html',
		controller: 'loginCtrl',
		controllerAs: 'vm'
	});
})();