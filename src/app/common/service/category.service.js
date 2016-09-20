(function(){
	angular
	.module('app')
	.factory('categoryService', categoryService);
	/** @ngInject */
	function categoryService($http, $q){

		return {
			getCategories: getCategories,
			getSubcategory: getSubcategory
		}

		function getCategories(){
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: '/categories'
			}).then(function(categories){
				deferred.resolve(categories.data);
			}).catch(function(err){
				console.log('error');
			})
			return deferred.promise;
		}

		function getSubcategory(id){
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: '/subcategories/' + id
			}).then(function(subcategory){
				deferred.resolve(subcategory.data);
			}).catch(function(err){
				console.log('error');
			})
			return deferred.promise;
		}
	}
})();