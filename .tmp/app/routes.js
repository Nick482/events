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
			url: '/search/{searchText}/{page}',
			component: 'search',
			resolve: {
				results: ["eventService", "$stateParams", function(eventService, $stateParams){
					return eventService.findEvents($stateParams.searchText, $stateParams.page);
				}]
			}
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
			url: '/subcategory/{subcategoryID}/{page}',
			component: 'subcategory',
			resolve: {
				events: ["categoryService", "$stateParams", function(categoryService, $stateParams){
					return categoryService.getSubcategory($stateParams.subcategoryID, $stateParams.page);
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
