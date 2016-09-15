(function(){
	/** @ngInject */
	angular
		.module('app')
		.controller('menuCtrl', headerCtrl);

	function headerCtrl() {
		var vm = this;
	    var originatorEv;

	    this.openMenu = function($mdOpenMenu, ev) {
	      $mdOpenMenu(ev);
	    };

		vm.menuLine = 'Blowfeld, here you are..'
	}
})();