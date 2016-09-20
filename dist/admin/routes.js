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
		.state('home', {
			url: '/admin/',
			component: 'home',
		});

		$stateProvider
		.state('categories', {
			url: '/admin/categories/',
			component: 'categories',
			resolve: {
				categories: ["adminService", function(adminService){
					return adminService.getCategories();
				}]
			}
		});

		$stateProvider
		.state('events', {
			url: '/admin/events/{page}/',
			component: 'events',
			resolve: {
				events: ["adminService", "$stateParams", function(adminService, $stateParams){
					return adminService.getEvents($stateParams.page);
				}]
			}
		});
	}
})();