var app = angular.module('myApp', []);


app.controller('Controller', Controller);

app.service('boughtService',boughtService);
app.service('toBuyService',toBuyService);

Controller.$injector = ['$scope','boughtService','toBuyService'];

function Controller($scope,boughtService,toBuyService){
	
	$scope.toBuy = toBuyService.getItems();
	
	$scope.bought = boughtService.getItems();


	$scope.boughtEmpty = boughtService.isEmpty();

	$scope.toBuyEmpty = toBuyService.isEmpty();
	

	$scope.addItem = function(itemName, itemQuantity, itemIndex){
		boughtService.addItem(itemName, itemQuantity);
		toBuyService.removeItem(itemIndex);
		$scope.boughtEmpty = boughtService.isEmpty();
		$scope.toBuyEmpty = toBuyService.isEmpty();
	}
	console.log($scope.bought);
}

function boughtService(){
	var service = this;
	var items = [];
	service.addItem = function(itemName, itemQuantity){
		var item = {
			name : itemName,
			quantity : itemQuantity
		};
		items.push(item);
	}

	service.getItems = function(){
		return items;
	}

	service.isEmpty = function(){
		if(items.length == 0)
			return true;
		else return false;
	};	
}

function toBuyService(){
	var service = this;
	var items = [
		{
			"name" : "egg",
			"quantity" : "10 pieces"
		},
		{
			"name" : "banana",
			"quantity" : "1 dozen"
		},
		{
			"name" : "rice",
			"quantity" : "10 kg"
		},
		{
			"name" : "coke",
			"quantity" : "10 pieces"
		},
		{
			"name" : "oil",
			"quantity" : "1 bottle"
		}
	];
	service.removeItem = function(itemIndex){
		items.splice(itemIndex, 1);
	}

	service.getItems = function(){
		return items;
	}

	service.isEmpty = function(){
		if(items.length == 0)
			return true;
		else return false;
	};	
}


