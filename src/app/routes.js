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
			component: 'home'
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
		.state('categories.category', {
			url: '/{categoryID}',
			component: 'category',
			resolve: {
				category: function(categoryService, $stateParams){
					return categoryService.getCategory($stateParams.categoryID);
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
