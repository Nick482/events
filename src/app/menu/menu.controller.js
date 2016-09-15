(function(){
	/** @ngInject */
	angular
		.module('app')
		.controller('menuCtrl', headerCtrl);

	function headerCtrl() {
		var vm = this;
	    var originatorEv;

	    vm.openMenu = function($mdOpenMenu, ev) {
	      $mdOpenMenu(ev);
	    };

	    vm.goTo = function(dest){
	    	console.log('Went to ' + dest);
	    }

		vm.menuLine = 'Blowfeld, here you are..'
	}
})();