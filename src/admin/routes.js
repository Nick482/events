(function(){
	angular
	  .module('app.admin')
	  .config(routesConfig);

	/** @ngInject */
	function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true).hashPrefix('!');
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/admin/',
			component: 'home',
			resolve: {
				verified: function(adminService) {
					return adminService.verify();
				}
			}
		});

		$stateProvider
		.state('login', {
			url: '/admin/login/',
			component: 'login'
		});

		$stateProvider
		.state('categories', {
			url: '/admin/categories/',
			component: 'categories',
			resolve: {
				verified: function(adminService){
					return adminService.verify();
				},
				categories: function(adminService){
					return adminService.getCategories();
				},
			}
		});

		$stateProvider
		.state('events', {
			url: '/admin/events/{page}/',
			component: 'events',
			resolve: {
				verified: function(adminService){
					return adminService.verify();
				},
				events: function(adminService, $stateParams){
					return adminService.getEvents($stateParams.page);
				}
			}
		});
	}
})();
