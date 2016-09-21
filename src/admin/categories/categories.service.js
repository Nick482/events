(function(){
  angular
  .module('app.admin')
  .factory('categoriesService', categoriesService);

  /** @ngInject */
  function categoriesService($q, $http, $state, $mdDialog){

    return {
      getCategories: getCategories,
      getSubcategories: getSubcategories,
      addCategory: addCategory,
      editCategory: editCategory,
      addSubcategory: addSubcategory,
      editSubcategory: editSubcategory,
      removeCategory: removeCategory,
      removeSubcategory: removeSubcategory
    };

    function getCategories(){
      var deferred = $q.defer();

      $http({
        method: 'GET',
        url: '/categories/'
      }).then(function(categories){
        deferred.resolve(categories.data);
      }).catch(function(err){
        console.log(err);
      });
      return deferred.promise;
    }

    function getSubcategories(id){
      var deferred = $q.defer();

      $http({
        method: 'GET',
        url: '/categories/' + id
      }).then(function(category){
        deferred.resolve(category.data.subcategories)
      }).catch(function(err){
        console.log(err);
      });
      return deferred.promise;
    }

    function addCategory(category){
      $mdDialog.hide();
      $http({
        method: 'POST',
        url: '/categories/',
        data: category
      }).then(function(category){
        alert('Category added');
        $state.reload();
      }).catch(function(err){
        alert(err);
      })
    }

    function editCategory(category){
      $mdDialog.hide();
      $http({
        method: 'PUT',
        url: '/categories/',
        data: category
      }).then(function(category){
        alert('Category modified');
        $state.reload();
      }).catch(function(err){
        alert(err);
      })
    }

    function addSubcategory(subcategory){
      $mdDialog.hide();
      $http({
        method: 'POST',
        url: '/subcategories/',
        data: subcategory
      }).then(function(subcategory){
        alert('Subcategory added');
        $state.reload();
      }).catch(function(err){
        alert(err);
      })
    }

    function editSubcategory(subcategory){
      $mdDialog.hide();
      $http({
        method: 'PUT',
        url: '/subcategories/',
        data: subcategory
      }).then(function(subcategory){
        alert('Subcategory modified');
        $state.reload();
      }).catch(function(err){
        alert(err);
      })
    }

    function removeCategory(category){
      $mdDialog.hide();
      $http({
        method: 'DELETE',
        url: '/categories/' + category._id
      }).then(function(category){
        alert('category deleted');
        $state.reload();
      }).catch(function(err){
        alert(err);
      })
    }

    function removeSubcategory(subcategory){
      $mdDialog.hide();
      $http({
        method: 'DELETE',
        url: '/subcategories/' + subcategory._id
      }).then(function(subcategory){
        alert('subcategory deleted');
        $state.reload();
      }).catch(function(err){
        alert(err);
      })
    }
  }
})();
