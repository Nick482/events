(function(){
	dialogService.$inject = ["$mdDialog"];
	angular
	.module('app')
	.factory('dialogService', dialogService);

	/** @ngInject */
	function dialogService($mdDialog) {
		var dialogShown = false;
        
        return {
        	showDialog: showDialog
        };
        function showDialog(options){
            options.ok = _ok;

            if(!dialogShown){
                $mdDialog.show({
                    templateUrl: 'app/common/dialogService/dialog.html',
                    controller: function() {
                        this.parent = options;
                    },
                    controllerAs: 'vm',
                    clickOutsideToClose: true,
                    escapeToClose: true
                });
                dialogShown = true;
            }
        }
        function _ok(){
            $mdDialog.hide();
            dialogShown = false;
        }
	}
})();