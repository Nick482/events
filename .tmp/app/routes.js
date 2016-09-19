(function(){
	routesConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
	angular
	  .module('app')
	  .config(routesConfig);

	/** @ngInject */
	function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true).hashPrefix('!');
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			component: 'home',
			resolve: {
				top: ["homeService", function(homeService){
					return homeService.getTopEvents();
				}],
				latest: ["homeService", function(homeService){
					return homeService.getLatestEvents();
				}],
				closest: ["homeService", function(homeService){
					return homeService.getClosestEvents();
				}]
			}
		});

		$stateProvider
		.state('search', {
			url: '/search',
			component: 'search'
		});

		$stateProvider
		.state('categories', {
			url: '/categories',
			component: 'categories',
			resolve: {
				categories: ["categoryService", function(categoryService){
					return categoryService.getCategories();
				}]
			}
		});

		$stateProvider
		.state('subcategory', {
			url: '/subcategory/{subcategoryID}',
			component: 'subcategory',
			resolve: {
				subcategory: ["categoryService", "$stateParams", function(categoryService, $stateParams){
					return categoryService.getSubcategory($stateParams.subcategoryID);
				}]
			}
		});

		$stateProvider
		.state('about', {
			url: '/about',
			component: 'about'
		});

		$stateProvider
		.state('event', {
			url: '/event/{eventID}',
			component: 'event',
			resolve: {
				event: ["eventService", "$stateParams", function(eventService, $stateParams) {
					return eventService.getEvent($stateParams.eventID);
				}]
			}
		});
	}
})();
