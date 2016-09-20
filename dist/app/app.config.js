(function(){
	angular
	.module('app')
  	.config(["$mdThemingProvider", function($mdThemingProvider) {
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  }]);
})();