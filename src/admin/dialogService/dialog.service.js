(function(){
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

        function openAddCategoryForm(category, ev) {
            category.sendCategory = categoriesService.addCategory;

            $mdDialog.show({
                templateUrl: 'admin/dialogService/templates/categoryForm.html',
                controller: function() {
                    this.parent = category;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openEditCategoryForm(category, ev) {
            category.sendCategory = categoriesService.editCategory;

            $mdDialog.show({
                templateUrl: 'admin/dialogService/templates/categoryForm.html',
                controller: function() {
                    this.parent = category;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openAddSubcategoryForm(category, ev) {
            var subcategory = {};
            subcategory.category = category._id;
            subcategory.sendSubcategory = categoriesService.addSubcategory;

            $mdDialog.show({
                templateUrl: 'admin/dialogService/templates/subcategoryForm.html',
                controller: function() {
                    this.parent = subcategory;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openEditSubcategoryForm(subcategory, ev){
            subcategory.sendSubcategory = categoriesService.editSubcategory;

            $mdDialog.show({
                templateUrl: 'admin/dialogService/templates/subcategoryForm.html',
                controller: function() {
                    this.parent = subcategory;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openAddEventForm(subcategory, ev) {
            var event = {};

            event.sendEvent = eventsService.addEvent;
            event.subcategory = subcategory._id;

            $mdDialog.show({
                templateUrl: 'admin/dialogService/templates/eventForm.html',
                controller: function() {
                    this.parent = event;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openEditEventForm(event, ev) {
            event.sendEvent = eventsService.editEvent;
            $mdDialog.show({
                templateUrl: 'admin/dialogService/templates/eventForm.html',
                controller: function() {
                    this.parent = event;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openAddSessionForm(session, ev) {
            session.sendSession = eventsService.addSession;
            $mdDialog.show({
                templateUrl: 'admin/dialogService/templates/sessionForm.html',
                controller: function() {
                    this.parent = session;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openEditSessionForm(session, ev) {
            session.sendSession = eventsService.editSession;
            $mdDialog.show({
                templateUrl: 'admin/dialogService/templates/sessionForm.html',
                controller: function() {
                    this.parent = session;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openAddUserForm(user, ev) {
            user.sendUser = eventsService.addUser;
            $mdDialog.show({
                templateUrl: 'admin/dialogService/templates/userForm.html',
                controller: function() {
                    this.parent = user;
                },
                controllerAs: 'vm',
                targetEvent: ev,
                clickOutsideToClose:true
            })
        }

        function openEditUserForm(user, ev) {
            user.sendUser = eventsService.editUser;
            $mdDialog.show({
                templateUrl: 'admin/dialogService/templates/userForm.html',
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