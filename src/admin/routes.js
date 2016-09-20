(function(){
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
	}
})();
