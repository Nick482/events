(function(){
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
				top: function(homeService){
					return homeService.getTopEvents();
				},
				latest: function(homeService){
					return homeService.getLatestEvents();
				},
				closest: function(homeService){
					return homeService.getClosestEvents();
				}
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
				categories: function(categoryService){
					return categoryService.getCategories();
				}
			}
		});

		$stateProvider
		.state('categories.subcategory', {
			url: '/{subcategoryID}',
			component: 'subcategory',
			resolve: {
				subcategory: function(categoryService, $stateParams){
					return categoryService.getSubcategory($stateParams.subcategoryID);
				}
			}
		});

		$stateProvider
		.state('about', {
			url: '/about',
			component: 'about'
		});

		$stateProvider
		.state('events', {
			url: '/events',
			component: 'events'
		});

		$stateProvider
		.state('events.event', {
			url: '/{eventID}',
			component: 'event'
		});
	}
})();
