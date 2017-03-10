var app = angular.module('myApp',[]);

app.controller('toBuyController',toBuyController);

app.controller('alreadyBoughtController',alreadyBoughtController);

app.service('shoppingListService',shoppingListService);

toBuyController.$injector = ['$scope','shoppingListService'];

alreadyBoughtController.$injector = ['$scope', 'shoppingListService'];

function toBuyController($scope, shoppingListService, $rootScope){
	$scope.toBuyitems = shoppingListService.getToBuyItems();
	$scope.errorMsg = "Everything is bought";
	
	$scope.addItem = function(index){
		/*$rootScope.$emit('event');
		$rootScope.$broadcast('event',[1,2,3]);*/
		shoppingListService.addItem(index);
	}

	


}

function alreadyBoughtController($scope, shoppingListService){
	$scope.boughtItems = shoppingListService.getBoughtItems();
	$scope.errorMsg = "Nothing Bought Yet";
	/*$scope.$on('event', function(event, data) {
	console.log("event");
	 console.log(data); 
	});*/
	/*$scope.$watch('toBuyitems',function(){
		console.log($scope.isEmpty)
	},true);*/
}

function shoppingListService(){
	var service = this;
	service.toBuyitems = [
		{name : "egg",quantity : "10 pieces"},
		{name : "banana",quantity : "1 dozen"},
		{name : "rice",quantity : "10 kg"},
		{name : "coke",quantity : "10 pieces"},
		{name : "oil",quantity : "1 bottle"}
	];
	service.boughtItems = [];

	service.getBoughtItems = function(){
		return service.boughtItems;
	}
	service.getToBuyItems = function(){
		return service.toBuyitems;
	}
	service.setToBuyItems = function(data){
		items = data;
	}

	service.addItem = function(index){
		service.boughtItems.push(service.toBuyitems[index]);
		service.toBuyitems.splice(index,1)
	}
	//$rootScope.$broadcast('someEvent', [1,2,3]);
	//$rootScope.$emit('someEvent');
	//$rootScope.$on('someEvent', function(event, data) { console.log(data); });
}
