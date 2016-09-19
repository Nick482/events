(function(){
	/** @ngInject */
	angular
		.module('app')
		.controller('footerCtrl', footerCtrl);

	function footerCtrl($state) {
		var vm = this;

		vm.goTo = function(dest){
			$state.go(dest);
		}
	}
})();