/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Intelligent Sense
 * Use is subject to license terms.
 * Filename: user-controller.js
 */

angular.module("twitterUsersApp")
.controller('usersController', function($scope, $http){
	console.log("Hoal");
	$http.get("http://intelligentsense.com/trainings/twitterUser.json")
		.success(function(data){
			$scope.users = data.users;
		})
		.error(function() {
			alert("Error cargando Json");
		});
});