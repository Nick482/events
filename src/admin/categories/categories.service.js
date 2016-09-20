(function(){
  angular
  .module('app.admin')
  .factory('categoriesService', categoriesService);

  /** @ngInject */
  function categoriesService($q, $http){

    return {
      getSubcategories: getSubcategories,
      addCategory: addCategory,
      editCategory: editCategory,
      addSubcategory: addSubcategory,
      editSubcategory: editSubcategory
    };

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
      $http({
        method: 'POST',
        url: '/categories/'
      }).then(function(category){
        alert('Category added')
      }).catch(function(err){
        alert(err);
      })
    }

    function editCategory(category){
      $http({
        method: 'PUT',
        url: '/categories/'
      }).then(function(category){
        alert('Category modified')
      }).catch(function(err){
        alert(err);
      })
    }

    function addSubcategory(subcategory){
      $http({
        method: 'POST',
        url: '/subcategories/'
      }).then(function(subcategory){
        alert('Subcategory added')
      }).catch(function(err){
        alert(err);
      })
    }

    function editSubcategory(subcategory){
      $http({
        method: 'PUT',
        url: '/subcategories/'
      }).then(function(subcategory){
        alert('Subcategory modified')
      }).catch(function(err){
        alert(err);
      })
    }
  }
})();
