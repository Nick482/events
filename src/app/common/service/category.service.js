(function(){
	angular
	.module('app')
	.factory('categoryService', categoryService);
	/** @ngInject */
	function categoryService($http, $q){

		return {
			getCategories: getCategories,
			getCategory: getCategory
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

		function getCategory(id){
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: '/categories' + id
			}).then(function(category){
				deferred.resolve(category);
			}).catch(function(err){
				console.log('error');
			})
			return deferred.promise;
		}
	}
})();