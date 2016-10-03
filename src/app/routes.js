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
			url: '/search/{searchText}/{page}/',
			component: 'search',
			resolve: {
				results: function(eventService, $stateParams){
					return eventService.findEvents($stateParams.searchText, $stateParams.page);
				}
			}
		});

		$stateProvider
		.state('categories', {
			url: '/browseCategories/',
			component: 'categories',
			resolve: {
				categories: function(categoryService){
					return categoryService.getCategories();
				}
			}
		});

		$stateProvider
		.state('subcategory', {
			url: '/subcategory/{subcategoryID}/{page}/',
			component: 'subcategory',
			resolve: {
				events: function(categoryService, $stateParams){
					return categoryService.getSubcategory($stateParams.subcategoryID, $stateParams.page);
				}
			}
		});

		$stateProvider
		.state('about', {
			url: '/about',
			component: 'about'
		});

		$stateProvider
		.state('event', {
			url: '/event/{eventID}/',
			component: 'event',
			resolve: {
				event: function(eventService, $stateParams) {
					return eventService.getEvent($stateParams.eventID);
				}
			}
		});
	}
})();
