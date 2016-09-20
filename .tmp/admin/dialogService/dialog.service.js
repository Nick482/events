(function(){
    dialogService.$inject = ["$mdDialog", "categoriesService", "eventsService"];
    angular
    .module('app.admin')
    .factory('dialogService', dialogService);

    /** @ngInject */
    function dialogService($mdDialog, categoriesService, eventsService){

        return {
            openAddCategoryForm: openAddCategoryForm,
            openEditCategoryForm: openEditCategoryForm,
            openAddSubcategoryForm: openAddSubcategoryForm,
            openEditSubcategoryForm: openEditSubcategoryForm,
            openAddEventForm: openAddEventForm,
            openEditEventForm: openEditEventForm,
            openAddSessionForm: openAddSessionForm,
            openEditSessionForm: openEditSessionForm,
            openAddUserForm: openAddUserForm,
            openEditUserForm: openEditUserForm
        };

        function openAddCategoryForm(category) {
            category.sendCategory = categoriesService.addCategory;

            $mdDialog.show({
                templateUrl: '../templates/categoryForm.html',
                controller: function() {
                    this.parent = category;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openEditCategoryForm(category) {
            category.sendCategory = categoriesService.editCategory;

            $mdDialog.show({
                templateUrl: '../templates/categoryForm.html',
                controller: function() {
                    this.parent = category;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openAddSubcategoryForm(subcategory) {
            subcategory.sendSubcategory = categoriesService.addSubcategory;

            $mdDialog.show({
                templateUrl: '../templates/subcategoryForm.html',
                controller: function() {
                    this.parent = subcategory;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openEditSubcategoryForm(subcategory){
            subcategory.sendSubcategory = categoriesService.editSubcategory;

            $mdDialog.show({
                templateUrl: '../templates/subcategoryForm.html',
                controller: function() {
                    this.parent = subcategory;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openAddEventForm(event) {
            event.sendEvent = eventsService.addEvent;
            $mdDialog.show({
                templateUrl: '../templates/eventForm.html',
                controller: function() {
                    this.parent = event;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openEditEventForm(event) {
            event.sendEvent = eventsService.editEvent;
            $mdDialog.show({
                templateUrl: '../templates/eventForm.html',
                controller: function() {
                    this.parent = event;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openAddSessionForm(session) {
            session.sendSession = eventsService.addSession;
            $mdDialog.show({
                templateUrl: '../templates/sessionForm.html',
                controller: function() {
                    this.parent = session;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openEditSessionForm(session) {
            session.sendSession = eventsService.editSession;
            $mdDialog.show({
                templateUrl: '../templates/sessionForm.html',
                controller: function() {
                    this.parent = session;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openAddUserForm(user) {
            user.sendUser = eventsService.addUser;
            $mdDialog.show({
                templateUrl: '../templates/userForm.html',
                controller: function() {
                    this.parent = user;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openEditUserForm(user) {
            user.sendUser = eventsService.editUser;
            $mdDialog.show({
                templateUrl: '../templates/userForm.html',
                controller: function() {
                    this.parent = user;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }
    }
})();