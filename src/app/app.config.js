(function(){
	angular
	.module('app')
  	.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  	});
})();