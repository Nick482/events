(function(){
	routesConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
	angular
	  .module('app.admin')
	  .config(routesConfig);

	/** @ngInject */
	function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true).hashPrefix('!');
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('admin', {
			url: '/',
			component: 'admin',
		});

		$stateProvider
		.state('admin.categories', {
			url: '/categories',
			component: 'categories',
			resolve: {
				categories: ["categoryService", function(categoryService){
					return adminService.getCategories();
				}]
			}
		});

		$stateProvider
		.state('admin.events', {
			url: '/events/{page}',
			component: 'events',
			resolve: {
				events: ["adminService", "$stateParams", function(adminService, $stateParams){
					return adminService.getEvents($stateParams.page);
				}]
			}
		});
	}
})();
