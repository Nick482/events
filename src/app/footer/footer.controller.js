(function(){
	/** @ngInject */
	angular
		.module('app')
		.controller('footerCtrl', footerCtrl);

	function footerCtrl() {
		var vm = this;

		vm.footerLine = 'In a browser window, really?'
	}
})();