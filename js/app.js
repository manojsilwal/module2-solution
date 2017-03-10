var app = angular.module('myApp', []);


app.controller('Controller', Controller);

app.factory('shoppingListfactory',shoppingListfactory);

Controller.$injector = ['$scope','shoppingListfactory'];



function Controller($scope,shoppingListfactory){
	var toBuyitems = [
		{name : "egg",quantity : "10 pieces"},
		{name : "banana",quantity : "1 dozen"},
		{name : "rice",quantity : "10 kg"},
		{name : "coke",quantity : "10 pieces"},
		{name : "oil",quantity : "1 bottle"}
	];
	var toBuyitemService = shoppingListfactory();
	toBuyitemService.setItems(toBuyitems);

	$scope.toBuyitems = toBuyitemService.getItems();
	console.log($scope.toBuyitems)
	var boughtItemService = shoppingListfactory();

	$scope.boughtItems = boughtItemService.getItems();
	
	$scope.$watch(function(){
		
	})

	$scope.addItem = function(itemIndex){
		try{
			service.addItem(itemIndex);
			service.removeItem(itemIndex);
		}
		catch(error){
				
		}
	}
}


function shoppingListService(maxItems){
	var service = this;

	var items = [];

	service.setItems = function(data){
		items = data;
	}

	service.addItem = function(item, qty){
		if((maxItems === undefined) || (maxItems !== undefined) 
			&& (items.length < maxItems))

			items.push({name:item,quantity:qty});
		else
			new Error("Max item "+maxItems+"Reached")
		//console.log(toBuyitems[0]);
	}
	service.removeItem = function(itemIndex){
		toBuyitems.splice(itemIndex, 1);
	}

	service.getItems = function(){
			return items;
	}

}

function shoppingListfactory(){
	var factory = function(maxItems){
		return  new shoppingListService(maxItems);
	};
	return factory;
}


