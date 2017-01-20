var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when("/home", {templateUrl: 'home.html'})
	.when("/About", {templateUrl: 'about.html'})
	.when("/contact", {templateUrl: 'contact.html'})
	.when("/Form", {templateUrl: 'form.html', controller:'formCtr'})
});

app.factory('userRepository', userRepository);
app.controller("formCtr", function($scope,userRepository ){
	
	$scope.users = userRepository.getAllUsers();
	$scope.adduser = userRepository.addUser;
	console.log($scope.users);
	
});

function userRepository(){
	var users = [];
	
	return {
		addUser:addUser,
		getAllUsers:getAllUsers
	}
	function addUser(user){
		users.push(user);
	}
	function getAllUsers(){
		return users;
	}
};