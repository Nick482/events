(function(){
	/** @ngInject */
	headerCtrl.$inject = ["$state"];
	angular
		.module('app')
		.controller('menuCtrl', headerCtrl);

	function headerCtrl($state) {
		var vm = this;
	    var originatorEv;

	    vm.openMenu = function($mdOpenMenu, ev) {
	      $mdOpenMenu(ev);
	    };

	    vm.goTo = function(dest){
	    	$state.go(dest);
	    }

		vm.menuLine = 'link'
	}
})();